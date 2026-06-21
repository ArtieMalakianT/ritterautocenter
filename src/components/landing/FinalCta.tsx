import { ADDRESS, WHATSAPP_AGENDAR } from "@/lib/contact";
import { MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/ritter-logo.png.asset.json";

export function FinalCta() {
  return (
    <section id="contato" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-brand-dark p-8 text-brand-dark-foreground sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl">
                O seu carro merece a precisão de <span className="text-brand-red">verdadeiros especialistas.</span>
              </h2>
              <p className="mt-4 text-white/75">
                Fale com a nossa equipe agora e sinta a diferença no atendimento.
              </p>
              <a
                href={WHATSAPP_AGENDAR}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3 text-base font-semibold text-brand-red-foreground transition-colors hover:bg-brand-red-hover"
              >
                Agendar Minha Revisão Gratuita
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <div className="mt-8 flex items-start gap-3 text-sm text-white/80">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden />
                <address className="not-italic">{ADDRESS}</address>
              </div>
              <p className="mt-6 text-xs text-white/50">
                #RitterAutoCenter #MecanicaDePrecisao #AutoCenterEmIlhota
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Localização Ritter Auto Center no Google Maps"
                src="https://www.google.com/maps?q=AUTO+CENTER+RITTER,+Rua+21+de+Junho,+1395+-+Centro,+Ilhota+-+SC,+88320-001&output=embed"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center gap-3 text-center text-sm text-muted-foreground">
          <img src={logo.url} alt="Ritter Auto Center" className="h-10 w-auto" />
          <p>© {new Date().getFullYear()} Ritter Auto Center · Ilhota / SC</p>
        </footer>
      </div>
    </section>
  );
}