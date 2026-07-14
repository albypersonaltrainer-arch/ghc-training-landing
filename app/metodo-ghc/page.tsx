import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";
import styles from "./page.module.css";

const siteUrl = "https://www.ghctraining.com";
const pageUrl = `${siteUrl}/metodo-ghc`;
const description =
  "Conoce el Método GHC: valoración, planificación, seguimiento y ajustes para programas online o con valoraciones y revisiones presenciales en Madrid.";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34628798859";
const whatsappMessage = encodeURIComponent(
  "Hola Alby, quiero solicitar una valoración y conocer cómo aplicar el Método GHC a mi caso."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: {
    absolute: "Método GHC | Entrenamiento personalizado con criterio",
  },
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Método GHC | Entrenamiento personalizado con criterio",
    description,
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
    title: "Método GHC | Entrenamiento personalizado con criterio",
    description,
    images: ["/alby-ghc-training.png"],
  },
};

const methodStages = [
  {
    title: "Valoramos",
    paragraphs: [
      "Antes de diseñar el programa, necesitamos comprender el punto de partida.",
      "Analizamos el objetivo, la experiencia previa, el nivel de actividad, la disponibilidad, el entorno de entrenamiento y las circunstancias que pueden influir en el proceso.",
      "Cuando existen molestias, limitaciones o antecedentes relevantes declarados por la persona, también los tenemos en cuenta para trabajar con prudencia y establecer los límites adecuados.",
    ],
  },
  {
    title: "Definimos prioridades",
    paragraphs: [
      "No todos los objetivos pueden abordarse de la misma manera ni al mismo tiempo.",
      "Ordenamos las necesidades y determinamos qué aspectos deben recibir más atención en cada etapa.",
      "Esto permite establecer una dirección clara y evitar programas excesivamente complejos, desorganizados o difíciles de mantener.",
    ],
  },
  {
    title: "Diseñamos",
    paragraphs: [
      "Convertimos la información obtenida en una planificación adaptada.",
      "Seleccionamos ejercicios, estructura, frecuencia, volumen, intensidad y progresión en función de la persona y de los recursos que realmente tiene disponibles.",
      "El programa puede desarrollarse en un gimnasio, en casa, al aire libre o combinando diferentes entornos, siempre que existan las condiciones adecuadas para trabajar con seguridad y eficacia.",
    ],
  },
  {
    title: "Guiamos",
    paragraphs: [
      "Un programa no termina cuando se entrega.",
      "Explicamos cómo aplicarlo, resolvemos dudas y acompañamos el proceso para que la persona comprenda qué está haciendo y por qué.",
      "El objetivo no es generar dependencia, sino facilitar una ejecución más segura, consciente y autónoma.",
    ],
  },
  {
    title: "Revisamos",
    paragraphs: [
      "Observamos cómo responde la persona al entrenamiento: su evolución, sus sensaciones, su capacidad para cumplir la planificación y los posibles cambios en sus circunstancias.",
      "La revisión permite comprobar si la estrategia mantiene el rumbo previsto o si es necesario replantear alguna parte del proceso.",
    ],
  },
  {
    title: "Ajustamos",
    paragraphs: [
      "El programa evoluciona con la persona.",
      "Modificamos ejercicios, cargas, volumen, frecuencia, progresión u organización cuando la respuesta, el contexto o las necesidades lo requieren.",
      "Ajustar no significa improvisar.",
      "Significa utilizar la información obtenida durante el proceso para seguir tomando decisiones con criterio.",
    ],
  },
];

const faqs = [
  {
    q: "¿El Método GHC es igual para todas las personas?",
    a: [
      "No.",
      "La estructura de trabajo se mantiene —valoración, planificación, aplicación, revisión y ajustes—, pero las decisiones concretas cambian según el objetivo, la experiencia, la disponibilidad, el entorno, el material y la respuesta de cada persona.",
    ],
  },
  {
    q: "¿Necesito entrenar en un gimnasio?",
    a: [
      "No necesariamente.",
      "La planificación puede adaptarse para entrenar en casa, en un gimnasio, en un parque o en otro entorno adecuado.",
      "Antes de diseñarla valoramos qué espacio y qué material tienes realmente disponibles.",
    ],
  },
  {
    q: "¿Tendré que entrenar a una hora fija?",
    a: [
      "No.",
      "Una de las ventajas del sistema es que puedes organizar tus entrenamientos según tu disponibilidad, sin depender de una cita fija con un entrenador.",
      "Esa libertad horaria se mantiene dentro de un proceso guiado: recibes una planificación personalizada, indicaciones para aplicarla y revisiones profesionales según el programa contratado.",
    ],
  },
  {
    q: "¿GHC Training dirige cada sesión?",
    a: [
      "El servicio no se basa en acompañamiento sesión a sesión.",
      "Tras la valoración y el estudio del caso, diseñamos y explicamos la planificación para que puedas entrenar con autonomía.",
      "Cuando es necesario, revisamos movimientos concretos, resolvemos dudas y analizamos la evolución para realizar los ajustes correspondientes.",
    ],
  },
  {
    q: "¿Cada cuánto se revisa el programa?",
    a: [
      "Las revisiones se realizan a las 4, 8 o 12 semanas, según el programa contratado.",
      "En ellas analizamos la aplicación de la planificación, la evolución, las dificultades encontradas y los cambios que puedan ser necesarios.",
    ],
  },
  {
    q: "¿Puedo seguir el método si llevo mucho tiempo sin entrenar?",
    a: [
      "Sí, siempre que la planificación se adapte correctamente al punto de partida.",
      "En estos casos es especialmente importante comenzar con expectativas realistas, una progresión prudente y una estructura que pueda mantenerse.",
    ],
  },
  {
    q: "¿Se puede aplicar tanto online como presencialmente?",
    a: [
      "Sí.",
      "El método puede desarrollarse a distancia o incluir valoraciones y revisiones presenciales en Madrid cuando corresponda.",
      "Lo que se mantiene es el proceso de valoración, estudio, planificación, guía y revisión.",
      "Lo que cambia es la forma de recopilar información y realizar el acompañamiento.",
    ],
  },
  {
    q: "¿El Método GHC sirve para personas con lesiones o patologías?",
    a: [
      "Puede adaptarse a determinadas situaciones, siempre dentro de los límites profesionales del entrenamiento y respetando el diagnóstico, tratamiento y recomendaciones de los profesionales sanitarios.",
      "GHC Training no realiza diagnósticos médicos ni sustituye la atención médica o fisioterapéutica.",
    ],
  },
  {
    q: "¿Incluye nutrición?",
    a: [
      "La inclusión de pautas o planificación nutricional depende del servicio o programa contratado y de las necesidades del caso.",
      "No todos los procesos requieren el mismo nivel de intervención nutricional.",
    ],
  },
  {
    q: "¿Qué ocurre si mi situación cambia durante el programa?",
    a: [
      "La planificación puede revisarse y ajustarse.",
      "Cambios en la disponibilidad, el entorno, el material, la recuperación o la respuesta al entrenamiento pueden hacer necesario reorganizar ejercicios, volumen, frecuencia, progresión o prioridades.",
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
      name: "Método GHC | Entrenamiento personalizado con criterio",
      description,
      inLanguage: "es-ES",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Método GHC",
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
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function MetodoGHCPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className={styles.header}>
        <Link href="/" aria-label="Volver a GHC Training"><GHCTrainingLogo size="md" /></Link>
        <nav className={styles.nav} aria-label="Navegación de la página">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#aplicacion">Aplicación</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href={whatsappUrl} className={styles.headerButton} target="_blank" rel="noreferrer">Solicitar valoración</a>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}><Link href="/">GHC Training</Link><span aria-hidden="true">/</span><span>Método GHC</span></div>
            <p className={styles.kicker}>VALORACIÓN · PLANIFICACIÓN · SEGUIMIENTO · AJUSTES</p>
            <h1>Método GHC: entrenamiento personalizado con criterio</h1>
            <div className={styles.heroLead}>
              <p>El Método GHC es nuestro sistema de trabajo para transformar una situación, una necesidad o un objetivo en un programa de entrenamiento realmente personalizado.</p>
              <p>Nuestra prioridad es comprender a cada persona: su punto de partida, sus necesidades, sus objetivos, su experiencia, sus limitaciones, su disponibilidad y las circunstancias reales que pueden influir en el proceso.</p>
              <p>A partir de esa información definimos prioridades, diseñamos una estrategia y acompañamos su evolución mediante seguimiento, revisión y ajustes continuos.</p>
              <p>Valoramos, diseñamos, guiamos, revisamos y ajustamos para que el entrenamiento tenga dirección, coherencia y continuidad. Así evitamos que el proceso se reduzca a una rutina estándar o a una selección de ejercicios sin un criterio claro.</p>
            </div>
            <div className={styles.ctaRow}>
              <a href={whatsappUrl} className={styles.primaryButton} target="_blank" rel="noreferrer">Solicitar una valoración <ArrowIcon /></a>
              <a href="#como-funciona" className={styles.secondaryButton}>Ver cómo funciona el método <ArrowIcon /></a>
            </div>
            <p className={styles.heroNote}>Aplicable a programas online y a valoraciones y revisiones presenciales en Madrid.</p>
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
          <div className={styles.sectionHeading}><p className={styles.kicker}>CRITERIO Y DIRECCIÓN</p><h2>Un método para tomar mejores decisiones en cada etapa</h2></div>
          <div className={styles.proseColumns}>
            <div>
              <p>El Método GHC organiza todo el proceso de entrenamiento, desde la comprensión inicial de la persona hasta la revisión de su evolución.</p>
              <p>No se limita a decidir qué ejercicios hacer. Nos permite establecer prioridades, ordenar el trabajo y tomar decisiones coherentes en función del objetivo, el punto de partida y la respuesta que se produce durante el proceso.</p>
              <p>Cada programa mantiene una estructura profesional común:</p>
              <ul><li>parte de una valoración previa;</li><li>define objetivos y prioridades;</li><li>establece una planificación;</li><li>incorpora seguimiento;</li><li>revisa la evolución;</li><li>introduce ajustes cuando son necesarios.</li></ul>
            </div>
            <div>
              <p>Lo que cambia es la forma de aplicar esa estructura.</p>
              <p>El volumen de entrenamiento, la intensidad, los ejercicios, la frecuencia, la progresión y el tipo de acompañamiento se adaptan a cada persona, pero también a su disponibilidad, su entorno, el material al que tiene acceso y las circunstancias reales de su día a día.</p>
              <p>No todas las personas pueden entrenar en un gimnasio, disponer del mismo tiempo o seguir la misma organización semanal.</p>
              <p>El método debe encajar en su vida para que pueda mantenerse y avanzar con continuidad.</p>
              <p className={styles.emphasis}>Por eso, el Método GHC no es una rutina cerrada, una tabla idéntica para todos ni una sucesión de ejercicios desconectados.</p>
              <p>Es un sistema de trabajo que aporta criterio, dirección y capacidad de adaptación.</p>
            </div>
          </div>
        </section>

        <section id="como-funciona" className={styles.stagesSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>CÓMO FUNCIONA</p><h2>Seis etapas para construir un proceso con sentido</h2><p>Un programa personalizado no se construye en una sola decisión.</p><p>Requiere comprender, priorizar, planificar, acompañar y revisar.</p><p>Por eso, el Método GHC se organiza en seis etapas conectadas.</p></div>
          <div className={styles.stageGrid}>{methodStages.map((stage, index) => <article className={styles.stageCard} key={stage.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{stage.title}</h3>{stage.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>)}</div>
        </section>

        <section className={styles.adaptSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>PERSONALIZACIÓN REAL</p><h2>Una estructura sólida que se adapta a cada persona</h2></div>
          <div className={styles.prose}><p>La personalización no consiste en cambiar ejercicios sin una lógica.</p><p>Requiere mantener una estructura de trabajo clara y adaptar las decisiones que dependen de cada persona.</p></div>
          <div className={styles.compareGrid}>
            <article><p className={styles.listIntro}>En el Método GHC hay elementos que permanecen constantes:</p><ul><li>una valoración previa;</li><li>objetivos y prioridades definidos;</li><li>una planificación con sentido;</li><li>seguimiento durante el proceso;</li><li>revisiones periódicas;</li><li>ajustes basados en la evolución real.</li></ul></article>
            <article><p className={styles.listIntro}>Lo que se adapta es la forma concreta de aplicar esa estructura:</p><ul><li>los ejercicios;</li><li>la intensidad y el volumen;</li><li>la frecuencia semanal;</li><li>la velocidad de progresión;</li><li>el entorno de entrenamiento;</li><li>el material disponible;</li><li>la duración de las sesiones de entrenamiento autónomo;</li><li>el tipo de acompañamiento;</li><li>la organización del programa dentro de la vida diaria.</li></ul></article>
          </div>
          <div className={styles.prose}><p>Dos personas pueden compartir un mismo objetivo y, aun así, necesitar estrategias diferentes.</p><p>Su experiencia, su condición física, su disponibilidad, sus molestias, su capacidad de recuperación y su contexto no son iguales.</p><p>Por eso, no intentamos encajar a todas las personas en un programa predeterminado.</p><p>Construimos el programa alrededor de la realidad de cada una, manteniendo el criterio y la dirección necesarios para avanzar.</p></div>
        </section>

        <section id="aplicacion" className={styles.applicationSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>PRESENCIAL Y ONLINE</p><h2>El mismo criterio, aplicado de forma diferente</h2><p>El Método GHC puede aplicarse a personas con objetivos, niveles de experiencia y circunstancias muy diferentes.</p><p>Puede orientar procesos relacionados con la mejora de la fuerza, la movilidad, la composición corporal, la recuperación de la condición física o el rendimiento, siempre dentro de los límites profesionales correspondientes y adaptando la planificación a cada caso.</p></div>
          <div className={styles.applicationGrid}>
            <article><span>MADRID</span><h3>Valoración presencial en Madrid</h3><p>Las valoraciones y revisiones presenciales en Madrid se realizan en un lugar previamente acordado.</p><p>En la modalidad presencial nos desplazamos en Madrid para conocer directamente a la persona, analizar su punto de partida y comprender las condiciones reales en las que va a desarrollar el programa.</p><p>La valoración permite estudiar sus objetivos, experiencia, disponibilidad, entorno, material, capacidades y posibles limitaciones declaradas.</p><p>Cuando es necesario, también revisamos movimientos concretos y explicamos cómo aplicar la planificación.</p><p>A partir de esa información diseñamos un programa personalizado que la persona podrá realizar en casa, en un gimnasio, en un parque o en el espacio que mejor encaje con su situación.</p></article>
            <article><span>A DISTANCIA</span><h3>Valoración y planificación online</h3><p>La modalidad online mantiene el mismo principio de trabajo, pero el proceso se desarrolla a distancia.</p><p>Recopilamos la información necesaria, analizamos el caso y diseñamos el programa teniendo en cuenta el lugar de entrenamiento, el material disponible, el tiempo real de la persona y su capacidad para aplicar la planificación.</p><p>No consiste en enviar una tabla genérica.</p><p>Existe un trabajo previo de valoración, estudio y diseño antes de definir el programa.</p></article>
            <article><span>AUTONOMÍA</span><h3>Un programa pensado para entrenar con autonomía</h3><p>Una vez entregada y explicada la planificación, la persona realiza el entrenamiento en el entorno previsto y siguiendo las indicaciones establecidas.</p><p>El objetivo es que pueda aplicar el programa con autonomía, pero dentro de un proceso guiado, supervisado y revisado por GHC Training.</p></article>
            <article><span>EVOLUCIÓN</span><h3>Revisión y ajustes según el programa</h3><p>El proceso se revisa a las 4, 8 o 12 semanas, según el programa contratado.</p><p>En esa revisión analizamos la evolución, el cumplimiento, las sensaciones y los cambios que se hayan producido.</p><p>A partir de la información obtenida, decidimos qué debe mantenerse, modificarse o progresar.</p><p>La modalidad puede ser presencial u online, pero el criterio permanece: valorar, diseñar, aplicar, revisar y ajustar.</p></article>
          </div>
        </section>

        <section className={styles.autonomySection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>AUTONOMÍA GUIADA</p><h2>Entrenar con autonomía, dentro de un proceso guiado</h2></div>
          <div className={styles.proseColumns}><div><p>El Método GHC está diseñado para que la persona pueda realizar su programa en casa, en un gimnasio, en un parque o en el entorno que mejor se adapte a su situación.</p><p>Entrenar con autonomía no significa entrenar sin dirección.</p><p>Antes de comenzar, existe un trabajo de valoración, estudio y planificación.</p><p>La persona recibe un programa estructurado, indicaciones para aplicarlo y criterios claros para comprender cómo debe desarrollar el proceso.</p><p>Durante las semanas siguientes, el entrenamiento se realiza de forma autónoma, pero dentro de una estrategia diseñada y supervisada por GHC Training.</p></div><div><p>Las revisiones previstas a las 4, 8 o 12 semanas, según el programa contratado, permiten analizar la evolución, resolver dificultades, valorar la respuesta al entrenamiento y realizar los ajustes necesarios.</p><p>De esta manera, la persona no depende de sesiones dirigidas de forma continua ni queda condicionada por una cita fija con un entrenador.</p><p>Puede organizar sus entrenamientos según su disponibilidad, elegir el momento que mejor encaje en su semana y adaptar la planificación a los cambios de su vida diaria.</p><p>Esa flexibilidad no significa entrenar sin control.</p><p>La persona dispone de una planificación personalizada, una dirección clara y un proceso guiado, supervisado y revisado por GHC Training.</p></div></div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>UN PROCESO APLICABLE</p><h2>Un proceso pensado para aportar dirección, flexibilidad y continuidad</h2><p>El Método GHC busca que cada persona sepa qué debe hacer, por qué debe hacerlo y cómo organizarlo dentro de su realidad.</p><p>La planificación no se limita a seleccionar ejercicios.</p><p>Ordena el proceso, establece prioridades y define una forma de avanzar que tenga en cuenta el objetivo, la experiencia, el entorno y la disponibilidad de la persona.</p></div>
          <p className={styles.listIntro}>Este sistema aporta:</p>
          <ul className={styles.benefitGrid}><li>una dirección clara desde el inicio;</li><li>una planificación adaptada a la situación real;</li><li>libertad para organizar los entrenamientos sin depender de una hora fija;</li><li>criterios para aplicar el programa con mayor seguridad;</li><li>seguimiento y supervisión durante el proceso;</li><li>revisiones periódicas para valorar la evolución;</li><li>ajustes cuando cambian la respuesta, las necesidades o las circunstancias;</li><li>una estructura que puede mantenerse en el tiempo.</li></ul>
          <div className={styles.prose}><p>La finalidad no es complicar el entrenamiento, sino hacerlo más comprensible, aplicable y coherente.</p><p>Cada decisión debe tener una razón y contribuir al objetivo general del programa.</p><p>Así, la persona puede entrenar con mayor autonomía sin perder la orientación, la supervisión y el criterio profesional de GHC Training.</p></div>
        </section>

        <section className={styles.audienceSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>PARA QUIÉN ES</p><h2>Un método para personas que necesitan algo más que una rutina</h2><p>El Método GHC puede ser adecuado para personas que buscan un programa diseñado alrededor de su realidad y valoran disponer de una dirección profesional sin depender de sesiones semanales a una hora fija.</p><p>Puede encajar especialmente en quienes:</p></div>
          <ul className={styles.audienceList}><li>quieren mejorar su fuerza, movilidad, composición corporal, condición física o rendimiento;</li><li>necesitan una planificación adaptada a su experiencia y punto de partida;</li><li>disponen de horarios variables o tienen dificultades para comprometerse con citas fijas;</li><li>prefieren entrenar en casa, en un gimnasio, en un parque o combinar diferentes entornos;</li><li>han comenzado otros programas, pero les ha resultado difícil mantenerlos;</li><li>necesitan comprender mejor qué hacer, cómo progresar y cómo organizar el entrenamiento;</li><li>quieren recuperar el hábito de entrenar después de un periodo de inactividad;</li><li>presentan molestias, limitaciones o circunstancias declaradas que requieren mayor prudencia y adaptación;</li><li>buscan entrenar con autonomía, pero dentro de un proceso guiado, supervisado y revisado.</li></ul>
          <div className={styles.medicalNote}><p>No es necesario tener experiencia previa ni encontrarse en una determinada condición física.</p><p>Lo importante es conocer el punto de partida, establecer expectativas realistas y construir una planificación que pueda aplicarse con seguridad y continuidad.</p><p>Cuando existen patologías, síntomas relevantes o indicaciones médicas, el entrenamiento debe respetar los límites profesionales y las recomendaciones sanitarias correspondientes.</p><p>La valoración de GHC Training no sustituye el diagnóstico, el tratamiento ni el seguimiento de un profesional sanitario.</p></div>
        </section>

        <section className={styles.assessmentSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>EL PUNTO DE PARTIDA</p><h2>Todo empieza por comprender el punto de partida</h2></div>
          <div className={styles.proseColumns}><div><p>Antes de diseñar una planificación necesitamos conocer a la persona, su objetivo y las circunstancias reales en las que va a desarrollar el programa.</p><p>La valoración nos permite analizar su experiencia, nivel de actividad, disponibilidad, entorno de entrenamiento, material accesible, hábitos y posibles molestias, limitaciones o antecedentes declarados que puedan influir en el proceso.</p><p>No se trata únicamente de recopilar datos.</p><p>El objetivo es interpretar esa información, definir prioridades y decidir qué tipo de trabajo puede resultar más adecuado en cada etapa.</p></div><div><p>A partir de este estudio podemos construir una planificación que la persona pueda aplicar en casa, en un gimnasio, en un parque o en otro entorno apropiado, con libertad para organizar sus horarios y dentro de un proceso guiado y revisado.</p><p>La valoración de GHC Training no realiza diagnósticos médicos ni sustituye la atención de profesionales sanitarios.</p><p>Cuando existen patologías, síntomas relevantes o indicaciones médicas, el entrenamiento debe respetar esos límites y recomendaciones.</p><p>Por eso, la valoración no es un trámite previo al programa.</p><p className={styles.emphasis}>Es la base sobre la que se toman las primeras decisiones y se construye una estrategia personalizada con sentido.</p></div></div>
        </section>

        <section className={styles.reviewSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>REVISIÓN Y AJUSTES</p><h2>Un programa que evoluciona con la persona</h2><p>La planificación inicial marca una dirección, pero no debe permanecer inmóvil si la realidad cambia.</p><p>Durante el proceso pueden variar la disponibilidad, el entorno, el material, las sensaciones, la capacidad de recuperación o la respuesta al entrenamiento.</p><p>También pueden aparecer avances que permitan progresar o dificultades que aconsejen mantener, simplificar o reorganizar parte del programa.</p><p>Por eso, las revisiones forman parte del Método GHC.</p></div>
          <div className={styles.reviewCallout}><span>4 · 8 · 12</span><p>Según el programa contratado, revisamos la evolución a las 4, 8 o 12 semanas.</p><p>Analizamos qué se ha podido aplicar, cómo ha respondido la persona, qué dificultades ha encontrado y qué aspectos necesitan continuidad o modificación.</p></div>
          <p>A partir de esa revisión podemos:</p><ul className={styles.benefitGrid}><li>mantener aquello que está funcionando;</li><li>modificar ejercicios o su forma de aplicación;</li><li>ajustar volumen, intensidad o frecuencia;</li><li>reorganizar el programa para adaptarlo mejor a la disponibilidad;</li><li>introducir nuevas progresiones;</li><li>simplificar cuando la planificación resulta difícil de sostener;</li><li>redefinir prioridades cuando cambian las circunstancias.</li></ul>
          <div className={styles.prose}><p>Los ajustes no se realizan por cambiar el programa constantemente ni por improvisación.</p><p>Se realizan cuando la información obtenida durante el proceso indica que existe una opción más adecuada.</p><p>Así, la planificación conserva una dirección clara, pero puede evolucionar con la persona y seguir encajando en su vida real.</p></div>
        </section>

        <section className={styles.criteriaSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>CONTEXTO PROFESIONAL</p><h2>Una planificación con criterio, contexto y capacidad de adaptación</h2></div>
          <div className={styles.proseColumns}><div><p>El valor del Método GHC no está únicamente en el contenido del programa, sino en las decisiones que permiten construirlo y hacerlo evolucionar.</p><p>Cada planificación parte de una persona concreta, de su objetivo, de sus capacidades y de las condiciones reales en las que va a entrenar.</p><p>Esto permite seleccionar, ordenar y progresar el trabajo con una lógica definida.</p><p>Una aplicación, un vídeo o una rutina prediseñada pueden ofrecer ejercicios y estructuras útiles en determinados contextos.</p><p>Sin embargo, no siempre pueden interpretar por qué una persona no avanza, qué dificultad está encontrando o qué parte del programa necesita ser reconsiderada.</p></div><div><p>El Método GHC incorpora:</p><ul><li>una valoración previa del punto de partida;</li><li>prioridades definidas para cada etapa;</li><li>una planificación compatible con la vida real;</li><li>indicaciones para comprender y aplicar el programa;</li><li>libertad para organizar el horario de entrenamiento;</li><li>seguimiento y revisiones profesionales;</li><li>ajustes basados en la evolución y en las circunstancias;</li><li>límites claros cuando existen molestias, patologías o indicaciones sanitarias.</li></ul></div></div>
          <div className={styles.prose}><p>No se trata de añadir complejidad innecesaria ni de modificar el programa constantemente.</p><p>Se trata de que cada decisión tenga una razón y responda a las necesidades reales del proceso.</p><p>Así evitamos que el entrenamiento se convierta en una sucesión de ejercicios sin dirección o en una rutina que permanece igual aunque la persona, su respuesta o sus circunstancias hayan cambiado.</p></div>
        </section>

        <section className={styles.progressSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>CONTINUIDAD</p><h2>Progreso que pueda mantenerse en el tiempo</h2><p>El Método GHC no se orienta únicamente a conseguir un cambio rápido, sino a construir una mejora que pueda mantenerse y evolucionar.</p><p>Según el objetivo y el punto de partida, el proceso puede buscar:</p></div>
          <ul className={styles.benefitGrid}><li>mejorar la fuerza y la capacidad física;</li><li>ganar movilidad y seguridad al moverse;</li><li>recuperar el hábito de entrenar;</li><li>mejorar la composición corporal;</li><li>aumentar la tolerancia al esfuerzo;</li><li>desarrollar mayor autonomía;</li><li>organizar el entrenamiento de forma compatible con la vida diaria;</li><li>avanzar hacia objetivos de salud o rendimiento con una estrategia clara.</li></ul>
          <div className={styles.prose}><p>El progreso no siempre se expresa de la misma manera.</p><p>Puede reflejarse en una mayor constancia, una mejor ejecución, más confianza, menos dificultad para realizar determinadas tareas, una planificación mejor integrada en la semana o una evolución medible en fuerza, movilidad y composición corporal.</p><p>No prometemos resultados idénticos ni plazos universales.</p><p>Cada persona responde de forma diferente y su evolución depende de múltiples factores, entre ellos la situación inicial, la adherencia, la recuperación, la disponibilidad y las circunstancias personales.</p><p>Nuestro trabajo consiste en aportar valoración, planificación, dirección y revisión profesional para que cada persona pueda avanzar desde su realidad, con objetivos razonables y una estrategia que tenga continuidad.</p><p>El resultado que buscamos no es solo completar un programa.</p><p className={styles.emphasis}>Es que la persona comprenda mejor su entrenamiento, gane capacidad para aplicarlo y disponga de una estructura que pueda seguir utilizando para cuidar su salud y su rendimiento.</p></div>
        </section>

        <section id="faq" className={styles.faqSection}>
          <div className={styles.sectionHeading}><p className={styles.kicker}>PREGUNTAS FRECUENTES</p><h2>Preguntas frecuentes</h2></div>
          <div className={styles.faqList}>{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><div>{faq.a.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></details>)}</div>
        </section>

        <section className={styles.finalCta}>
          <div><p className={styles.kicker}>EMPIEZA POR LA VALORACIÓN</p><h2>Empieza por comprender tu punto de partida</h2><p>Un programa personalizado comienza con una valoración de tu situación, tus objetivos y las condiciones reales en las que vas a entrenar.</p><p>A partir de ese estudio podemos definir prioridades, diseñar una planificación adaptada y establecer el tipo de acompañamiento y revisión más adecuado para ti.</p><p>Entrenarás con libertad para organizar tus horarios, pero dentro de un proceso guiado, con una dirección clara y revisiones profesionales.</p><p><strong>Solicita tu valoración y descubre cómo aplicar el Método GHC a tu caso.</strong></p><div className={styles.ctaRow}><a href={whatsappUrl} className={styles.primaryButton} target="_blank" rel="noreferrer">Solicitar una valoración <ArrowIcon /></a><Link href="/entrenador-personal-madrid" className={styles.lightButton}>Entrenador personal en Madrid</Link><Link href="/entrenador-personal-online" className={styles.lightButton}>Entrenamiento personal online</Link></div></div>
          <div className={styles.finalPrinciples}><span>Valoración</span><span>Planificación personalizada</span><span>Autonomía guiada</span><span>Revisiones profesionales</span></div>
        </section>
      </main>

      <footer className={styles.footer}><Link href="/" aria-label="GHC Training"><GHCTrainingLogo size="sm" variant="dark" /></Link><p>Método GHC · Entrenamiento personalizado con criterio</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar valoración</a></footer>
    </div>
  );
}
