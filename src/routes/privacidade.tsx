import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title: "Privacidade e publicidade — Ritter Auto Center" },
    { name: "description", content: "Saiba como a Ritter Auto Center usa o Meta Pixel e como alterar suas escolhas de publicidade." },
    { property: "og:title", content: "Privacidade e publicidade — Ritter Auto Center" },
    { property: "og:description", content: "Dados de navegação, cookies de publicidade e controle de consentimento na Ritter Auto Center." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Privacy,
});
function Privacy() {
  return <main className="mx-auto max-w-3xl px-5 py-12 font-sans text-foreground">
    <Button asChild variant="link"><Link to="/">← Ritter Auto Center</Link></Button>
    <h1 className="mt-8 font-display text-3xl">Política de privacidade</h1>
    <p className="mt-3 text-sm text-muted-foreground">Atualizada em 6 de outubro de 2026</p>
    <section className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold">Publicidade no Facebook e Instagram</h2>
      <p>A Ritter Auto Center utiliza o Meta Pixel (1734498380947847) para medir visitas às páginas (PageView) e o pixel junto à API de Conversões para medir cliques nos botões do WhatsApp (WhatsAppClick), avaliar publicidade e apoiar a otimização de anúncios. Um clique não confirma conversa, orçamento, agendamento ou serviço contratado.</p>
      <p>Quando permitido, o pixel transmite à Meta páginas visitadas, endereço IP, navegador, dispositivo e identificadores de cookies, como _fbp e _fbc. Com sua aceitação explícita de publicidade, em qualquer região, a API também envia o clique, data e hora, página de origem sem parâmetros, um identificador aleatório do evento para evitar contagem duplicada, endereço IP quando disponível e informações do navegador. A Meta pode relacionar essas informações com sua conta e processá-las em outros países, conforme suas próprias políticas. Não enviamos nome, email, telefone, conteúdo de mensagens, _fbp ou _fbc pela API. A API não envia visitas PageView.</p>
      <p>Em regiões que exigem autorização, incluindo Brasil, Espaço Econômico Europeu, Reino Unido e Suíça, o pixel só carrega após sua aceitação. Se a localização não puder ser confirmada, também solicitamos autorização. Fora dessas regiões, a medição pode ocorrer sem aviso, respeitando recusas anteriores e sinais de não rastrear do navegador.</p>
      <h2 className="text-xl font-semibold">Sua escolha e retirada</h2>
      <p>Você pode recusar com a mesma facilidade que aceitar e alterar sua escolha em Configurações de publicidade, no rodapé de todas as páginas. Abrir as configurações não muda sua decisão. Uma retirada interrompe novos envios, inclusive em outras abas; não desfaz dados enviados anteriormente. Não reenviamos visitas bloqueadas.</p>
      <p>Guardamos neste navegador uma referência aleatória do visitante e o histórico das escolhas, com data, hora, versão e texto do aviso apresentado e opções disponíveis. O histórico preserva a aceitação anterior mesmo após a retirada. Esse registro permanece até você limpar o armazenamento do site. Limpar o armazenamento elimina esse registro e exige uma nova escolha onde aplicável. No envio imediato do clique, nosso servidor recebe a referência e a escolha atual para verificar o aceite; não as envia à Meta nem mantém uma fila de eventos.</p>
      <Button variant="outline" onClick={() => window.dispatchEvent(new Event("ritter-consent-settings"))}>Configurações de publicidade</Button>
      <h2 className="text-xl font-semibold">Outros serviços e contato</h2>
      <p>O mapa incorporado utiliza o Google Maps, que pode receber dados técnicos quando o mapa carrega. Ao clicar nos botões de WhatsApp, você acessa um serviço da Meta e decide quais informações compartilhar na conversa. Esses serviços possuem suas próprias políticas.</p>
      <p>Para dúvidas ou solicitações sobre seus dados, fale com a Ritter Auto Center pelo WhatsApp disponível na página inicial. Você também pode gerenciar preferências de anúncios diretamente no Facebook e Instagram.</p>
      <p><a className="underline" href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Política de privacidade da Meta</a></p>
    </section>
  </main>;
}