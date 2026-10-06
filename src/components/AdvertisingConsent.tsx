import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useServerFn } from "@tanstack/react-start";
import { reportWhatsAppClick } from "@/lib/meta-events.functions";
import { choice, CONSENT_KEY, needsConsent, NOTICE, optedOut, permitted, readConsent, reportPageView, revokePixel, saveConsent } from "@/lib/meta-consent";

export function AdvertisingConsent() {
  const sendClick = useServerFn(reportWhatsAppClick);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [regulated, setRegulated] = useState<boolean | null>(null);
  const [open, setOpen] = useState(false);
  const [revision, setRevision] = useState(0);
  const [error, setError] = useState(false);
  const [refused, setRefused] = useState(false);
  const lastPage = useRef<string | null>(null);
  useEffect(() => {
    let active = true;
    void needsConsent().then((required) => {
      if (!active) return;
      setRegulated(required);
      setOpen(required && choice() === undefined && !optedOut());
      setRefused(choice() === false || optedOut());
    });
    const update = () => {
      if (choice() === false || optedOut()) { revokePixel(); lastPage.current = null; }
      setRefused(choice() === false || optedOut());
      setRevision((v) => v + 1);
    };
    const storage = (event: StorageEvent) => { if (event.key === CONSENT_KEY || event.key === null) { update(); setOpen(false); } };
    const settings = () => setOpen(true);
    window.addEventListener("ritter-consent-change", update);
    window.addEventListener("storage", storage);
    window.addEventListener("ritter-consent-settings", settings);
    return () => { active = false; window.removeEventListener("ritter-consent-change", update); window.removeEventListener("storage", storage); window.removeEventListener("ritter-consent-settings", settings); };
  }, []);
  useEffect(() => {
    if (regulated === null || !permitted(regulated) || lastPage.current === pathname) return;
    let active = true;
    void reportPageView(regulated, () => active).then((reported) => {
      if (active && reported) lastPage.current = pathname;
    });
    return () => { active = false; };
  }, [pathname, regulated, revision]);
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (!event.isTrusted || event.defaultPrevented || regulated === null || !permitted(regulated)) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const target = new URL(anchor.href);
      if (target.hostname !== "wa.me" || target.pathname !== "/5547984692588") return;
      const record = readConsent();
      const latest = record?.history.at(-1);
      // IP/browser data sent through the API require explicit advertising acceptance everywhere.
      if (!record || !latest || choice() !== true || optedOut()) return;
      const eventId = crypto.randomUUID();
      window.fbq?.("trackCustom", "WhatsAppClick", {}, { eventID: eventId });
      if (pathname !== "/" && pathname !== "/privacidade") return;
      // Send immediately; do not queue, retry, or replay a click after consent changes.
      void sendClick({ data: { eventId, path: pathname, consent: {
        visitor: record.visitor, accepted: true, at: latest.at,
        noticeVersion: "2026-10-06-capi-1",
      } } }).catch(() => { /* WhatsApp must still open if measurement fails. */ });
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [regulated, pathname, sendClick]);
  function decide(accepted: boolean) {
    if (!saveConsent(accepted)) { setError(true); revokePixel(); return; }
    setError(false); setOpen(false);
  }
  return <>
    <div className="border-t border-border bg-background px-4 py-4 text-center text-sm text-muted-foreground">
      <Link to="/privacidade" className="underline underline-offset-4">Política de privacidade</Link>
      <span className="mx-3" aria-hidden>·</span>
      <Button variant="link" onClick={() => setOpen(true)}>Configurações de publicidade</Button>
    </div>
    {open && <section role="dialog" aria-modal="false" aria-labelledby="advertising-title" className="fixed inset-x-0 bottom-0 z-[100] max-h-[85dvh] overflow-y-auto border-t border-border bg-background px-5 py-5 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h2 id="advertising-title" className="text-lg font-semibold">Sua privacidade</h2>
        <p className="mt-2 text-sm">{NOTICE}</p>
        <Link to="/privacidade" className="mt-2 inline-block text-sm underline">Política de privacidade</Link>
        <p className="mt-2 text-sm text-muted-foreground">Escolha atual: {refused ? "publicidade recusada" : choice() === true ? "publicidade aceita" : "ainda não definida"}.</p>
        {optedOut() && <p className="mt-2 text-sm">Seu navegador solicita não rastrear; o pixel permanece bloqueado.</p>}
        {error && <p role="alert" className="mt-2 text-sm text-destructive">Não foi possível salvar sua escolha. A medição permanece bloqueada; verifique as permissões de armazenamento do navegador.</p>}
        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => decide(false)}>Recusar</Button>
          <Button variant="outline" onClick={() => decide(true)} disabled={optedOut()}>Aceitar</Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>Fechar</Button>
        </div>
      </div>
    </section>}
  </>;
}