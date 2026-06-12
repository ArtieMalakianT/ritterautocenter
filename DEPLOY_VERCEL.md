# Tutorial: Deploy do Projeto Ritter Auto Center na Vercel

> **Importante:** Seu projeto já está **publicado e no ar** na Lovable em:  
> [https://ritterautocenter.lovable.app](https://ritterautocenter.lovable.app)  
> Este tutorial serve para quem quer ter uma cópia independente rodando na Vercel.

---

## O que voce vai precisar

- Conta gratuita na [Vercel](https://vercel.com/signup)
- Conta no [GitHub](https://github.com/signup) (para importar o projeto)
- Projeto clonado no seu computador (ou zip extraido)
- Bun ou Node.js instalado

---

## Passo 1: Subir o codigo para o GitHub

### 1.1 Crie um repositorio novo no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nomeie: `ritter-auto-center` (ou qualquer nome)
3. Deixe em **Publico** e clique em **Create repository**
4. Copie a URL HTTPS do repositorio (ex: `https://github.com/SEU-USUARIO/ritter-auto-center.git`)

### 1.2 Envie o projeto do seu computador

Abra a pasta do projeto no terminal e execute:

```bash
git init
git add .
git commit -m "Primeiro commit - Landing Page Ritter Auto Center"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/ritter-auto-center.git
git push -u origin main
```

> Se voce nao tem Git instalado, pode fazer upload manualmente como ZIP no Vercel (veja Passo 2 Alternativo).

---

## Passo 2: Conectar na Vercel

### Opcao A: Via GitHub (recomendado)

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **Import Git Repository**
3. Selecione o repositorio `ritter-auto-center`
4. A Vercel vai detectar automaticamente que e um projeto **TanStack Start**
5. Clique em **Deploy**

### Opcao B: Via upload de pasta (sem GitHub)

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **Continue with Template** → depois escolha **Upload**
3. Arraste a pasta do projeto para dentro
4. Em **Framework Preset**, escolha manualmente: **Other** ou deixe em **TanStack Start** se aparecer
5. Em **Build Command**, digite: `bun run build`
6. Em **Output Directory**, digite: `dist`
7. Clique em **Deploy**

---

## Passo 3: Configurar o Build (se necessario)

Se o deploy falhar ou se voce precisar ajustar manualmente, use as configuracoes abaixo no painel da Vercel:

| Configuracao | Valor |
|-------------|-------|
| Framework Preset | TanStack Start (ou Other) |
| Build Command | `bun run build` |
| Output Directory | `dist` |
| Install Command | `bun install` (ou `npm install`) |

O arquivo `vercel.json` ja esta incluido no projeto com essas configuracoes.

---

## Passo 4: Configurar variaveis de ambiente (se houver)

Se no futuro voce adicionar backend (banco de dados, API keys, etc.):

1. No painel da Vercel, va em **Settings → Environment Variables**
2. Adicione as variaveis necessarias (ex: `SUPABASE_URL`, `SUPABASE_ANON_KEY`)
3. Faca um **Redeploy**

> Atualmente o projeto e uma landing page estatica, entao nao precisa de variaveis.

---

## Passo 5: Customizar o dominio (opcional)

Depois do deploy:

1. No painel da Vercel, va em **Domains**
2. Clique em **Add Domain**
3. Digite seu dominio (ex: `ritterautocenter.com.br`)
4. Siga as instrucoes de DNS fornecidas pela Vercel
5. Para usar o dominio na raiz (sem `www`), adicione um registro `A` apontando para `76.76.21.21`
6. Para usar com `www`, adicione um registro `CNAME` apontando para `cname.vercel-dns.com`

---

## Estrutura do projeto (o que sera deployado)

```
ritter-auto-center/
├── src/
│   ├── components/landing/    # Componentes da landing page
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PainSolution.tsx
│   │   ├── Services.tsx
│   │   ├── Authority.tsx
│   │   ├── FinalCta.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── lib/contact.ts          # Configuracao do WhatsApp
│   ├── routes/
│   │   ├── __root.tsx          # Layout raiz com fontes Google
│   │   └── index.tsx           # Pagina principal (landing)
│   ├── styles.css              # Design tokens (preto/vermelho)
│   └── router.tsx
├── public/                     # Assets estaticos
├── vercel.json                 # Configuracao de deploy
├── package.json                # Dependencias
├── vite.config.ts              # Configuracao do Vite
└── wordpress-theme/            # Tema WP (nao usado na Vercel)
```

> A pasta `wordpress-theme/` faz parte do repositorio mas **nao e usada** no deploy Vercel. Ela e um tema separado para WordPress.

---

## Solucao de problemas

### Erro: "Build failed" ou "Command not found"

- Verifique se o **Node.js** esta na versao 18+ ou se voce esta usando **Bun**
- Troque o comando de build para: `npm run build` ou `npx vite build`

### Erro: "Page not found" ao acessar rotas

O `vercel.json` ja inclui rewrites para SPA. Se o problema persistir:

1. No painel da Vercel, va em **Settings → Functions**
2. Verifique se o framework foi detectado como TanStack Start

### Preview nao aparece

- O projeto usa **SSR** (Server-Side Rendering), entao precisa de um ambiente que rode Node.js
- A Vercel suporta isso nativamente via Nitro

---

## Resumo dos comandos uteis

```bash
# Desenvolvimento local
bun run dev

# Build de producao
bun run build

# Preview local do build
bun run preview

# Lint
bun run lint

# Formatar codigo
bun run format
```

---

## Proximos passos

1. Publique na Vercel usando as instrucoes acima
2. Configure um dominio proprio (opcional)
3. Adicione o Google Analytics 4 para rastrear visitas
4. Configure o Google Search Console para indexar no Google

---

## Suporte

- [Documentacao da Vercel](https://vercel.com/docs)
- [Documentacao do TanStack Start](https://tanstack.com/start/latest)
- [Documentacao da Lovable](https://docs.lovable.dev)
