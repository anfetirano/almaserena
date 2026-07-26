const pillars = [
  { title: "Pilar 01", symbol: "○" },
  { title: "Pilar 02", symbol: "+" },
  { title: "Pilar 03", symbol: "◇" },
  { title: "Pilar 04", symbol: "✓" },
];
const benefits = ["Beneficio principal", "Beneficio secundario", "Beneficio adicional"];
const testimonials = ["Testimonio 01", "Testimonio 02", "Testimonio 03"];

function PlaceholderLine({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`placeholder-line ${className}`} />;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand-placeholder" href="#inicio" aria-label="AlmaSerena, inicio">
            <span>AS</span>
            <span className="brand-placeholder__text">Logo pendiente</span>
          </a>

          <nav aria-label="Navegación principal">
            <ul className="desktop-nav">
              <li>
                <a href="#metodo">Método</a>
              </li>
              <li>
                <a href="#beneficios">Beneficios</a>
              </li>
              <li>
                <a href="#testimonios">Testimonios</a>
              </li>
              <li>
                <a href="#productos">Productos</a>
              </li>
              <li>
                <a href="#app">App</a>
              </li>
            </ul>
          </nav>

          <a className="wire-button wire-button--compact" href="#contacto">
            Acción principal
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <p className="wire-label">AlmaSerena</p>
              <h1 id="hero-title">Titular principal pendiente de definición</h1>
              <p className="wire-description">
                Espacio reservado para una introducción breve que explique el propósito
                de AlmaSerena.
              </p>
              <div className="hero-actions" aria-label="Acciones previstas">
                <span className="wire-button">Acción principal</span>
                <span className="wire-link">Acción secundaria</span>
              </div>
            </div>

            <div className="portrait-placeholder" aria-label="Fotografía de la creadora pendiente">
              <span className="portrait-placeholder__halo" aria-hidden="true" />
              <span className="portrait-placeholder__head" aria-hidden="true" />
              <span className="portrait-placeholder__body" aria-hidden="true" />
              <div className="portrait-placeholder__caption">
                <strong>Retrato principal</strong>
                <span>Imagen próximamente</span>
              </div>
            </div>
          </div>
        </section>

        <section id="metodo" className="wire-section" aria-labelledby="method-title">
          <div className="site-container">
            <div className="section-heading">
              <p className="wire-label">Método</p>
              <h2 id="method-title">Estructura del método pendiente de definición</h2>
              <p>
                Este bloque establecerá la jerarquía del método sin anticipar nombres,
                promesas ni contenido.
              </p>
            </div>

            <ol className="pillar-grid">
              {pillars.map((pillar, index) => (
                <li key={pillar.title} className="pillar-item">
                  <span className="pillar-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="pillar-icon-placeholder" aria-hidden="true">
                    {pillar.symbol}
                  </div>
                  <h3>{pillar.title}</h3>
                  <PlaceholderLine />
                  <PlaceholderLine className="placeholder-line--short" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="beneficios" className="wire-section wire-section--alternate" aria-labelledby="benefits-title">
          <div className="site-container benefits-grid">
            <div className="section-heading section-heading--left">
              <p className="wire-label">Beneficios</p>
              <h2 id="benefits-title">Resultados y beneficios por definir</h2>
              <p>
                Área reservada para explicar beneficios confirmados con una narrativa
                clara y breve.
              </p>
            </div>

            <ul className="benefit-list">
              {benefits.map((benefit, index) => (
                <li key={benefit}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{benefit}</h3>
                    <PlaceholderLine />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="testimonios" className="wire-section" aria-labelledby="testimonials-title">
          <div className="site-container">
            <div className="section-heading">
              <p className="wire-label">Testimonios</p>
              <h2 id="testimonials-title">Experiencias reales se incorporarán más adelante</h2>
              <p>Los siguientes espacios no representan testimonios ni personas reales.</p>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article key={testimonial} className="testimonial-placeholder">
                  <span className="quote-placeholder" aria-hidden="true">
                    “
                  </span>
                  <PlaceholderLine />
                  <PlaceholderLine />
                  <PlaceholderLine className="placeholder-line--short" />
                  <footer>
                    <span className="avatar-placeholder" aria-hidden="true" />
                    <div>
                      <h3>{testimonial}</h3>
                      <span>Contenido pendiente</span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="productos" className="wire-section wire-section--alternate" aria-labelledby="products-title">
          <div className="site-container feature-grid">
            <div className="media-placeholder media-placeholder--landscape">
              <div className="product-placeholder" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>Imágenes de productos</span>
              <strong>Multimedia pendiente</strong>
            </div>
            <div className="feature-copy">
              <p className="wire-label">Productos o recursos</p>
              <h2 id="products-title">Presentación pendiente de definición</h2>
              <p>
                Este espacio podrá presentar productos, recursos o contenidos cuando su
                alcance esté confirmado.
              </p>
              <ul className="placeholder-list" aria-label="Características pendientes">
                <li>
                  <span aria-hidden="true" />
                  Característica por definir
                </li>
                <li>
                  <span aria-hidden="true" />
                  Característica por definir
                </li>
                <li>
                  <span aria-hidden="true" />
                  Característica por definir
                </li>
              </ul>
              <span className="wire-button">Acción del bloque</span>
            </div>
          </div>
        </section>

        <section id="app" className="wire-section" aria-labelledby="app-title">
          <div className="site-container app-grid">
            <div className="feature-copy">
              <p className="wire-label">Experiencia digital</p>
              <h2 id="app-title">Bloque reservado para la app</h2>
              <p>
                La función de la aplicación, sus plataformas y sus características se
                documentarán antes de diseñar este contenido.
              </p>
              <div className="store-placeholders" aria-label="Plataformas pendientes">
                <span>Plataforma 01</span>
                <span>Plataforma 02</span>
              </div>
            </div>

            <div className="device-stage" aria-label="Mockups de la aplicación pendientes">
              <div className="device-placeholder device-placeholder--tablet">
                <span>Pantalla de app</span>
              </div>
              <div className="device-placeholder device-placeholder--phone">
                <span>App</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="final-cta" aria-labelledby="cta-title">
          <div className="site-container final-cta__inner">
            <div>
              <p className="wire-label">Cierre</p>
              <h2 id="cta-title">Llamada a la acción pendiente</h2>
              <p>Mensaje final por definir durante la fase de contenido.</p>
            </div>
            <span className="wire-button wire-button--light">Acción principal</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div>
            <strong>AlmaSerena</strong>
            <p>Descripción breve pendiente.</p>
          </div>
          <div>
            <strong>Navegación</strong>
            <a href="#metodo">Método</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#productos">Productos</a>
          </div>
          <div>
            <strong>Información</strong>
            <span>Enlace pendiente</span>
            <span>Enlace pendiente</span>
            <span>Enlace pendiente</span>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© {new Date().getFullYear()} AlmaSerena</span>
          <span>Dirección visual — Fase 2</span>
        </div>
      </footer>
    </>
  );
}
