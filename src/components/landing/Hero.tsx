import mecanicos from "@/assets/mecanicos.jpg.asset.json";
import { WHATSAPP_ORCAMENTO } from "@/lib/contact";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88dvh] items-center overflow-hidden bg-brand-dark text-brand-dark-foreground"
    >
      <img
        src={mecanicos.url}
        alt="Mecânicos uniformizados da Ritter Auto Center ajustando o motor de um carro em oficina moderna"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/40" />
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-28">
        <span className="inline-flex items-center rounded-full border border-brand-red/60 bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-red-foreground">
          Ilhota / SC — Centro automotivo completo
        </span>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          Excelência além dos pneus: <span className="text-brand-red">segurança real</span> em cada engrenagem.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Transformamos a "caixa preta" que é a mecânica em um processo transparente e compreensível para o cliente.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3 text-base font-semibold text-brand-red-foreground shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red-hover"
          >
            Solicitar Orçamento Transparente
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
}