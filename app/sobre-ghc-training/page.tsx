import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import styles from "./page.module.css";

const siteUrl = "https://www.ghctraining.com";
const pageUrl = `${siteUrl}/sobre-ghc-training`;

const description =
  "Conoce GHC Training, empresa de salud y rendimiento liderada por Alby Aguiar. Más de 30 años de experiencia, Método GHC y atención online o en Madrid.";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34628798859";
const whatsappMessage = encodeURIComponent(
  "Hola Alby, quiero solicitar una valoración y conocer qué opción de GHC Training encaja mejor conmigo."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: {
    absolute: "Sobre GHC Training | Salud, fuerza y entrenamiento personalizado",
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Sobre GHC Training | Salud a través de la fuerza",
    description:
      "Empresa de salud y rendimiento liderada por Alby Aguiar, con un método propio basado en valoración, fuerza, nutrición estratégica, autonomía y revisión.",
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
    title: "Sobre GHC Training | Salud a través de la fuerza",
    description:
      "Conoce la empresa, el liderazgo de Alby Aguiar y el sistema de trabajo de GHC Training.",
    images: ["/alby-ghc-training.png"],
  },
};

const trustSignals = [
  {
    value: "30+",
    title: "años de experiencia",
    text: "aplicados al entrenamiento, la salud activa y la planificación personalizada",
  },
  {
    value: "1",
    title: "método propio",
    text: "para valorar, diseñar, explicar, revisar y ajustar cada proceso",
  },
  {
    value: "2",
    title: "modalidades",
    text: "online para España y América Latina, o valoración y revisiones en Madrid",
  },
  {
    value: "0",
    title: "rutinas genéricas",
    text: "la planificación parte del contexto, los recursos y la respuesta real",
  },
];

const companyPrinciples = [
  {
    title: "Valoración antes que programación",
    text: "No empezamos por una tabla de ejercicios. Primero estudiamos el objetivo, el historial, la experiencia, la disponibilidad, el entorno y las limitaciones declaradas.",
  },
  {
    title: "La fuerza como pilar de salud",
    text: "Entendemos la fuerza como capacidad, autonomía y protección. La dosis, los ejercicios y la progresión cambian según la persona.",
  },
  {
    title: "Personalización real",
    text: "Adaptamos entrenamiento, nutrición estratégica, actividad y organización a la vida real, no a un modelo ideal imposible de sostener.",
  },
  {
    title: "Autonomía con dirección",
    text: "Explicamos el programa para que la persona pueda aplicarlo con libertad horaria, sin depender de una cita fija recurrente.",
  },
  {
    title: "Revisión y ajustes",
    text: "La planificación no se considera terminada cuando se entrega. Se revisa según evolución, dificultades, respuesta y cambios de contexto.",
  },
  {
    title: "Límites profesionales claros",
    text: "No diagnosticamos ni sustituimos atención médica, psicológica, fisioterapéutica o nutrición clínica cuando resultan necesarias.",
  },
];

const methodStages = [
  {
    number: "01",
    title: "Valoramos",
    text: "Comprendemos el punto de partida, las necesidades, el objetivo, la experiencia y las circunstancias que pueden influir en el proceso.",
  },
  {
    number: "02",
    title: "Definimos prioridades",
    text: "Ordenamos lo importante y evitamos intentar cambiar todo al mismo tiempo.",
  },
  {
    number: "03",
    title: "Diseñamos",
    text: "Convertimos la información en una estrategia de entrenamiento, nutrición, actividad y progresión.",
  },
  {
    number: "04",
    title: "Explicamos",
    text: "Enseñamos qué hacer, cómo aplicarlo y por qué se ha elegido cada decisión.",
  },
  {
    number: "05",
    title: "Acompañamos",
    text: "Resolvemos dudas y ayudamos a mantener el rumbo sin generar dependencia.",
  },
  {
    number: "06",
    title: "Revisamos y ajustamos",
    text: "Analizamos la respuesta y modificamos el plan cuando los datos, la evolución o el contexto lo requieren.",
  },
];

const areas = [
  {
    title: "Entrenamiento personalizado",
    text: "Planificación de fuerza, movilidad, capacidad física y progresión adaptada al punto de partida.",
    href: "/metodo-ghc",
    cta: "Conocer el Método GHC",
  },
  {
    title: "Pérdida de grasa",
    text: "Estrategias que conectan fuerza, nutrición, actividad y seguimiento sin prometer resultados rápidos.",
    href: "/perdida-de-grasa",
    cta: "Ver pérdida de grasa",
  },
  {
    title: "Fibromialgia",
    text: "Entrenamiento prudente, progresivo y coordinado con las indicaciones sanitarias de cada persona.",
    href: "/entrenamiento-fibromialgia",
    cta: "Ver entrenamiento para fibromialgia",
  },
  {
    title: "Lipedema",
    text: "Fuerza, movilidad, actividad y acompañamiento adaptados, dentro de los límites del entrenamiento.",
    href: "/entrenamiento-lipedema",
    cta: "Ver entrenamiento para lipedema",
  },
];

const reasonsToTrust = [
  "Más de 30 años de experiencia aplicada",
  "Método de trabajo definido y explicable",
  "Valoración obligatoria antes de planificar",
  "Programas adaptados al entorno disponible",
  "Modelo compatible con libertad horaria",
  "Revisiones profesionales según el programa",
  "Comunicación clara sobre límites y expectativas",
  "Servicios online y presenciales bien diferenciados",
];

const boundaries = [
  {
    title: "No prometemos resultados garantizados",
    text: "La respuesta depende del punto de partida, la salud, la adherencia, el entorno, la recuperación y otros factores individuales.",
  },
  {
    title: "No diagnosticamos enfermedades",
    text: "Trabajamos desde entrenamiento, movimiento, hábitos y nutrición estratégica dentro de nuestro ámbito profesional.",
  },
  {
    title: "No sustituimos atención sanitaria",
    text: "Cuando una situación requiere medicina, fisioterapia, psicología o nutrición clínica, se respeta y se coordina el proceso.",
  },
  {
    title: "No vendemos dependencia",
    text: "Nuestro modelo busca que la persona comprenda y aplique su planificación con autonomía y criterio.",
  },
];

const relatedPages = [
  {
    label: "Método GHC",
    description: "Cómo valoramos, diseñamos, guiamos, revisamos y ajustamos.",
    href: "/metodo-ghc",
  },
  {
    label: "Valoración integral",
    description: "El punto de entrada para decidir qué estrategia y modalidad encajan.",
    href: "/valoracion-integral",
  },
  {
    label: "Entrenador personal en Madrid",
    description: "Valoraciones y revisiones presenciales en un lugar acordado.",
    href: "/entrenador-personal-madrid",
  },
  {
    label: "Entrenador personal online",
    description: "Planificación y seguimiento a distancia para España y América Latina.",
    href: "/entrenador-personal-online",
  },
  {
    label: "Pérdida de grasa",
    description: "Fuerza, nutrición estratégica, actividad y seguimiento personalizado.",
    href: "/perdida-de-grasa",
  },
  {
    label: "Entrenamiento para fibromialgia",
    description: "Trabajo individualizado, progresivo y respetuoso con el contexto clínico.",
    href: "/entrenamiento-fibromialgia",
  },
  {
    label: "Entrenamiento para lipedema",
    description: "Fuerza, movilidad y actividad adaptadas a cada caso.",
    href: "/entrenamiento-lipedema",
  },
];

const faqs = [
  {
    q: "¿Qué es GHC Training?",
    a: [
      "GHC Training es una empresa especializada en salud y rendimiento.",
      "Trabajamos mediante valoración, entrenamiento personalizado, nutrición estratégica, seguimiento y revisiones profesionales.",
      "La empresa está liderada por Alby Aguiar, fundador y director.",
    ],
  },
  {
    q: "¿Qué significa Health Through Strength?",
    a: [
      "Significa salud a través de la fuerza.",
      "Expresa la idea de que mejorar la capacidad física puede contribuir a la autonomía, la movilidad, la confianza y la calidad de vida.",
      "No implica entrenar al máximo ni utilizar cargas elevadas desde el primer día.",
    ],
  },
  {
    q: "¿Quién es Alby Aguiar?",
    a: [
      "Alby Aguiar es el fundador, director y principal referente visible de GHC Training.",
      "Cuenta con más de 30 años de experiencia vinculada al entrenamiento personal, la salud activa, la composición corporal, la fuerza, la movilidad y la nutrición estratégica.",
    ],
  },
  {
    q: "¿GHC Training es una sola persona o una empresa?",
    a: [
      "GHC Training se presenta y opera como una empresa con un método, unos procesos y una identidad definidos.",
      "Alby Aguiar lidera la dirección y es el principal referente visible.",
      "No se comunica una plantilla fija ni se inventan profesionales que no estén participando en un caso concreto.",
    ],
  },
  {
    q: "¿Tenéis un centro propio abierto al público?",
    a: [
      "No.",
      "GHC Training no dispone actualmente de un centro propio abierto al público.",
      "En Madrid, las valoraciones y revisiones presenciales se realizan en un lugar previamente acordado.",
    ],
  },
  {
    q: "¿Ofrecéis sesiones presenciales recurrentes?",
    a: [
      "No como modelo principal.",
      "En Madrid realizamos valoración, explicación de la planificación y revisiones presenciales cuando corresponde.",
      "Después la persona entrena con autonomía y libertad horaria.",
    ],
  },
  {
    q: "¿Se puede trabajar completamente online?",
    a: [
      "Sí.",
      "La valoración, la planificación, la explicación y las revisiones pueden realizarse a distancia cuando la modalidad encaja con el caso.",
      "El servicio online está disponible para España y América Latina.",
    ],
  },
  {
    q: "¿Qué diferencia al Método GHC?",
    a: [
      "El método organiza el proceso en valoración, definición de prioridades, diseño, explicación, aplicación, revisión y ajustes.",
      "La estructura se mantiene, pero las decisiones concretas cambian según la persona.",
    ],
  },
  {
    q: "¿Trabajáis únicamente con personas deportistas?",
    a: [
      "No.",
      "Trabajamos con personas de diferentes edades, niveles de experiencia y puntos de partida.",
      "La valoración determina la progresión, el entorno y el nivel de complejidad adecuados.",
    ],
  },
  {
    q: "¿Podéis ayudar a personas con lesiones o patologías?",
    a: [
      "Puede ser posible en determinados casos, siempre dentro de los límites profesionales del entrenamiento.",
      "Se respetan el diagnóstico, el tratamiento y las recomendaciones de los profesionales sanitarios.",
      "GHC Training no sustituye atención médica o fisioterapéutica.",
    ],
  },
  {
    q: "¿Todos los servicios incluyen nutrición?",
    a: [
      "La inclusión y el alcance de la pauta nutricional dependen del servicio contratado y de las necesidades del caso.",
      "La nutrición estratégica de GHC Training no sustituye nutrición clínica cuando esta sea necesaria.",
    ],
  },
  {
    q: "¿Cómo puedo saber qué servicio necesito?",
    a: [
      "El primer paso es solicitar una valoración integral.",
      "La valoración permite conocer el punto de partida, revisar el objetivo y decidir qué modalidad y qué nivel de acompañamiento resultan adecuados.",
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Sobre GHC Training | Salud, fuerza y entrenamiento personalizado",
      description,
      inLanguage: "es-ES",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#organization` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "GHC Training",
      url: siteUrl,
      slogan: "Health Through Strength",
      logo: `${siteUrl}/alby-ghc-training.png`,
      image: `${siteUrl}/alby-ghc-training.png`,
      founder: { "@id": `${siteUrl}/#alby-aguiar` },
      areaServed: [
        { "@type": "Place", name: "Madrid" },
        { "@type": "Country", name: "España" },
        { "@type": "Place", name: "América Latina" },
      ],
      knowsAbout: [
        "Entrenamiento personalizado",
        "Entrenamiento de fuerza",
        "Movilidad",
        "Salud activa",
        "Nutrición estratégica",
        "Pérdida de grasa",
        "Fibromialgia",
        "Lipedema",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#alby-aguiar`,
      name: "Alby Aguiar",
      url: pageUrl,
      image: `${siteUrl}/alby-ghc-training.png`,
      jobTitle: "Fundador y director de GHC Training",
      worksFor: { "@id": `${siteUrl}/#organization` },
      knowsAbout: [
        "Entrenamiento personal",
        "Fuerza",
        "Movilidad",
        "Composición corporal",
        "Salud activa",
        "Nutrición estratégica",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sobre GHC Training",
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

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.buttonIcon}>
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

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.checkIcon}>
    <path
      d="m5 12.5 4.2 4.2L19 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SobreGHCTrainingPage() {
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
          <a href="#empresa">Empresa</a>
          <a href="#liderazgo">Liderazgo</a>
          <a href="#metodo">Método</a>
          <a href="#servicios">Servicios</a>
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
              <span>Sobre GHC Training</span>
            </div>

            <p className={styles.kicker}>
              EMPRESA · MÉTODO · EXPERIENCIA · DIRECCIÓN
            </p>

            <h1>
              GHC Training: salud a través de la fuerza, con método y criterio
            </h1>

            <div className={styles.heroLead}>
              <p>
                GHC Training es una empresa especializada en salud y rendimiento,
                liderada por Alby Aguiar y construida sobre más de 30 años de
                experiencia aplicada.
              </p>
              <p>
                Nuestro trabajo conecta valoración, entrenamiento personalizado,
                nutrición estratégica, actividad, autonomía y revisión para
                transformar una necesidad concreta en una planificación que pueda
                aplicarse en la vida real.
              </p>
              <p>
                No vendemos rutinas genéricas ni dependencia de una cita fija.
                Diseñamos procesos con dirección profesional para que cada persona
                comprenda qué hace, por qué lo hace y cómo debe evolucionar.
              </p>
            </div>

            <div className={styles.ctaRow}>
              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar valoración <ArrowIcon />
              </Link>
              <Link href="/metodo-ghc" className={styles.secondaryButton}>
                Conocer el Método GHC <ArrowIcon />
              </Link>
            </div>

            <p className={styles.heroNote}>
              Atención online para España y América Latina, o con valoración y
              revisiones presenciales en Madrid.
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

            <div className={styles.heroSignature}>
              <span>FUNDADOR Y DIRECTOR</span>
              <strong>Alby Aguiar</strong>
              <p>Más de 30 años de experiencia aplicada</p>
            </div>
          </div>
        </section>

        <section className={styles.trustStrip} aria-label="Datos de confianza">
          {trustSignals.map((item) => (
            <article key={item.title}>
              <strong>{item.value}</strong>
              <div>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="empresa" className={styles.companySection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>QUÉ ES GHC TRAINING</p>
            <h2>Una empresa con identidad, método y responsabilidad</h2>
            <p>
              GHC Training no es una colección de rutinas ni una marca construida
              alrededor de promesas rápidas. Es una estructura profesional para
              estudiar cada caso, ordenar prioridades y diseñar una estrategia de
              entrenamiento y salud activa con sentido.
            </p>
          </div>

          <div className={styles.companyGrid}>
            <article className={styles.companyStatement}>
              <p>
                La empresa está liderada por Alby Aguiar, fundador, director y
                principal referente visible. La comunicación y la toma de
                decisiones parten de una misma idea:
              </p>
              <blockquote>
                La fuerza no es solamente rendimiento. Es capacidad, autonomía,
                salud y calidad de vida.
              </blockquote>
              <p>
                Esa idea se convierte en procedimientos concretos mediante el
                Método GHC: valorar, definir prioridades, diseñar, explicar,
                acompañar, revisar y ajustar.
              </p>
            </article>

            <article className={styles.definitionCard}>
              <span>GHC SIGNIFICA</span>
              <h3>Health Through Strength</h3>
              <p>
                Salud a través de la fuerza. No se trata de entrenar más fuerte,
                sino de desarrollar la capacidad adecuada con la dosis, la
                progresión y el contexto adecuados.
              </p>
              <div className={styles.definitionTags}>
                <span>Fuerza</span>
                <span>Movilidad</span>
                <span>Autonomía</span>
                <span>Salud activa</span>
                <span>Nutrición</span>
                <span>Seguimiento</span>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>PRINCIPIOS OPERATIVOS</p>
            <h2>Cómo convertimos una filosofía en decisiones reales</h2>
          </div>

          <div className={styles.principlesGrid}>
            {companyPrinciples.map((principle, index) => (
              <article key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="liderazgo" className={styles.leadershipSection}>
          <div className={styles.leadershipImage}>
            <Image
              src="/alby-ghc-training.png"
              alt="Alby Aguiar, fundador y director de GHC Training"
              fill
              sizes="(max-width: 980px) 100vw, 42vw"
            />
          </div>

          <div className={styles.leadershipContent}>
            <p className={styles.kicker}>LIDERAZGO VISIBLE</p>
            <h2>Alby Aguiar, fundador y director</h2>

            <div className={styles.prose}>
              <p>
                Alby Aguiar es el fundador, director y principal referente visible
                de GHC Training. Su experiencia profesional se ha desarrollado
                durante más de tres décadas alrededor del entrenamiento personal,
                la fuerza, la movilidad, la composición corporal, la salud activa
                y la nutrición estratégica.
              </p>
              <p>
                Esa experiencia no se presenta como un argumento para imponer una
                única forma de entrenar. Se utiliza para reconocer diferencias,
                anticipar dificultades, establecer prioridades y construir
                procesos que puedan explicarse y revisarse.
              </p>
              <p>
                GHC Training convierte esa trayectoria en un sistema de trabajo
                que no depende de improvisaciones: valoración previa,
                planificación, autonomía, seguimiento y ajustes.
              </p>
            </div>

            <div className={styles.leadershipPrinciples}>
              <span>Dirección profesional</span>
              <span>Experiencia aplicada</span>
              <span>Criterio antes que tendencia</span>
              <span>Responsabilidad sobre los límites</span>
            </div>

            <Link href="/metodo-ghc" className={styles.darkButton}>
              Ver cómo se aplica el Método GHC <ArrowIcon />
            </Link>
          </div>
        </section>

        <section id="metodo" className={styles.methodSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>DE LA EXPERIENCIA AL SISTEMA</p>
            <h2>Un método que puede explicarse, aplicarse y revisarse</h2>
            <p>
              La personalización no consiste en cambiar ejercicios al azar. Se
              construye mediante una secuencia de decisiones que conecta
              información, prioridades, planificación y respuesta real.
            </p>
          </div>

          <div className={styles.methodGrid}>
            {methodStages.map((stage) => (
              <article key={stage.title}>
                <span>{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.methodFooter}>
            <p>
              El método se aplica tanto en modalidad online como en procesos que
              incluyen valoración y revisiones presenciales en Madrid.
            </p>
            <Link href="/metodo-ghc" className={styles.secondaryButton}>
              Explorar el Método GHC <ArrowIcon />
            </Link>
          </div>
        </section>

        <section id="servicios" className={styles.areasSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>ÁREAS DE TRABAJO</p>
            <h2>Una misma forma de trabajar, adaptada a necesidades diferentes</h2>
            <p>
              Cada página especializada explica un territorio concreto. Todas
              comparten la valoración previa, el criterio profesional y la
              necesidad de ajustar el proceso a la persona.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {areas.map((area, index) => (
              <article key={area.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <Link href={area.href}>
                  {area.cta} <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.modelSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>MODELO DE ATENCIÓN</p>
            <h2>Dirección profesional sin depender de sesiones recurrentes</h2>
          </div>

          <div className={styles.modelGrid}>
            <article>
              <span>ONLINE</span>
              <h3>España y América Latina</h3>
              <p>
                La valoración, la explicación, la planificación y las revisiones
                pueden realizarse a distancia cuando la modalidad encaja con la
                situación.
              </p>
              <ul>
                <li><CheckIcon /> Libertad para organizar horarios</li>
                <li><CheckIcon /> Entrenamiento en el entorno disponible</li>
                <li><CheckIcon /> Planificación y seguimiento profesional</li>
                <li><CheckIcon /> Revisiones según el programa contratado</li>
              </ul>
              <Link href="/entrenador-personal-online">
                Conocer la modalidad online <ArrowIcon />
              </Link>
            </article>

            <article>
              <span>MADRID</span>
              <h3>Valoración y revisiones presenciales</h3>
              <p>
                En Madrid podemos realizar la valoración, revisar movimientos
                concretos, explicar la planificación y comprobar la evolución en
                un lugar previamente acordado.
              </p>
              <ul>
                <li><CheckIcon /> Sin centro propio abierto al público</li>
                <li><CheckIcon /> Lugar acordado según cada caso</li>
                <li><CheckIcon /> Entrenamiento posterior con autonomía</li>
                <li><CheckIcon /> Revisiones a las 4, 8 o 12 semanas</li>
              </ul>
              <Link href="/entrenador-personal-madrid">
                Conocer la modalidad en Madrid <ArrowIcon />
              </Link>
            </article>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>POR QUÉ CONFIAR EN GHC</p>
            <h2>La confianza no se pide: se construye con claridad</h2>
            <p>
              Explicamos qué hacemos, cómo trabajamos, qué puede esperar una
              persona y dónde terminan nuestros límites profesionales.
            </p>
          </div>

          <ul className={styles.trustList}>
            {reasonsToTrust.map((reason) => (
              <li key={reason}>
                <CheckIcon />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.boundariesSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>RESPONSABILIDAD PROFESIONAL</p>
            <h2>También definimos con claridad lo que no hacemos</h2>
          </div>

          <div className={styles.boundariesGrid}>
            {boundaries.map((boundary) => (
              <article key={boundary.title}>
                <h3>{boundary.title}</h3>
                <p>{boundary.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.medicalNote}>
            <strong>
              El entrenamiento puede complementar un proceso sanitario, pero no
              reemplazarlo.
            </strong>
            <p>
              Cuando existen síntomas nuevos, enfermedad descompensada,
              contraindicaciones, cirugía reciente o necesidades clínicas, la
              valoración puede requerir autorización, coordinación o derivación.
            </p>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>EXPLORA GHC TRAINING</p>
            <h2>Conoce el método, los servicios y las áreas especializadas</h2>
          </div>

          <div className={styles.relatedGrid}>
            {relatedPages.map((page) => (
              <Link href={page.href} key={page.href}>
                <span>{page.label}</span>
                <p>{page.description}</p>
                <strong>
                  Ver página <ArrowIcon />
                </strong>
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>PREGUNTAS FRECUENTES</p>
            <h2>Lo que conviene saber sobre GHC Training</h2>
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
            <p className={styles.kicker}>EL PRIMER PASO</p>
            <h2>Conocer la empresa es importante. Valorar tu caso es decisivo.</h2>
            <p>
              La valoración integral permite comprender tu punto de partida,
              decidir qué modalidad encaja y convertir tu objetivo en una hoja de
              ruta realista.
            </p>
            <div className={styles.ctaRow}>
              <Link
                href="/valoracion-integral"
                className={styles.primaryButton}
              >
                Solicitar valoración <ArrowIcon />
              </Link>
              <a
                href={whatsappUrl}
                className={styles.lightButton}
                target="_blank"
                rel="noreferrer"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.finalPrinciples}>
            <span>Valoración previa</span>
            <span>Planificación personalizada</span>
            <span>Autonomía guiada</span>
            <span>Revisión profesional</span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/" aria-label="GHC Training">
          <GHCTrainingLogo size="sm" darkText={false} />
        </Link>
        <p>GHC Training · Health Through Strength</p>
        <Link href="/valoracion-integral">Solicitar valoración</Link>
      </footer>
    </div>
  );
}
