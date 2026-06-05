import balanceamento from "@/assets/balanceamento.jpg.asset.json";
import geometria from "@/assets/geometria-3d.jpg.asset.json";

export function Authority() {
  return (
    <section className="relative bg-[oklch(0.14_0.01_270)] py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
            Prova social & autoridade técnica
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            O <span className="text-brand-red">"perfeito"</span> é o nosso padrão mínimo de entrega.
          </h2>
          <p className="mt-4 text-white/75">
            Nossa estrutura foi pensada para motoristas de Ilhota e região com carros seminovos ou usados que não buscam apenas o menor preço, mas sim a segurança de um serviço que não precisará de retoques ou retornos. Oferecemos clareza e educação técnica para que você compreenda exatamente a necessidade de cada manutenção.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={geometria.url}
              alt="Equipamento de alinhamento e geometria 3D moderno escaneando a roda de um veículo na Ritter Auto Center"
              className="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
            <figcaption className="bg-black/60 p-4 text-sm text-white/80">
              Geometria 3D de última geração para ajustes milimétricos.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={balanceamento.url}
              alt="Pneu sendo balanceado em máquina profissional na oficina Ritter Auto Center"
              className="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
            <figcaption className="bg-black/60 p-4 text-sm text-white/80">
              Balanceamento eletrônico e cambagem com precisão de fábrica.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}