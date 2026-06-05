import { WHATSAPP_GERAL } from "@/lib/contact";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_GERAL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Ritter Auto Center no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-xl shadow-black/30 ring-4 ring-white/20 transition-transform hover:scale-105 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}