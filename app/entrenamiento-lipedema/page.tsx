import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import styles from "./page.module.css";

const siteUrl = "https://www.ghctraining.com";
const pageUrl = `${siteUrl}/entrenamiento-lipedema`;

const description =
  "Valoración y entrenamiento para lipedema con fuerza, movilidad y progresión adaptada. Online o con valoración y revisiones presenciales en Madrid.";

export const metadata: Metadata = {
  title: {
    absolute: "Entrenamiento para lipedema adaptado | GHC Training",
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Entrenamiento para lipedema adaptado | GHC Training",
    description:
      "Valoración, fuerza, movilidad y planificación personalizada para entrenar con lipedema de forma progresiva y con revisión profesional.",
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
    title: "Entrenamiento para lipedema adaptado | GHC Training",
    description:
      "Valoración, fuerza, movilidad y planificación personalizada para entrenar con lipedema de forma progresiva y con revisión profesional.",
    images: ["/alby-ghc-training.png"],
  },
};

const methodStages = [
  {
    title: "Valoramos",
    paragraphs: [
      "Analizamos tu punto de partida, tu contexto, tu capacidad y tus prioridades.",
      "También revisamos la información sanitaria relevante que declares y las indicaciones profesionales que debamos respetar.",
    ],
  },
  {
    title: "Definimos",
    paragraphs: [
      "Elegimos qué necesita atención primero y qué puede esperar.",
      "No intentamos abordar todo al mismo tiempo ni imponemos una progresión predeterminada.",
    ],
  },
  {
    title: "Diseñamos",
    paragraphs: [
      "Creamos una planificación personalizada y aplicable a tu entorno.",
      "Organizamos ejercicios, cargas, volumen, frecuencia, descansos y progresión según tu situación real.",
    ],
  },
  {
    title: "Explicamos",
    paragraphs: [
      "Te enseñamos cómo aplicar el programa, regular el esfuerzo y comprender las decisiones principales.",
      "Revisamos movimientos concretos cuando resulta necesario.",
    ],
  },
  {
    title: "Entrenas con autonomía",
    paragraphs: [
      "Puedes entrenar en casa, gimnasio, parque u otro lugar adecuado, sin depender de una cita fija recurrente.",
      "La planificación se adapta al horario y al entorno acordados.",
    ],
  },
  {
    title: "Revisamos y ajustamos",
    paragraphs: [
      "Valoramos la evolución a las 4, 8 o 12 semanas según el programa contratado.",
      "Modificamos ejercicios, cargas, volumen u organización cuando la respuesta lo requiere.",
    ],
  },
];

const trainingComponents = [
  {
    title: "Entrenamiento de fuerza progresivo",
    paragraphs: [
      "La fuerza puede formar parte del programa para mejorar capacidad física, estabilidad, confianza y autonomía.",
      "Ajustamos ejercicios, rango de movimiento, carga, volumen, pausas, frecuencia, velocidad, dificultad y entorno.",
      "No aplicamos una intensidad fija para todas las personas.",
    ],
  },
  {
    title: "Actividad aeróbica tolerable",
    paragraphs: [
      "Caminar, bicicleta, elíptica u otras actividades pueden utilizarse según tolerancia, preferencias y disponibilidad.",
      "No imponemos una modalidad concreta y la progresión se basa en la respuesta real.",
    ],
  },
  {
    title: "Movilidad y control del movimiento",
    paragraphs: [
      "La movilidad se incorpora cuando ayuda a realizar mejor los ejercicios, reducir barreras, mejorar posiciones o facilitar actividades cotidianas.",
      "No se utiliza como relleno ni como tratamiento aislado.",
    ],
  },
  {
    title: "Actividad acuática como opción",
    paragraphs: [
      "El trabajo en agua puede resultar cómodo para algunas personas.",
      "No es obligatorio, no se presenta como superior y no constituye una sesión prestada por GHC Training.",
    ],
  },
  {
    title: "Regulación del esfuerzo",
    paragraphs: [
      "El programa puede incluir rangos, alternativas, reducciones temporales de carga, cambios de ejercicio, sesiones más breves y recuperación planificada.",
      "El objetivo es adaptar el trabajo sin perder la dirección.",
    ],
  },
  {
    title: "Salud general y composición corporal",
    paragraphs: [
      "Cuando existe sobrepeso u obesidad coexistente, mejorar hábitos, fuerza y actividad puede apoyar la salud general y la composición corporal.",
      "Esto no significa que lipedema y obesidad sean lo mismo ni que el entrenamiento vaya a eliminar el tejido adiposo característico del lipedema.",
    ],
  },
];

const possibleBenefits = [
  "Mejorar la capacidad funcional",
  "Desarrollar fuerza",
  "Aumentar la tolerancia al esfuerzo",
  "Apoyar la movilidad",
  "Mejorar la confianza para moverse",
  "Favorecer la autonomía cotidiana",
  "Organizar mejor la actividad física",
  "Mejorar algunos síntomas o dimensiones de calidad de vida en determinadas personas",
];

const adaptationOptions = [
  "Reducir temporalmente el volumen",
  "Modificar la carga",
  "Cambiar un ejercicio",
  "Priorizar movilidad",
  "Elegir una actividad de menor impacto",
  "Acortar la sesión",
  "Posponer un estímulo concreto",
  "Descansar cuando corresponde",
];

const audience = [
  "Tienes diagnóstico de lipedema",
  "Quieres empezar o retomar el entrenamiento",
  "Buscas mejorar fuerza o capacidad física",
  "Necesitas una progresión adaptada",
  "No quieres depender de sesiones fijas",
  "Valoras aprender a entrenar con autonomía",
  "Puedes seguir un programa explicado",
  "Aceptas revisar el proceso según evolución",
  "Comprendes que no se garantizan cambios de volumen o síntomas",
  "Respetas las indicaciones sanitarias",
];

const stopSignals = [
  "Dolor nuevo, intenso o no explicado",
  "Empeoramiento rápido",
  "Aumento repentino y unilateral de volumen",
  "Calor, enrojecimiento o cambio de coloración en una extremidad",
  "Piel dolorosa, caliente e inflamada",
  "Fiebre o malestar general con cambios cutáneos",
  "Herida abierta o lesión de piel que empeora",
  "Mareo importante o desmayo",
  "Síntomas neurológicos nuevos",
  "Dificultad respiratoria no habitual",
  "Dolor torácico",
  "Palpitaciones intensas o persistentes",
  "Cualquier indicación médica de suspensión",
];

const faqs = [
  {
    q: "¿Se puede entrenar teniendo lipedema?",
    a: [
      "En muchas personas, el ejercicio puede formar parte del manejo conservador.",
      "La planificación debe adaptarse al punto de partida, la capacidad física, los síntomas, la experiencia y las indicaciones sanitarias.",
    ],
  },
  {
    q: "¿El ejercicio cura el lipedema?",
    a: [
      "No.",
      "El ejercicio no cura ni elimina el lipedema.",
      "Puede contribuir a mejorar capacidad física, fuerza, movilidad, autonomía y, en algunas personas, determinados síntomas o dimensiones de calidad de vida.",
    ],
  },
  {
    q: "¿El entrenamiento reduce el tejido adiposo del lipedema?",
    a: [
      "No se puede prometer.",
      "El entrenamiento puede apoyar la salud general y la composición corporal cuando proceda, pero la evidencia no permite garantizar reducción del tejido adiposo característico del lipedema.",
    ],
  },
  {
    q: "¿Puedo entrenar fuerza?",
    a: [
      "La fuerza puede formar parte del programa cuando no existe contraindicación.",
      "Los ejercicios, las cargas, los rangos y el volumen deben ajustarse a la persona.",
    ],
  },
  {
    q: "¿Qué ejercicio es mejor para el lipedema?",
    a: [
      "No existe una modalidad universalmente superior.",
      "El programa puede combinar fuerza, actividad aeróbica, movilidad y otras opciones según tolerancia, objetivos y preferencias.",
    ],
  },
  {
    q: "¿El ejercicio acuático es obligatorio?",
    a: [
      "No.",
      "Puede ser una opción cómoda para algunas personas, pero no es imprescindible ni se considera superior en todos los casos.",
    ],
  },
  {
    q: "¿Tengo que usar prendas de compresión para entrenar?",
    a: [
      "GHC Training no prescribe prendas de compresión.",
      "Si ya cuentas con una indicación sanitaria, el programa debe respetarla.",
      "Las dudas sobre tipo, ajuste o uso deben consultarse con el profesional correspondiente.",
    ],
  },
  {
    q: "¿Lipedema y linfedema son lo mismo?",
    a: [
      "No.",
      "Son condiciones diferentes, aunque pueden coexistir en algunas personas.",
      "Un aumento nuevo o repentino de volumen no debe atribuirse automáticamente al lipedema.",
    ],
  },
  {
    q: "¿Lipedema y obesidad son lo mismo?",
    a: [
      "No.",
      "Son condiciones diferentes y pueden coexistir.",
      "Cuando existe exceso de grasa general, el entrenamiento puede apoyar la salud y la composición corporal, sin prometer eliminar el tejido propio del lipedema.",
    ],
  },
  {
    q: "¿Puedo hacer el programa desde casa?",
    a: [
      "Sí, cuando el entorno y el material disponible permiten aplicar el programa con seguridad.",
      "También puede realizarse en gimnasio, parque u otro lugar adecuado.",
    ],
  },
  {
    q: "¿Puedo realizarlo completamente online?",
    a: [
      "Sí, si la valoración confirma que la modalidad online encaja y no necesitas una atención clínica o presencial diferente.",
    ],
  },
  {
    q: "¿Ofrecéis sesiones presenciales recurrentes en Madrid?",
    a: [
      "No como modelo principal.",
      "En Madrid realizamos valoración, explicación y revisiones presenciales en un lugar acordado.",
      "Después entrenas con autonomía.",
    ],
  },
  {
    q: "¿Necesito autorización médica?",
    a: [
      "No todas las personas necesitan una autorización formal.",
      "Puede ser necesaria cuando existen síntomas no estudiados, enfermedad descompensada, cirugía reciente, contraindicaciones conocidas o indicaciones sanitarias específicas.",
    ],
  },
  {
    q: "¿Qué ocurre si un día tengo más molestias?",
    a: [
      "El programa puede incluir alternativas y ajustes de carga, volumen, ejercicios o duración.",
      "Si el cambio es intenso, nuevo, repentino o presenta señales de alarma, se suspende la sesión y se consulta.",
    ],
  },
  {
    q: "¿La valoración inicial es obligatoria?",
    a: [
      "Sí.",
      "Es necesaria para conocer el punto de partida, confirmar que el servicio encaja y diseñar una planificación personalizada.",
    ],
  },
  {
    q: "¿El programa sustituye la fisioterapia o el tratamiento médico?",
    a: [
      "No.",
      "El programa trabaja desde el ejercicio y no sustituye la atención sanitaria.",
    ],
  },
];

const evidenceSources = [
  {
    title: "Exercise training in women with lipedema — A systematic review",
    context:
      "Revisión sistemática de 2025 sobre ejercicio, función, síntomas y calidad de vida en mujeres con lipedema.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41243294/",
  },
  {
    title:
      "Effects of multimodal exercise program on edema, pain, exercise capacity, lower extremity muscle strength and function in patients with lipedema",
    context:
      "Ensayo de 2026 con una muestra pequeña y sin diferencias significativas entre grupos.",
    url: "https://pubmed.ncbi.nlm.nih.gov/40372970/",
  },
  {
    title:
      "Evaluation of the Effectiveness of Compression Therapy Combined with Exercises Versus Exercises Only Among Lipedema Patients",
    context:
      "Estudio de 2024 sobre ejercicio con y sin compresión, sin cambios significativos en volumen total de las extremidades.",
    url: "https://pubmed.ncbi.nlm.nih.gov/39598145/",
  },
  {
    title:
      "The Effects of Complete Decongestive Therapy or Intermittent Pneumatic Compression Therapy or Exercise Only in the Treatment of Severe Lipedema",
    context:
      "Ensayo aleatorizado de 2021 sobre intervenciones multimodales en lipedema severo.",
    url: "https://pubmed.ncbi.nlm.nih.gov/33297826/",
  },
  {
    title:
      "Objective measures of physical activity and physical capacities in lipedema — a scoping review",
    context:
      "Revisión de 2026 sobre capacidad física, fuerza, marcha y medidas objetivas.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41540367/",
  },
  {
    title:
      "Effects of lipedema on lower limb muscle strength, muscle endurance, functionality, functional exercise capacity, pressure pain threshold and edema",
    context:
      "Estudio de casos y controles sobre fuerza, resistencia, función y capacidad de marcha.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41312907/",
  },
  {
    title: "S2k Lipoedema Guidelines. Version 5.0",
    context:
      "Guía AWMF de 2024 utilizada como marco complementario para diferenciación clínica, individualización y expectativas realistas.",
    url: "https://register.awmf.org/de/leitlinien/detail/037-012",
  },
];

const safetySources = [
  {
    title: "CDC — About Venous Thromboembolism (Blood Clots)",
    url: "https://www.cdc.gov/blood-clots/about/index.html",
  },
  {
    title: "NHS — Cellulitis",
    url: "https://www.nhs.uk/conditions/cellulitis/",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Entrenamiento para lipedema adaptado | GHC Training",
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
      name: "Valoración y planificación de entrenamiento adaptado para personas con lipedema",
      serviceType: "Entrenamiento personalizado adaptado",
      description:
        "Valoración y planificación de fuerza, movilidad y actividad física para personas con lipedema, con progresión individualizada y revisiones profesionales.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      url: pageUrl,
      areaServed: ["Madrid", "España", "América Latina"],
      offers: [
        {
          "@type": "Offer",
          name: "Valoración GHC online",
          price: "75",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/valoracion-integral#modalidades`,
        },
        {
          "@type": "Offer",
          name: "Valoración GHC presencial en Madrid",
          price: "120",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/valoracion-integral#modalidades`,
        },
        {
          "@type": "Offer",
          name: "Plan GHC online de 4 semanas",
          price: "220",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/valoracion-integral`,
        },
        {
          "@type": "Offer",
          name: "Plan GHC Madrid de 4 semanas",
          price: "360",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/valoracion-integral`,
        },
        {
          "@type": "Offer",
          name: "Programa GHC online de 12 semanas",
          price: "580",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/valoracion-integral`,
        },
        {
          "@type": "Offer",
          name: "Programa GHC Madrid de 12 semanas",
          price: "960",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/valoracion-integral`,
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
          name: "Entrenamiento para lipedema",
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

export default function EntrenamientoLipedemaPage() {
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
          <a href="#como-trabajamos">Cómo trabajamos</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#faq">FAQ</a>
        </nav>

        <Link href="/valoracion-integral" className={styles.headerButton}>
          Solicitar valoración
        </Link>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link href="/">GHC Training</Link>
              <span aria-hidden="true">/</span>
              <span>Entrenamiento para lipedema</span>
            </div>

            <p className={styles.kicker}>
              ENTRENAMIENTO ADAPTADO · FUERZA · MOVILIDAD · REVISIÓN
            </p>

            <h1>Entrenamiento para lipedema adaptado a tu situación</h1>

            <div className={styles.heroLead}>
              <p>
                Tener lipedema no significa que exista una única forma correcta
                de entrenar. El punto de partida, los síntomas, la capacidad
                física, el historial y las indicaciones sanitarias pueden ser
                diferentes en cada persona.
              </p>

              <p>
                En GHC Training valoramos tu situación, definimos prioridades y
                diseñamos una planificación de fuerza, movilidad y actividad
                física que puedas aplicar con autonomía y revisar según tu
                evolución.
              </p>
            </div>

            <div className={styles.ctaRow}>
              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar valoración adaptada
                <ArrowIcon />
              </Link>

              <Link href="/metodo-ghc" className={styles.secondaryButton}>
                Conocer el Método GHC
                <ArrowIcon />
              </Link>
            </div>

            <p className={styles.heroNote}>
              El entrenamiento no cura el lipedema ni sustituye la atención
              sanitaria. Puede formar parte de un proceso orientado a mejorar
              capacidad física, autonomía y calidad de vida.
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
            <p className={styles.kicker}>TU PUNTO DE PARTIDA IMPORTA</p>
            <h2>El lipedema no convierte todas las necesidades en iguales</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                Dos personas con el mismo diagnóstico pueden tener niveles de
                fuerza, movilidad, tolerancia al esfuerzo, dolor, experiencia y
                objetivos muy distintos.
              </p>

              <p>
                Por eso no partimos de una tabla estándar ni de un protocolo
                idéntico para todo el mundo.
              </p>

              <p>
                Antes de programar, valoramos cómo te mueves, qué puedes
                realizar, qué te limita, qué entorno tienes disponible y qué
                indicaciones sanitarias debemos respetar.
              </p>
            </div>

            <div>
              <p>
                El objetivo no es obligarte a encajar en una rutina. Es
                construir una planificación que encaje en tu situación real.
              </p>

              <p className={styles.emphasis}>
                Adaptar no significa entrenar siempre menos. Significa elegir
                mejor el punto de partida, la dosis y la progresión.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>EXPECTATIVAS REALISTAS</p>
            <h2>
              Mejorar capacidad física sin prometer lo que el ejercicio no
              puede garantizar
            </h2>

            <p>
              La evidencia disponible sobre ejercicio y lipedema todavía es
              limitada, pero sugiere que un programa estructurado puede
              contribuir a mejorar la fuerza, la capacidad para caminar, la
              función física y, en algunas personas, determinados síntomas o
              dimensiones de calidad de vida.
            </p>
          </div>

          <ul className={styles.benefitGrid}>
            {possibleBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>La respuesta no es igual para todo el mundo.</strong>

            <span>
              El entrenamiento no elimina el lipedema, no garantiza pérdida de
              volumen y no sustituye los tratamientos sanitarios que puedan
              estar indicados.
            </span>
          </div>
        </section>

        <section className={styles.assessmentSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>ANTES DE PROGRAMAR</p>
            <h2>Primero entendemos tu situación</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>La valoración inicial permite ordenar la información relevante:</p>

              <ul>
                <li>objetivo principal;</li>
                <li>diagnóstico conocido e indicaciones sanitarias;</li>
                <li>historial de actividad y experiencia con fuerza;</li>
                <li>síntomas habituales y movimientos que generan dificultad;</li>
                <li>capacidad actual y entorno disponible;</li>
                <li>horarios, preferencias y barreras para mantener el programa.</li>
              </ul>
            </div>

            <div>
              <p>GHC Training no diagnostica el lipedema.</p>

              <p>
                Cuando una persona presenta síntomas sin diagnóstico, cambios
                recientes o señales que requieren estudio, la prioridad es la
                valoración sanitaria correspondiente.
              </p>

              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar mi valoración
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section id="como-trabajamos" className={styles.stagesSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>MÉTODO GHC</p>
            <h2>Valoración, planificación, autonomía y revisión</h2>

            <p>
              Un programa adaptado requiere comprender el punto de partida,
              definir prioridades y revisar cómo responde la persona.
            </p>
          </div>

          <div className={styles.stageGrid}>
            {methodStages.map((stage, index) => (
              <article className={styles.stageCard} key={stage.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>

                {stage.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.criteriaSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>NO EXISTE UNA ÚNICA MODALIDAD</p>
            <h2>Combinamos los componentes que tienen sentido para ti</h2>
          </div>

          <div className={styles.trainingGrid}>
            {trainingComponents.map((component, index) => (
              <article className={styles.stageCard} key={component.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{component.title}</h3>

                {component.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.reviewSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>NO TODOS LOS DÍAS SON IGUALES</p>
            <h2>El programa debe poder adaptarse sin perder dirección</h2>

            <p>
              La evolución rara vez es lineal. Puede haber días con más
              pesadez, sensibilidad, cansancio o menor tolerancia.
            </p>
          </div>

          <ul className={styles.benefitGrid}>
            {adaptationOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>

          <div className={styles.proseColumns}>
            <div>
              <p>
                Adaptar una sesión no significa abandonar el proceso ni cambiar
                el programa de manera improvisada ante cualquier sensación.
              </p>

              <p>
                Significa disponer de criterios para ajustar el trabajo sin
                perder completamente la dirección.
              </p>
            </div>

            <div>
              <p className={styles.emphasis}>
                La clave es distinguir entre una variación manejable y una
                señal que requiere parar o consultar.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.autonomySection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>SIN CITAS FIJAS RECURRENTES</p>
            <h2>Entrenas cuando puedes, pero no entrenas sin dirección</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>GHC Training no vende sesiones recurrentes uno a uno.</p>

              <p>
                Después de valorar y explicar el programa, entrenas con
                autonomía en el entorno acordado.
              </p>

              <p>
                Esto permite libertad horaria, menor dependencia de citas,
                aplicar el plan en tu contexto real y aprender a regular el
                esfuerzo.
              </p>
            </div>

            <div>
              <p>
                La autonomía no significa abandono. Revisamos la evolución y
                ajustamos el programa a las 4, 8 o 12 semanas según la opción
                contratada.
              </p>

              <p className={styles.emphasis}>
                Entrenas con autonomía, pero con valoración, planificación y
                revisión profesional.
              </p>
            </div>
          </div>
        </section>

        <section id="modalidades" className={styles.applicationSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>ONLINE O MADRID</p>
            <h2>El mismo método, adaptado a la modalidad</h2>
          </div>

          <div className={styles.applicationGrid}>
            <article>
              <span>A DISTANCIA</span>
              <h3>Entrenamiento online para lipedema</h3>

              <p>
                La valoración, explicación, planificación y revisión pueden
                realizarse a distancia.
              </p>

              <p>La modalidad online puede encajar cuando:</p>

              <ul>
                <li>vives fuera de Madrid;</li>
                <li>quieres entrenar en tu propio entorno;</li>
                <li>necesitas libertad horaria;</li>
                <li>puedes seguir las indicaciones con autonomía;</li>
                <li>no requieres atención clínica presencial.</li>
              </ul>

              <p>Disponible para España y América Latina.</p>

              <Link
                href="/entrenador-personal-online"
                className={styles.lightButton}
              >
                Conocer la modalidad online
              </Link>
            </article>

            <article>
              <span>MADRID</span>
              <h3>Valoración y revisiones presenciales</h3>

              <p>
                En Madrid, la valoración y las revisiones pueden realizarse
                presencialmente en un lugar acordado.
              </p>

              <p>Cuando resulta necesario:</p>

              <ul>
                <li>revisamos movimientos concretos;</li>
                <li>explicamos la planificación;</li>
                <li>comprobamos aspectos técnicos;</li>
                <li>ajustamos el programa.</li>
              </ul>

              <p>
                No existe un centro propio abierto al público y no se ofrecen
                sesiones presenciales recurrentes como modelo principal.
              </p>

              <Link
                href="/entrenador-personal-madrid"
                className={styles.lightButton}
              >
                Conocer la modalidad en Madrid
              </Link>
            </article>
          </div>
        </section>

        <section className={styles.criteriaSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>LÍMITES SANITARIOS</p>
            <h2>Trabajamos dentro del ámbito del ejercicio</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                GHC Training no diagnostica, no prescribe medicación, no indica
                prendas de compresión y no sustituye la medicina, la
                fisioterapia ni otros tratamientos sanitarios.
              </p>

              <p>Cuando existe una indicación profesional, el programa debe respetarla.</p>
            </div>

            <div>
              <p>Puede ser necesaria coordinación sanitaria cuando hay:</p>

              <ul>
                <li>diagnóstico o cirugía reciente;</li>
                <li>cambios importantes de síntomas;</li>
                <li>alteraciones vasculares o linfedema coexistente;</li>
                <li>heridas o infección;</li>
                <li>embarazo o enfermedad descompensada;</li>
                <li>contraindicación para el ejercicio;</li>
                <li>dudas sobre el uso de compresión durante la actividad.</li>
              </ul>

              <p className={styles.emphasis}>
                Si una situación queda fuera del entrenamiento, se detiene el
                proceso y se deriva.
              </p>
            </div>
          </div>
        </section>

        <section id="seguridad" className={styles.reviewSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>CRITERIOS CLAROS</p>
            <h2>No todo cambio debe atribuirse al lipedema</h2>

            <p>
              Estas señales generales de seguridad no diagnostican. Indican
              cuándo conviene suspender el ejercicio y solicitar valoración
              sanitaria.
            </p>
          </div>

          <ul className={styles.audienceList}>
            {stopSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>Atención urgente.</strong>

            <span>
              La dificultad respiratoria repentina, el dolor torácico, el
              desmayo o la combinación de dolor, calor y aumento unilateral de
              una extremidad requieren atención sanitaria urgente.
            </span>
          </div>

          <div className={styles.prose}>
            <p className={styles.listIntro}>Fuentes oficiales de seguridad:</p>
            <ul>
              {safetySources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.audienceSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>PUNTO DE PARTIDA</p>
            <h2>Puede encajar si buscas un proceso personalizado</h2>
          </div>

          <ul className={styles.audienceList}>
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>La idoneidad se confirma en la valoración.</strong>
            <span>
              El diagnóstico de lipedema no determina por sí solo que una
              persona sea apta o no apta para un programa concreto.
            </span>
          </div>
        </section>

        <section className={styles.reviewSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>EMPIEZA POR LA VALORACIÓN</p>
            <h2>La valoración define la hoja de ruta</h2>

            <p>
              La valoración inicial dura aproximadamente 60 minutos y permite
              decidir si el servicio encaja, qué modalidad resulta adecuada,
              qué prioridades debe tener el programa y qué nivel de seguimiento
              puede ser útil.
            </p>
          </div>

          <div className={styles.compareGrid}>
            <article>
              <p className={styles.kicker}>VALORACIÓN ONLINE</p>
              <h3>Punto de partida a distancia</h3>
              <p className={styles.priceLine}>75 €</p>
              <p>
                Videollamada, recopilación guiada de información y revisión del
                entorno y del material disponibles.
              </p>
            </article>

            <article>
              <p className={styles.kicker}>VALORACIÓN MADRID</p>
              <h3>Valoración en persona</h3>
              <p className={styles.priceLine}>120 €</p>
              <p>
                Valoración en un lugar previamente acordado y observación
                directa de los aspectos que resulte necesario revisar.
              </p>
            </article>

            <article>
              <p className={styles.kicker}>PLAN ONLINE · 4 SEMANAS</p>
              <h3>Planificación personalizada</h3>
              <p className={styles.priceLine}>220 €</p>
              <p>
                Programa online de cuatro semanas con explicación y revisión
                según las condiciones del servicio.
              </p>
            </article>

            <article>
              <p className={styles.kicker}>PLAN MADRID · 4 SEMANAS</p>
              <h3>Valoración y revisión presencial</h3>
              <p className={styles.priceLine}>360 €</p>
              <p>
                Plan de cuatro semanas con valoración y revisión presencial en
                el lugar acordado.
              </p>
            </article>

            <article>
              <p className={styles.kicker}>PROGRAMA ONLINE · 12 SEMANAS</p>
              <h3>Proceso de mayor alcance</h3>
              <p className={styles.priceLine}>580 €</p>
              <p>
                Planificación online de doce semanas con revisiones y ajustes
                según el programa contratado.
              </p>
            </article>

            <article>
              <p className={styles.kicker}>PROGRAMA MADRID · 12 SEMANAS</p>
              <h3>Proceso con revisiones presenciales</h3>
              <p className={styles.priceLine}>960 €</p>
              <p>
                Programa de doce semanas con valoración y revisiones
                presenciales en Madrid, en un lugar acordado.
              </p>
            </article>
          </div>

          <div className={styles.discountPanel}>
            <p className={styles.kicker}>CONTINUIDAD OPCIONAL</p>
            <h3>
              Si continúas el mismo día, descontamos íntegramente la valoración
            </h3>

            <p>
              Si después de la valoración contratas ese mismo día un Plan GHC o
              un Programa GHC de mayor alcance, descontamos del precio final
              todo el importe abonado.
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

          <div className={styles.ctaRow}>
            <Link
              href="/valoracion-integral"
              className={styles.primaryButton}
            >
              Solicitar valoración adaptada
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className={styles.criteriaSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>INFORMACIÓN BASADA EN EVIDENCIA</p>
            <h2>Qué sabemos y qué todavía no sabemos</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                La investigación específica sobre ejercicio y lipedema está
                creciendo, pero sigue siendo limitada.
              </p>

              <p>
                Los estudios disponibles sugieren que el ejercicio estructurado
                puede contribuir a mejorar la fuerza, la función física, la
                capacidad para caminar y, en algunas personas, determinados
                síntomas o dimensiones de calidad de vida.
              </p>

              <p>
                Sin embargo, existen pocos estudios, muestras pequeñas,
                programas diferentes y combinaciones frecuentes con compresión
                u otras intervenciones.
              </p>

              <p className={styles.emphasis}>
                Por eso no presentamos el ejercicio como cura, no garantizamos
                pérdida de volumen y no utilizamos un protocolo universal.
              </p>
            </div>

            <div>
              <p className={styles.listIntro}>Fuentes revisadas:</p>

              <ul>
                {evidenceSources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.title}
                    </a>
                    . {source.context}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>PREGUNTAS FRECUENTES</p>
            <h2>Preguntas sobre entrenamiento y lipedema</h2>
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
            <p className={styles.kicker}>DA EL PRIMER PASO CON CRITERIO</p>

            <h2>Empieza por una valoración, no por una rutina genérica</h2>

            <p>
              Antes de elegir ejercicios, cargas o frecuencia, necesitamos
              conocer tu situación.
            </p>

            <p>
              Valoramos tu punto de partida, definimos prioridades y diseñamos
              una planificación que puedas aplicar con autonomía y revisar
              profesionalmente.
            </p>

            <div className={styles.ctaRow}>
              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar valoración adaptada
                <ArrowIcon />
              </Link>

              <Link href="/metodo-ghc" className={styles.lightButton}>
                Ver el Método GHC
              </Link>

              <Link
                href="/entrenador-personal-online"
                className={styles.lightButton}
              >
                Modalidad online
              </Link>
            </div>

            <p>
              <strong>
                Si contratas un plan o programa superior el mismo día de la
                valoración, descontamos íntegramente el importe de la
                valoración.
              </strong>
            </p>
          </div>

          <div className={styles.finalPrinciples}>
            <span>Valoración previa</span>
            <span>Progresión individualizada</span>
            <span>Autonomía guiada</span>
            <span>Revisiones profesionales</span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/" aria-label="GHC Training">
          <GHCTrainingLogo size="sm" variant="dark" />
        </Link>

        <p>Entrenamiento para lipedema · Adaptación y progresión</p>

        <Link href="/valoracion-integral">Solicitar valoración</Link>
      </footer>
    </div>
  );
}
