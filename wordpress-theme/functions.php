<?php
/**
 * Ritter Auto Center — funções do tema.
 *
 * @package Ritter
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! defined( 'RITTER_THEME_VERSION' ) ) {
    define( 'RITTER_THEME_VERSION', '1.0.0' );
}

/**
 * Configurações básicas do tema.
 */
function ritter_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support(
        'html5',
        array( 'search-form', 'gallery', 'caption', 'style', 'script', 'navigation-widgets' )
    );

    register_nav_menus(
        array(
            'primary' => __( 'Menu principal', 'ritter' ),
        )
    );
}
add_action( 'after_setup_theme', 'ritter_setup' );

/**
 * Enfileira estilos e fontes.
 */
function ritter_enqueue_assets() {
    wp_enqueue_style(
        'ritter-fonts',
        'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Hind:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'ritter-style',
        get_stylesheet_uri(),
        array( 'ritter-fonts' ),
        RITTER_THEME_VERSION
    );
}
add_action( 'wp_enqueue_scripts', 'ritter_enqueue_assets' );

/**
 * Dados de contato centralizados (reflete src/lib/contact.ts).
 *
 * @return array<string,string>
 */
function ritter_contact() {
    $number = '5547984692588';

    return array(
        'phone'       => $number,
        'address'     => 'Rua 21 de Junho, 1395 - Centro, Ilhota-SC',
        'wa_geral'    => 'https://wa.me/' . $number . '?text=' . rawurlencode( 'Olá, Ritter Auto Center! Tenho uma dúvida.' ),
        'wa_orcam'    => 'https://wa.me/' . $number . '?text=' . rawurlencode( 'Olá! Gostaria de solicitar um orçamento transparente na Ritter Auto Center.' ),
        'wa_agendar'  => 'https://wa.me/' . $number . '?text=' . rawurlencode( 'Olá! Quero agendar minha revisão na Ritter Auto Center.' ),
    );
}

/**
 * Helper para apontar para imagens em /assets dentro do tema.
 *
 * @param string $file Nome do arquivo.
 * @return string URL absoluta.
 */
function ritter_asset( $file ) {
    return esc_url( get_template_directory_uri() . '/assets/' . ltrim( $file, '/' ) );
}

/**
 * Meta description padrão para a home.
 */
function ritter_meta_description() {
    echo '<meta name="description" content="Centro automotivo completo em Ilhota/SC: alinhamento 3D, mecânica geral, troca de óleo, freios e mais. Orçamento transparente e atendimento especialista.">' . "\n";
    echo '<meta property="og:title" content="Ritter Auto Center — Mecânica de Precisão em Ilhota/SC">' . "\n";
    echo '<meta property="og:description" content="Segurança real em cada engrenagem. Alinhamento 3D, troca de óleo e mecânica geral em Ilhota/SC.">' . "\n";
    echo '<meta property="og:type" content="website">' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
}
add_action( 'wp_head', 'ritter_meta_description', 5 );

/**
 * WhatsApp flutuante (impresso no rodapé).
 */
function ritter_whatsapp_float() {
    $contact = ritter_contact();
    ?>
    <a class="wa-float"
       href="<?php echo esc_url( $contact['wa_geral'] ); ?>"
       target="_blank" rel="noopener noreferrer"
       aria-label="Falar com a Ritter Auto Center no WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
    </a>
    <?php
}
add_action( 'wp_footer', 'ritter_whatsapp_float' );