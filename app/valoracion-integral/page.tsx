import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import styles from "./page.module.css";

const siteUrl = "https://www.ghctraining.com";
const pageUrl = `${siteUrl}/valoracion-integral`;

const description =
  "Conoce tu punto de partida con una valoración integral online o presencial en Madrid. Analizamos objetivos, historial, movilidad, fuerza y entorno.";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34628798859";

const generalWhatsappMessage = encodeURIComponent(
  "Hola Alby, quiero solicitar una Valoración GHC y saber qué modalidad encaja mejor conmigo."
);

const onlineWhatsappMessage = encodeURIComponent(
  "Hola Alby, quiero solicitar una valoración online de GHC Training."
);

const inPersonWhatsappMessage = encodeURIComponent(
  "Hola Alby, quiero solicitar una valoración presencial de GHC Training en Madrid."
);

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${generalWhatsappMessage}`;

const onlineWhatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${onlineWhatsappMessage}`;

const inPersonWhatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${inPersonWhatsappMessage}`;

const onlineValuationUrl =
  process.env.NEXT_PUBLIC_SUMUP_VALORACION_ONLINE_URL ||
  onlineWhatsappUrl;

const inPersonValuationUrl =
  process.env.NEXT_PUBLIC_SUMUP_VALORACION_PRESENCIAL_URL ||
  inPersonWhatsappUrl;

export const metadata: Metadata = {
  title: {
    absolute: "Valoración integral para entrenamiento personalizado | GHC",
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Valoración integral para entrenamiento personalizado | GHC",
    description:
      "Analizamos tu punto de partida antes de recomendar un plan: objetivos, historial, movilidad, fuerza, hábitos, disponibilidad y entorno.",
    url: pageUrl,
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
    title: "Valoración integral para entrenamiento personalizado | GHC",
    description,
    images: ["/alby-ghc-training.png"],
  },
};

const assessmentFactors = [
  "Objetivo principal y expectativas",
  "Experiencia previa entrenando",
  "Nivel actual de actividad",
  "Hábitos relacionados con el proceso",
  "Disponibilidad semanal real",
  "Entorno habitual de entrenamiento",
  "Espacio y material disponibles",
  "Movilidad general",
  "Postura y movimientos básicos",
  "Fuerza básica",
  "Peso, medidas y perímetros cuando aporten información útil",
  "Molestias, lesiones o limitaciones declaradas",
  "Patologías y antecedentes relevantes declarados",
  "Capacidad actual para sostener el proceso",
  "Dificultades encontradas en programas anteriores",
  "Preferencias y circunstancias personales",
];

const valuationOutcomes = [
  "Tu punto de partida",
  "Las prioridades que conviene abordar",
  "El tipo de trabajo que puede resultar más adecuado",
  "La organización general compatible con tu disponibilidad",
  "El entorno y el material que pueden utilizarse",
  "Las precauciones o límites que deban respetarse",
  "El siguiente paso que consideramos más razonable",
];

const audience = [
  "No sabes qué tipo de programa necesitas",
  "Llevas mucho tiempo sin entrenar",
  "Has probado varias rutinas sin continuidad",
  "Tienes horarios o circunstancias difíciles de encajar",
  "Quieres entrenar en casa, gimnasio, parque u otros entornos",
  "Necesitas adaptar el programa al material disponible",
  "Buscas mejorar fuerza, movilidad, composición corporal o condición física",
  "Tienes molestias, limitaciones o antecedentes declarados que requieren prudencia",
  "Quieres comprender mejor qué deberías priorizar",
  "Prefieres recibir orientación antes de contratar un programa completo",
  "Necesitas decidir entre modalidad online o presencial en Madrid",
  "Quieres saber si GHC Training puede ayudarte antes de asumir un compromiso mayor",
];

const faqs = [
  {
    q: "¿Qué es la Valoración GHC?",
    a: [
      "Es una sesión profesional inicial para conocer tu punto de partida, analizar los factores que pueden influir en el entrenamiento y orientarte sobre la forma más adecuada de comenzar.",
    ],
  },
  {
    q: "¿Cuánto dura?",
    a: [
      "La duración aproximada es de 60 minutos.",
      "Puede variar ligeramente según la modalidad y la información que sea necesario revisar.",
    ],
  },
  {
    q: "¿Cuánto cuesta?",
    a: [
      "La valoración online cuesta 75 €.",
      "La valoración presencial en Madrid cuesta 120 €.",
    ],
  },
  {
    q: "¿Qué incluye la valoración?",
    a: [
      "Incluye una entrevista inicial y el análisis de los aspectos necesarios para comprender tu situación.",
      "Según el caso, puede incluir objetivos, experiencia, actividad actual, hábitos, movilidad, fuerza básica, medidas, molestias, antecedentes declarados, disponibilidad, espacio y material.",
    ],
  },
  {
    q: "¿Cómo se realiza la valoración online?",
    a: [
      "Se realiza a distancia y puede incluir videollamada, cuestionario, medidas básicas, fotografías guiadas y referencias sobre tu historial, movilidad, fuerza, disponibilidad y entorno de entrenamiento.",
    ],
  },
  {
    q: "¿Dónde se realiza la valoración presencial?",
    a: [
      "Se realiza en Madrid, en un lugar acordado previamente.",
      "Puede ser un domicilio, una urbanización, una empresa, un hotel, un gimnasio que permita el acceso u otro entorno adecuado.",
      "GHC Training no dispone actualmente de un centro abierto al público.",
    ],
  },
  {
    q: "¿La valoración incluye un programa completo?",
    a: [
      "No.",
      "La valoración incluye el análisis inicial, la orientación sobre prioridades y una hoja de ruta general.",
      "El diseño completo de un programa personalizado forma parte de un servicio superior.",
    ],
  },
  {
    q: "¿Tengo que contratar otro servicio después?",
    a: [
      "No.",
      "Puedes realizar únicamente la valoración y decidir después qué quieres hacer.",
      "La continuidad es opcional.",
    ],
  },
  {
    q: "¿Se descuenta el precio de la valoración si continúo?",
    a: [
      "Sí, siempre que contrates el mismo día de la valoración un Plan GHC o un Programa GHC de mayor alcance.",
      "En ese caso, descontamos íntegramente los 75 € de la valoración online o los 120 € de la valoración presencial del precio final del servicio superior.",
    ],
  },
  {
    q: "¿La valoración sirve como diagnóstico médico?",
    a: [
      "No.",
      "GHC Training no realiza diagnósticos médicos y la valoración no sustituye la consulta, el tratamiento ni el seguimiento de un profesional sanitario.",
    ],
  },
  {
    q: "¿Puedo hacerla si tengo una lesión, dolor o una patología?",
    a: [
      "Depende de cada caso.",
      "Necesitamos conocer la situación, respetar las indicaciones sanitarias existentes y determinar si el entrenamiento puede abordarse dentro de nuestros límites profesionales.",
      "En algunos casos será necesario consultar previamente con un profesional sanitario.",
    ],
  },
  {
    q: "¿Qué ocurre después de la valoración?",
    a: [
      "Te explicamos las prioridades identificadas y el siguiente paso que consideramos más adecuado.",
      "Puede ser comenzar un plan, contratar un programa más amplio, elegir una modalidad concreta, realizar primero otra valoración profesional o quedarte únicamente con la orientación recibida.",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Valoración integral para entrenamiento personalizado | GHC",
      description,
      inLanguage: "es-ES",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}/#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Valoración GHC",
      serviceType: "Valoración integral para entrenamiento personalizado",
      description:
        "Sesión profesional inicial para analizar objetivos, historial, movilidad, fuerza, disponibilidad y entorno antes de recomendar un programa.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      url: pageUrl,
      offers: [
        {
          "@type": "Offer",
          name: "Valoración GHC online",
          price: "75",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
        {
          "@type": "Offer",
          name: "Valoración GHC presencial en Madrid",
          price: "120",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
      ],
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
          name: "Valoración integral",
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
          text: faq.a.join(" "),
        },
      })),
    },
  ],
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.buttonIcon}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ValoracionIntegralPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <header className={styles.header}>
        <Link href="/" aria-label="Volver a GHC Training">
          <GHCTrainingLogo size="md" />
        </Link>

        <nav className={styles.nav} aria-label="Navegación de la página">
          <a href="#que-analizamos">Qué analizamos</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#modalidades" className={styles.headerButton}>
          Solicitar valoración
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">GHC Training</Link>
              <span aria-hidden="true">/</span>
              <span>Valoración integral</span>
            </div>

            <p className={styles.kicker}>
              VALORACIÓN GHC · ONLINE O PRESENCIAL
            </p>

            <h1>
              Valoración integral para un entrenamiento realmente personalizado
            </h1>

            <div className={styles.heroLead}>
              <p>
                Antes de recomendarte un plan necesitamos comprender tu punto
                de partida, tus objetivos y las condiciones reales en las que
                vas a entrenar.
              </p>

              <p>
                La Valoración GHC es una sesión profesional de unos 60 minutos
                en la que analizamos la información necesaria para identificar
                prioridades y orientarte sobre la forma más adecuada de
                comenzar.
              </p>

              <p>
                No aplicamos una prueba idéntica a todo el mundo ni entregamos
                una rutina genérica. Estudiamos tu caso para ayudarte a
                entender qué necesitas y qué tipo de servicio puede encajar
                mejor contigo.
              </p>
            </div>

            <div className={styles.ctaRow}>
              <a href="#modalidades" className={styles.primaryButton}>
                Solicitar mi valoración
                <ArrowIcon />
              </a>

              <a
                href="#que-analizamos"
                className={styles.secondaryButton}
              >
                Ver qué analizamos
                <ArrowIcon />
              </a>
            </div>

            <p className={styles.heroNote}>
              Online: 75 € · Presencial en Madrid: 120 € · Duración aproximada:
              60 minutos
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroImage}>
              <Image
                src="/alby-ghc-training.png"
                alt="Alby Aguiar, fundador y director de GHC Training"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>ANTES DE DISEÑAR</p>
            <h2>Un programa no debería empezar eligiendo ejercicios</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                Muchas personas comienzan a entrenar siguiendo una tabla, una
                aplicación o una recomendación general sin saber si esa
                propuesta responde realmente a su situación.
              </p>

              <p>
                Dos personas pueden compartir un mismo objetivo y necesitar
                estrategias completamente diferentes.
              </p>

              <p>
                La experiencia previa, el nivel de actividad, la movilidad, la
                fuerza, la disponibilidad, el entorno, los hábitos y los
                antecedentes declarados pueden cambiar por completo la forma
                adecuada de comenzar.
              </p>
            </div>

            <div>
              <p className={styles.emphasis}>
                Por eso, en GHC Training no partimos de una rutina. Partimos de
                la persona.
              </p>

              <p>
                La valoración nos permite interpretar la información
                disponible, establecer prioridades y decidir qué tipo de
                trabajo puede tener más sentido en cada caso.
              </p>

              <p>
                Es el primer paso del{" "}
                <Link href="/metodo-ghc">Método GHC</Link> y la base sobre la
                que diseñamos cualquier planificación posterior.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.assessmentSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>ANÁLISIS Y ORIENTACIÓN</p>
            <h2>
              Una sesión para comprender tu situación antes de tomar decisiones
            </h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                La Valoración GHC es una sesión inicial destinada a conocer tu
                punto de partida y orientarte antes de contratar un programa de
                mayor alcance.
              </p>

              <p>
                Recopilamos y analizamos la información relevante para
                comprender qué quieres conseguir, desde qué situación comienzas
                y qué condiciones pueden influir en el proceso.
              </p>
            </div>

            <div>
              <p>
                También estudiamos qué tiempo, espacio y material tienes
                disponibles, qué dificultades has encontrado anteriormente y
                qué prioridades conviene abordar primero.
              </p>

              <p className={styles.emphasis}>
                El objetivo no es acumular datos. Es convertir esa información
                en una dirección inicial clara.
              </p>
            </div>
          </div>
        </section>

        <section
          id="que-analizamos"
          className={styles.benefitsSection}
        >
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>UNA VISIÓN COMPLETA</p>
            <h2>Los factores que pueden condicionar tu entrenamiento</h2>
            <p>
              La valoración se adapta a cada persona. Según el caso y la
              modalidad, puede incluir los siguientes aspectos:
            </p>
          </div>

          <ul className={styles.benefitGrid}>
            {assessmentFactors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>

          <div className={styles.prose}>
            <p>
              No todas las personas necesitan realizar exactamente las mismas
              comprobaciones.
            </p>

            <p>
              Seleccionamos la información que resulte útil para comprender el
              caso y tomar decisiones dentro de los límites profesionales
              correspondientes.
            </p>
          </div>
        </section>

        <section className={styles.stagesSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>DESPUÉS DE LA VALORACIÓN</p>
            <h2>Una orientación inicial y una hoja de ruta con sentido</h2>
            <p>
              Al finalizar te explicamos los aspectos más relevantes que hemos
              identificado y cómo pueden influir en tu proceso.
            </p>
          </div>

          <div className={styles.stageGrid}>
            {valuationOutcomes.map((outcome, index) => (
              <article key={outcome} className={styles.stageCard}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{outcome}</h3>
              </article>
            ))}
          </div>

          <div className={styles.medicalNote}>
            <strong>La valoración incluye una hoja de ruta orientativa.</strong>
            <span>
              No incluye por sí sola el desarrollo completo de un programa
              personalizado de 4 o 12 semanas. Ese trabajo forma parte de los
              servicios superiores cuando la persona decide continuar.
            </span>
          </div>
        </section>

        <section
          id="modalidades"
          className={styles.applicationSection}
        >
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>ONLINE O PRESENCIAL</p>
            <h2>
              El mismo criterio, con una forma distinta de recopilar información
            </h2>
          </div>

          <div className={styles.applicationGrid}>
            <article>
              <span>ONLINE</span>
              <h3>Valoración a distancia</h3>
              <p className={styles.priceLine}>75 €</p>

              <div className={styles.modeMeta}>
                <span>Unos 60 minutos</span>
                <span>Desde cualquier lugar</span>
              </div>

              <p>
                Se realiza mediante videollamada y recopilación guiada de
                información.
              </p>

              <p>Según el caso, puede incluir:</p>

              <ul>
                <li>entrevista inicial;</li>
                <li>cuestionario;</li>
                <li>medidas básicas;</li>
                <li>fotografías guiadas;</li>
                <li>referencias sobre movilidad y fuerza;</li>
                <li>revisión del espacio y material disponibles;</li>
                <li>análisis de hábitos y antecedentes declarados.</li>
              </ul>

              <p>
                Cuando consideremos necesaria una valoración presencial o
                sanitaria, lo indicaremos con claridad.
              </p>

              <a
                href={onlineValuationUrl}
                className={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar valoración online
                <ArrowIcon />
              </a>
            </article>

            <article>
              <span>MADRID</span>
              <h3>Valoración en persona</h3>
              <p className={styles.priceLine}>120 €</p>

              <div className={styles.modeMeta}>
                <span>Unos 60 minutos</span>
                <span>Lugar previamente acordado</span>
              </div>

              <p>
                Permite conocerte directamente, observar movimientos concretos
                y comprender mejor las condiciones reales del programa.
              </p>

              <p>Según el caso, puede incluir:</p>

              <ul>
                <li>entrevista inicial;</li>
                <li>revisión de objetivos y antecedentes;</li>
                <li>observación de movilidad y movimientos básicos;</li>
                <li>valoración de fuerza básica;</li>
                <li>medidas y perímetros cuando proceda;</li>
                <li>análisis del entorno y del material;</li>
                <li>explicación de las primeras prioridades.</li>
              </ul>

              <p>
                Puede realizarse en domicilio, urbanización, empresa, hotel,
                gimnasio que permita el acceso u otro entorno adecuado en
                Madrid.
              </p>

              <a
                href={inPersonValuationUrl}
                className={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar valoración presencial
                <ArrowIcon />
              </a>
            </article>
          </div>
        </section>

        <section className={styles.criteriaSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>LÍMITES CLAROS</p>
            <h2>
              La valoración orienta el entrenamiento, pero no sustituye la
              atención sanitaria
            </h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                La Valoración GHC se desarrolla dentro del ámbito profesional
                del entrenamiento y la planificación física.
              </p>

              <p>
                No realiza diagnósticos médicos ni sustituye una consulta
                médica, fisioterapéutica, psicológica, nutricional sanitaria o
                de cualquier otro profesional habilitado cuando sea necesaria.
              </p>
            </div>

            <div>
              <p>
                Cuando existen patologías, síntomas relevantes, lesiones, dolor
                persistente o indicaciones sanitarias, necesitamos conocer esa
                información y respetar los límites y recomendaciones
                correspondientes.
              </p>

              <p className={styles.emphasis}>
                La prioridad no es iniciar un programa a cualquier precio. Es
                determinar si podemos ayudarte, bajo qué condiciones y cuál es
                la forma más prudente de comenzar.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.reviewSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>EL SIGUIENTE PASO</p>
            <h2>La valoración te ayuda a decidir, sin obligarte a continuar</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                Después de la sesión puedes quedarte únicamente con la
                orientación recibida.
              </p>

              <p>No existe obligación de contratar un servicio superior.</p>

              <p>
                Cuando consideramos que podemos ayudarte mediante un proceso de
                mayor alcance, te explicamos qué opción encaja mejor con tu
                situación.
              </p>
            </div>

            <div>
              <p>La propuesta puede incluir:</p>

              <ul>
                <li>un Plan GHC de 4 semanas;</li>
                <li>un Programa GHC de 12 semanas;</li>
                <li>modalidad online;</li>
                <li>
                  modalidad con valoración y revisiones presenciales en Madrid;
                </li>
                <li>
                  o acudir antes a otro profesional cuando resulte necesario.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.discountPanel}>
            <p className={styles.kicker}>EL IMPORTE NO SE PIERDE</p>
            <h3>
              Si continúas el mismo día, descontamos íntegramente la valoración
            </h3>

            <p>
              Si después de la valoración contratas ese mismo día un Plan GHC o
              un Programa GHC de mayor alcance, descontamos del precio final
              todo lo que ya hayas pagado.
            </p>

            <div>
              <strong>Online: 75 € descontables</strong>
              <strong>Presencial: 120 € descontables</strong>
            </div>

            <small>
              La contratación del servicio superior es opcional. El descuento
              está condicionado a formalizar la continuación el mismo día de la
              valoración.
            </small>
          </div>
        </section>

        <section className={styles.audienceSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>UNA DECISIÓN INFORMADA</p>
            <h2>Para personas que necesitan saber cómo empezar</h2>
            <p>La valoración puede tener especial sentido si:</p>
          </div>

          <ul className={styles.audienceList}>
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>No necesitas estar en forma ni tener experiencia previa.</strong>
            <span>
              La valoración existe precisamente para conocer desde dónde
              comienzas.
            </span>
          </div>
        </section>

        <section className={styles.criteriaSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>CRITERIO PROFESIONAL</p>
            <h2>La valoración no consiste solo en recopilar datos</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                El valor de una valoración no está únicamente en medir,
                preguntar u observar.
              </p>

              <p>
                Está en saber interpretar la información, establecer
                prioridades y reconocer cuándo una situación entra dentro de
                nuestro ámbito profesional y cuándo necesita otro tipo de
                atención.
              </p>
            </div>

            <div>
              <p>
                GHC Training está liderada por Alby Aguiar, fundador, CEO y
                director, con más de treinta años de experiencia vinculada al
                entrenamiento, la gestión deportiva y el desarrollo de
                programas de salud y rendimiento.
              </p>

              <p>
                Cada caso se estudia de forma individual, sin aplicar
                automáticamente la misma solución a todas las personas.
              </p>

              <p>
                Conoce también el{" "}
                <Link href="/metodo-ghc">Método GHC</Link>, la modalidad de{" "}
                <Link href="/entrenador-personal-madrid">
                  entrenador personal en Madrid
                </Link>{" "}
                y el servicio de{" "}
                <Link href="/entrenador-personal-online">
                  entrenamiento personal online
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>PREGUNTAS FRECUENTES</p>
            <h2>Preguntas sobre la Valoración GHC</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <div>
                  {faq.a.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p className={styles.kicker}>
              EMPIEZA POR COMPRENDER TU SITUACIÓN
            </p>

            <h2>Antes de elegir un programa, descubre qué necesitas realmente</h2>

            <p>
              Durante la Valoración GHC analizamos tu situación, tus objetivos
              y las condiciones reales en las que vas a entrenar para ayudarte
              a tomar una decisión con más criterio.
            </p>

            <p>
              Puedes realizarla online o presencialmente en Madrid.
            </p>

            <div className={styles.ctaRow}>
              <a
                href={onlineValuationUrl}
                className={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
              >
                Valoración online · 75 €
                <ArrowIcon />
              </a>

              <a
                href={inPersonValuationUrl}
                className={styles.lightButton}
                target="_blank"
                rel="noreferrer"
              >
                Valoración presencial · 120 €
              </a>

              <a
                href={whatsappUrl}
                className={styles.lightButton}
                target="_blank"
                rel="noreferrer"
              >
                Consultar mi caso
              </a>
            </div>

            <p>
              <strong>
                Si contratas un servicio superior el mismo día, descontamos
                íntegramente el importe abonado por la valoración.
              </strong>
            </p>
          </div>

          <div className={styles.finalPrinciples}>
            <span>Valoración profesional</span>
            <span>Orientación inicial</span>
            <span>Online o presencial</span>
            <span>Continuidad opcional</span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/" aria-label="GHC Training">
          <GHCTrainingLogo size="sm" variant="dark" />
        </Link>

        <p>Valoración GHC · El punto de partida antes de diseñar</p>

        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          Solicitar valoración
        </a>
      </footer>
    </div>
  );
}
