import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import styles from "./page.module.css";

const siteUrl = "https://ghctraining.com";
const pageUrl = `${siteUrl}/entrenamiento-fibromialgia`;

const description =
  "Entrenamiento adaptado para personas con fibromialgia, con valoración previa, fuerza progresiva, control de carga y revisión online o presencial en Madrid.";

export const metadata: Metadata = {
  title: {
    absolute: "Entrenamiento para fibromialgia adaptado | GHC Training",
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Entrenamiento para fibromialgia adaptado | GHC Training",
    description:
      "Un programa de fuerza y actividad física progresiva que parte de tu situación, tu tolerancia y tus circunstancias reales.",
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
    title: "Entrenamiento para fibromialgia adaptado | GHC Training",
    description,
    images: ["/alby-ghc-training.png"],
  },
};

const methodStages = [
  {
    title: "Valoramos",
    paragraphs: [
      "Conocemos tu punto de partida, tu tolerancia, tus objetivos y las circunstancias que pueden influir en el proceso.",
      "También revisamos la información sanitaria relevante que declares y las indicaciones profesionales que debamos respetar.",
    ],
  },
  {
    title: "Definimos prioridades",
    paragraphs: [
      "Decidimos qué capacidades conviene trabajar primero y qué aspectos requieren mayor prudencia.",
      "No intentamos abordar todo al mismo tiempo ni imponemos una progresión predeterminada.",
    ],
  },
  {
    title: "Diseñamos",
    paragraphs: [
      "Organizamos ejercicios, frecuencia, volumen, intensidad, descansos y progresión en función de tu situación.",
      "La planificación se adapta al entorno y al material que realmente tienes disponibles.",
    ],
  },
  {
    title: "Guiamos",
    paragraphs: [
      "Explicamos cómo aplicar el programa y qué alternativas pueden utilizarse cuando cambian las circunstancias.",
      "Revisamos movimientos concretos cuando resulta necesario.",
    ],
  },
  {
    title: "Revisamos",
    paragraphs: [
      "Analizamos tu respuesta, el cumplimiento, las sensaciones y las dificultades encontradas.",
      "La revisión permite comprobar si la estrategia mantiene el rumbo adecuado.",
    ],
  },
  {
    title: "Ajustamos",
    paragraphs: [
      "Modificamos ejercicios, cargas, volumen, frecuencia u organización cuando la respuesta lo requiere.",
      "Ajustar no significa improvisar, sino utilizar la información obtenida durante el proceso.",
    ],
  },
];

const trainingComponents = [
  {
    title: "Entrenamiento de fuerza progresivo",
    paragraphs: [
      "Puede utilizarse para desarrollar fuerza, capacidad funcional y confianza.",
      "La selección de ejercicios, cargas, repeticiones y descansos se adapta al punto de partida.",
      "No es necesario comenzar con cargas altas ni debe asumirse que una persona con fibromialgia no puede entrenar fuerza.",
    ],
  },
  {
    title: "Actividad aeróbica tolerable",
    paragraphs: [
      "Puede incluir caminar, bicicleta, elíptica u otras opciones compatibles con la situación y el entorno.",
      "La modalidad, la duración y la intensidad se ajustan a la respuesta individual.",
    ],
  },
  {
    title: "Movilidad y movimiento",
    paragraphs: [
      "Puede incluir trabajo destinado a mantener o mejorar movimientos necesarios para el programa y para actividades cotidianas.",
      "No se presenta como una solución aislada ni como una obligación de aumentar indefinidamente la flexibilidad.",
    ],
  },
  {
    title: "Regulación del esfuerzo",
    paragraphs: [
      "El programa puede incorporar escalas de esfuerzo, descansos, alternativas de menor carga y reducciones temporales de volumen.",
      "El objetivo es disponer de criterios para adaptar el trabajo sin perder completamente la dirección.",
    ],
  },
  {
    title: "Adaptación al entorno",
    paragraphs: [
      "El programa puede desarrollarse en casa, gimnasio, exterior, empresa, hotel o combinando distintos entornos.",
      "Siempre deben existir las condiciones y el material adecuados para el trabajo previsto.",
    ],
  },
];

const possibleBenefits = [
  "Mejorar la capacidad funcional",
  "Desarrollar fuerza",
  "Aumentar la tolerancia al esfuerzo",
  "Mejorar la confianza para moverse",
  "Favorecer la autonomía cotidiana",
  "Recuperar el hábito de entrenar",
  "Organizar mejor la actividad física",
  "Mejorar algunos aspectos de la calidad de vida",
];

const adaptationOptions = [
  "Sesión prevista",
  "Alternativa de menor volumen",
  "Reducción temporal de carga",
  "Selección más corta de ejercicios",
  "Actividad ligera",
  "Descanso cuando resulte necesario",
];

const audience = [
  "Tienes diagnóstico de fibromialgia",
  "Quieres comenzar o recuperar actividad física",
  "Llevas tiempo sin entrenar",
  "Has abandonado rutinas por exceso de carga",
  "Sientes inseguridad ante determinados movimientos",
  "Necesitas entrenar en casa o con poco material",
  "Prefieres entrenar en gimnasio",
  "Tus horarios cambian con frecuencia",
  "Necesitas alternativas para días diferentes",
  "Quieres desarrollar fuerza de forma progresiva",
  "Buscas una modalidad online",
  "Necesitas valoración y revisiones presenciales en Madrid",
  "Quieres comprender qué hacer y por qué",
  "Prefieres autonomía con planificación y revisión profesional",
];

const faqs = [
  {
    q: "¿Se puede entrenar teniendo fibromialgia?",
    a: [
      "En muchas personas es posible realizar actividad física y entrenamiento adaptado.",
      "La capacidad, la tolerancia y las circunstancias varían, por lo que necesitamos una valoración previa.",
      "Cuando existen dudas médicas o síntomas preocupantes, debe consultarse primero con el profesional sanitario correspondiente.",
    ],
  },
  {
    q: "¿El ejercicio cura la fibromialgia?",
    a: [
      "No.",
      "El ejercicio no se presenta como una cura.",
      "La evidencia indica que puede contribuir a mejorar algunos síntomas, la función y la calidad de vida en determinadas personas, pero la respuesta es individual.",
    ],
  },
  {
    q: "¿Qué tipo de ejercicio es mejor para la fibromialgia?",
    a: [
      "No existe una modalidad única que sea la mejor para todas las personas.",
      "El programa puede combinar fuerza, actividad aeróbica, movilidad y regulación del esfuerzo según el punto de partida, la tolerancia, las preferencias y el entorno.",
    ],
  },
  {
    q: "¿Puedo entrenar fuerza?",
    a: [
      "La investigación disponible respalda que el entrenamiento de fuerza adaptado puede ser útil para personas con fibromialgia.",
      "La carga, el volumen, la selección de ejercicios y la progresión deben individualizarse.",
    ],
  },
  {
    q: "¿Tengo que entrenar aunque tenga un día malo?",
    a: [
      "No se trata de cumplir una sesión a cualquier precio.",
      "El programa puede incluir alternativas de menor carga, reducción de volumen, actividad ligera o descanso.",
      "La decisión depende de la situación y de los criterios establecidos previamente.",
    ],
  },
  {
    q: "¿Es normal notar más molestias al empezar?",
    a: [
      "Algunas personas pueden experimentar cambios temporales en dolor o fatiga al iniciar o modificar la actividad.",
      "Esto no debe normalizarse automáticamente ni ignorarse.",
      "Si el aumento es intenso, persistente, nuevo o preocupante, debe detenerse el entrenamiento y consultarse con un profesional sanitario.",
    ],
  },
  {
    q: "¿Cuántos días por semana tengo que entrenar?",
    a: [
      "No establecemos una frecuencia universal antes de valorar el caso.",
      "La frecuencia depende de la capacidad actual, la disponibilidad, la recuperación, el tipo de trabajo y la respuesta al programa.",
    ],
  },
  {
    q: "¿Puedo hacer el programa desde casa?",
    a: [
      "Sí, cuando el espacio, el material y la situación permiten desarrollar el trabajo previsto.",
      "La planificación puede adaptarse a casa, gimnasio, exterior u otros entornos adecuados.",
    ],
  },
  {
    q: "¿Puedo realizarlo completamente online?",
    a: [
      "En muchos casos, sí.",
      "La valoración, la planificación, la explicación y las revisiones pueden realizarse a distancia.",
      "Cuando consideremos necesaria una valoración presencial o sanitaria, lo indicaremos.",
    ],
  },
  {
    q: "¿Necesito autorización médica?",
    a: [
      "No todas las personas necesitan un documento específico.",
      "Cuando existen síntomas no evaluados, cambios relevantes, dudas de seguridad, enfermedades asociadas o indicaciones sanitarias, puede ser necesario consultar o solicitar autorización antes de comenzar.",
    ],
  },
  {
    q: "¿La valoración inicial es obligatoria?",
    a: [
      "Sí.",
      "No diseñamos un programa adaptado para fibromialgia sin conocer previamente la situación, los antecedentes declarados, la tolerancia y las condiciones reales de entrenamiento.",
    ],
  },
  {
    q: "¿El programa sustituye la medicación o el tratamiento médico?",
    a: [
      "No.",
      "GHC Training no modifica tratamientos ni sustituye el diagnóstico, la medicación, la fisioterapia o el seguimiento sanitario que corresponda.",
    ],
  },
];

const evidenceSources = [
  {
    title: "EULAR revised recommendations for the management of fibromyalgia",
    context: "Recomendaciones revisadas sobre el abordaje de la fibromialgia.",
    url: "https://ard.bmj.com/content/76/2/318",
  },
  {
    title:
      "Effects of exercise on pain, fatigue, and quality of life in people with fibromyalgia",
    context: "Revisión sistemática y metaanálisis de ensayos controlados.",
    url: "https://pubmed.ncbi.nlm.nih.gov/41788711/",
  },
  {
    title:
      "Effect of Resistance Exercises on Function and Pain in Patients With Fibromyalgia",
    context:
      "Revisión sistemática y metaanálisis sobre entrenamiento de fuerza.",
    url: "https://pubmed.ncbi.nlm.nih.gov/37535560/",
  },
  {
    title:
      "The most effective therapeutic exercises for pain intensity in women with fibromyalgia",
    context: "Metaanálisis en red sobre diferentes modalidades de ejercicio.",
    url: "https://pubmed.ncbi.nlm.nih.gov/40319533/",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Entrenamiento para fibromialgia adaptado | GHC Training",
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
      name: "Entrenamiento para fibromialgia",
      serviceType:
        "Planificación de entrenamiento adaptado para personas con fibromialgia",
      description:
        "Planificación de entrenamiento adaptado para personas con fibromialgia, con valoración previa, progresión individualizada y revisiones profesionales.",
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
          name: "Entrenamiento para fibromialgia",
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

export default function EntrenamientoFibromialgiaPage() {
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
              <span>Entrenamiento para fibromialgia</span>
            </div>

            <p className={styles.kicker}>
              FUERZA · PROGRESIÓN · TOLERANCIA · REVISIÓN
            </p>

            <h1>Entrenamiento para fibromialgia adaptado a tu situación</h1>

            <div className={styles.heroLead}>
              <p>
                Vivir con fibromialgia puede hacer que la respuesta al esfuerzo
                cambie de un día a otro. Un plan útil no puede ignorar esa
                variabilidad ni obligarte a cumplir siempre la misma carga.
              </p>

              <p>
                En GHC Training partimos de una valoración previa para conocer
                tu nivel actual, tus experiencias anteriores, tu tolerancia,
                tus circunstancias y las indicaciones sanitarias que debamos
                respetar.
              </p>

              <p>
                A partir de esa información diseñamos un programa progresivo
                que puede incluir fuerza, actividad aeróbica, movilidad y
                estrategias para regular mejor el esfuerzo.
              </p>

              <p>
                El objetivo no es entrenar por encima de los síntomas ni
                prometer que desaparecerán. Buscamos ayudarte a desarrollar
                capacidad física, confianza y autonomía mediante un proceso que
                pueda revisarse y ajustarse.
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
              El entrenamiento puede formar parte del abordaje de la
              fibromialgia, pero no sustituye el diagnóstico, el tratamiento ni
              el seguimiento sanitario.
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
            <p className={styles.kicker}>ANTES DE EMPEZAR</p>
            <h2>
              La fibromialgia no afecta a todas las personas de la misma manera
            </h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                El dolor, la fatiga, la rigidez, el descanso, la tolerancia al
                esfuerzo y la capacidad para mantener una rutina pueden variar
                mucho entre personas.
              </p>

              <p>
                También pueden cambiar de una semana a otra o incluso de un día
                a otro.
              </p>

              <p>
                Por eso no resulta razonable entregar el mismo programa, la
                misma intensidad y la misma progresión a todo el mundo.
              </p>
            </div>

            <div>
              <p>
                Una persona puede necesitar empezar recuperando confianza en
                movimientos básicos. Otra puede tolerar ya un trabajo de fuerza
                estructurado.
              </p>

              <p>
                Otra puede necesitar reducir inicialmente el volumen, repartir
                mejor el esfuerzo o adaptar el entorno.
              </p>

              <p className={styles.emphasis}>
                No se trata de hacer siempre menos. Se trata de encontrar el
                nivel adecuado desde el que puedas progresar.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>EXPECTATIVAS REALISTAS</p>
            <h2>
              Mejorar capacidad física sin presentar el ejercicio como una cura
            </h2>

            <p>
              La investigación disponible indica que el ejercicio puede
              contribuir a mejorar distintos aspectos en algunas personas con
              fibromialgia.
            </p>
          </div>

          <ul className={styles.benefitGrid}>
            {possibleBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>
              La evidencia respalda el ejercicio como una herramienta útil.
            </strong>

            <span>
              No significa que todas las personas mejoren de la misma manera,
              que el entrenamiento elimine la fibromialgia o que pueda
              garantizarse la desaparición de los síntomas.
            </span>
          </div>
        </section>

        <section className={styles.assessmentSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>COMPRENDER ANTES DE DISEÑAR</p>
            <h2>El programa comienza con una valoración adaptada</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>Antes de diseñar el entrenamiento necesitamos conocer:</p>

              <ul>
                <li>
                  el diagnóstico y las indicaciones sanitarias relevantes que
                  declares;
                </li>
                <li>cómo se manifiestan tus síntomas;</li>
                <li>qué actividades realizas actualmente;</li>
                <li>qué movimientos toleras mejor o peor;</li>
                <li>tu experiencia previa entrenando;</li>
                <li>tu nivel actual de fuerza y movilidad;</li>
                <li>tu disponibilidad y capacidad de recuperación;</li>
                <li>el entorno y el material disponibles;</li>
                <li>tus objetivos, preferencias y dificultades previas.</li>
              </ul>
            </div>

            <div>
              <p>
                No realizamos diagnósticos ni evaluaciones clínicas. Analizamos
                la información necesaria dentro del ámbito del entrenamiento
                para decidir:
              </p>

              <ul>
                <li>si podemos ayudarte;</li>
                <li>bajo qué condiciones;</li>
                <li>qué modalidad puede encajar;</li>
                <li>desde qué nivel conviene comenzar;</li>
                <li>qué aspectos deben vigilarse;</li>
                <li>
                  cuándo puede resultar necesaria otra valoración profesional.
                </li>
              </ul>

              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar mi Valoración GHC
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section id="como-trabajamos" className={styles.stagesSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>MÉTODO GHC</p>
            <h2>Valoramos, diseñamos, guiamos, revisamos y ajustamos</h2>

            <p>
              Un programa adaptado no se construye mediante una única decisión.
              Requiere comprender el punto de partida, definir prioridades y
              revisar cómo responde la persona.
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
            <p className={styles.kicker}>TRABAJO ADAPTADO</p>
            <h2>
              Fuerza, actividad aeróbica y movilidad según tu tolerancia
            </h2>
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
            <p className={styles.kicker}>UN PROGRAMA QUE ADMITE AJUSTES</p>
            <h2>La variabilidad no convierte cada cambio en un fracaso</h2>

            <p>
              Un programa rígido puede generar frustración cuando la tolerancia
              cambia. Por eso la planificación puede incluir diferentes
              niveles de trabajo.
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
                Esto no significa cambiar el programa de manera improvisada
                ante cualquier sensación.
              </p>

              <p>
                Significa disponer de criterios para adaptar el trabajo sin
                perder completamente la dirección.
              </p>
            </div>

            <div>
              <p className={styles.emphasis}>
                El objetivo es mantener continuidad cuando sea razonable y
                respetar los límites cuando la situación lo requiera.
              </p>

              <p>
                Ante síntomas nuevos, intensos, persistentes o preocupantes,
                debe detenerse el entrenamiento y consultarse con el profesional
                sanitario correspondiente.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.autonomySection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>SIN DEPENDER DE UNA CITA FIJA</p>
            <h2>
              Entrenas con autonomía, pero con valoración, planificación y
              revisión profesional
            </h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                GHC Training no funciona mediante sesiones recurrentes uno a
                uno.
              </p>

              <p>
                Después de la valoración diseñamos una planificación que puedas
                aplicar en el horario y en el entorno acordados.
              </p>

              <p>
                Explicamos el programa, revisamos los movimientos concretos que
                resulte necesario comprobar y resolvemos las dudas relacionadas
                con su aplicación.
              </p>
            </div>

            <div>
              <p>
                Las revisiones se realizan a las 4, 8 o 12 semanas, según el
                programa contratado.
              </p>

              <p>
                En ellas analizamos la evolución, el cumplimiento, las
                sensaciones y los cambios que puedan haberse producido.
              </p>

              <p className={styles.emphasis}>
                La libertad horaria no significa entrenar sin dirección.
              </p>
            </div>
          </div>
        </section>

        <section id="modalidades" className={styles.applicationSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>ONLINE O PRESENCIAL EN MADRID</p>
            <h2>El mismo criterio con una aplicación diferente</h2>
          </div>

          <div className={styles.applicationGrid}>
            <article>
              <span>A DISTANCIA</span>
              <h3>Entrenamiento online para fibromialgia</h3>

              <p>
                La valoración, la explicación del programa y las revisiones
                pueden realizarse a distancia cuando la situación sea
                compatible con esta modalidad.
              </p>

              <p>El proceso puede incluir:</p>

              <ul>
                <li>videollamada y cuestionario;</li>
                <li>medidas básicas y fotografías guiadas;</li>
                <li>vídeos de movimientos concretos;</li>
                <li>revisión del espacio y del material;</li>
                <li>explicación de alternativas;</li>
                <li>seguimiento según el servicio contratado.</li>
              </ul>

              <p>
                No todos los casos pueden resolverse únicamente online. Cuando
                consideremos necesaria una valoración presencial o sanitaria,
                lo indicaremos.
              </p>

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
                La valoración inicial y las revisiones pueden realizarse en
                Madrid, en un lugar previamente acordado.
              </p>

              <p>Puede ser:</p>

              <ul>
                <li>domicilio;</li>
                <li>urbanización;</li>
                <li>empresa;</li>
                <li>hotel;</li>
                <li>gimnasio que permita el acceso;</li>
                <li>otro entorno adecuado.</li>
              </ul>

              <p>
                La modalidad presencial permite observar directamente
                movimientos concretos y explicar los ajustes necesarios. No
                implica sesiones recurrentes de entrenamiento personal.
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
            <p className={styles.kicker}>ENTRENAMIENTO Y ATENCIÓN SANITARIA</p>
            <h2>Trabajamos dentro del ámbito del entrenamiento</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>GHC Training no diagnostica fibromialgia.</p>

              <p>No sustituye:</p>

              <ul>
                <li>consulta o tratamiento médico;</li>
                <li>fisioterapia;</li>
                <li>psicología sanitaria;</li>
                <li>nutrición sanitaria;</li>
                <li>rehabilitación clínica;</li>
                <li>seguimiento de otros profesionales habilitados.</li>
              </ul>
            </div>

            <div>
              <p>
                No recomendamos iniciar, suspender o modificar medicación.
              </p>

              <p>
                Cuando una persona aporta indicaciones sanitarias relevantes,
                las tenemos en cuenta para establecer los límites del
                entrenamiento.
              </p>

              <p>
                Cuando existen dudas sobre la seguridad o idoneidad del
                ejercicio, puede ser necesario solicitar valoración o
                autorización sanitaria antes de comenzar o continuar.
              </p>

              <p className={styles.emphasis}>
                El entrenamiento puede acompañar el proceso. No sustituye la
                atención que corresponda.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.audienceSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>PUNTO DE PARTIDA INDIVIDUAL</p>
            <h2>
              Un programa para personas que necesitan una progresión adaptada
            </h2>

            <p>Puede encajar especialmente si:</p>
          </div>

          <ul className={styles.audienceList}>
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>Cada caso debe valorarse de forma individual.</strong>

            <span>
              La presencia de fibromialgia no determina por sí sola que una
              persona sea apta o no apta para un programa concreto.
            </span>
          </div>
        </section>

        <section className={styles.reviewSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>PRIMER PASO</p>
            <h2>Empieza con una valoración adaptada</h2>

            <p>
              La Valoración GHC tiene una duración aproximada de 60 minutos.
              Permite conocer tu situación, revisar la información necesaria y
              orientarte sobre la forma más adecuada de comenzar.
            </p>
          </div>

          <div className={styles.compareGrid}>
            <article>
              <p className={styles.kicker}>ONLINE</p>
              <h3>Valoración a distancia</h3>
              <p className={styles.priceLine}>75 €</p>
              <p>
                Videollamada, recopilación guiada de información y revisión del
                entorno y del material disponibles.
              </p>
            </article>

            <article>
              <p className={styles.kicker}>MADRID</p>
              <h3>Valoración presencial</h3>
              <p className={styles.priceLine}>120 €</p>
              <p>
                Valoración en un lugar previamente acordado y observación
                directa de los aspectos que resulte necesario revisar.
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
        </section>

        <section className={styles.criteriaSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>EVIDENCIA Y PRUDENCIA</p>
            <h2>El ejercicio cuenta con respaldo, pero necesita adaptación</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                Las revisiones científicas disponibles apoyan el ejercicio como
                parte del abordaje de la fibromialgia.
              </p>

              <p>
                El entrenamiento de fuerza, la actividad aeróbica y los
                programas combinados pueden contribuir a mejorar función,
                dolor, fatiga y calidad de vida en algunas personas.
              </p>

              <p>
                La evidencia presenta diferencias entre estudios y no permite
                anticipar la respuesta individual.
              </p>

              <p className={styles.emphasis}>
                Por eso no utilizamos una receta universal. Valoramos,
                diseñamos, revisamos y ajustamos.
              </p>
            </div>

            <div>
              <p className={styles.listIntro}>Fuentes revisadas:</p>

              <ul>
                {evidenceSources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                    >
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
            <h2>Preguntas sobre entrenamiento y fibromialgia</h2>
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
              EMPIEZA DESDE TU SITUACIÓN REAL
            </p>

            <h2>
              No necesitas demostrar que puedes seguir una rutina genérica
            </h2>

            <p>
              La valoración existe para conocer desde dónde comienzas, qué
              toleras, qué necesitas y cómo puede organizarse un programa
              compatible con tu situación.
            </p>

            <p>
              Entrenas con autonomía, pero con valoración, planificación y
              revisión profesional.
            </p>

            <div className={styles.ctaRow}>
              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar valoración adaptada
                <ArrowIcon />
              </Link>

              <Link
                href="/entrenador-personal-online"
                className={styles.lightButton}
              >
                Modalidad online
              </Link>

              <Link
                href="/entrenador-personal-madrid"
                className={styles.lightButton}
              >
                Presencial en Madrid
              </Link>
            </div>
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

        <p>Entrenamiento para fibromialgia · Adaptación y progresión</p>

        <Link href="/valoracion-integral">Solicitar valoración</Link>
      </footer>
    </div>
  );
}
