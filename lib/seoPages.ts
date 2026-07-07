export type SeoPageKeyPoint = {
  title: string;
  text: string;
};

export type SeoRelatedLink = {
  slug: string;
  label: string;
};

export type SeoPageContent = {
  slug: string;
  shortLabel: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  problem: SeoPageKeyPoint;
  forWho: SeoPageKeyPoint;
  approach: SeoPageKeyPoint;
  valuationIncludes: string[];
  notPromises: string[];
  closingText: string;
  serviceType: string;
  areaServed: string;
  relatedSlugs: string[];
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34628798859";
const whatsappMessage = encodeURIComponent(
  "Hola Alby, quiero información sobre la Valoración GHC Training."
);

const valuationEmailSubject = encodeURIComponent("Quiero mi valoración GHC Training");
const valuationEmailBody = encodeURIComponent(`Hola Alby,

Quiero información para empezar con una valoración GHC Training.

Nombre completo:
Teléfono / WhatsApp:
Modalidad: Online / Presencial Madrid
Objetivo principal:

Gracias.`);

export const ghcContact = {
  email: "info@ghctraining.com",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
  valuationEmailUrl: `mailto:info@ghctraining.com?subject=${valuationEmailSubject}&body=${valuationEmailBody}`,
};

export const siteConfig = {
  name: "GHC Training",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ghctraining.com").replace(/\/$/, ""),
  description:
    "Entrenamiento personal, nutrición estratégica y salud activa con valoración inicial online o presencial en Madrid.",
};

export const seoPages: SeoPageContent[] = [
  {
    slug: "entrenador-personal-madrid",
    shortLabel: "Entrenador personal Madrid",
    title: "Entrenador personal en Madrid | GHC Training",
    description:
      "Entrenador personal en Madrid con valoración inicial, entrenamiento adaptado, nutrición estratégica y seguimiento real. Presencial privado y opción online.",
    h1: "Entrenador personal en Madrid con valoración real antes de empezar",
    eyebrow: "GHC Training · Madrid presencial y online",
    intro:
      "Si buscas un entrenador personal en Madrid, lo importante no es empezar fuerte ni copiar una rutina genérica. Lo importante es entender tu punto de partida, tu historial, tu objetivo y el tiempo real que tienes para entrenar.",
    problem: {
      title: "El problema habitual",
      text:
        "Muchas personas empiezan con planes estándar, clases sueltas o entrenamientos que no tienen en cuenta lesiones, horarios, cansancio, falta de adherencia o contexto familiar. Eso suele acabar en abandono, molestias o frustración.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas de Madrid que quieren perder grasa, ganar fuerza, mejorar movilidad, volver a entrenar con seguridad o trabajar su salud activa con una estrategia personalizada. También para quienes prefieren privacidad, acompañamiento y criterio antes que un gimnasio masificado.",
    },
    approach: {
      title: "Cómo trabajo en GHC Training",
      text:
        "Primero hago una valoración inicial. A partir de ahí se define si tiene sentido trabajar online, presencial en Madrid o combinar ambos formatos. El plan se ajusta a tu disponibilidad, nivel, molestias, hábitos y objetivo.",
    },
    valuationIncludes: [
      "Entrevista inicial para conocer tu objetivo y contexto real.",
      "Revisión de historial físico, lesiones, patologías y hábitos.",
      "Valoración de movilidad, fuerza básica, medidas y punto de partida.",
      "Hoja de ruta orientativa antes de venderte un programa completo.",
    ],
    notPromises: [
      "No prometo resultados mágicos ni cambios en 7 días.",
      "No sustituyo a tu médico, fisioterapeuta o profesional sanitario.",
      "No empiezo con una rutina cerrada sin entender primero tu caso.",
    ],
    closingText:
      "Cuéntame tu caso y revisamos si puedo ayudarte con un plan adaptado en Madrid u online.",
    serviceType: "Entrenamiento personal presencial en Madrid",
    areaServed: "Madrid",
    relatedSlugs: [
      "valoracion-inicial",
      "programa-12-semanas",
      "entrenador-personal-online",
      "entrenamiento-dolor-espalda",
    ],
  },
  {
    slug: "entrenador-personal-online",
    shortLabel: "Entrenador personal online",
    title: "Entrenador personal online | GHC Training",
    description:
      "Entrenamiento personal online con valoración inicial, plan adaptado, nutrición estratégica y seguimiento para España y América Latina.",
    h1: "Entrenador personal online sin rutinas genéricas",
    eyebrow: "Online · España y América Latina",
    intro:
      "El entrenamiento online puede funcionar muy bien cuando no se limita a enviar una tabla. En GHC Training el punto de partida es valorar tu caso, entender tu entorno y construir un plan que puedas sostener en tu vida real.",
    problem: {
      title: "El problema habitual",
      text:
        "Muchas personas compran planes online que no se adaptan a su material, horarios, nivel, molestias o capacidad de recuperación. Al final el problema no es la falta de ganas, sino la falta de ajuste.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas que quieren entrenar desde casa, gimnasio o viaje, con seguimiento profesional y una estrategia de fuerza, movilidad, pérdida de grasa o recomposición corporal ajustada a su situación.",
    },
    approach: {
      title: "Cómo trabajo online",
      text:
        "La valoración puede hacerse por videollamada, cuestionario, fotos guiadas y medidas básicas. Después se estructura un plan de entrenamiento y nutrición con revisiones para ajustar según evolución, energía, molestias y adherencia.",
    },
    valuationIncludes: [
      "Videollamada o contacto inicial para entender tu objetivo.",
      "Revisión de material disponible, horarios y experiencia previa.",
      "Cuestionario de hábitos, molestias, nivel y disponibilidad.",
      "Orientación sobre el formato más adecuado: valoración, plan 4 semanas o programa 12 semanas.",
    ],
    notPromises: [
      "No envío rutinas masivas iguales para todos.",
      "No garantizo resultados sin evaluar adherencia, contexto y seguimiento.",
      "No doy pautas médicas ni sustituyo a profesionales sanitarios.",
    ],
    closingText:
      "Cuéntame dónde entrenas, qué material tienes y qué quieres conseguir. A partir de ahí vemos si el formato online encaja contigo.",
    serviceType: "Entrenamiento personal online",
    areaServed: "España y América Latina",
    relatedSlugs: [
      "valoracion-inicial",
      "entrenamiento-en-casa",
      "programa-12-semanas",
      "perder-grasa-sin-tiempo",
    ],
  },
  {
    slug: "entrenador-personal-alcorcon",
    shortLabel: "Entrenador personal Alcorcón",
    title: "Entrenador personal en Alcorcón | GHC Training",
    description:
      "Entrenador personal para Alcorcón y zona sur/oeste de Madrid. Valoración inicial, plan personalizado y opción online o presencial según caso.",
    h1: "Entrenador personal en Alcorcón y zona sur de Madrid",
    eyebrow: "Alcorcón · Madrid sur/oeste",
    intro:
      "Si estás en Alcorcón o alrededores y necesitas entrenar con criterio, GHC Training puede ayudarte a empezar por lo más importante: una valoración inicial antes de decidir el plan.",
    problem: {
      title: "El problema habitual",
      text:
        "Entre trabajo, familia, desplazamientos y falta de tiempo, muchas personas de Alcorcón acaban posponiendo el entrenamiento o siguiendo rutinas que no encajan con su vida diaria.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas de Alcorcón, Móstoles, Leganés, Fuenlabrada, Madrid sur y alrededores que buscan entrenamiento personalizado, pérdida de grasa, fuerza, movilidad o acompañamiento con un enfoque prudente.",
    },
    approach: {
      title: "Cómo trabajo la zona",
      text:
        "Según disponibilidad y ubicación se valora si encaja el formato presencial, online o mixto. La prioridad es que el plan sea realista, medible y sostenible, no añadir más presión a tu semana.",
    },
    valuationIncludes: [
      "Revisión del objetivo y disponibilidad real.",
      "Análisis de punto de partida, molestias, hábitos y experiencia.",
      "Orientación sobre presencial, online o modalidad mixta.",
      "Primer criterio para decidir si pasar a plan de 4 o 12 semanas.",
    ],
    notPromises: [
      "No fuerzo entrenamientos presenciales si no tienen sentido logístico.",
      "No prometo bajar peso sin revisar alimentación, descanso y adherencia.",
      "No sustituyo tratamientos médicos o fisioterapia.",
    ],
    closingText:
      "Cuéntame tu caso, zona exacta y objetivo. Revisamos si puedo ayudarte desde Alcorcón, Madrid o formato online.",
    serviceType: "Entrenamiento personal en Alcorcón",
    areaServed: "Alcorcón y Madrid sur/oeste",
    relatedSlugs: [
      "valoracion-inicial",
      "entrenador-personal-madrid",
      "entrenador-personal-online",
      "perder-grasa-sin-tiempo",
    ],
  },
  {
    slug: "perder-grasa-sin-tiempo",
    shortLabel: "Perder grasa sin tiempo",
    title: "Perder grasa sin tiempo | Entrenamiento y hábitos reales",
    description:
      "Estrategia realista para perder grasa cuando tienes poco tiempo: valoración, fuerza, nutrición ajustada y seguimiento sin promesas milagro.",
    h1: "Perder grasa cuando no tienes tiempo para vivir en el gimnasio",
    eyebrow: "Pérdida de grasa · Vida real",
    intro:
      "Perder grasa no debería depender de entrenar dos horas al día ni de vivir a dieta. Cuando tienes trabajo, familia, estrés y poco tiempo, el plan tiene que adaptarse a tu realidad.",
    problem: {
      title: "El problema habitual",
      text:
        "Mucha gente fracasa porque intenta copiar planes imposibles: demasiado volumen, dietas extremas, cero margen social y poca estrategia. El resultado suele ser cansancio, ansiedad, abandono y vuelta al punto de partida.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas ocupadas que quieren perder grasa, mejorar composición corporal y recuperar energía sin convertir el proceso en otra fuente de estrés. Especialmente si ya has probado varias veces y no consigues sostenerlo.",
    },
    approach: {
      title: "Cómo lo enfoco",
      text:
        "Trabajo fuerza, hábitos, nutrición estratégica y seguimiento. La clave es elegir pocas acciones importantes, medir lo necesario y ajustar el plan a tus horarios, sueño, nivel de estrés y capacidad de entrenamiento.",
    },
    valuationIncludes: [
      "Análisis de horarios, trabajo, familia y disponibilidad real.",
      "Revisión de hábitos alimentarios y principales puntos de fuga.",
      "Valoración básica de fuerza, movilidad y punto de partida.",
      "Propuesta de siguiente paso sin venderte una solución imposible.",
    ],
    notPromises: [
      "No prometo pérdidas rápidas sin contexto.",
      "No uso dietas extremas ni entrenamientos castigo.",
      "No confundo bajar peso con mejorar salud y composición corporal.",
    ],
    closingText:
      "Cuéntame cuánto tiempo tienes de verdad y qué has probado antes. Revisamos una estrategia realista para empezar.",
    serviceType: "Pérdida de grasa y entrenamiento personalizado",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "no-consigo-bajar-de-peso",
      "entrenamiento-en-casa",
      "valoracion-inicial",
      "programa-12-semanas",
    ],
  },
  {
    slug: "no-consigo-bajar-de-peso",
    shortLabel: "No consigo bajar de peso",
    title: "No consigo bajar de peso | GHC Training",
    description:
      "Si no consigues bajar de peso, revisamos contexto, adherencia, fuerza, nutrición, descanso y hábitos antes de prometer soluciones rápidas.",
    h1: "No consigo bajar de peso: antes de hacer otra dieta, revisa el contexto",
    eyebrow: "Estancamiento · Adherencia · Estrategia",
    intro:
      "Cuando alguien dice “no consigo bajar de peso”, casi nunca falta solo una rutina. Puede haber falta de fuerza, exceso de restricción, mala adherencia, estrés, sueño insuficiente o una estrategia que no encaja.",
    problem: {
      title: "El problema habitual",
      text:
        "Se cambia de dieta, se empieza con motivación, se pierde algo y luego vuelve el estancamiento. Sin revisar el contexto completo, el plan se convierte en una pelea constante contra tu propio día a día.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas que han intentado perder peso varias veces, que se sienten bloqueadas o que necesitan una mirada más ordenada sobre entrenamiento, nutrición, hábitos y seguimiento.",
    },
    approach: {
      title: "Cómo lo trabajo",
      text:
        "Primero se identifica qué está fallando: planificación, alimentación, gasto, fuerza, descanso, horarios, expectativas o adherencia. Después se diseña una estrategia progresiva y revisable.",
    },
    valuationIncludes: [
      "Revisión de intentos anteriores y qué ocurrió en cada uno.",
      "Análisis de hábitos, comidas, horarios, sueño y actividad.",
      "Valoración de fuerza, movilidad y capacidad de entrenamiento.",
      "Orientación sobre si conviene valoración, plan 4 semanas o programa 12 semanas.",
    ],
    notPromises: [
      "No prometo un número concreto en la báscula.",
      "No trabajo con culpa ni castigos.",
      "No ignoro señales médicas: si hay sospecha clínica, se respeta el criterio sanitario.",
    ],
    closingText:
      "Cuéntame qué has probado y dónde te estancas. Revisamos si puedo ayudarte a ordenar el proceso.",
    serviceType: "Pérdida de peso y recomposición corporal personalizada",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "perder-grasa-sin-tiempo",
      "valoracion-inicial",
      "programa-12-semanas",
      "entrenador-personal-online",
    ],
  },
  {
    slug: "entrenamiento-dolor-espalda",
    shortLabel: "Dolor de espalda",
    title: "Entrenamiento para dolor de espalda | GHC Training",
    description:
      "Entrenamiento prudente para personas con dolor de espalda o lumbar: valoración, adaptación y respeto al criterio médico o fisioterapéutico.",
    h1: "Entrenamiento con dolor de espalda: empezar con prudencia y criterio",
    eyebrow: "Dolor de espalda · Trabajo adaptado",
    intro:
      "El dolor de espalda necesita respeto. No se trata de dar una rutina genérica ni de prometer una cura. Se trata de valorar el caso, conocer límites y trabajar fuerza, movilidad y hábitos con prudencia.",
    problem: {
      title: "El problema habitual",
      text:
        "Muchas personas alternan reposo, miedo al movimiento y ejercicios sueltos de internet. Otras se exigen demasiado pronto. Ninguno de los extremos suele ayudar a construir confianza y capacidad.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas con molestias de espalda, dolor lumbar recurrente o miedo a entrenar que ya tienen diagnóstico o seguimiento profesional, o que necesitan saber si un trabajo físico adaptado puede encajar en su caso.",
    },
    approach: {
      title: "Cómo lo enfoco",
      text:
        "Primero se revisa historial, síntomas, límites, actividad actual y recomendaciones médicas o de fisioterapia. Desde ahí se adapta el entrenamiento para mejorar tolerancia, fuerza, movilidad y seguridad sin invadir el terreno clínico.",
    },
    valuationIncludes: [
      "Entrevista sobre historial, dolor, señales de alarma y tratamientos actuales.",
      "Revisión de recomendaciones médicas o fisioterapéuticas si existen.",
      "Valoración básica de movilidad, fuerza y tolerancia al movimiento.",
      "Criterio claro sobre si puedo ayudarte o si conviene derivar primero.",
    ],
    notPromises: [
      "No diagnostico ni trato patología médica.",
      "No prometo curar el dolor de espalda.",
      "No doy rutinas genéricas para dolor sensible sin valoración previa.",
    ],
    closingText:
      "Cuéntame tu caso con detalle y revisamos si tiene sentido empezar con una valoración adaptada.",
    serviceType: "Entrenamiento adaptado para dolor de espalda",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "valoracion-inicial",
      "entrenador-personal-madrid",
      "entrenamiento-en-casa",
      "programa-12-semanas",
    ],
  },
  {
    slug: "entrenamiento-fibromialgia",
    shortLabel: "Fibromialgia",
    title: "Entrenamiento para fibromialgia | GHC Training",
    description:
      "Entrenamiento adaptado para personas con fibromialgia desde un enfoque prudente: valoración, progresión, fuerza y respeto al criterio médico.",
    h1: "Entrenamiento para fibromialgia con adaptación y prudencia",
    eyebrow: "Fibromialgia · Salud activa con criterio",
    intro:
      "La fibromialgia exige un enfoque cuidadoso. No se trata de forzar ni de prometer curas, sino de adaptar el movimiento, dosificar el esfuerzo y construir una rutina posible según tu respuesta.",
    problem: {
      title: "El problema habitual",
      text:
        "Cuando hay dolor, fatiga o brotes, muchas rutinas se vuelven inviables. El fallo no siempre está en la persona: muchas veces el plan no respeta sensibilidad, recuperación ni contexto.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas con diagnóstico o sospecha de fibromialgia que quieren moverse mejor, ganar fuerza de forma progresiva y tener acompañamiento sin presión agresiva. Siempre respetando el seguimiento médico correspondiente.",
    },
    approach: {
      title: "Cómo lo trabajo",
      text:
        "La prioridad es ajustar dosis, frecuencia, intensidad y expectativas. Se observa la respuesta del cuerpo, se evita el todo o nada y se busca continuidad, movilidad, fuerza básica y confianza progresiva.",
    },
    valuationIncludes: [
      "Entrevista sobre diagnóstico, brotes, fatiga, dolor y medicación si deseas comentarlo.",
      "Revisión de tolerancia actual al movimiento y actividad diaria.",
      "Criterios de dosificación inicial y señales para ajustar.",
      "Orientación honesta sobre si el acompañamiento GHC encaja con tu caso.",
    ],
    notPromises: [
      "No prometo curar la fibromialgia.",
      "No sustituyo médico, reumatólogo, fisioterapeuta o psicólogo.",
      "No fuerzo entrenamientos que ignoren dolor, fatiga o brotes.",
    ],
    closingText:
      "Cuéntame cómo responde tu cuerpo actualmente y revisamos un punto de partida prudente.",
    serviceType: "Entrenamiento adaptado para fibromialgia",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "valoracion-inicial",
      "entrenamiento-dolor-espalda",
      "entrenador-personal-online",
      "programa-12-semanas",
    ],
  },
  {
    slug: "entrenamiento-lipedema",
    shortLabel: "Lipedema",
    title: "Entrenamiento para lipedema | GHC Training",
    description:
      "Entrenamiento adaptado para lipedema: fuerza, movilidad, adherencia y valoración prudente sin prometer curas ni sustituir tratamiento médico.",
    h1: "Entrenamiento para lipedema: fuerza, movilidad y adherencia con criterio",
    eyebrow: "Lipedema · Entrenamiento adaptado",
    intro:
      "El lipedema requiere un enfoque respetuoso. El entrenamiento puede formar parte de una estrategia de salud activa, pero no debe presentarse como cura ni como sustituto del seguimiento sanitario.",
    problem: {
      title: "El problema habitual",
      text:
        "Muchas mujeres con lipedema han vivido frustración con dietas, entrenamientos agresivos o mensajes que reducen todo a falta de esfuerzo. El punto de partida debe ser más humano y más preciso.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas con lipedema que quieren mejorar fuerza, movilidad, composición corporal, sensación de control y adherencia con un plan adaptado a molestias, energía, disponibilidad y seguimiento profesional.",
    },
    approach: {
      title: "Cómo lo enfoco",
      text:
        "Trabajo fuerza progresiva, movilidad, hábitos, estrategia nutricional y ajuste de cargas según respuesta. Si hay indicaciones médicas, fisioterapia, compresión u otro tratamiento, se respetan como parte del contexto.",
    },
    valuationIncludes: [
      "Entrevista sobre diagnóstico, molestias, tratamiento actual y objetivos.",
      "Revisión de experiencia previa, adherencia y barreras reales.",
      "Valoración básica de movilidad, fuerza y tolerancia al entrenamiento.",
      "Criterio para diseñar un plan progresivo y prudente si encaja.",
    ],
    notPromises: [
      "No prometo curar ni eliminar el lipedema.",
      "No sustituyo tratamiento médico, fisioterapia ni indicaciones clínicas.",
      "No uso discursos de culpa ni promesas estéticas agresivas.",
    ],
    closingText:
      "Cuéntame tu caso y revisamos cómo plantear entrenamiento y hábitos desde un punto de partida realista.",
    serviceType: "Entrenamiento adaptado para lipedema",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "valoracion-inicial",
      "entrenamiento-linfedema",
      "entrenador-personal-online",
      "programa-12-semanas",
    ],
  },
  {
    slug: "entrenamiento-linfedema",
    shortLabel: "Linfedema",
    title: "Entrenamiento para linfedema | GHC Training",
    description:
      "Entrenamiento adaptado para linfedema con valoración prudente, coordinación con criterio médico y progresión sin claims agresivos.",
    h1: "Entrenamiento para linfedema con valoración prudente",
    eyebrow: "Linfedema · Movimiento adaptado",
    intro:
      "Cuando existe linfedema, el entrenamiento debe plantearse con cuidado, respetando diagnóstico, tratamiento y señales del cuerpo. La prioridad es adaptar, no imponer.",
    problem: {
      title: "El problema habitual",
      text:
        "La persona puede tener miedo a moverse, dudas sobre cargas, molestias o indicaciones contradictorias. En estos casos, una rutina estándar no es suficiente y puede generar más inseguridad.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas con linfedema que quieren entrenar de forma adaptada, ganar fuerza y mejorar hábitos desde un enfoque prudente, especialmente cuando ya existe seguimiento médico o fisioterapéutico.",
    },
    approach: {
      title: "Cómo lo trabajo",
      text:
        "Se parte de la valoración, de las indicaciones profesionales existentes y de una progresión controlada. El objetivo es construir capacidad, seguridad y adherencia respetando límites y evolución.",
    },
    valuationIncludes: [
      "Entrevista sobre diagnóstico, síntomas, tratamiento y recomendaciones recibidas.",
      "Revisión de actividad actual, tolerancia y barreras principales.",
      "Valoración básica de movilidad, fuerza y disponibilidad.",
      "Decisión prudente sobre si GHC puede acompañarte o conviene derivar primero.",
    ],
    notPromises: [
      "No prometo curar el linfedema.",
      "No sustituyo seguimiento médico, fisioterapia ni tratamiento específico.",
      "No propongo cargas o rutinas sin conocer el caso.",
    ],
    closingText:
      "Cuéntame tu situación y revisamos si puedo ayudarte desde entrenamiento adaptado y hábitos.",
    serviceType: "Entrenamiento adaptado para linfedema",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "valoracion-inicial",
      "entrenamiento-lipedema",
      "entrenamiento-en-casa",
      "entrenador-personal-online",
    ],
  },
  {
    slug: "entrenamiento-en-casa",
    shortLabel: "Entrenamiento en casa",
    title: "Entrenamiento en casa personalizado | GHC Training",
    description:
      "Entrenamiento en casa con poco material, valoración inicial, plan adaptado y seguimiento para ganar fuerza, constancia y resultados sostenibles.",
    h1: "Entrenamiento en casa personalizado para tu vida real",
    eyebrow: "Casa · Poco material · Constancia",
    intro:
      "Entrenar en casa puede ser suficiente si el plan está bien diseñado. No necesitas tener una sala perfecta: necesitas una estrategia adaptada a tu espacio, material, nivel y tiempo real.",
    problem: {
      title: "El problema habitual",
      text:
        "Muchas personas empiezan con vídeos sueltos o rutinas aleatorias y no saben si progresan, si hacen demasiado, si hacen poco o si están eligiendo bien los ejercicios.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas que prefieren entrenar desde casa por horario, familia, comodidad, privacidad o falta de gimnasio cercano. También quienes empiezan desde cero y necesitan una entrada progresiva.",
    },
    approach: {
      title: "Cómo lo diseño",
      text:
        "Primero reviso espacio, material, experiencia, objetivo y limitaciones. Después se estructura una progresión clara con ejercicios que puedas ejecutar con seguridad y continuidad.",
    },
    valuationIncludes: [
      "Revisión de material disponible y espacio de entrenamiento.",
      "Análisis de objetivo, nivel, molestias y disponibilidad.",
      "Criterio para decidir frecuencia, duración y tipo de sesiones.",
      "Orientación sobre plan online o programa de 12 semanas si encaja.",
    ],
    notPromises: [
      "No prometo los mismos resultados para todos con el mismo material.",
      "No diseño rutinas al azar sin valorar tu caso.",
      "No fuerzo ejercicios que no puedas hacer con seguridad en tu entorno.",
    ],
    closingText:
      "Cuéntame qué material tienes en casa y qué quieres conseguir. Revisamos el mejor punto de partida.",
    serviceType: "Entrenamiento personalizado en casa",
    areaServed: "Online, España y América Latina",
    relatedSlugs: [
      "entrenador-personal-online",
      "perder-grasa-sin-tiempo",
      "valoracion-inicial",
      "programa-12-semanas",
    ],
  },
  {
    slug: "programa-12-semanas",
    shortLabel: "Programa 12 semanas",
    title: "Programa de entrenamiento 12 semanas | GHC Training",
    description:
      "Programa GHC de 12 semanas: valoración inicial, entrenamiento personalizado, nutrición estratégica, seguimiento y revisiones en bloques de 4 semanas.",
    h1: "Programa GHC de 12 semanas para construir un cambio medible",
    eyebrow: "12 semanas · Seguimiento y revisión",
    intro:
      "El programa de 12 semanas está pensado para quien no quiere improvisar. Son tres bloques de trabajo con valoración inicial, entrenamiento personalizado, nutrición estratégica y revisiones para ajustar según evolución.",
    problem: {
      title: "El problema habitual",
      text:
        "Un mes puede servir para empezar, pero muchas personas necesitan más tiempo para consolidar hábitos, aprender a entrenar, ajustar cargas, ordenar nutrición y medir cambios reales.",
    },
    forWho: {
      title: "Para quién encaja",
      text:
        "Personas que quieren pérdida de grasa, recomposición corporal, fuerza, movilidad o salud activa con un acompañamiento más completo que una valoración o un plan corto.",
    },
    approach: {
      title: "Cómo se estructura",
      text:
        "La base son tres bloques de 4 semanas. Se revisa evolución, adherencia, energía, molestias, medidas y respuesta al entrenamiento para ajustar el plan en lugar de seguir una plantilla fija.",
    },
    valuationIncludes: [
      "Valoración inicial completa antes de diseñar el programa.",
      "Tres bloques de entrenamiento de 4 semanas.",
      "Tres bloques de nutrición ajustados según evolución.",
      "Seguimiento semanal y revisiones en semanas 4, 8 y 12.",
    ],
    notPromises: [
      "No prometo una transformación idéntica para todos.",
      "No vendo 12 semanas sin valorar primero si encaja contigo.",
      "No sustituyo indicaciones médicas si existen lesiones o patologías.",
    ],
    closingText:
      "Cuéntame tu objetivo y revisamos si el programa de 12 semanas tiene sentido para tu caso.",
    serviceType: "Programa de entrenamiento personalizado de 12 semanas",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "valoracion-inicial",
      "entrenador-personal-online",
      "entrenador-personal-madrid",
      "no-consigo-bajar-de-peso",
    ],
  },
  {
    slug: "valoracion-inicial",
    shortLabel: "Valoración inicial",
    title: "Valoración inicial GHC Training | Online o presencial Madrid",
    description:
      "Valoración inicial GHC Training: entrevista, historial, objetivo, movilidad, fuerza básica, medidas y hoja de ruta antes de empezar un plan.",
    h1: "Valoración inicial GHC Training: empieza por saber desde dónde partes",
    eyebrow: "Primer paso · Online o presencial Madrid",
    intro:
      "La valoración inicial es el filtro profesional antes de diseñar cualquier plan. Sirve para entender tu caso, detectar prioridades y decidir si tiene sentido trabajar juntos.",
    problem: {
      title: "El problema que evita",
      text:
        "Empezar sin valorar suele llevar a planes genéricos, expectativas irreales y poca adherencia. La valoración ayuda a ordenar el punto de partida antes de invertir más tiempo o dinero en un programa completo.",
    },
    forWho: {
      title: "Para quién es",
      text:
        "Personas que quieren perder grasa, ganar fuerza, recomponer su cuerpo, volver a entrenar, mejorar movilidad o entrenar con prudencia por dolor, lesión, fibromialgia, lipedema, linfedema u otros contextos sensibles.",
    },
    approach: {
      title: "Qué ocurre después",
      text:
        "Tras la valoración te diré con claridad si puedo ayudarte, qué formato encaja mejor y cuál sería el siguiente paso: plan de 4 semanas, programa de 12 semanas, trabajo online, presencial Madrid o derivación si no procede.",
    },
    valuationIncludes: [
      "Entrevista inicial y análisis del objetivo.",
      "Historial físico, lesiones, patologías y hábitos.",
      "Estudio corporal básico: peso, medidas, perímetros y evolución física.",
      "Movilidad, postura, fuerza básica y hoja de ruta orientativa.",
    ],
    notPromises: [
      "No es una consulta médica ni sustituye diagnóstico o tratamiento.",
      "No garantiza resultados antes de conocer adherencia y evolución.",
      "No obliga a contratar un programa si no encaja.",
    ],
    closingText:
      "Escríbeme y cuéntame tu caso. Revisamos si empezamos con valoración online o presencial en Madrid.",
    serviceType: "Valoración inicial de entrenamiento personal",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "programa-12-semanas",
      "entrenador-personal-madrid",
      "entrenador-personal-online",
      "perder-grasa-sin-tiempo",
    ],
  },
  {
    slug: "servicios",
    shortLabel: "Servicios GHC",
    title: "Servicios GHC Training | Entrenamiento personal y valoración inicial",
    description:
      "Servicios de GHC Training: valoración inicial, entrenador personal Madrid, entrenamiento online, pérdida de grasa, dolor de espalda y programa 12 semanas.",
    h1: "Servicios GHC Training para empezar con una estrategia personalizada",
    eyebrow: "Mapa de servicios · Elige tu punto de partida",
    intro:
      "Esta página reúne los servicios principales de GHC Training para que puedas encontrar el punto de partida más adecuado según tu caso: valoración, entrenamiento presencial, online, pérdida de grasa, dolor o salud activa.",
    problem: {
      title: "El problema habitual",
      text:
        "Cuando una web solo ofrece un botón genérico, la persona no sabe si su caso encaja. Este índice te ayuda a identificar la vía más cercana a lo que necesitas antes de pedir la valoración.",
    },
    forWho: {
      title: "Para quién es",
      text:
        "Personas que están comparando opciones y quieren saber si GHC Training encaja con su objetivo, zona, formato online/presencial o situación física.",
    },
    approach: {
      title: "Cómo usar esta página",
      text:
        "Revisa el servicio que más se acerca a tu caso y, si lo ves claro, pide la valoración inicial. Si dudas, cuéntame tu situación y te diré si tiene sentido avanzar.",
    },
    valuationIncludes: [
      "Mapa de servicios principales de GHC Training.",
      "Enlaces a páginas específicas según objetivo o situación.",
      "Acceso directo a la valoración inicial.",
      "Orientación prudente para casos de salud sensible.",
    ],
    notPromises: [
      "No sustituye una valoración personalizada.",
      "No promete que todos los casos encajen.",
      "No convierte contenidos informativos en diagnóstico o tratamiento.",
    ],
    closingText:
      "Empieza por la página que más se parezca a tu caso o pide directamente la valoración inicial.",
    serviceType: "Servicios de entrenamiento personal GHC Training",
    areaServed: "Madrid, España y online",
    relatedSlugs: [
      "valoracion-inicial",
      "entrenador-personal-madrid",
      "entrenador-personal-online",
      "programa-12-semanas",
    ],
  },
];

export const seoPageSlugs = seoPages.map((page) => page.slug);

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export function getRelatedPages(page: SeoPageContent) {
  return page.relatedSlugs
    .map((slug) => getSeoPage(slug))
    .filter((related): related is SeoPageContent => Boolean(related));
}

export const featuredServiceLinks: SeoRelatedLink[] = [
  { slug: "entrenador-personal-madrid", label: "Entrenador personal Madrid" },
  { slug: "entrenador-personal-online", label: "Entrenador personal online" },
  { slug: "perder-grasa-sin-tiempo", label: "Perder grasa sin tiempo" },
  { slug: "entrenamiento-dolor-espalda", label: "Entrenamiento dolor espalda" },
  { slug: "entrenamiento-fibromialgia", label: "Fibromialgia" },
  { slug: "entrenamiento-lipedema", label: "Lipedema" },
  { slug: "valoracion-inicial", label: "Valoración inicial" },
];

export function absoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
