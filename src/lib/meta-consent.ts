export const PIXEL_ID = "1734498380947847";
export const CONSENT_KEY = "ritter-advertising-consent-v1";
export const NOTICE_VERSION = "2026-10-06";
export const NOTICE = "A Ritter Auto Center usa o Meta Pixel para enviar à Meta dados de navegação, páginas visitadas, endereço IP, informações do navegador e identificadores de cookies, para medir visitas e publicidade e apoiar a otimização de anúncios no Facebook e Instagram. Não enviamos dados de contato para correspondência de clientes. Você pode aceitar ou recusar e retirar sua autorização em Configurações de publicidade.";
const regions = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH BR".split(" "));
type Choice = { accepted: boolean; at: string; noticeVersion: string; notice: string; choices: string[] };
type Record = { visitor: string; history: Choice[] };
type Fbq = ((...args: unknown[]) => void) & { queue: unknown[][]; loaded: boolean; version: string; push?: Fbq; callMethod?: (...args: unknown[]) => void };
declare global { interface Window { fbq?: Fbq; _fbq?: Fbq } }

export function readConsent(): Record | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw);
    if (typeof value.visitor !== "string" || !Array.isArray(value.history) || !value.history.length || !value.history.every((c: Choice) => typeof c.accepted === "boolean" && c.noticeVersion === NOTICE_VERSION)) return null;
    return value;
  } catch { return null; }
}
export function choice() { return readConsent()?.history.at(-1)?.accepted; }
export function saveConsent(accepted: boolean) {
  try {
    const record = readConsent() ?? { visitor: crypto.randomUUID(), history: [] };
    record.history.push({ accepted, at: new Date().toISOString(), noticeVersion: NOTICE_VERSION, notice: NOTICE, choices: ["Aceitar", "Recusar"] });
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    window.dispatchEvent(new Event("ritter-consent-change"));
    return true;
  } catch { return false; }
}
export function optedOut() {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true || navigator.doNotTrack === "1";
}
let regionPromise: Promise<boolean> | undefined;
export function needsConsent() {
  return regionPromise ??= (async () => {
    try {
      const response = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000), credentials: "same-origin" });
      if (!response.ok) return true;
      const country = (await response.text()).match(/^loc=([A-Z0-9]{2})$/m)?.[1];
      // Unknown location is never treated as permission.
      if (!country || country === "XX" || country === "T1" || !/^[A-Z]{2}$/.test(country)) return true;
      return regions.has(country);
    } catch { return true; }
  })();
}
export function permitted(regulated: boolean) {
  const current = choice();
  return !optedOut() && current !== false && (!regulated || current === true);
}
let initialized = false;
let loading: Promise<void> | undefined;
function loadPixel() {
  return loading ??= new Promise<void>((resolve, reject) => {
    if (!window.fbq) {
      const queue = ((...args: unknown[]) => {
        if (queue.callMethod) queue.callMethod(...args); else queue.queue.push(args);
      }) as Fbq;
      queue.queue = []; queue.loaded = true; queue.version = "2.0"; queue.push = queue;
      window.fbq = queue; window._fbq = queue;
    }
    window.fbq("consent", "revoke");
    window.fbq("set", "autoConfig", false, PIXEL_ID);
    window.fbq("init", PIXEL_ID);
    const script = document.createElement("script");
    script.id = "ritter-meta-pixel"; script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.onload = () => { initialized = true; resolve(); };
    script.onerror = () => reject(new Error("Meta Pixel indisponível"));
    document.head.appendChild(script);
  });
}
export async function reportPageView(regulated: boolean, isCurrent: () => boolean) {
  if (!permitted(regulated)) return;
  try {
    await loadPixel();
    if (!isCurrent() || !permitted(regulated)) return;
    window.fbq?.("consent", "grant");
    window.fbq?.("track", "PageView");
  } catch { /* A blocked provider must not break the page. */ }
}
export function revokePixel() {
  window.fbq?.("consent", "revoke");
  if (initialized) {
    for (const name of ["_fbp", "_fbc"]) {
      document.cookie = `${name}=; Max-Age=0; path=/`;
      const parts = location.hostname.split(".");
      for (let i = 0; i < parts.length - 1; i++) document.cookie = `${name}=; Max-Age=0; path=/; domain=.${parts.slice(i).join(".")}`;
    }
  }
}