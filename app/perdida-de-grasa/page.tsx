import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import styles from "./page.module.css";

const siteUrl = "https://www.ghctraining.com";
const pageUrl = `${siteUrl}/perdida-de-grasa`;

const description =
  "Pérdida de grasa con entrenamiento de fuerza, nutrición estratégica y seguimiento personalizado. Online o con valoración y revisiones en Madrid.";

export const metadata: Metadata = {
  title: {
    absolute: "Pérdida de grasa con entrenamiento personalizado | GHC",
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Pérdida de grasa con entrenamiento personalizado | GHC",
    description:
      "Valoración, fuerza, nutrición estratégica y ajustes personalizados para reducir grasa sin convertir el proceso en otra dieta genérica.",
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
    title: "Pérdida de grasa con entrenamiento personalizado | GHC",
    description:
      "Valoración, fuerza, nutrición estratégica y seguimiento para reducir grasa con una estrategia aplicable a tu vida real.",
    images: ["/alby-ghc-training.png"],
  },
};

const methodStages = [
  {
    title: "Valoramos",
    paragraphs: [
      "Analizamos tu punto de partida, objetivos, experiencia, horarios, hábitos, entorno y dificultades anteriores.",
      "También revisamos las limitaciones o indicaciones sanitarias declaradas que debamos respetar.",
    ],
  },
  {
    title: "Definimos prioridades",
    paragraphs: [
      "Decidimos qué cambios pueden generar más impacto sin intentar modificar toda tu vida en una semana.",
      "El objetivo se traduce en acciones concretas y medibles.",
    ],
  },
  {
    title: "Diseñamos",
    paragraphs: [
      "Organizamos entrenamiento, nutrición, actividad diaria, recuperación y progresión según tu situación real.",
      "No partimos de una dieta o una rutina estándar.",
    ],
  },
  {
    title: "Explicamos",
    paragraphs: [
      "Te enseñamos qué hacer, por qué se ha elegido y cómo aplicar el plan en casa, gimnasio, parque u otro entorno adecuado.",
      "Revisamos movimientos concretos cuando resulta necesario.",
    ],
  },
  {
    title: "Aplicas con autonomía",
    paragraphs: [
      "Entrenas y organizas las pautas dentro de tus horarios, sin depender de una cita fija recurrente.",
      "La estructura busca que puedas sostener el proceso en tu vida real.",
    ],
  },
  {
    title: "Revisamos y ajustamos",
    paragraphs: [
      "Valoramos la evolución a las 4, 8 o 12 semanas según el programa contratado.",
      "Ajustamos cargas, volumen, alimentación, actividad u organización cuando la respuesta lo requiere.",
    ],
  },
];

const strategyComponents = [
  {
    title: "Déficit energético sin extremos",
    paragraphs: [
      "La pérdida de grasa requiere que, en promedio, el gasto energético supere a la energía ingerida.",
      "La forma de conseguirlo debe adaptarse a tus hábitos, preferencias, contexto y capacidad para mantenerlo.",
      "No asumimos que comer lo mínimo sea la mejor estrategia.",
    ],
  },
  {
    title: "Entrenamiento de fuerza",
    paragraphs: [
      "La fuerza ocupa un lugar central porque ayuda a conservar o desarrollar capacidad física mientras cambia la composición corporal.",
      "Ajustamos ejercicios, carga, volumen, frecuencia, rango y dificultad según tu nivel.",
    ],
  },
  {
    title: "Nutrición estratégica",
    paragraphs: [
      "Organizamos una pauta nutricional personalizada que facilite adherencia, aporte proteico suficiente y decisiones aplicables.",
      "No imponemos alimentos milagro, menús de castigo ni prohibiciones universales.",
    ],
  },
  {
    title: "Actividad diaria y trabajo aeróbico",
    paragraphs: [
      "Caminar, bicicleta, elíptica u otras actividades pueden ayudar a aumentar el gasto, mejorar la condición física y sostener el resultado.",
      "La modalidad y la dosis dependen de tu tolerancia, preferencias y disponibilidad.",
    ],
  },
  {
    title: "Hábitos y recuperación",
    paragraphs: [
      "Sueño, estrés, horarios, entorno y organización pueden influir en la adherencia y en la capacidad para entrenar.",
      "No buscamos una vida perfecta, sino reducir las barreras que impiden mantener el plan.",
    ],
  },
  {
    title: "Medición y ajustes",
    paragraphs: [
      "Revisamos tendencias de peso, perímetros, fotografías, rendimiento, energía, hambre y cumplimiento cuando aportan información útil.",
      "Una única medición no decide el rumbo del proceso.",
    ],
  },
];

const possibleBenefits = [
  "Reducir grasa corporal",
  "Conservar mejor la masa muscular",
  "Mejorar fuerza y capacidad física",
  "Organizar una alimentación más sostenible",
  "Aumentar la actividad diaria",
  "Comprender qué ajustes tienen sentido",
  "Reducir la dependencia de dietas genéricas",
  "Construir una estrategia que pueda mantenerse",
];

const progressSignals = [
  "Tendencia del peso a medio plazo",
  "Perímetros y medidas comparables",
  "Cambios visuales con condiciones similares",
  "Rendimiento en ejercicios clave",
  "Nivel de energía y recuperación",
  "Hambre y facilidad para seguir la pauta",
  "Actividad diaria y regularidad",
  "Capacidad para mantener el proceso sin extremos",
];

const adjustmentOptions = [
  "Ajustar cantidades o distribución de comidas",
  "Revisar el aporte proteico",
  "Modificar volumen o frecuencia de entrenamiento",
  "Aumentar o reducir actividad aeróbica",
  "Mejorar la organización semanal",
  "Cambiar ejercicios que no encajan",
  "Simplificar la pauta nutricional",
  "Crear una fase de mantenimiento cuando corresponde",
];

const audience = [
  "Quieres reducir grasa sin seguir otra rutina genérica",
  "Has perdido peso antes y lo has recuperado",
  "Quieres conservar fuerza y masa muscular",
  "Necesitas una estrategia compatible con tus horarios",
  "Quieres combinar entrenamiento y nutrición",
  "Prefieres entrenar con autonomía",
  "Puedes seguir un programa explicado",
  "Aceptas revisar el proceso según datos reales",
  "Comprendes que no existe una velocidad universal",
  "Buscas modalidad online o valoración y revisiones en Madrid",
];

const coordinationCases = [
  "Síntomas nuevos o no estudiados",
  "Enfermedad descompensada",
  "Trastorno de la conducta alimentaria actual o sospechado",
  "Embarazo o posparto con indicaciones específicas",
  "Cirugía reciente",
  "Uso de medicación que requiere seguimiento clínico",
  "Cambios rápidos de peso sin explicación",
  "Cualquier contraindicación médica para ejercicio o pérdida de peso",
];

const faqs = [
  {
    q: "¿Perder peso y perder grasa es lo mismo?",
    a: [
      "No exactamente.",
      "El peso corporal incluye grasa, masa muscular, agua, glucógeno, contenido digestivo y otros tejidos.",
      "Por eso valoramos tendencias y más de un indicador cuando resulta útil.",
    ],
  },
  {
    q: "¿Cuánto peso puedo perder por semana?",
    a: [
      "No existe una cifra adecuada para todas las personas.",
      "La velocidad depende del punto de partida, el déficit energético, la adherencia, la actividad, la salud y la respuesta individual.",
      "No garantizamos plazos ni pérdidas concretas.",
    ],
  },
  {
    q: "¿Tengo que pasar hambre para perder grasa?",
    a: [
      "No debería ser la premisa del proceso.",
      "Puede existir algo de hambre en determinados momentos, pero una pauta útil debe buscar saciedad, organización y adherencia razonable.",
    ],
  },
  {
    q: "¿Es obligatorio contar calorías?",
    a: [
      "No siempre.",
      "En algunas personas puede ser una herramienta temporal y en otras funcionan mejor pautas por porciones, estructura de comidas o cambios concretos.",
    ],
  },
  {
    q: "¿Tengo que eliminar carbohidratos?",
    a: [
      "No.",
      "La pérdida de grasa no exige eliminar un macronutriente concreto.",
      "La distribución se adapta a preferencias, entrenamiento, tolerancia y adherencia.",
    ],
  },
  {
    q: "¿Puedo perder grasa sin hacer cardio?",
    a: [
      "Puede ocurrir si existe un déficit energético sostenido.",
      "Aun así, el trabajo aeróbico y la actividad diaria pueden aportar beneficios y facilitar la estrategia en muchas personas.",
    ],
  },
  {
    q: "¿Por qué es importante entrenar fuerza?",
    a: [
      "Porque durante una fase de pérdida de peso interesa que la mayor parte posible del cambio proceda de grasa y no de masa libre de grasa.",
      "La fuerza es una herramienta relevante para proteger capacidad y composición corporal.",
    ],
  },
  {
    q: "¿Se puede perder grasa y ganar músculo al mismo tiempo?",
    a: [
      "Puede ocurrir en algunas personas, especialmente según su experiencia, punto de partida y calidad del programa.",
      "No se promete y no es necesario que ocurra para que el proceso sea positivo.",
    ],
  },
  {
    q: "¿Qué pasa si la báscula deja de bajar?",
    a: [
      "Primero revisamos si existe una meseta real y no una variación normal de agua o medición.",
      "Después analizamos adherencia, actividad, entrenamiento, pauta nutricional y tendencia antes de modificar el plan.",
    ],
  },
  {
    q: "¿Incluye nutrición personalizada?",
    a: [
      "Los planes y programas pueden incluir pauta nutricional personalizada dentro del servicio de GHC Training.",
      "No sustituye tratamiento médico ni nutrición clínica cuando sean necesarios.",
    ],
  },
  {
    q: "¿Puedo hacer el programa desde casa?",
    a: [
      "Sí, cuando el espacio y el material permiten aplicar la planificación.",
      "También puede realizarse en gimnasio, parque u otro entorno adecuado.",
    ],
  },
  {
    q: "¿Puedo realizarlo completamente online?",
    a: [
      "Sí, si la valoración confirma que la modalidad online encaja con tu situación y puedes aplicar el programa con autonomía.",
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
    q: "¿Puedo empezar si tengo lesiones o una patología?",
    a: [
      "Depende del caso, del estado actual y de las indicaciones sanitarias.",
      "La valoración permite decidir si el servicio encaja, qué límites deben respetarse o si es necesaria coordinación profesional.",
    ],
  },
  {
    q: "¿La valoración inicial es obligatoria?",
    a: [
      "Sí.",
      "Es necesaria para conocer el punto de partida, elegir la modalidad y diseñar una estrategia personalizada.",
    ],
  },
  {
    q: "¿Garantizáis una pérdida concreta?",
    a: [
      "No.",
      "La respuesta depende de múltiples factores y GHC Training no garantiza kilos, porcentajes ni plazos.",
    ],
  },
];

const evidenceSources = [
  {
    title:
      "Effect of exercise training on weight loss, body composition changes, and weight maintenance in adults with overweight or obesity",
    context:
      "Revisión global de 2021 sobre ejercicio, pérdida de peso, grasa visceral, composición corporal y mantenimiento.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8365736/",
  },
  {
    title:
      "Effect of resistance exercise on body composition, muscle strength and cardiometabolic health during dietary weight loss",
    context:
      "Revisión sistemática y metaanálisis de 2025 sobre fuerza durante pérdida de peso inducida por dieta.",
    url: "https://bmjopensem.bmj.com/content/11/3/e002363",
  },
  {
    title:
      "Enhanced protein intake on maintaining muscle mass, strength, and physical function in adults with overweight/obesity",
    context:
      "Revisión sistemática y metaanálisis de 2024 sobre proteína y conservación de masa muscular durante pérdida de peso.",
    url: "https://www.clinicalnutritionespen.com/article/S2405-4577%2824%2900176-1/fulltext",
  },
  {
    title:
      "Resistance training effectiveness on body composition and body weight outcomes in individuals with overweight and obesity",
    context:
      "Revisión sistemática y metaanálisis de 2022 sobre fuerza, masa grasa y masa magra.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9285060/",
  },
  {
    title:
      "Aerobic Exercise and Weight Loss in Adults: A Systematic Review and Dose-Response Meta-Analysis",
    context:
      "Metaanálisis de 2024 sobre ejercicio aeróbico, peso, cintura y grasa corporal.",
    url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2828487",
  },
  {
    title:
      "Long term maintenance of weight loss with non-surgical interventions in obese adults",
    context:
      "Revisión sistemática y metaanálisis sobre mantenimiento del peso y estrategias conductuales de dieta y actividad física.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4020585/",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Pérdida de grasa con entrenamiento personalizado | GHC",
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
      name: "Valoración y planificación personalizada para pérdida de grasa",
      serviceType: "Entrenamiento personalizado y nutrición estratégica",
      description:
        "Valoración, entrenamiento de fuerza, pauta nutricional y seguimiento personalizado para personas que quieren reducir grasa y conservar capacidad física.",
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
          name: "Pérdida de grasa",
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

export default function PerdidaDeGrasaPage() {
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
          <a href="#estrategia">Estrategia</a>
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
              <span>Pérdida de grasa</span>
            </div>

            <p className={styles.kicker}>
              FUERZA · NUTRICIÓN · ACTIVIDAD · SEGUIMIENTO
            </p>

            <h1>Pérdida de grasa con una estrategia personalizada</h1>

            <div className={styles.heroLead}>
              <p>
                Perder grasa no consiste en comer lo mínimo ni en entrenar al
                máximo durante unas semanas. Consiste en crear una estrategia
                que puedas aplicar, medir y ajustar sin sacrificar tu capacidad
                física ni convertir el proceso en otra dieta genérica.
              </p>

              <p>
                En GHC Training valoramos tu punto de partida y combinamos
                entrenamiento de fuerza, nutrición estratégica, actividad y
                seguimiento para construir un plan adaptado a tu vida real.
              </p>
            </div>

            <div className={styles.ctaRow}>
              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar valoración personalizada
                <ArrowIcon />
              </Link>

              <Link href="/metodo-ghc" className={styles.secondaryButton}>
                Conocer el Método GHC
                <ArrowIcon />
              </Link>
            </div>

            <p className={styles.heroNote}>
              No garantizamos kilos, porcentajes ni plazos. La respuesta es
              individual y el programa se revisa según evolución.
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
            <p className={styles.kicker}>MÁS QUE UN NÚMERO EN LA BÁSCULA</p>
            <h2>Perder peso no siempre significa mejorar la composición corporal</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                El peso corporal incluye grasa, masa muscular, agua, glucógeno,
                contenido digestivo y otros tejidos. Puede variar sin que la
                grasa cambie en la misma proporción.
              </p>

              <p>
                Por eso no evaluamos todo el proceso con una única cifra ni
                asumimos que bajar más rápido sea siempre mejor.
              </p>

              <p>
                Buscamos reducir grasa mientras protegemos la fuerza, la
                capacidad física y la posibilidad de mantener el resultado.
              </p>
            </div>

            <div>
              <p>
                Según el caso, utilizamos tendencias de peso, perímetros,
                fotografías comparables, rendimiento, energía, hambre y
                adherencia para comprender qué está ocurriendo.
              </p>

              <p className={styles.emphasis}>
                El objetivo no es pesar menos a cualquier precio. Es mejorar la
                composición corporal con una estrategia que tenga sentido para
                ti.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>CALIDAD DE LA PÉRDIDA</p>
            <h2>Reducir grasa mientras conservas capacidad y autonomía</h2>

            <p>
              La alimentación determina gran parte del déficit energético, pero
              el entrenamiento, la actividad y la recuperación influyen en la
              composición corporal, el rendimiento y la posibilidad de sostener
              el proceso.
            </p>
          </div>

          <ul className={styles.benefitGrid}>
            {possibleBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>La respuesta no es idéntica para todo el mundo.</strong>

            <span>
              El punto de partida, la edad, la experiencia, la salud, el nivel
              de actividad y la adherencia pueden modificar la evolución.
            </span>
          </div>
        </section>

        <section className={styles.assessmentSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>ANTES DE RECORTAR COMIDA</p>
            <h2>Primero entendemos por qué tu estrategia anterior no funcionó</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>La valoración inicial nos ayuda a ordenar:</p>

              <ul>
                <li>objetivo y expectativas;</li>
                <li>historial de dietas y cambios de peso;</li>
                <li>experiencia con entrenamiento de fuerza;</li>
                <li>actividad diaria y trabajo sedentario;</li>
                <li>horarios, comidas y organización semanal;</li>
                <li>hambre, preferencias y barreras habituales;</li>
                <li>entorno, material y disponibilidad;</li>
                <li>lesiones, patologías o indicaciones declaradas.</li>
              </ul>
            </div>

            <div>
              <p>
                No empezamos imponiendo una cifra de calorías o una rutina
                idéntica para todas las personas.
              </p>

              <p>
                Definimos qué cambios pueden aplicarse, qué conviene medir y qué
                nivel de seguimiento resulta razonable.
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
            <h2>Valoración, estrategia, autonomía y revisión</h2>

            <p>
              Un proceso personalizado necesita una dirección clara y ajustes
              basados en la respuesta real, no en impulsos semanales.
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

        <section id="estrategia" className={styles.criteriaSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>SEIS COMPONENTES CONECTADOS</p>
            <h2>No depende de un alimento, un ejercicio o una aplicación</h2>
          </div>

          <div className={styles.trainingGrid}>
            {strategyComponents.map((component, index) => (
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
            <p className={styles.kicker}>MEDIR SIN OBSESIONARSE</p>
            <h2>Una semana aislada no define el resultado</h2>

            <p>
              El peso puede cambiar por agua, sal, carbohidratos, ciclo
              menstrual, entrenamiento, tránsito digestivo y otras variables.
              Revisamos tendencias y contexto antes de intervenir.
            </p>
          </div>

          <ul className={styles.benefitGrid}>
            {progressSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>

          <div className={styles.proseColumns}>
            <div>
              <p>
                Si la evolución no coincide con lo esperado, comprobamos primero
                la calidad de los datos y la aplicación real del programa.
              </p>

              <p>
                No reducimos comida automáticamente por una medición aislada.
              </p>
            </div>

            <div>
              <p className={styles.emphasis}>
                Ajustar bien requiere distinguir una variación normal de una
                tendencia que realmente necesita cambios.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.progressSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>CUANDO HAY QUE MODIFICAR EL PLAN</p>
            <h2>Ajustamos la estrategia, no castigamos a la persona</h2>
          </div>

          <ul className={styles.audienceList}>
            {adjustmentOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>Más restricción no siempre es la respuesta.</strong>
            <span>
              A veces el problema está en la adherencia, la organización, el
              entrenamiento, la actividad o una pauta demasiado difícil de
              mantener.
            </span>
          </div>
        </section>

        <section className={styles.autonomySection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>SIN CITAS FIJAS RECURRENTES</p>
            <h2>Aplicación flexible, pero con dirección profesional</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>GHC Training no vende sesiones recurrentes uno a uno.</p>

              <p>
                Después de valorar y explicar el programa, entrenas y aplicas
                las pautas con autonomía en el entorno acordado.
              </p>

              <p>
                Esto permite organizar tus horarios, integrar el proceso en tu
                vida y aprender a tomar decisiones con más criterio.
              </p>
            </div>

            <div>
              <p>
                La autonomía no significa abandono. Revisamos la evolución y
                ajustamos el programa a las 4, 8 o 12 semanas según la opción
                contratada.
              </p>

              <p className={styles.emphasis}>
                Aplicas el plan con autonomía, pero con valoración,
                planificación y revisión profesional.
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
              <h3>Programa online para pérdida de grasa</h3>

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
                <li>valoras entrenamiento y nutrición conectados.</li>
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
                <li>comprobamos medidas y evolución;</li>
                <li>ajustamos entrenamiento y organización.</li>
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
            <p className={styles.kicker}>LÍMITES Y COORDINACIÓN</p>
            <h2>Trabajamos desde entrenamiento, hábitos y nutrición estratégica</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                GHC Training no diagnostica enfermedades, no prescribe
                medicación y no sustituye la medicina, la psicología, la
                fisioterapia ni la nutrición clínica cuando sean necesarias.
              </p>

              <p>
                El servicio se centra en valoración física, planificación de
                entrenamiento, pauta nutricional dentro de nuestro ámbito,
                hábitos y seguimiento.
              </p>
            </div>

            <div>
              <p>Puede ser necesaria coordinación sanitaria cuando existen:</p>

              <ul>
                {coordinationCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className={styles.emphasis}>
                Si una situación queda fuera de nuestro ámbito, se detiene o se
                adapta el proceso y se deriva.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.audienceSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>PUNTO DE PARTIDA</p>
            <h2>Puede encajar si buscas una estrategia personalizada</h2>
          </div>

          <ul className={styles.audienceList}>
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.medicalNote}>
            <strong>La idoneidad se confirma en la valoración.</strong>
            <span>
              El deseo de perder grasa no determina por sí solo qué programa,
              ritmo o modalidad resultan adecuados.
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
                Videollamada, información guiada, revisión de hábitos, entorno
                y material disponibles.
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
              <h3>Primer bloque personalizado</h3>
              <p className={styles.priceLine}>220 €</p>
              <p>
                Entrenamiento, pauta nutricional y seguimiento online durante
                cuatro semanas.
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
                Tres bloques de entrenamiento y nutrición con seguimiento y
                revisiones según evolución.
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
              Solicitar valoración personalizada
              <ArrowIcon />
            </Link>
          </div>
        </section>

        <section className={styles.criteriaSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>INFORMACIÓN BASADA EN EVIDENCIA</p>
            <h2>Qué respalda la estrategia</h2>
          </div>

          <div className={styles.proseColumns}>
            <div>
              <p>
                La pérdida de grasa requiere un déficit energético sostenido,
                pero la calidad del proceso depende de cómo se construye y de
                qué ocurre con la fuerza, la masa muscular, el rendimiento y la
                adherencia.
              </p>

              <p>
                La evidencia disponible respalda combinar alimentación,
                entrenamiento y actividad. El trabajo de fuerza puede ayudar a
                proteger la masa libre de grasa durante una fase de pérdida de
                peso, y un aporte proteico adecuado puede apoyar ese objetivo.
              </p>

              <p>
                No existe una distribución universal de alimentos, una rutina
                obligatoria ni una velocidad ideal válida para todas las
                personas.
              </p>

              <p className={styles.emphasis}>
                Por eso personalizamos la estrategia y revisamos la respuesta
                antes de aumentar la restricción.
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
            <h2>Preguntas sobre pérdida de grasa</h2>
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

            <h2>Empieza por una valoración, no por otra dieta genérica</h2>

            <p>
              Antes de recortar comida o aumentar ejercicio, necesitamos
              entender tu punto de partida, tu historial y tu capacidad para
              sostener el proceso.
            </p>

            <p>
              Valoramos tu situación, definimos prioridades y diseñamos una
              estrategia de entrenamiento y nutrición que puedas aplicar con
              autonomía y revisar profesionalmente.
            </p>

            <div className={styles.ctaRow}>
              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar valoración personalizada
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
            <span>Fuerza como pilar</span>
            <span>Nutrición aplicable</span>
            <span>Revisiones profesionales</span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/" aria-label="GHC Training">
          <GHCTrainingLogo size="sm" variant="dark" />
        </Link>

        <p>Pérdida de grasa · Fuerza, nutrición y seguimiento</p>

        <Link href="/valoracion-integral">Solicitar valoración</Link>
      </footer>
    </div>
  );
}
