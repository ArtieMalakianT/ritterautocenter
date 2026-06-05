# Plano — Landing Page Ritter Auto Center

Construir uma landing page de página única em português, mobile-first, com paleta preto/cinza-chumbo + vermelho, usando o logo e as 4 fotos enviadas. Todos os CTAs abrem WhatsApp `+55 47 98469-2588`.

## Estrutura (1 rota: `/`)

1. **Header fixo** — Logo Ritter + botão "WhatsApp" no canto direito.
2. **Hero** — fundo escuro com foto dos mecânicos (preto-e-branco) com overlay; H1 "Excelência além dos pneus...", sub-headline, CTA vermelho "Solicitar Orçamento Transparente" → WhatsApp.
3. **PAS** — fundo branco, 3 cards com ícones Lucide vermelhos (dor / transformação / solução Ritter).
4. **Serviços** — grid 2 colunas (mobile) / 3 (desktop), cards com fundo vermelho e texto branco, 5 serviços listados; foto do óleo Maxi como destaque lateral em desktop.
5. **Prova Social / Autoridade** — fundo escuro texturizado, fotos reais de Balanceamento e Geometria 3D lado a lado, copy sobre padrão "perfeito".
6. **CTA Final + Contato** — endereço, iframe Google Maps (Rodovia SC-412, 1395 — Poço Grande, Ilhota-SC), CTA vermelho "Agendar Minha Revisão Gratuita", hashtags.
7. **WhatsApp flutuante** — botão fixo bottom-right, visível em todo scroll.

## Design System (src/styles.css)

- `--background`: branco; `--foreground`: cinza-chumbo escuro.
- Novos tokens: `--brand-red` (vermelho vivo do logo), `--brand-dark` (preto/chumbo do logo), `--brand-red-foreground` branco.
- Tipografia: par "archivo-black-hind" (títulos pesados industriais + corpo legível).
- Botão variant `cta` vermelho com hover mais escuro.

## Assets

- Upload das 4 imagens + logo via `lovable-assets` CLI para o CDN; importar como `.asset.json` em `src/assets/`.
- Logo usado no header e como favicon/og.

## SEO (head do route index)

- title: "Ritter Auto Center — Mecânica de Precisão em Ilhota/SC"
- description (<160): foco em segurança, transparência, alinhamento 3D, Ilhota.
- og:title, og:description, og:image (foto da geometria 3D), twitter:card.
- H1 único no Hero, semântica correta (`<main>`, `<section>`, `<h2>` por seção).

## Detalhes técnicos

- Arquivos novos:
  - `src/routes/index.tsx` (substitui placeholder) — composta de seções.
  - `src/components/landing/Header.tsx`, `Hero.tsx`, `PainSolution.tsx`, `Services.tsx`, `Authority.tsx`, `FinalCta.tsx`, `WhatsAppFloat.tsx`.
  - `src/lib/contact.ts` exporta `WHATSAPP_URL` com mensagem pré-preenchida em PT-BR.
- Tokens novos em `src/styles.css` dentro de `:root` e `@theme inline` (`--color-brand-red`, etc.).
- Sem backend, sem Lovable Cloud — tudo estático.
- `h-dvh` no hero, alt-text descritivo em todas as imagens, `aria-label` no botão WhatsApp flutuante.

## Fora do escopo

- Formulário de leads (CTAs vão direto pro WhatsApp conforme escolha do usuário).
- Páginas adicionais (sobre, blog, etc.).
- Backend / database.
