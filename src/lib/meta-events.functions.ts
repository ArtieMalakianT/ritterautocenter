import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const clickSchema = z.object({
  eventId: z.string().uuid(),
  path: z.enum(["/", "/privacidade"]),
  consent: z.object({
    visitor: z.string().uuid(),
    accepted: z.literal(true),
    at: z.string().datetime(),
    noticeVersion: z.literal("2026-10-06-capi-1"),
  }),
});

// Public visitor measurement; no login, contact matching, or stored customer data.
export const reportWhatsAppClick = createServerFn({ method: "POST" })
  .inputValidator((data) => clickSchema.parse(data))
  .handler(async ({ data }) => {
    const request = getRequest();
    const origin = getRequestHeader("origin");
    const requestOrigin = new URL(request.url).origin;
    if (!origin || origin !== requestOrigin) return { ok: false, reason: "origin" };
    if (getRequestHeader("sec-gpc") === "1" || getRequestHeader("dnt") === "1") {
      return { ok: false, reason: "opt-out" };
    }
    const token = process.env['META_CONVERSIONS_ACCESS_TOKEN'];
    if (!token) return { ok: false, reason: "not-configured" };
    const userAgent = getRequestHeader("user-agent");
    const ip = getRequestHeader("cf-connecting-ip") ?? getRequestHeader("x-real-ip");
    if (!userAgent) return { ok: false, reason: "missing-browser" };
    try {
      const response = await fetch("https://graph.facebook.com/v23.0/1734498380947847/events", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        signal: AbortSignal.timeout(5000),
        body: JSON.stringify({ data: [{
          event_name: "WhatsAppClick",
          event_time: Math.floor(Date.now() / 1000),
          event_id: data.eventId,
          action_source: "website",
          event_source_url: origin + data.path,
          user_data: { client_user_agent: userAgent, ...(ip ? { client_ip_address: ip } : {}) },
        }] }),
      });
      const result = await response.json() as { events_received?: number; error?: { code?: number } };
      if (!response.ok || result.events_received !== 1) {
        console.error("Meta WhatsAppClick rejected", { status: response.status, code: result.error?.code });
        return { ok: false, reason: "provider" };
      }
      return { ok: true };
    } catch {
      return { ok: false, reason: "unavailable" };
    }
  });