import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import styles from "./page.module.css";

const siteUrl = "https://ghctraining.com";
const pageUrl = `${siteUrl}/entrenador-personal-madrid`;

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34628798859";
const whatsappMessage = encodeURIComponent(
  "Hola Alby, quiero solicitar una valoración presencial de GHC Training en Madrid."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const valuationUrl =
  process.env.NEXT_PUBLIC_SUMUP_VALORACION_PRESENCIAL_URL || whatsappUrl;

export const metadata: Metadata = {
  title: {
    absolute: "Entrenador personal en Madrid | Método GHC",
  },
  description:
    "Entrenamiento personal en Madrid para mejorar salud, fuerza, composición corporal y rendimiento. Empieza con una valoración integral y un plan adaptado.",
  alternates: {
    canonical: "/entrenador-personal-madrid",
  },
  openGraph: {
    title: "Entrenador personal en Madrid | Método GHC",
    description:
      "Valoración presencial, programa personalizado y seguimiento profesional en Madrid con el Método GHC.",
    url: "/entrenador-personal-madrid",
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
    title: "Entrenador personal en Madrid | Método GHC",
    description:
      "Valoración presencial, programa personalizado y seguimiento profesional en Madrid.",
    images: ["/alby-ghc-training.png"],
  },
};

const methodSteps = [
  {
    number: "01",
    title: "Valoramos",
    text: "Conocemos tu situación, tus objetivos y tu punto de partida.",
  },
  {
    number: "02",
    title: "Definimos prioridades",
    text: "Determinamos qué capacidades debemos trabajar primero y qué factores pueden limitar tu progreso.",
  },
  {
    number: "03",
    title: "Diseñamos",
    text: "Creamos un programa adaptado a tus necesidades, disponibilidad y entorno.",
  },
  {
    number: "04",
    title: "Aplicamos",
    text: "Desarrollamos el entrenamiento contigo, cuidando la técnica, la progresión y la respuesta de tu cuerpo.",
  },
  {
    number: "05",
    title: "Revisamos",
    text: "Observamos tu evolución, tu adherencia y las dificultades que aparecen durante el proceso.",
  },
  {
    number: "06",
    title: "Ajustamos",
    text: "Modificamos ejercicios, cargas, volumen o estrategia cuando tu evolución lo requiere.",
  },
];

const goals = [
  {
    title: "Pérdida de grasa",
    text: "Diseñamos una estrategia orientada a mejorar tu composición corporal, preservar o aumentar tu masa muscular y construir un proceso que puedas mantener.",
  },
  {
    title: "Fuerza y masa muscular",
    text: "Creamos una progresión adaptada a tu nivel, cuidando la técnica, las cargas y la evolución del programa.",
  },
  {
    title: "Movilidad",
    text: "Trabajamos las capacidades necesarias para moverte con mayor control, seguridad y libertad.",
  },
  {
    title: "Recuperación de la condición física",
    text: "Te ayudamos a volver a entrenar después de un periodo de inactividad, una lesión o una etapa de pérdida de capacidad física.",
  },
  {
    title: "Salud y envejecimiento activo",
    text: "Utilizamos la fuerza y el movimiento para conservar autonomía, funcionalidad y calidad de vida.",
  },
  {
    title: "Rendimiento",
    text: "Analizamos las demandas de tu actividad y desarrollamos las capacidades que pueden ayudarte a rendir mejor.",
  },
  {
    title: "Entrenamiento adaptado",
    text: "Cuando existen molestias, lesiones previas, fibromialgia, lipedema u otras circunstancias relevantes, adaptamos el entrenamiento y respetamos las indicaciones sanitarias que correspondan.",
  },
];

const processSteps = [
  {
    title: "Primer contacto",
    text: "Nos cuentas qué quieres conseguir, cuál es tu situación actual y qué dificultades has encontrado hasta ahora.",
  },
  {
    title: "Valoración presencial",
    text: "Nos vemos presencialmente en Madrid para analizar tu punto de partida, observar cómo te mueves y conocer mejor tus necesidades.",
  },
  {
    title: "Propuesta de trabajo",
    text: "Te explicamos qué tipo de intervención consideramos más adecuada, qué prioridades debemos abordar y cómo podría organizarse el proceso.",
  },
  {
    title: "Diseño del programa",
    text: "Preparamos una estrategia adaptada a tus objetivos, disponibilidad, entorno y condición física actual.",
  },
  {
    title: "Aplicación y seguimiento",
    text: "Desarrollamos el trabajo contigo, revisamos tu evolución y realizamos los ajustes necesarios.",
  },
];

const programs = [
  {
    label: "Punto de partida",
    title: "Valoración presencial",
    text: "Una evaluación inicial en persona para conocer tu punto de partida, analizar tus necesidades y establecer las primeras prioridades.",
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
    q: "¿Cuánto cuesta un entrenador personal en Madrid?",
    a: "El coste depende del tipo de programa, la duración del proceso y el nivel de seguimiento que necesites. Antes de comenzar, te explicamos las condiciones de cada opción y cuál consideramos más adecuada para tu caso.",
  },
  {
    q: "¿Qué incluye la valoración presencial?",
    a: "Incluye una entrevista inicial y la revisión de los aspectos necesarios para comprender tu situación, como objetivos, historial, movilidad, fuerza, molestias, experiencia y disponibilidad. La valoración nos permite establecer prioridades y decidir cómo debería comenzar el proceso.",
  },
  {
    q: "¿Dónde se realizan los entrenamientos?",
    a: "Las sesiones presenciales se realizan en Madrid, en el espacio acordado previamente. Puede ser un domicilio, una urbanización, una empresa, un hotel, un gimnasio que permita el acceso u otro entorno adecuado.",
  },
  {
    q: "¿Cuántos días por semana necesito entrenar?",
    a: "Depende de tu objetivo, tu nivel, tu disponibilidad y tu capacidad de recuperación. La frecuencia debe ser suficiente para progresar, pero también realista para que puedas mantenerla.",
  },
  {
    q: "¿Puedo empezar si llevo mucho tiempo sin entrenar?",
    a: "Sí. El programa se diseña desde tu nivel actual, no desde el nivel que tenías hace años ni desde el que crees que deberías tener.",
  },
  {
    q: "¿Puedo entrenar si tengo dolor, una lesión o una patología?",
    a: "Depende de cada caso. Es necesario conocer la situación, respetar las indicaciones sanitarias existentes y determinar qué tipo de entrenamiento puede realizarse de forma adecuada. El entrenamiento no sustituye la valoración, el diagnóstico ni el tratamiento de profesionales sanitarios.",
  },
  {
    q: "¿Cuándo empezaré a notar cambios?",
    a: "No existe una fecha igual para todo el mundo. La evolución depende del punto de partida, la regularidad, el objetivo, el descanso, los hábitos y otros factores individuales.",
  },
  {
    q: "¿El programa incluye nutrición?",
    a: "El entrenamiento y la alimentación están relacionados, pero no todos los programas incluyen intervención nutricional. Cuando sea necesario, te explicaremos qué parte podemos abordar y cuándo corresponde la participación de un profesional habilitado.",
  },
  {
    q: "¿También ofrecéis entrenamiento online?",
    a: "Sí. La modalidad online está pensada para personas que no se encuentran en Madrid o que prefieren desarrollar el proceso a distancia con planificación y seguimiento.",
  },
  {
    q: "¿Qué diferencia al Método GHC de una rutina convencional?",
    a: "Una rutina convencional suele centrarse en una lista de ejercicios. El Método GHC comienza con una valoración, establece prioridades, diseña una estrategia y revisa la evolución para adaptar el programa.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Entrenador personal en Madrid | Método GHC",
      description:
        "Entrenamiento personal en Madrid con valoración presencial, programa personalizado y seguimiento profesional.",
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
      name: "Entrenamiento personal presencial en Madrid",
      serviceType: "Entrenamiento personal",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: "Madrid",
      },
      description:
        "Valoración presencial, diseño de programa personalizado, aplicación, seguimiento y ajustes mediante el Método GHC.",
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
          name: "Entrenador personal en Madrid",
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
        Solicitar valoración presencial
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

export default function EntrenadorPersonalMadridPage() {
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
              <span>Madrid presencial</span>
            </div>

            <p className={styles.kicker}>Entrenamiento personal en Madrid</p>

            <h1>
              Entrenador personal en Madrid con un plan diseñado desde tu
              valoración
            </h1>

            <p className={styles.heroText}>
              En GHC Training valoramos tu punto de partida en persona,
              diseñamos un programa adaptado a tu situación y te acompañamos
              con un método orientado a mejorar tu salud, fuerza, composición
              corporal y rendimiento.
            </p>

            <CtaButtons />

            <div className={styles.trustLine} aria-label="Puntos clave">
              <span>Valoración en persona</span>
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
              <small>Madrid · Presencial</small>
            </div>
          </div>
        </section>

        <section className={styles.problemSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>El punto de partida</p>
            <h2>
              No necesitas otra rutina. Necesitas una estrategia que tenga
              sentido para ti.
            </h2>
          </div>

          <div className={styles.problemGrid}>
            <div className={styles.problemCopy}>
              <p>
                Muchas personas empiezan a entrenar siguiendo ejercicios de
                internet, copiando programas diseñados para otros o intentando
                recuperar en pocas semanas lo que han perdido durante años.
              </p>
              <p className={styles.emphasis}>
                El problema no suele ser la falta de esfuerzo.
              </p>
              <p>
                El problema es no saber qué necesita realmente su cuerpo, por
                dónde empezar, qué ejercicios son adecuados o cómo progresar
                sin abandonar.
              </p>
              <p>
                Cuando no existe una estrategia clara, es fácil entrenar sin
                avanzar, perder la motivación o repetir una y otra vez el mismo
                ciclo.
              </p>
            </div>

            <aside className={styles.statementCard}>
              <span>En GHC Training</span>
              <strong>No empezamos eligiendo ejercicios.</strong>
              <p>Empezamos entendiendo a la persona.</p>
            </aside>
          </div>
        </section>

        <section id="valoracion" className={styles.valuationSection}>
          <div className={styles.valuationPanel}>
            <div>
              <p className={styles.kicker}>Valoración presencial</p>
              <h2>Antes de entrenar, valoramos tu punto de partida</h2>
              <p>
                La valoración presencial nos permite conocerte en persona,
                observar cómo te mueves y comprender qué necesitas antes de
                diseñar el programa.
              </p>
              <a
                href={valuationUrl}
                className={styles.inlineLink}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar mi valoración presencial
                <ArrowIcon />
              </a>
            </div>

            <ul className={styles.checkList}>
              {[
                "Objetivo principal y experiencia previa",
                "Nivel actual de actividad",
                "Movilidad, postura y fuerza",
                "Molestias, limitaciones y antecedentes",
                "Patologías declaradas relevantes",
                "Disponibilidad, espacio y material",
                "Capacidad real para mantener el proceso",
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
            <h2>Entrenamiento personal adaptado a tu situación real</h2>
            <p>
              Un programa personalizado no consiste únicamente en cambiar unos
              ejercicios por otros. Significa tomar decisiones en función de
              la persona que tenemos delante.
            </p>
          </div>

          <div className={styles.factorGrid}>
            {[
              "Condición física actual",
              "Objetivos",
              "Historial",
              "Preferencias",
              "Limitaciones",
              "Tiempo disponible",
              "Entorno de entrenamiento",
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
              No buscamos que entrenes más de lo necesario.
              <strong> Buscamos que cada parte del proceso tenga una función.</strong>
            </p>
          </div>
        </section>

        <section id="metodo" className={styles.methodSection}>
          <div className={styles.methodHeader}>
            <div>
              <p className={styles.kicker}>Método GHC</p>
              <h2>El programa no permanece inmóvil. Evoluciona contigo.</h2>
            </div>
            <p>
              Nuestro trabajo se organiza mediante un proceso estructurado que
              nos permite diseñar, aplicar y ajustar cada programa según tu
              evolución.
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
            <h2>¿Qué objetivos podemos trabajar contigo?</h2>
            <p>
              Cada persona llega con una situación diferente. Por eso, el
              programa no se construye alrededor de una plantilla cerrada,
              sino de las necesidades reales de cada caso.
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

          <p className={styles.medicalNote}>
            El entrenamiento no sustituye el diagnóstico ni el tratamiento
            médico.
          </p>
        </section>

        <section className={styles.madridSection}>
          <div className={styles.madridIntro}>
            <p className={styles.kicker}>Madrid · Presencial</p>
            <h2>Nos vemos en persona y trabajamos en el espacio acordado</h2>
            <p>
              La modalidad presencial nos permite observar cómo te mueves,
              acompañar directamente la ejecución y adaptar cada sesión a tu
              respuesta real.
            </p>
          </div>

          <div className={styles.locationGrid}>
            {[
              "Domicilio",
              "Urbanización",
              "Empresa",
              "Hotel",
              "Gimnasio con acceso permitido",
              "Otro espacio adecuado acordado",
            ].map((place) => (
              <div key={place} className={styles.locationCard}>
                <span aria-hidden="true">⌁</span>
                <strong>{place}</strong>
              </div>
            ))}
          </div>

          <p className={styles.locationNote}>
            La ubicación y las condiciones se concretan durante el contacto
            inicial.
          </p>
        </section>

        <section className={styles.processSection}>
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Cómo empezamos</p>
            <h2>Un proceso claro desde el primer contacto</h2>
            <p>
              No tienes que elegir un programa sin saber si encaja contigo. El
              primer paso es comprender tu caso.
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
            <p className={styles.kicker}>Programas GHC</p>
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
              Consultar programas y precios
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
                Su trayectoria incluye entrenamiento personal, gestión de
                equipos, dirección de centros deportivos y desarrollo de
                programas de salud y rendimiento.
              </p>
            </div>
          </aside>
        </section>

        <section className={styles.onlineSection}>
          <div>
            <p className={styles.kicker}>Dos modalidades, un mismo criterio</p>
            <h2>Entrenamiento presencial u online</h2>
            <p>
              Si estás en Madrid y buscas acompañamiento en persona, la
              modalidad presencial nos permite valorar tu caso directamente y
              desarrollar el entrenamiento contigo en el espacio acordado.
            </p>
            <p>
              Si la distancia, los horarios o tu situación hacen más
              conveniente otro formato, también disponemos de entrenamiento
              personal online.
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
            <Link href="/#servicios" className={styles.inlineLink}>
              Conocer la modalidad online
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
            <h2>Tu entrenamiento debería empezar entendiendo qué necesitas</h2>
            <p>
              No tienes que llegar en forma. No tienes que saber entrenar. El
              primer paso es conocer tu situación, valorar tu punto de partida
              y construir una estrategia que tenga sentido para ti.
            </p>
            <CtaButtons />
          </div>

          <div className={styles.finalBadge}>
            <span>Valoración en persona</span>
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
