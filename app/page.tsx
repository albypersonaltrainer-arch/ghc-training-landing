import Image from "next/image";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import HexVideo from "@/components/home/HexVideo";
import QuickPath from "@/components/home/QuickPath";
import { ghcMedia, ghcTraining } from "@/config/ghcTraining";

const whatsappText = encodeURIComponent(
  "Hola Alby, quiero información para empezar con una valoración GHC Training."
);
const whatsappUrl = `https://wa.me/${ghcTraining.contact.phoneE164}?text=${whatsappText}`;

const emailSubject = encodeURIComponent("Quiero empezar con GHC Training");
const emailBody = encodeURIComponent(
  "Hola Alby,\n\nQuiero información para empezar con GHC Training.\n\nNombre:\nTeléfono / WhatsApp:\nModalidad: Madrid / Online\nObjetivo principal:\n\nGracias."
);
const emailUrl = `mailto:${ghcTraining.contact.email}?subject=${emailSubject}&body=${emailBody}`;

const paymentFallback = whatsappUrl;

const paymentLinks = {
  valuation: {
    online: process.env.NEXT_PUBLIC_SUMUP_VALORACION_ONLINE_URL || paymentFallback,
    madrid: process.env.NEXT_PUBLIC_SUMUP_VALORACION_PRESENCIAL_URL || paymentFallback,
  },
  plan4: {
    online: process.env.NEXT_PUBLIC_SUMUP_PLAN4_ONLINE_URL || paymentFallback,
    madrid: process.env.NEXT_PUBLIC_SUMUP_PLAN4_PRESENCIAL_URL || paymentFallback,
  },
  program12: {
    online: process.env.NEXT_PUBLIC_SUMUP_PROGRAMA12_ONLINE_URL || paymentFallback,
    madrid: process.env.NEXT_PUBLIC_SUMUP_PROGRAMA12_PRESENCIAL_URL || paymentFallback,
  },
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="ghc-check">
      <path d="M4 10.5 8 14l8-8" />
    </svg>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="ghc-kicker">{children}</p>;
}

export default function Home() {
  return (
    <main className="ghc26-shell">
      <header className="ghc26-header">
        <a href="#inicio" className="ghc26-brand" aria-label="GHC Training, inicio">
          <GHCTrainingLogo size="md" />
        </a>

        <nav className="ghc26-nav" aria-label="Navegación principal">
          <a href="#perfil">Tu perfil</a>
          <a href="#metodo">Método</a>
          <a href="#modalidades">Madrid + Online</a>
          <a href="#programas">Programas</a>
        </nav>

        <a href="#empezar" className="ghc-button ghc-button-compact ghc-button-primary">
          Empezar <Arrow />
        </a>
      </header>

      <section id="inicio" className="ghc26-hero">
        <div className="ghc26-hero-media" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={ghcMedia.hero.poster}
          >
            <source src={ghcMedia.hero.src} />
          </video>
          <div className="ghc26-hero-scrim" />
          <div className="ghc26-hero-grid" />
        </div>

        <div className="ghc26-hero-content">
          <SectionEyebrow>{ghcTraining.positioning.eyebrow}</SectionEyebrow>
          <h1>
            Tu cuerpo.<br />
            Tu contexto.<br />
            <span>Tu estrategia.</span>
          </h1>
          <p>{ghcTraining.positioning.subheadline}</p>

          <div className="ghc26-hero-actions">
            <a href="#empezar" className="ghc-button ghc-button-primary">
              Empezar mi valoración <Arrow />
            </a>
            <a href="#metodo" className="ghc-button ghc-button-ghost">
              Conocer el Método GHC
            </a>
          </div>

          <div className="ghc26-hero-meta">
            <span><i /> Madrid · nos desplazamos</span>
            <span><i /> Online · España + América Latina</span>
          </div>
        </div>

        <div className="ghc26-hero-mark" aria-hidden="true">
          <span>GHC</span>
          <small>METHOD</small>
        </div>
      </section>

      <section className="ghc26-trust-rail" aria-label="Principios GHC Training">
        <span>VALORAR</span>
        <i />
        <span>DECIDIR</span>
        <i />
        <span>DISEÑAR</span>
        <i />
        <span>GUIAR</span>
        <i />
        <span>REVISAR</span>
        <i />
        <span>AJUSTAR</span>
      </section>

      <section id="perfil" className="ghc26-section ghc26-profile-section">
        <div className="ghc26-section-copy ghc26-section-copy-large">
          <SectionEyebrow>Antes de prescribir</SectionEyebrow>
          <h2>
            No empezamos por los ejercicios.<br />
            <span>Empezamos por entenderte.</span>
          </h2>
          <p>
            Tu edad, tu historial, tu disponibilidad, el lugar donde entrenas y cómo responde tu cuerpo cambian la decisión. Por eso dos personas con el mismo objetivo no deberían recibir el mismo plan.
          </p>
        </div>

        <div className="ghc26-profile-system" aria-label="Variables que forman el Perfil GHC">
          <div className="ghc26-profile-orbit">
            {ghcTraining.profileSignals.map((signal, index) => (
              <span key={signal} style={{ "--i": index } as React.CSSProperties}>
                {signal}
              </span>
            ))}
            <div className="ghc26-profile-core">
              <strong>PERFIL</strong>
              <b>GHC</b>
              <small>Tu punto de partida</small>
            </div>
          </div>
        </div>
      </section>

      <section id="empezar" className="ghc26-section ghc26-path-section">
        <div className="ghc26-section-copy">
          <SectionEyebrow>Una web que empieza a adaptarse</SectionEyebrow>
          <h2>Cuéntanos tres cosas. El resto necesita valoración.</h2>
          <p>
            No es un diagnóstico ni una prescripción automática. Es una forma rápida de situar tu contexto antes de hablar.
          </p>
        </div>
        <QuickPath />
      </section>

      <section id="metodo" className="ghc26-method-section">
        <div className="ghc26-method-heading">
          <div>
            <SectionEyebrow>Método GHC</SectionEyebrow>
            <h2>Un sistema que cambia contigo.</h2>
          </div>
          <p>
            La planificación no termina cuando entregamos un documento. Medimos respuesta, revisamos y ajustamos para mantener dirección sin convertir tu vida en una agenda de sesiones.
          </p>
        </div>

        <div className="ghc26-method-stage">
          <div className="ghc26-method-media" aria-hidden="true">
            <HexVideo src={ghcMedia.method[0].src} className="hex-a" />
            <HexVideo src={ghcMedia.method[1].src} className="hex-b" />
            <HexVideo src={ghcMedia.method[2].src} className="hex-c" />
          </div>

          <div className="ghc26-method-list">
            {ghcTraining.method.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modalidades" className="ghc26-section ghc26-modalities-section">
        <div className="ghc26-section-copy ghc26-section-copy-large">
          <SectionEyebrow>GHC va contigo</SectionEyebrow>
          <h2>
            No necesitas venir a GHC.<br />
            <span>GHC se adapta a tu vida.</span>
          </h2>
        </div>

        <div className="ghc26-modality-grid">
          <article className="ghc26-modality-card ghc26-modality-madrid">
            <div className="ghc26-modality-number">01</div>
            <div className="ghc26-modality-content">
              <p className="ghc-kicker">Presencial</p>
              <h3>{ghcTraining.modalities[0].title}</h3>
              <p>{ghcTraining.modalities[0].text}</p>
              <div className="ghc26-tag-row">
                {ghcTraining.modalities[0].tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href="/entrenador-personal-madrid" className="ghc-text-link">Entrenamiento personal en Madrid <Arrow /></a>
            </div>
            <img
              src={ghcMedia.mobilityImage.src}
              alt="Entrenamiento guiado y movilidad en un entorno de gimnasio"
              loading="lazy"
            />
          </article>

          <article className="ghc26-modality-card ghc26-modality-online">
            <div className="ghc26-modality-number">02</div>
            <div className="ghc26-modality-content">
              <p className="ghc-kicker">A distancia</p>
              <h3>{ghcTraining.modalities[1].title}</h3>
              <p>{ghcTraining.modalities[1].text}</p>
              <div className="ghc26-tag-row">
                {ghcTraining.modalities[1].tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href="/entrenador-personal-online" className="ghc-text-link">Entrenamiento personal online <Arrow /></a>
            </div>
            <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
              <source src={ghcMedia.online.src} />
            </video>
          </article>
        </div>
      </section>

      <section className="ghc26-solutions-section">
        <div className="ghc26-solutions-intro">
          <SectionEyebrow>Áreas de trabajo</SectionEyebrow>
          <h2>No entrenamos una etiqueta. Entrenamos a la persona que hay detrás.</h2>
        </div>

        <div className="ghc26-solutions-grid">
          {ghcTraining.specialties.map((item, index) => (
            <a href={item.href} key={item.title} className={index === 0 || index === 4 ? "is-featured" : ""}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{item.title}</strong>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section id="programas" className="ghc26-section ghc26-programs-section">
        <div className="ghc26-programs-heading">
          <div>
            <SectionEyebrow>Cómo empezar</SectionEyebrow>
            <h2>Tres niveles. Una misma lógica.</h2>
          </div>
          <div className="ghc26-program-flow" aria-hidden="true">
            <span>VALORAR</span><i />
            <span>CONSTRUIR</span><i />
            <span>EVOLUCIONAR</span>
          </div>
        </div>

        <div className="ghc26-program-grid">
          {ghcTraining.services.map((service, index) => {
            const links = paymentLinks[service.id];
            return (
              <article key={service.id} className={index === 2 ? "is-primary" : ""}>
                <div className="ghc26-program-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <small>{service.eyebrow}</small>
                </div>
                <h3>{service.title}</h3>
                <p className="ghc26-program-duration">{service.duration}</p>
                <p>{service.description}</p>

                <div className="ghc26-price-grid">
                  <a href={links.online} target="_blank" rel="noreferrer">
                    <small>{service.online.label}</small>
                    <strong>{service.online.price} €</strong>
                    <span>Empezar <Arrow /></span>
                  </a>
                  <a href={links.madrid} target="_blank" rel="noreferrer">
                    <small>{service.madrid.label}</small>
                    <strong>{service.madrid.price} €</strong>
                    <span>Empezar <Arrow /></span>
                  </a>
                </div>

                <footer><Check /> {service.note}</footer>
              </article>
            );
          })}
        </div>
        <p className="ghc26-program-note">
          Los importes llevan al enlace de pago configurado para cada modalidad. Si prefieres confirmar primero tu caso, puedes <a href={whatsappUrl} target="_blank" rel="noreferrer">hablar por WhatsApp</a>.
        </p>
      </section>

      <section className="ghc26-proof-section">
        <div className="ghc26-proof-heading">
          <SectionEyebrow>Personas · contextos · evolución</SectionEyebrow>
          <h2>El resultado que importa es recuperar capacidad para vivir mejor.</h2>
        </div>

        <div className="ghc26-proof-grid">
          {ghcTraining.proof.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="ghc26-proof-disclaimer">
          Los casos se presentan como experiencias de entrenamiento y no como promesas de resultado ni tratamiento médico.
        </p>
      </section>

      <section className="ghc26-manifesto-section">
        <div className="ghc26-manifesto-photo">
          <img
            src={ghcMedia.technologyImage.src}
            alt="Uso de tecnología para revisar información durante una sesión de entrenamiento"
            loading="lazy"
          />
        </div>
        <div className="ghc26-manifesto-copy">
          <SectionEyebrow>Health Through Strength</SectionEyebrow>
          <h2>Fuerza no significa entrenar duro desde el primer día.</h2>
          <p>
            Significa recuperar capacidad, proteger articulaciones, moverte con más seguridad, ganar autonomía y volver a sentir que tu cuerpo responde.
          </p>
          <div className="ghc26-manifesto-list">
            {ghcTraining.manifesto.map(([left, right]) => (
              <div key={right}><span>{left}</span><i /> <strong>{right}</strong></div>
            ))}
          </div>
          <blockquote>
            No se trata de hacer más. Se trata de hacer lo adecuado, en el momento adecuado y con la progresión adecuada.
          </blockquote>
        </div>
      </section>

      <section className="ghc26-founder-section">
        <div className="ghc26-founder-copy">
          <SectionEyebrow>Quién está detrás del método</SectionEyebrow>
          <h2>Alby Aguiar</h2>
          <p className="ghc26-founder-role">Fundador y director de GHC Training</p>
          <p>
            Más de 30 años de experiencia profesional en entrenamiento, fuerza, movilidad, composición corporal, nutrición estratégica y salud activa. En GHC la experiencia no se utiliza para imponer una receta: se utiliza para tomar mejores decisiones sobre cada caso.
          </p>
          <a href="/sobre-ghc-training" className="ghc-button ghc-button-dark">Conocer GHC Training <Arrow /></a>
        </div>

        <div className="ghc26-founder-photo">
          <div className="ghc26-founder-hex" aria-hidden="true" />
          <Image
            src="/alby-ghc-training.png"
            alt="Alby Aguiar, fundador y director de GHC Training"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className="ghc26-founder-image"
          />
        </div>
      </section>

      <section className="ghc26-future-section">
        <div className="ghc26-future-grid" aria-hidden="true" />
        <div className="ghc26-future-content">
          <SectionEyebrow>Preparado para el siguiente nivel</SectionEyebrow>
          <h2>Tu estrategia, también conectada.</h2>
          <p>
            La experiencia GHC está diseñada para evolucionar hacia una capa digital donde planificación, progreso, revisiones y comunicación formen parte del mismo sistema.
          </p>
          <div className="ghc26-future-status">
            <span>PLANIFICACIÓN</span>
            <span>PROGRESO</span>
            <span>REVISIONES</span>
            <span>APP · PRÓXIMAMENTE</span>
          </div>
        </div>
        <div className="ghc26-device" aria-hidden="true">
          <div className="ghc26-device-screen">
            <div className="ghc26-device-brand">GHC</div>
            <small>TODAY</small>
            <strong>Tu estrategia</strong>
            <div className="ghc26-device-line"><i style={{ width: "78%" }} /></div>
            <div className="ghc26-device-metrics">
              <span><b>04</b><small>semana</small></span>
              <span><b>82%</b><small>adherencia</small></span>
            </div>
            <div className="ghc26-device-card">Siguiente revisión <b>→</b></div>
          </div>
        </div>
      </section>

      <section className="ghc26-section ghc26-faq-section">
        <div className="ghc26-section-copy">
          <SectionEyebrow>Antes de empezar</SectionEyebrow>
          <h2>Preguntas frecuentes.</h2>
        </div>
        <div className="ghc26-faq-list">
          {ghcTraining.faq.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="ghc26-final-section">
        <div className="ghc26-final-bg" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata" poster={ghcMedia.hero.poster}>
            <source src={ghcMedia.hero.src} />
          </video>
        </div>
        <div className="ghc26-final-content">
          <SectionEyebrow>Empieza por saber dónde estás</SectionEyebrow>
          <h2>
            Tu cuerpo no necesita<br />
            otra rutina.<br />
            <span>Necesita una estrategia.</span>
          </h2>
          <div className="ghc26-final-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ghc-button ghc-button-primary">
              Hablar por WhatsApp <Arrow />
            </a>
            <a href={emailUrl} className="ghc-button ghc-button-ghost-light">Escribir por email</a>
          </div>
        </div>
      </section>

      <footer className="ghc26-footer">
        <div className="ghc26-footer-main">
          <GHCTrainingLogo size="md" darkText={false} />
          <p>Entrenamiento, nutrición estratégica y salud activa con criterio.</p>
          <div className="ghc26-footer-links">
            <a href="/metodo-ghc">Método GHC</a>
            <a href="/valoracion-integral">Valoración integral</a>
            <a href="/entrenador-personal-madrid">Madrid</a>
            <a href="/entrenador-personal-online">Online</a>
            <a href="/sobre-ghc-training">Sobre GHC</a>
          </div>
        </div>

        <div className="ghc26-footer-bottom">
          <span>© 2026 GHC Training · Health Through Strength</span>
          <span>{ghcTraining.contact.email} · {ghcTraining.contact.phone}</span>
        </div>

        <details className="ghc26-media-credits">
          <summary>Créditos y procedencia de medios</summary>
          <div>
            <p>Los vídeos e imágenes de stock utilizados en esta versión proceden de Pexels y se emplean bajo la Pexels License. No implican respaldo de GHC Training por parte de las personas mostradas.</p>
            <ul>
              <li><a href={ghcMedia.hero.sourcePage} target="_blank" rel="noreferrer">Andres Ayrton · Pexels</a></li>
              {ghcMedia.method.map((media) => <li key={media.sourcePage}><a href={media.sourcePage} target="_blank" rel="noreferrer">{media.creator} · Pexels</a></li>)}
              <li><a href={ghcMedia.online.sourcePage} target="_blank" rel="noreferrer">{ghcMedia.online.creator} · Pexels</a></li>
              <li><a href={ghcMedia.technologyImage.sourcePage} target="_blank" rel="noreferrer">{ghcMedia.technologyImage.creator} · Pexels</a></li>
              <li><a href={ghcMedia.mobilityImage.sourcePage} target="_blank" rel="noreferrer">{ghcMedia.mobilityImage.creator} · Pexels</a></li>
            </ul>
          </div>
        </details>
      </footer>
    </main>
  );
}
