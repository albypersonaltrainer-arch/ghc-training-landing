import Image from "next/image";
import GHCTrainingLogo from "@/components/GHCTrainingLogo";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34686638097";
const whatsappMessage = encodeURIComponent(
  "Hola Alby, quiero información sobre la Valoración GHC Training."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const sumupValoracionUrl = process.env.NEXT_PUBLIC_SUMUP_VALORACION_URL || "";

const services = [
  {
    icon: "01",
    title: "Valoración GHC",
    text: "Evaluación física, historial de salud, hábitos, objetivo, movilidad, lesiones y punto de partida real.",
    meta: "Sesión 60–75 min",
    note: "Pago único",
  },
  {
    icon: "04",
    title: "Plan GHC 4 Semanas",
    text: "Valoración, entrenamiento personalizado, pauta nutricional y seguimiento básico para arrancar con criterio.",
    meta: "4 semanas",
    note: "Primer bloque real",
  },
  {
    icon: "12",
    title: "Programa GHC 12 Semanas",
    text: "Tres bloques progresivos de entrenamiento y nutrición, ajustes semanales y revisiones en semanas 4, 8 y 12.",
    meta: "12 semanas",
    note: "Mayor acompañamiento",
  },
];

const method = [
  ["Valorar", "Entender tu cuerpo, tu historia y lo que te está frenando."],
  ["Planificar", "Diseñar una estrategia realista de entrenamiento y nutrición."],
  ["Entrenar", "Aplicar fuerza, movilidad y progresión sin improvisar."],
  ["Nutrir", "Ajustar hábitos y alimentación a tu vida real."],
  ["Ajustar", "Revisar respuesta, molestias, energía y evolución."],
  ["Evolucionar", "Consolidar resultados sostenibles, no parches rápidos."],
];


const authorityItems = [
  { icon: "trophy", title: "Más de 30 años", text: "experiencia real" },
  { icon: "training", title: "Entrenamiento personal", text: "adaptado a ti" },
  { icon: "nutrition", title: "Nutrición personalizada", text: "estrategia real" },
  { icon: "heart", title: "Salud activa", text: "mejor calidad de vida" },
  { icon: "brain", title: "Lesiones y patologías", text: "trabajo progresivo" },
  { icon: "location", title: "Madrid y online", text: "España completa" },
] as const;

type AuthorityIconName = (typeof authorityItems)[number]["icon"];

function AuthorityIcon({ name }: { name: AuthorityIconName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "ghc-authority-icon-svg",
  };

  if (name === "trophy") {
    return (
      <svg {...common}>
        <path d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z" />
        <path d="M8 6H5.5a2.5 2.5 0 0 0 2.8 3.7" />
        <path d="M16 6h2.5a2.5 2.5 0 0 1-2.8 3.7" />
        <path d="M12 13v4" />
        <path d="M8.5 20h7" />
        <path d="M10 17h4" />
      </svg>
    );
  }

  if (name === "training") {
    return (
      <svg {...common}>
        <path d="M5 8v8" />
        <path d="M8 7v10" />
        <path d="M16 7v10" />
        <path d="M19 8v8" />
        <path d="M8 12h8" />
      </svg>
    );
  }

  if (name === "nutrition") {
    return (
      <svg {...common}>
        <path d="M12 7c4.5 0 7 2.6 7 6.1A6.9 6.9 0 0 1 12 20a6.9 6.9 0 0 1-7-6.9C5 9.6 7.5 7 12 7Z" />
        <path d="M12 7c.2-2 1.4-3.2 3.6-3.8" />
        <path d="M12 7c-1.2-1.6-2.7-2.1-4.6-1.8" />
        <path d="M12 10v6" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg {...common}>
        <path d="M20.2 8.6c0 5.1-8.2 10.1-8.2 10.1S3.8 13.7 3.8 8.6A4.2 4.2 0 0 1 11 5.7l1 1 1-1a4.2 4.2 0 0 1 7.2 2.9Z" />
        <path d="M7.5 12h2.2l1.1-2.2 2.3 4.5 1.2-2.3h2.2" />
      </svg>
    );
  }

  if (name === "brain") {
    return (
      <svg {...common}>
        <path d="M9 5.2a3.2 3.2 0 0 0-3 4.3 3.3 3.3 0 0 0 .4 6.2A3.7 3.7 0 0 0 12 19V6.4A3.3 3.3 0 0 0 9 5.2Z" />
        <path d="M15 5.2a3.2 3.2 0 0 1 3 4.3 3.3 3.3 0 0 1-.4 6.2A3.7 3.7 0 0 1 12 19" />
        <path d="M8 10h2" />
        <path d="M14 10h2" />
        <path d="M8.5 14.5H11" />
        <path d="M13 14.5h2.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

const testimonials = [
  {
    title: "Lipedema · Fisio + fuerza adaptada",
    text: "No sabes lo que me acordé hoy de ti, Alby. He subido las escaleras de casa sin esa sensación horrible de piernas pesadas y doloridas que tenía antes. Parece una tontería, pero para mí es enorme. Durante mucho tiempo iba al fisio y me ayudaba, claro que sí, pero sentía que siempre volvía al mismo punto. Desde que combiné el trabajo de fisio con el entrenamiento contigo, todo empezó a tener más sentido. Me quedo con eso: no solo he mejorado físicamente, he vuelto a confiar un poco más en mi cuerpo. Y eso, para mí, vale muchísimo.",
    time: "10:31",
  },
  {
    title: "Fibromialgia · Más de 6 meses sin crisis fuertes",
    text: "Alby, hoy me he dado cuenta de algo muy fuerte. Antes de empezar contigo tenía una o dos crisis de fibromialgia casi todas las semanas. Vivía pendiente del dolor, del cansancio y del miedo a pasarme con cualquier cosa. Llevo más de 6 meses sin una crisis como las de antes. Sé que no he sido fácil muchas veces, porque venía con miedo, dudas y días muy malos. Por eso valoro tanto la paciencia que has tenido conmigo. No me empujaste, me acompañaste. Y eso fue justo lo que necesitaba.",
    time: "11:07",
  },
  {
    title: "Pérdida de volumen · Más ligera y fuerte",
    text: "Te lo tenía que decir porque hoy me probé unos pantalones que no me cerraban desde hacía años. No es solo que haya bajado volumen, que se nota muchísimo. Es que me miro al espejo y me veo otra vez fuerte, más ligera y con mucha más seguridad. Antes iba de dieta en dieta, entrenaba a ratos y acababa frustrada. Contigo ha sido diferente porque por fin he entendido qué hacer, por qué lo hacía y cómo mantenerlo sin vivir castigándome. Gracias, Alby. Me has dado orden, cabeza y una forma de cuidarme que puedo sostener.",
    time: "09:22",
  },
  {
    title: "De sedentaria a activa · Entrenar sin miedo",
    text: "Jamás pensé que te iba a escribir esto, pero ahora echo de menos entrenar cuando no puedo hacerlo. Yo era la típica que decía que el deporte no era para mí. Me cansaba rápido, me daba vergüenza empezar y siempre encontraba una excusa. Ahora entreno, lo disfruto y me siento mucho más ágil, con más energía y menos hinchada. Pero sobre todo me siento capaz. Gracias por tener paciencia al principio, por no hacerme sentir torpe y por enseñarme a entrenar sin miedo. Has conseguido que algo que evitaba se convierta en parte de mi vida.",
    time: "18:43",
  },
];

const faqs = [
  {
    q: "¿Trabajas con personas con fibromialgia?",
    a: "Sí, siempre desde el entrenamiento adaptado, la movilidad, la fuerza progresiva y la gestión de hábitos. No sustituye el trabajo médico, lo complementa.",
  },
  {
    q: "¿Puedes ayudarme si tengo lipedema o linfedema?",
    a: "Puedo ayudarte a estructurar fuerza, movilidad, nutrición estratégica y salud activa, respetando siempre tu diagnóstico y el seguimiento de tus profesionales sanitarios.",
  },
  {
    q: "¿Te desplazas a domicilio en Madrid?",
    a: "Sí. Me desplazo a domicilio, gimnasio privado, urbanización, empresa, hotel o espacio acordado para entrenar con privacidad y comodidad.",
  },
  {
    q: "¿Trabajas online fuera de Madrid?",
    a: "Sí. Trabajo online para toda España con valoración por videollamada, fotos guiadas, medidas básicas, cuestionario inicial, entrenamiento, dieta y seguimiento.",
  },
  {
    q: "¿Qué diferencia hay entre valoración, plan de 4 semanas y programa de 12 semanas?",
    a: "La valoración detecta el punto de partida y la hoja de ruta. El plan de 4 semanas es el primer bloque completo de trabajo. El programa de 12 semanas permite una transformación más profunda y ajustada.",
  },
  {
    q: "¿Puedo empezar si llevo años sin entrenar?",
    a: "Sí. De hecho, es uno de los casos donde más sentido tiene valorar antes de entrenar: necesitamos seguridad, progresión y una estrategia adaptada a tu situación real.",
  },
];

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.02 3.2C8.96 3.2 3.22 8.86 3.22 15.81c0 2.23.6 4.4 1.74 6.31L3.1 28.8l6.93-1.8a12.97 12.97 0 0 0 5.99 1.5c7.06 0 12.8-5.65 12.8-12.6S23.08 3.2 16.02 3.2Zm0 23.15c-1.9 0-3.76-.5-5.39-1.45l-.39-.23-4.12 1.07 1.1-3.9-.26-.4a10.31 10.31 0 0 1-1.6-5.53c0-5.77 4.78-10.46 10.66-10.46 5.87 0 10.65 4.69 10.65 10.46 0 5.76-4.78 10.44-10.65 10.44Zm5.84-7.82c-.32-.16-1.89-.92-2.18-1.02-.3-.1-.51-.16-.72.16-.21.31-.82 1.02-1.01 1.23-.18.2-.37.23-.69.08-.32-.16-1.34-.49-2.56-1.55-.95-.83-1.59-1.85-1.78-2.16-.18-.32-.02-.49.14-.64.14-.14.32-.36.48-.54.16-.18.21-.31.32-.52.1-.2.05-.39-.03-.54-.08-.16-.72-1.7-.99-2.33-.26-.62-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.59s1.13 3.01 1.29 3.22c.16.2 2.23 3.35 5.4 4.7.75.32 1.34.51 1.8.65.76.24 1.44.21 1.98.13.6-.09 1.89-.76 2.16-1.49.27-.73.27-1.35.19-1.49-.08-.13-.29-.21-.61-.36Z" />
    </svg>
  );
}

function CheckIcon() {
  return <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#22D65B]/12 text-[12px] font-black text-[#10983D]">✓</span>;
}

function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a href={sumupValoracionUrl || whatsappUrl} className="ghc-primary-button">
        Quiero mi valoración GHC
        <span aria-hidden="true">→</span>
      </a>
      <a href={whatsappUrl} className="ghc-secondary-button">
        <WhatsAppIcon />
        Hablar por WhatsApp
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="ghc-page-shell">
      <header className="ghc-header">
        <a href="#inicio" aria-label="GHC Training" className="shrink-0">
          <GHCTrainingLogo size="md" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-[#27302D] lg:flex">
          <a href="#inicio" className="nav-link active">Inicio</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#metodo" className="nav-link">Método GHC</a>
          <a href="#testimonios" className="nav-link">Testimonios</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>
        <a href={whatsappUrl} className="ghc-whatsapp-header">
          <WhatsAppIcon />
          WhatsApp
        </a>
      </header>

      <section id="inicio" className="ghc-hero-section">
        <div className="ghc-hero-copy">
          <p className="ghc-kicker">GHC Training · Health Through Strength</p>
          <h1>
            Entrenamiento, nutrición y salud activa para que tu cuerpo <span>vuelva a responder</span>
          </h1>
          <p className="ghc-hero-text">
            Más de 30 años de experiencia ayudando a personas a transformar su salud y rendimiento. Valoración física completa, entrenamiento personalizado y nutrición estratégica para pérdida de grasa, ganancia muscular, movilidad, lesiones y patologías.
          </p>
          <div className="ghc-statement">
            <strong>No necesitas otro plan genérico.</strong>
            <span>Necesitas una estrategia real para ti.</span>
          </div>
          <CtaButtons />
          <div className="ghc-trust-row">
            <span>Atención personalizada</span>
            <span>Resultados sostenibles</span>
            <span>Enfoque humano</span>
          </div>
        </div>

        <div className="ghc-hero-image-wrap" aria-label="Alby Aguiar, GHC Training">
          <Image
            src="/alby-ghc-training.png"
            alt="Alby Aguiar, entrenador personal de GHC Training"
            fill
            sizes="(max-width: 900px) 100vw, 56vw"
            className="ghc-hero-image"
            priority
          />
        </div>
      </section>

      <section id="servicios" className="ghc-services-grid" aria-label="Servicios GHC Training">
        {services.map((service) => (
          <article key={service.title} className="ghc-service-card">
            <div className="ghc-card-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <div className="ghc-card-footer">
              <span><CheckIcon /> {service.meta}</span>
              <strong>{service.note}</strong>
            </div>
          </article>
        ))}
      </section>

      <section className="ghc-authority-strip" aria-label="Autoridad y especialidades">
        {authorityItems.map((item) => (
          <div key={item.title} className="ghc-authority-item">
            <span className="ghc-authority-emoji" aria-hidden="true"><AuthorityIcon name={item.icon} /></span>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>
        ))}
      </section>

      <section id="metodo" className="ghc-split-section">
        <div>
          <p className="ghc-kicker">Método GHC</p>
          <h2>Primero estudio tu cuerpo. Después diseñamos la estrategia.</h2>
          <p>
            No vendo sesiones sueltas ni rutinas genéricas. El punto de partida es entender tu situación: historial físico, objetivo, hábitos, lesiones, patologías, movilidad, fuerza básica y disponibilidad real.
          </p>
        </div>
        <div className="ghc-method-grid">
          {method.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="ghc-modalities-section">
        <div className="ghc-section-heading">
          <p className="ghc-kicker">Modalidades</p>
          <h2>Entrenamiento privado en Madrid y acompañamiento online en España.</h2>
        </div>
        <div className="ghc-modalities-grid">
          <article>
            <h3>Presencial privado en Madrid</h3>
            <p>Me desplazo a tu domicilio, gimnasio privado, urbanización, empresa, hotel o espacio acordado para que puedas entrenar con comodidad, privacidad y sin perder tiempo.</p>
          </article>
          <article>
            <h3>Online para toda España</h3>
            <p>Valoración por videollamada, fotos guiadas, medidas básicas, cuestionario inicial, entrenamiento, dieta y seguimiento online.</p>
          </article>
          <article>
            <h3>Presencial fuera de Madrid</h3>
            <p>Disponible bajo presupuesto según ciudad, desplazamiento, duración y disponibilidad. Solo cuando tiene sentido para ambas partes.</p>
          </article>
        </div>
      </section>

      <section id="testimonios" className="ghc-testimonials-section">
        <div className="ghc-section-heading compact">
          <h2>Historias habituales de transformación</h2>
          <p>Situaciones reales que he acompañado durante más de 30 años de trabajo con entrenamiento personal, salud activa, lesiones, patologías, pérdida de volumen y recomposición corporal.</p>
        </div>
        <div className="ghc-testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.title} className="ghc-testimonial-card">
              <div className="ghc-whatsapp-capture">
                <div className="ghc-whatsapp-bubble">
                  {item.text}
                  <span>{item.time} ✓✓</span>
                </div>
              </div>
              <div className="ghc-testimonial-caption">
                <strong>{item.title}</strong>
                <span>Caso representativo</span>
              </div>
            </article>
          ))}
        </div>
        <p className="ghc-testimonial-note">
          Casos representativos redactados en formato conversación. Cuando tengas capturas reales, esta sección queda preparada para sustituirlas.
        </p>
      </section>

      <section className="ghc-pathology-band">
        <div className="ghc-pathology-icon">+</div>
        <div>
          <h2>Entrenamiento especializado en lesiones, fibromialgia, lipedema, linfedema, dolor crónico y salud activa</h2>
          <p>
            Trabajo con un enfoque individualizado para mejorar funcionalidad, fuerza, movilidad, hábitos y calidad de vida. No sustituyo el trabajo médico ni fisioterapéutico: lo complemento desde el entrenamiento, la nutrición estratégica y la salud activa.
          </p>
          <div className="ghc-medical-note">
            Este servicio complementa, pero no reemplaza, el trabajo médico ni de fisioterapia. Siempre trabajamos con respeto a tu diagnóstico y tratamiento profesional.
          </div>
        </div>
      </section>

      <section id="faq" className="ghc-faq-section">
        <div className="ghc-section-heading compact">
          <p className="ghc-kicker">Preguntas frecuentes</p>
          <h2>Lo que necesitas saber antes de empezar.</h2>
        </div>
        <div className="ghc-faq-grid">
          {faqs.map((faq) => (
            <article key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ghc-final-cta">
        <div>
          <h2>Da el primer paso hacia tu mejor versión.</h2>
          <p>Estoy aquí para ayudarte.</p>
          <ul>
            <li><CheckIcon /> Valoración completa</li>
            <li><CheckIcon /> Plan 100% personalizado</li>
            <li><CheckIcon /> Acompañamiento real</li>
            <li><CheckIcon /> Resultados sostenibles</li>
          </ul>
        </div>
        <div className="ghc-final-actions">
          <CtaButtons />
          <div className="ghc-sumup-box">
            <strong>SumUp</strong>
            <span>{sumupValoracionUrl ? "Pago seguro disponible para Valoración GHC" : "Preparado para añadir enlace de pago SumUp"}</span>
          </div>
        </div>
      </section>

      <footer className="ghc-footer">
        <GHCTrainingLogo size="sm" darkText={false} />
        <p>© 2026 GHC Training · Alby Aguiar · Salud a través de la fuerza.</p>
        <a href={whatsappUrl}>Contacto por WhatsApp</a>
      </footer>
    </main>
  );
}
