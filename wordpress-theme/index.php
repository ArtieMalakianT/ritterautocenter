<?php
/**
 * Landing page única — Ritter Auto Center.
 *
 * @package Ritter
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

$contact = ritter_contact();

$pas_items = array(
    array(
        'icon'  => '!',
        'title' => 'Identificando a dor',
        'body'  => 'Você sente insegurança ao deixar seu carro na oficina por medo de quebras inesperadas ou orçamentos injustos?',
    ),
    array(
        'icon'  => '✦',
        'title' => 'A transformação',
        'body'  => 'Leve seu veículo para a tranquilidade de saber que ele está nas mãos de especialistas que buscam a perfeição técnica.',
    ),
    array(
        'icon'  => '✓',
        'title' => 'A solução Ritter',
        'body'  => 'Autoridade técnica mais confiável de Ilhota e região, unindo tradição com estrutura moderna de centro automotivo completo.',
    ),
);

$services = array(
    array( 'title' => 'Embreagem e correia dentada', 'body' => 'Diagnóstico e troca com peças de procedência.' ),
    array( 'title' => 'Mecânica geral e troca de óleo', 'body' => 'Óleos sintéticos originais, como Maxi Performance VW.' ),
    array( 'title' => 'Suspensão e alinhamento 3D', 'body' => 'Tecnologia 3D para precisão milimétrica.' ),
    array( 'title' => 'Limpeza de bico e freios', 'body' => 'Performance restaurada e frenagem segura.' ),
    array( 'title' => 'Cambagem e balanceamento', 'body' => 'Pneus durando mais e direção estável.' ),
);
?>

<main id="conteudo">

    <!-- Hero -->
    <section class="hero">
        <img class="hero__bg"
             src="<?php echo ritter_asset( 'mecanicos.jpg' ); ?>"
             alt="Mecânicos uniformizados da Ritter Auto Center ajustando o motor de um carro em oficina moderna">
        <div class="hero__overlay" aria-hidden="true"></div>
        <div class="container hero__inner">
            <span class="eyebrow">Ilhota / SC — Centro automotivo completo</span>
            <h1>Excelência além dos pneus: <span class="accent">segurança real</span> em cada engrenagem.</h1>
            <p class="hero__lead">
                Transformamos a “caixa preta” que é a mecânica em um processo transparente e compreensível para o cliente.
            </p>
            <div class="hero__actions">
                <a class="btn btn-cta btn-lg" href="<?php echo esc_url( $contact['wa_orcam'] ); ?>" target="_blank" rel="noopener noreferrer">
                    Solicitar Orçamento Transparente
                </a>
                <a class="btn btn-ghost btn-lg" href="#servicos">Ver serviços</a>
            </div>
        </div>
    </section>

    <!-- PAS -->
    <section class="section section--white">
        <div class="container">
            <div class="section__head">
                <h2>Da insegurança à <span class="accent" style="color:var(--brand-red)">tranquilidade técnica</span></h2>
                <p>Um caminho claro entre o problema que você sente e a solução que entregamos.</p>
            </div>
            <div class="pas-grid">
                <?php foreach ( $pas_items as $item ) : ?>
                    <article class="pas-card">
                        <span class="pas-card__icon" aria-hidden="true"><?php echo esc_html( $item['icon'] ); ?></span>
                        <h3><?php echo esc_html( $item['title'] ); ?></h3>
                        <p><?php echo esc_html( $item['body'] ); ?></p>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Serviços -->
    <section class="services" id="servicos">
        <div class="container">
            <div class="services__intro">
                <div>
                    <span class="services__eyebrow">Muito além da borracharia</span>
                    <h2>Muito mais que pneus. Soluções completas para a vida do seu carro.</h2>
                    <p>Derrubamos o mito de que a Ritter só entende de pneus. Nossa execução foca na solução integral para o veículo, indo muito além da venda de produtos.</p>
                </div>
                <figure class="services__photo">
                    <img src="<?php echo ritter_asset( 'oleo-maxi.jpg' ); ?>"
                         alt="Embalagens de óleo Maxi Performance 5W-40 originais Volkswagen na bancada da oficina Ritter">
                </figure>
            </div>

            <div class="service-grid">
                <?php foreach ( $services as $service ) : ?>
                    <article class="service-card">
                        <h3><?php echo esc_html( $service['title'] ); ?></h3>
                        <p><?php echo esc_html( $service['body'] ); ?></p>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Autoridade -->
    <section class="authority">
        <div class="container authority__inner">
            <span class="services__eyebrow">Prova social &amp; autoridade técnica</span>
            <h2>O <span class="accent">“perfeito”</span> é o nosso padrão mínimo de entrega.</h2>
            <p class="authority__lead">
                Nossa estrutura foi pensada para motoristas de Ilhota e região com carros seminovos ou usados que não buscam apenas o menor preço, mas sim a segurança de um serviço que não precisará de retoques ou retornos.
            </p>

            <div class="authority-grid">
                <figure class="authority-card">
                    <img src="<?php echo ritter_asset( 'geometria-3d.jpg' ); ?>"
                         alt="Equipamento de alinhamento e geometria 3D moderno escaneando a roda de um veículo na Ritter Auto Center">
                    <figcaption>Geometria 3D de última geração para ajustes milimétricos.</figcaption>
                </figure>
                <figure class="authority-card">
                    <img src="<?php echo ritter_asset( 'balanceamento.jpg' ); ?>"
                         alt="Pneu sendo balanceado em máquina profissional na oficina Ritter Auto Center">
                    <figcaption>Balanceamento eletrônico e cambagem com precisão de fábrica.</figcaption>
                </figure>
            </div>
        </div>
    </section>

    <!-- CTA final + contato -->
    <section class="final-cta" id="contato">
        <div class="container">
            <div class="final-cta__box">
                <div>
                    <h2>O seu carro merece a precisão de <span class="accent">verdadeiros especialistas.</span></h2>
                    <p class="final-cta__lead">Fale com a nossa equipe agora e sinta a diferença no atendimento.</p>
                    <a class="btn btn-cta btn-lg" style="margin-top:2rem" href="<?php echo esc_url( $contact['wa_agendar'] ); ?>" target="_blank" rel="noopener noreferrer">
                        Agendar Minha Revisão Gratuita
                    </a>
                    <address class="final-cta__address">
                        <span class="pin" aria-hidden="true">📍</span>
                        <span><?php echo esc_html( $contact['address'] ); ?></span>
                    </address>
                    <p class="final-cta__hashtags">#RitterAutoCenter #MecanicaDePrecisao #AutoCenterEmIlhota</p>
                </div>
                <div class="final-cta__map">
                    <iframe
                        title="Localização Ritter Auto Center no Google Maps"
                        src="https://www.google.com/maps?q=AUTO+CENTER+RITTER,+Rua+21+de+Junho,+1395+-+Centro,+Ilhota+-+SC,+88320-001&amp;output=embed"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <footer class="site-footer">
                <img src="<?php echo ritter_asset( 'ritter-logo.png' ); ?>" alt="Ritter Auto Center">
                <p>&copy; <?php echo esc_html( date( 'Y' ) ); ?> Ritter Auto Center · Ilhota / SC</p>
            </footer>
        </div>
    </section>

</main>

<?php get_footer(); ?>