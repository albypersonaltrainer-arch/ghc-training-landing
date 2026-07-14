import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import styles from "./page.module.css";

const siteUrl = "https://www.ghctraining.com";
const pageUrl = `${siteUrl}/entrenador-personal-online`;

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34628798859";
const whatsappMessage = encodeURIComponent(
  "Hola Alby, quiero solicitar una valoración online de GHC Training."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const valuationUrl =
  process.env.NEXT_PUBLIC_SUMUP_VALORACION_ONLINE_URL || whatsappUrl;

export const metadata: Metadata = {
  title: {
    absolute: "Entrenador personal online | Método GHC",
  },
  description:
    "Entrenamiento personal online con valoración inicial, programa adaptado y seguimiento profesional. Mejora tu salud, fuerza, composición corporal y rendimiento.",
  alternates: {
    canonical: "/entrenador-personal-online",
  },
  openGraph: {
    title: "Entrenador personal online | Método GHC",
    description:
      "Valoración a distancia, programa personalizado y seguimiento profesional con el Método GHC.",
    url: "/entrenador-personal-online",
    siteName: "GHC Training",
    images: [
      {
        url: "/alby-ghc-training.png",
        width: 1200,
        height: 630,
        alt: "Alby Aguiar, fundador y director de GHC Training",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrenador personal online | Método GHC",
    description:
      "Valoración a distancia, programa personalizado y seguimiento profesional.",
    images: ["/alby-ghc-training.png"],
  },
};

const methodSteps = [
  {
    number: "01",
    title: "Valoramos",
    text: "Conocemos tu situación, tus objetivos, tu experiencia y las condiciones reales en las que vas a entrenar.",
  },
  {
    number: "02",
    title: "Definimos prioridades",
    text: "Determinamos qué capacidades debemos trabajar primero y qué factores pueden limitar tu progreso.",
  },
  {
    number: "03",
    title: "Diseñamos",
    text: "Creamos un programa adaptado a tu nivel, disponibilidad, material y entorno.",
  },
  {
    number: "04",
    title: "Te guiamos",
    text: "Te explicamos cómo aplicar el programa, interpretar las indicaciones y cuidar los aspectos importantes.",
  },
  {
    number: "05",
    title: "Revisamos",
    text: "Analizamos tu evolución, tu adherencia, tus sensaciones y las dificultades que aparecen durante el proceso.",
  },
  {
    number: "06",
    title: "Ajustamos",
    text: "Modificamos ejercicios, cargas, volumen, intensidad o estrategia cuando tu evolución lo requiere.",
  },
];

const goals = [
  {
    title: "Pérdida de grasa",
    text: "Diseñamos una estrategia orientada a mejorar tu composición corporal, preservar o aumentar masa muscular y construir un proceso sostenible.",
  },
  {
    title: "Fuerza y masa muscular",
    text: "Creamos una progresión adaptada a tu nivel, al material disponible y a tu capacidad de recuperación.",
  },
  {
    title: "Movilidad",
    text: "Seleccionamos ejercicios y progresiones orientados a mejorar el control, la amplitud de movimiento y tus patrones básicos.",
  },
  {
    title: "Recuperación de la condición física",
    text: "Te ayudamos a volver a entrenar después de un periodo de inactividad, una lesión o una etapa de pérdida de capacidad física.",
  },
  {
    title: "Salud y envejecimiento activo",
    text: "Utilizamos la fuerza y el movimiento como herramientas para conservar autonomía, funcionalidad y calidad de vida.",
  },
  {
    title: "Rendimiento",
    text: "Analizamos las demandas de tu actividad y desarrollamos las capacidades que pueden ayudarte a rendir mejor.",
  },
  {
    title: "Entrenamiento adaptado",
    text: "Cuando existen molestias, lesiones previas, fibromialgia, lipedema u otras circunstancias relevantes, adaptamos el programa y respetamos las indicaciones sanitarias.",
  },
];

const processSteps = [
  {
    title: "Primer contacto",
    text: "Nos cuentas qué quieres conseguir, cuál es tu situación actual y qué dificultades has encontrado hasta ahora.",
  },
  {
    title: "Valoración online",
    text: "Realizamos la entrevista inicial y recopilamos la información necesaria mediante videollamada, cuestionario, medidas y referencias sobre tu entorno.",
  },
  {
    title: "Propuesta de trabajo",
    text: "Te explicamos qué intervención consideramos más adecuada, qué prioridades debemos abordar y cómo podría organizarse el proceso.",
  },
  {
    title: "Diseño del programa",
    text: "Preparamos una estrategia adaptada a tus objetivos, disponibilidad, experiencia, material y condición física actual.",
  },
  {
    title: "Entrega y explicación",
    text: "Recibes el programa con las indicaciones necesarias para comprender su estructura, aplicar los ejercicios y registrar la información relevante.",
  },
  {
    title: "Seguimiento",
    text: "Revisamos tu adherencia, tus sensaciones, tus dudas y la respuesta de tu cuerpo durante el proceso.",
  },
  {
    title: "Ajustes",
    text: "Modificamos ejercicios, cargas, volumen, intensidad o estrategia cuando tu evolución lo requiere.",
  },
];

const programs = [
  {
    label: "Punto de partida",
    title: "Valoración online",
    text: "Una evaluación inicial a distancia para conocer tu punto de partida, analizar tus necesidades y establecer las primeras prioridades.",
  },
  {
    label: "4 semanas",
    title: "Plan GHC",
    text: "Una planificación personalizada para comenzar con una estructura clara, objetivos definidos y revisión del proceso.",
  },
  {
    label: "12 semanas",
    title: "Programa GHC",
    text: "Un proceso más completo para desarrollar cambios, consolidar hábitos y realizar ajustes durante una etapa de evolución más amplia.",
  },
];

const faqs = [
  {
    q: "¿Qué incluye el entrenamiento personal online?",
    a: "Incluye una valoración inicial, el diseño de un programa adaptado a tu situación, la explicación necesaria para aplicarlo, seguimiento del proceso y ajustes según tu evolución.",
  },
  {
    q: "¿Necesito material para entrenar online?",
    a: "Depende de tu objetivo y de tu punto de partida. Podemos diseñar el programa con el material disponible y recomendar opciones básicas cuando sean necesarias.",
  },
  {
    q: "¿Puedo entrenar desde casa?",
    a: "Sí. El programa puede adaptarse a tu domicilio, gimnasio, hotel, espacio exterior u otro entorno adecuado.",
  },
  {
    q: "¿Cómo se realiza la valoración online?",
    a: "Puede incluir videollamada, cuestionario inicial, medidas básicas, fotografías guiadas y referencias sobre tu historial, movilidad, fuerza, molestias, disponibilidad y entorno de entrenamiento.",
  },
  {
    q: "¿Cómo sabéis si estoy haciendo bien los ejercicios?",
    a: "Según el seguimiento acordado, podemos revisar dudas, sensaciones, registros y vídeos de ejecución. La revisión a distancia no sustituye una valoración clínica ni una supervisión presencial cuando sean necesarias.",
  },
  {
    q: "¿Cuántos días por semana necesito entrenar?",
    a: "Depende de tu objetivo, tu nivel, tu disponibilidad y tu capacidad de recuperación. La frecuencia debe permitirte progresar y ser realista para mantenerla.",
  },
  {
    q: "¿Puedo empezar si llevo mucho tiempo sin entrenar?",
    a: "Sí. El programa se diseña desde tu nivel actual y progresa según tu respuesta.",
  },
  {
    q: "¿Puedo entrenar online si tengo dolor, una lesión o una patología?",
    a: "Depende de cada caso. Necesitamos conocer la situación, respetar las indicaciones sanitarias y determinar si el formato online es adecuado.",
  },
  {
    q: "¿Cuándo empezaré a notar cambios?",
    a: "No existe una fecha igual para todo el mundo. La evolución depende del punto de partida, la regularidad, el objetivo, el descanso, los hábitos y otros factores individuales.",
  },
  {
    q: "¿El programa incluye nutrición?",
    a: "No todos los programas incluyen intervención nutricional. Cuando sea necesario, te explicaremos qué parte podemos abordar y cuándo corresponde la participación de un profesional habilitado.",
  },
  {
    q: "¿Puedo contratar el servicio desde fuera de España?",
    a: "Sí. El servicio online está disponible para personas de España y otros países, siempre que podamos organizar adecuadamente la comunicación, el seguimiento y las condiciones del servicio.",
  },
  {
    q: "¿Qué diferencia al Método GHC de una aplicación de entrenamiento?",
    a: "Una aplicación suele ofrecer programas estandarizados. El Método GHC comienza con una valoración, establece prioridades, diseña una estrategia y revisa tu evolución para adaptar el programa.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Entrenador personal online | Método GHC",
      description:
        "Entrenamiento personal online con valoración inicial, programa personalizado, seguimiento y ajustes.",
      inLanguage: "es-ES",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}/#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Entrenamiento personal online",
      serviceType: "Entrenamiento personal online",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "España",
        },
        {
          "@type": "Place",
          name: "América Latina",
        },
      ],
      description:
        "Valoración a distancia, diseño de programa personalizado, seguimiento y ajustes mediante el Método GHC.",
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Entrenador personal online",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={styles.buttonIcon}>
      <path
        fill="currentColor"
        d="M16.02 3.2C8.96 3.2 3.22 8.86 3.22 15.81c0 2.23.6 4.4 1.74 6.31L3.1 28.8l6.93-1.8a12.97 12.97 0 0 0 5.99 1.5c7.06 0 12.8-5.65 12.8-12.6S23.08 3.2 16.02 3.2Zm0 23.15c-1.9 0-3.76-.5-5.39-1.45l-.39-.23-4.12 1.07 1.1-3.9-.26-.4a10.31 10.31 0 0 1-1.6-5.53c0-5.77 4.78-10.46 10.66-10.46 5.87 0 10.65 4.69 10.65 10.46 0 5.76-4.78 10.44-10.65 10.44Zm5.84-7.82c-.32-.16-1.89-.92-2.18-1.02-.3-.1-.51-.16-.72.16-.21.31-.82 1.02-1.01 1.23-.18.2-.37.23-.69.08-.32-.16-1.34-.49-2.56-1.55-.95-.83-1.59-1.85-1.78-2.16-.18-.32-.02-.49.14-.64.14-.14.32-.36.48-.54.16-.18.21-.31.32-.52.1-.2.05-.39-.03-.54-.08-.16-.72-1.7-.99-2.33-.26-.62-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.59s1.13 3.01 1.29 3.22c.16.2 2.23 3.35 5.4 4.7.75.32 1.34.51 1.8.65.76.24 1.44.21 1.98.13.6-.09 1.89-.76 2.16-1.49.27-.73.27-1.35.19-1.49-.08-.13-.29-.21-.61-.36Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.buttonIcon}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaButtons() {
  return (
    <div className={styles.ctaRow}>
      <a
        href={valuationUrl}
        className={styles.primaryButton}
        target="_blank"
        rel="noreferrer"
      >
        Solicitar valoración online
        <ArrowIcon />
      </a>
      <a
        href={whatsappUrl}
        className={styles.secondaryButton}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon />
        Hablar con GHC Training
      </a>
    </div>
  );
}

export default function EntrenadorPersonalOnlinePage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className={styles.header}>
        <Link href="/" aria-label="Volver a GHC Training">
          <GHCTrainingLogo size="md" />
        </Link>

        <nav className={styles.nav} aria-label="Navegación de la página">
          <a href="#valoracion">Valoración</a>
          <a href="#metodo">Método GHC</a>
          <a href="#programas">Programas</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a
          href={whatsappUrl}
          className={styles.headerButton}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumb}>
              <Link href="/">GHC Training</Link>
              <span aria-hidden="true">/</span>
              <span>Entrenamiento online</span>
            </div>

            <p className={styles.kicker}>Entrenamiento personal online</p>

            <h1>
              Entrenador personal online con un plan adaptado a tu situación
              real
            </h1>

            <p className={styles.heroText}>
              En GHC Training valoramos tu punto de partida a distancia,
              diseñamos un programa personalizado y te acompañamos con un método
              estructurado para mejorar tu salud, fuerza, composición corporal
              y rendimiento, estés donde estés.
            </p>

            <CtaButtons />

            <div className={styles.trustLine} aria-label="Puntos clave">
              <span>Valoración a distancia</span>
              <span>Programa personalizado</span>
              <span>Seguimiento y ajustes</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src="/alby-ghc-training.png"
                alt="Alby Aguiar, fundador y director de GHC Training"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>

            <div className={styles.heroBadge}>
              <span>GHC Training</span>
              <strong>Health Through Strength</strong>
              <small>Online · España y otros países</small>
            </div>
          </div>
        </section>

        <section className={styles.problemSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>El punto de partida</p>
            <h2>
              No necesitas entrenar solo. Necesitas una estrategia que se adapte
              a tu vida.
            </h2>
          </div>

          <div className={styles.problemGrid}>
            <div className={styles.problemCopy}>
              <p>
                Muchas personas empiezan a entrenar online descargando rutinas,
                siguiendo vídeos o utilizando aplicaciones que no conocen su
                historial, sus limitaciones ni su forma real de entrenar.
              </p>
              <p className={styles.emphasis}>
                El problema no suele ser la falta de información.
              </p>
              <p>
                El problema es tener demasiadas opciones y no saber cuál es
                adecuada, cómo progresar o qué cambiar cuando algo no funciona.
              </p>
              <p>
                Sin valoración, seguimiento ni ajustes, una rutina puede
                quedarse corta, ser demasiado exigente o dejar de tener sentido
                después de unas semanas.
              </p>
            </div>

            <aside className={styles.statementCard}>
              <span>En GHC Training</span>
              <strong>No te enviamos una tabla y desaparecemos.</strong>
              <p>
                Entendemos tu situación, diseñamos una estrategia y revisamos
                cómo responde tu cuerpo.
              </p>
            </aside>
          </div>
        </section>

        <section id="valoracion" className={styles.valuationSection}>
          <div className={styles.valuationPanel}>
            <div>
              <p className={styles.kicker}>Valoración online</p>
              <h2>Antes de diseñar tu programa, necesitamos conocerte</h2>
              <p>
                La valoración online nos permite comprender tu situación, tus
                objetivos y tu punto de partida antes de preparar cualquier
                planificación.
              </p>
              <a
                href={valuationUrl}
                className={styles.inlineLink}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar mi valoración online
                <ArrowIcon />
              </a>
            </div>

            <ul className={styles.checkList}>
              {[
                "Objetivo principal y experiencia previa",
                "Nivel actual de actividad y hábitos",
                "Movilidad y fuerza",
                "Molestias, limitaciones y antecedentes",
                "Patologías declaradas relevantes",
                "Disponibilidad, espacio y material",
                "Capacidad real para mantener el proceso",
                "Videollamada, medidas y fotografías guiadas",
              ].map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.personalizedSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Personalización real</p>
            <h2>Entrenamiento online adaptado a tu situación real</h2>
            <p>
              Un programa online personalizado no consiste en enviarte una
              rutina estándar con tu nombre. Significa tomar decisiones según
              tu punto de partida, tus objetivos y las condiciones reales en
              las que vas a entrenar.
            </p>
          </div>

          <div className={styles.factorGrid}>
            {[
              "Condición física actual",
              "Objetivos",
              "Historial",
              "Preferencias",
              "Molestias o limitaciones",
              "Tiempo disponible",
              "Material y espacio",
              "Capacidad de recuperación",
              "Evolución durante el proceso",
            ].map((factor) => (
              <div key={factor} className={styles.factorCard}>
                <span aria-hidden="true">+</span>
                <strong>{factor}</strong>
              </div>
            ))}
          </div>

          <div className={styles.centerStatement}>
            <p>
              El objetivo no es darte más ejercicios.
              <strong>
                {" "}
                El objetivo es que sepas qué hacer, por qué lo haces y cómo debe
                evolucionar tu entrenamiento.
              </strong>
            </p>
          </div>
        </section>

        <section id="metodo" className={styles.methodSection}>
          <div className={styles.methodHeader}>
            <div>
              <p className={styles.kicker}>Método GHC a distancia</p>
              <h2>La distancia cambia la forma de acompañarte. No el criterio.</h2>
            </div>
            <p>
              El servicio online mantiene los mismos principios de valoración,
              personalización, seguimiento y ajuste que aplicamos en el trabajo
              presencial.
            </p>
          </div>

          <div className={styles.methodGrid}>
            {methodSteps.map((step) => (
              <article key={step.number} className={styles.methodCard}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.goalsSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Objetivos y necesidades</p>
            <h2>¿Qué objetivos podemos trabajar contigo online?</h2>
            <p>
              El formato online permite desarrollar un programa personalizado
              para diferentes objetivos, siempre que el caso sea adecuado para
              trabajar a distancia.
            </p>
          </div>

          <div className={styles.goalsGrid}>
            {goals.map((goal, index) => (
              <article key={goal.title} className={styles.goalCard}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{goal.title}</h3>
                <p>{goal.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.medicalNote}>
            <strong>No todos los casos pueden resolverse únicamente a distancia.</strong>
            <span>
              Cuando consideremos necesaria una valoración presencial o la
              intervención de un profesional sanitario, te lo indicaremos con
              claridad. El entrenamiento online no sustituye el diagnóstico ni
              el tratamiento médico.
            </span>
          </div>
        </section>

        <section className={styles.onlineSection}>
          <div className={styles.onlineIntro}>
            <p className={styles.kicker}>Acompañamiento online</p>
            <h2>Entrena desde tu propio entorno con una hoja de ruta clara</h2>
            <p>
              El programa puede adaptarse a tu domicilio, gimnasio, hotel,
              espacio exterior u otro entorno adecuado, teniendo en cuenta el
              material disponible y tu realidad cotidiana.
            </p>
          </div>

          <div className={styles.environmentGrid}>
            {[
              "Casa",
              "Gimnasio",
              "Hotel",
              "Espacio exterior",
              "Viajes",
              "Otro entorno adecuado",
            ].map((place) => (
              <div key={place} className={styles.environmentCard}>
                <span aria-hidden="true">⌁</span>
                <strong>{place}</strong>
              </div>
            ))}
          </div>

          <p className={styles.locationNote}>
            El entorno se define durante la valoración para que el programa sea
            aplicable y realista.
          </p>
        </section>

        <section className={styles.processSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Cómo funciona</p>
            <h2>Un proceso claro desde el primer contacto</h2>
            <p>
              No tienes que interpretar una rutina por tu cuenta. Te
              acompañamos para que entiendas el proceso y sepas cómo avanzar.
            </p>
          </div>

          <ol className={styles.processList}>
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="programas" className={styles.programsSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Programas online</p>
            <h2>El nivel de intervención que necesita tu caso</h2>
            <p>
              Disponemos de diferentes opciones según tu objetivo, tu situación
              y el acompañamiento que necesites.
            </p>
          </div>

          <div className={styles.programGrid}>
            {programs.map((program) => (
              <article key={program.title} className={styles.programCard}>
                <span>{program.label}</span>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.programAction}>
            <Link href="/#servicios" className={styles.darkButton}>
              Consultar programas online
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={styles.trustCopy}>
            <p className={styles.kicker}>Confianza y experiencia</p>
            <h2>¿Por qué confiar en GHC Training?</h2>
            <p>
              GHC Training es una empresa especializada en salud y rendimiento,
              liderada por Alby Aguiar.
            </p>

            <ul>
              {[
                "Más de treinta años de experiencia en entrenamiento",
                "Valoración previa",
                "Planificación individualizada",
                "Seguimiento y revisión",
                "Adaptación a diferentes niveles y circunstancias",
                "Experiencia en salud, composición corporal y rendimiento",
                "Una metodología propia",
                "Una estructura profesional preparada para cada caso",
              ].map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className={styles.leaderCard}>
            <div className={styles.leaderImage}>
              <Image
                src="/alby-ghc-training.png"
                alt="Alby Aguiar, CEO y director de GHC Training"
                fill
                sizes="(max-width: 900px) 100vw, 36vw"
              />
            </div>
            <div>
              <span>Fundador, CEO y director</span>
              <h3>Alby Aguiar</h3>
              <p>
                En el servicio online, la experiencia se utiliza para analizar
                tu caso, tomar mejores decisiones y adaptar el proceso cuando
                tu evolución lo requiere.
              </p>
            </div>
          </aside>
        </section>

        <section className={styles.modalitySection}>
          <div>
            <p className={styles.kicker}>Dos modalidades, un mismo criterio</p>
            <h2>Entrenamiento online o presencial</h2>
            <p>
              Si buscas flexibilidad, entrenas desde otra ciudad o prefieres
              desarrollar el proceso desde tu propio entorno, la modalidad
              online permite organizar el trabajo a distancia.
            </p>
            <p>
              Si estás en Madrid y necesitas que observemos directamente cómo te
              mueves o prefieres acompañamiento en persona, también disponemos de
              entrenamiento presencial en el espacio acordado.
            </p>
          </div>

          <div className={styles.principlesCard}>
            <span>Ambas modalidades comparten</span>
            <div>
              {[
                "Valoración",
                "Personalización",
                "Planificación",
                "Seguimiento",
                "Revisión",
                "Ajustes",
              ].map((principle) => (
                <strong key={principle}>{principle}</strong>
              ))}
            </div>
            <Link
              href="/entrenador-personal-madrid"
              className={styles.inlineLink}
            >
              Conocer el entrenamiento personal en Madrid
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Preguntas frecuentes</p>
            <h2>Lo que necesitas saber antes de empezar</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p className={styles.kicker}>El primer paso</p>
            <h2>
              Tu entrenamiento online debería empezar entendiendo qué necesitas
            </h2>
            <p>
              No necesitas tener experiencia, disponer de un gimnasio completo
              ni saber diseñar tu propio programa. El primer paso es conocer tu
              situación y construir una estrategia aplicable a tu vida real.
            </p>
            <CtaButtons />
          </div>

          <div className={styles.finalBadge}>
            <span>Valoración a distancia</span>
            <span>Programa personalizado</span>
            <span>Seguimiento y ajustes</span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/" aria-label="GHC Training">
          <GHCTrainingLogo size="sm" variant="dark" />
        </Link>
        <p>© 2026 GHC Training · Health Through Strength</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          Contacto por WhatsApp
        </a>
      </footer>
    </div>
  );
}
