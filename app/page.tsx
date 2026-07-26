const pillars = [
  {
    title: "Mentalidad",
    symbol: "○",
    description: "Observa tus pensamientos con honestidad y aprende a elegir una mirada más serena.",
  },
  {
    title: "Conexión con Dios",
    symbol: "+",
    description: "Haz espacio para la fe, la oración y una relación más consciente con tu propósito.",
  },
  {
    title: "Paz emocional",
    symbol: "◇",
    description: "Cultiva recursos cotidianos para atravesar lo que sientes con calma y compasión.",
  },
  {
    title: "Mi día",
    symbol: "✓",
    description: "Lleva lo aprendido a tus hábitos, tus decisiones y la forma en que vives cada día.",
  },
];
const benefits = [
  {
    title: "Más claridad",
    description: "Una pausa para reconocer lo que necesitas y volver a escuchar tu voz interior.",
  },
  {
    title: "Más calma",
    description: "Prácticas sencillas para acompañar tus emociones sin exigirte tener todo resuelto.",
  },
  {
    title: "Más intención",
    description: "Una manera más consciente de cuidar tu tiempo, tu fe y las decisiones de cada día.",
  },
];
const testimonialSpaces = [
  "Una historia sobre volver a la calma",
  "Una experiencia de fe y transformación",
  "Un testimonio sobre vivir con intención",
];

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
                <a href="#productos">Recursos</a>
              </li>
              <li>
                <a href="#app">App</a>
              </li>
            </ul>
          </nav>

          <a className="wire-button wire-button--compact" href="#metodo">
            Conoce el método
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <p className="wire-label">AlmaSerena</p>
              <h1 id="hero-title">
                No estás roto.
                <br />
                <em>Estás despertando.</em>
              </h1>
              <p className="wire-description">
                Un espacio para transformar tu mente, cuidar tu corazón y vivir con más
                fe, calma y propósito.
              </p>
              <div className="hero-actions" aria-label="Conoce AlmaSerena">
                <a className="wire-button" href="#metodo">
                  Descubre el método
                </a>
                <a className="wire-link" href="#beneficios">
                  Conoce AlmaSerena
                </a>
              </div>
            </div>

            <div className="portrait-placeholder" aria-label="Fotografía de la creadora pendiente">
              <span className="portrait-placeholder__halo" aria-hidden="true" />
              <span className="portrait-placeholder__head" aria-hidden="true" />
              <span className="portrait-placeholder__body" aria-hidden="true" />
              <div className="portrait-placeholder__caption">
                <strong>La creadora de AlmaSerena</strong>
                <span>Fotografía próximamente</span>
              </div>
            </div>
          </div>
        </section>

        <section id="metodo" className="wire-section" aria-labelledby="method-title">
          <div className="site-container">
            <div className="section-heading">
              <p className="wire-label">Método</p>
              <h2 id="method-title">Cuatro pilares para volver a lo esencial</h2>
              <p>
                Un recorrido que integra mente, fe, bienestar emocional y vida
                cotidiana, a tu ritmo y sin fórmulas perfectas.
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
                  <p>{pillar.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="beneficios" className="wire-section wire-section--alternate" aria-labelledby="benefits-title">
          <div className="site-container benefits-grid">
            <div className="section-heading section-heading--left">
              <p className="wire-label">Beneficios</p>
              <h2 id="benefits-title">Pequeños cambios que se sienten por dentro</h2>
              <p>
                AlmaSerena nace para acompañarte a construir una relación más amable
                contigo, con tu fe y con el presente.
              </p>
            </div>

            <ul className="benefit-list">
              {benefits.map((benefit, index) => (
                <li key={benefit.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
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
              <h2 id="testimonials-title">Las historias reales tendrán su propio espacio</h2>
              <p>
                Publicaremos testimonios únicamente cuando podamos compartir
                experiencias auténticas y autorizadas.
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonialSpaces.map((testimonial) => (
                <article key={testimonial} className="testimonial-placeholder">
                  <span className="quote-placeholder" aria-hidden="true">
                    “
                  </span>
                  <p>
                    Este lugar queda preparado para una experiencia real de la comunidad
                    AlmaSerena.
                  </p>
                  <footer>
                    <span className="avatar-placeholder" aria-hidden="true" />
                    <div>
                      <h3>{testimonial}</h3>
                      <span>Próximamente</span>
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
              <span>Recursos AlmaSerena</span>
              <strong>Imágenes próximamente</strong>
            </div>
            <div className="feature-copy">
              <p className="wire-label">Recursos</p>
              <h2 id="products-title">Herramientas para acompañar tu proceso</h2>
              <p>
                Estamos creando recursos editoriales y prácticos para llevar la calma,
                la reflexión y la fe a distintos momentos de tu vida.
              </p>
              <ul className="placeholder-list" aria-label="Principios de los recursos">
                <li>
                  <span aria-hidden="true" />
                  Contenido pensado para volver a ti
                </li>
                <li>
                  <span aria-hidden="true" />
                  Reflexiones para vivir con intención
                </li>
                <li>
                  <span aria-hidden="true" />
                  Herramientas creadas con calma y propósito
                </li>
              </ul>
              <span className="wire-link">Colección en preparación</span>
            </div>
          </div>
        </section>

        <section id="app" className="wire-section" aria-labelledby="app-title">
          <div className="site-container app-grid">
            <div className="feature-copy">
              <p className="wire-label">Experiencia digital</p>
              <h2 id="app-title">AlmaSerena, contigo en cada etapa</h2>
              <p>
                La experiencia digital está tomando forma. Será un espacio íntimo y
                sencillo para acompañar tu camino, estés donde estés.
              </p>
              <div className="store-placeholders" aria-label="Disponibilidad futura">
                <span>Experiencia en desarrollo</span>
                <span>Lanzamiento próximamente</span>
              </div>
            </div>

            <div className="device-stage" aria-label="Vista previa de la aplicación en desarrollo">
              <div className="device-placeholder device-placeholder--tablet">
                <span>Tu espacio de calma</span>
              </div>
              <div className="device-placeholder device-placeholder--phone">
                <span>AlmaSerena</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="final-cta" aria-labelledby="cta-title">
          <div className="site-container final-cta__inner">
            <div>
              <p className="wire-label">Cierre</p>
              <h2 id="cta-title">Haz espacio para lo que sí importa</h2>
              <p>
                No tienes que resolverlo todo hoy. Puedes empezar escuchándote,
                respirando y dando un paso con intención.
              </p>
            </div>
            <a className="wire-button wire-button--light" href="#metodo">
              Descubre el método
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-grid">
          <div>
            <strong>AlmaSerena</strong>
            <p>Calma, fe y propósito para volver a lo esencial.</p>
          </div>
          <div>
            <strong>Navegación</strong>
            <a href="#metodo">Método</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#productos">Recursos</a>
          </div>
          <div>
            <strong>Información</strong>
            <span>Recursos en preparación</span>
            <span>App en desarrollo</span>
            <span>Historias próximamente</span>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© {new Date().getFullYear()} AlmaSerena</span>
          <span>Creado con calma y propósito</span>
        </div>
      </footer>
    </>
  );
}
