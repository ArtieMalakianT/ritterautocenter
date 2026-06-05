import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { PainSolution } from "@/components/landing/PainSolution";
import { Services } from "@/components/landing/Services";
import { Authority } from "@/components/landing/Authority";
import { FinalCta } from "@/components/landing/FinalCta";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ritter Auto Center — Mecânica de Precisão em Ilhota/SC" },
      {
        name: "description",
        content:
          "Centro automotivo completo em Ilhota/SC: alinhamento 3D, mecânica geral, troca de óleo, freios e mais. Orçamento transparente e atendimento especialista.",
      },
      { property: "og:title", content: "Ritter Auto Center — Mecânica de Precisão em Ilhota/SC" },
      {
        property: "og:description",
        content:
          "Segurança real em cada engrenagem. Alinhamento 3D, troca de óleo e mecânica geral em Ilhota/SC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <PainSolution />
        <Services />
        <Authority />
        <FinalCta />
      </main>
      <WhatsAppFloat />
    </div>
  );
}
