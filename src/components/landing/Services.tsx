import oleo from "@/assets/oleo-maxi.jpg.asset.json";
import { Wrench, Droplet, Gauge, Disc3, Cog } from "lucide-react";

const services = [
  { icon: Cog, title: "Embreagem e correia dentada", body: "Diagnóstico e troca com peças de procedência." },
  { icon: Droplet, title: "Mecânica geral e troca de óleo", body: "Óleos sintéticos originais, como Maxi Performance VW." },
  { icon: Gauge, title: "Suspensão e alinhamento 3D", body: "Tecnologia 3D para precisão milimétrica." },
  { icon: Wrench, title: "Limpeza de bico e freios", body: "Performance restaurada e frenagem segura." },
  { icon: Disc3, title: "Cambagem e balanceamento", body: "Pneus durando mais e direção estável." },
];

export function Services() {
  return (
    <section id="servicos" className="bg-brand-dark py-20 text-brand-dark-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
              Muito além da borracharia
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Muito mais que pneus. Soluções completas para a vida do seu carro.
            </h2>
            <p className="mt-4 max-w-xl text-white/75">
              Derrubamos o mito de que a Ritter só entende de pneus. Nossa execução foca na solução integral para o veículo, indo muito além da venda de produtos.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={oleo.url}
              alt="Embalagens de óleo Maxi Performance 5W-40 originais Volkswagen na bancada da oficina Ritter"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group rounded-xl bg-brand-red p-6 text-brand-red-foreground shadow-lg shadow-brand-red/20 transition-transform hover:-translate-y-1"
            >
              <Icon className="h-7 w-7" aria-hidden />
              <h3 className="mt-4 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/90">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}