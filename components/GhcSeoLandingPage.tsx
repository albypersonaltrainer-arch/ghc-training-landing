import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import {
  absoluteUrl,
  getRelatedPages,
  ghcContact,
  SeoPageContent,
  siteConfig,
} from "@/lib/seoPages";

function buildJsonLd(page: SeoPageContent) {
  const pageUrl = absoluteUrl(page.slug);

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl("/alby-ghc-training.png"),
      email: ghcContact.email,
      telephone: `+${ghcContact.whatsappNumber}`,
      areaServed: page.areaServed,
      description: siteConfig.description,
      sameAs: [siteConfig.url],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.serviceType,
      serviceType: page.serviceType,
      areaServed: page.areaServed,
      provider: {
        "@type": "ProfessionalService",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      url: pageUrl,
      description: page.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.shortLabel,
          item: pageUrl,
        },
      ],
    },
  ];
}

function CheckIcon() {
  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22D65B]/12 text-[12px] font-black text-[#10983D]">
      ✓
    </span>
  );
}

function SeoCtaButtons() {
  return (
    <div className="ghc-seo-actions">
      <a href={ghcContact.valuationEmailUrl} className="ghc-primary-button">
        Quiero mi valoración
        <span aria-hidden="true">→</span>
      </a>
      <a href={ghcContact.whatsappUrl} className="ghc-secondary-button">
        Hablar por WhatsApp
      </a>
    </div>
  );
}

export function GhcSeoLandingPage({ page }: { page: SeoPageContent }) {
  const relatedPages = getRelatedPages(page);
  const jsonLd = buildJsonLd(page);

  return (
    <main className="ghc-page-shell ghc-seo-shell">
      {jsonLd.map((item, index) => (
        <script
          key={`${page.slug}-jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <header className="ghc-header">
        <a href="/" aria-label="GHC Training" className="shrink-0">
          <GHCTrainingLogo size="md" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-[#27302D] lg:flex">
          <a href="/" className="nav-link">Inicio</a>
          <a href="/servicios" className="nav-link">Servicios</a>
          <a href="/valoracion-inicial" className="nav-link active">Valoración</a>
        </nav>
        <a href={ghcContact.whatsappUrl} className="ghc-whatsapp-header">
          WhatsApp
        </a>
      </header>

      <section className="ghc-seo-hero">
        <div className="ghc-seo-breadcrumbs" aria-label="Migas de pan">
          <a href="/">Inicio</a>
          <span aria-hidden="true">/</span>
          <span>{page.shortLabel}</span>
        </div>

        <p className="ghc-kicker">{page.eyebrow}</p>
        <h1>{page.h1}</h1>
        <p className="ghc-seo-intro">{page.intro}</p>
        <SeoCtaButtons />
        <p className="ghc-seo-cta-helper">
          Cuéntame tu caso y revisamos si puedo ayudarte con un plan adaptado.
        </p>
      </section>

      <section className="ghc-seo-card-grid" aria-label="Información principal">
        {[page.problem, page.forWho, page.approach].map((item) => (
          <article key={item.title} className="ghc-seo-card">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="ghc-seo-detail-section">
        <div>
          <p className="ghc-kicker">Valoración inicial</p>
          <h2>Qué revisamos antes de diseñar el plan</h2>
          <p>
            La valoración no es una formalidad. Es el paso que permite decidir si el trabajo debe ser presencial, online, corto, de 12 semanas o si conviene derivar primero a otro profesional.
          </p>
        </div>
        <ul className="ghc-seo-check-list">
          {page.valuationIncludes.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="ghc-seo-medical-note-block">
        <div>
          <p className="ghc-kicker">Sin humo ni promesas falsas</p>
          <h2>Lo que GHC Training no promete</h2>
        </div>
        <ul>
          {page.notPromises.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="ghc-seo-final-block">
        <div>
          <h2>¿Quieres que revise tu caso?</h2>
          <p>{page.closingText}</p>
        </div>
        <SeoCtaButtons />
      </section>

      {relatedPages.length > 0 ? (
        <section className="ghc-seo-related" aria-label="Páginas relacionadas">
          <p className="ghc-kicker">También puede interesarte</p>
          <div className="ghc-seo-related-grid">
            {relatedPages.map((related) => (
              <a key={related.slug} href={`/${related.slug}`}>
                <span>{related.shortLabel}</span>
                <strong>{related.h1}</strong>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <footer className="ghc-footer">
        <GHCTrainingLogo size="sm" darkText={false} />
        <p>© 2026 GHC Training · Alby Aguiar · Salud a través de la fuerza.</p>
        <a href={ghcContact.whatsappUrl}>Contacto por WhatsApp</a>
      </footer>
    </main>
  );
}
