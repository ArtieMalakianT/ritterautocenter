import { AlertTriangle, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: AlertTriangle,
    title: "Identificando a dor",
    body:
      "Você sente insegurança ao deixar seu carro na oficina por medo de quebras inesperadas ou orçamentos injustos?",
  },
  {
    icon: Sparkles,
    title: "A transformação",
    body:
      "Leve seu veículo para a tranquilidade de saber que ele está nas mãos de especialistas que buscam a perfeição técnica.",
  },
  {
    icon: ShieldCheck,
    title: "A solução Ritter",
    body:
      "Autoridade técnica mais confiável de Ilhota e região, unindo tradição de 3 anos com estrutura moderna de centro automotivo completo.",
  },
];

export function PainSolution() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Da insegurança à <span className="text-brand-red">tranquilidade técnica</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um caminho claro entre o problema que você sente e a solução que entregamos.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}