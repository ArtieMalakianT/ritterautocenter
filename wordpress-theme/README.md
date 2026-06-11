# Tema WordPress — Ritter Auto Center

Tema clássico convertido a partir da landing page React do projeto.

## Estrutura

```
wordpress-theme/
├─ style.css       # Cabeçalho do tema + CSS completo (design tokens preto/vermelho)
├─ functions.php   # Setup, enqueue de fontes/estilos, helpers (contato, WhatsApp flutuante)
├─ header.php      # <head>, header sticky com logo e CTA WhatsApp
├─ footer.php      # wp_footer() e fechamento do documento
├─ index.php       # Página única: Hero, PAS, Serviços, Autoridade, CTA final + Mapa
└─ assets/         # Coloque aqui: ritter-logo.png, mecanicos.jpg, oleo-maxi.jpg,
                   #              balanceamento.jpg, geometria-3d.jpg
```

## Instalação

1. Copie a pasta `wordpress-theme/` para `wp-content/themes/ritter-auto-center/`.
2. Faça upload das imagens listadas acima dentro de `assets/` (mesmos nomes).
3. No painel WP: **Aparência → Temas → Ativar** "Ritter Auto Center".
4. (Opcional) Em **Configurações → Leitura**, defina “Sua página inicial mostra” como **uma página estática** se quiser usar `front-page.php` no futuro — por padrão o `index.php` já renderiza a landing.

## Personalização rápida

- Telefone/WhatsApp: edite a constante em `ritter_contact()` em `functions.php`.
- Endereço e mapa: ajuste em `functions.php` e no `iframe` dentro de `index.php`.
- Cores: variáveis CSS no topo de `style.css` (`--brand-red`, `--brand-dark`, etc.).
- Tipografia: fontes Google (`Archivo Black` + `Hind`) carregadas via `wp_enqueue_style`.

## Observações

- Tema sem build step — CSS puro, sem Tailwind, pronto para WP.
- WhatsApp flutuante é injetado via `wp_footer` em todas as páginas.
- Acessibilidade: foco visível, `alt` em todas as imagens, marcação semântica.