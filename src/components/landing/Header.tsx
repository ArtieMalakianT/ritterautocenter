import logo from "@/assets/ritter-logo.png.asset.json";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_GERAL } from "@/lib/contact";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-brand-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo.url} alt="Ritter Auto Center" className="h-10 w-auto sm:h-12" />
        </a>
        <a
          href={WHATSAPP_GERAL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-brand-red px-3 py-2 text-sm font-semibold text-brand-red-foreground transition-colors hover:bg-brand-red-hover sm:px-4"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Fale no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}