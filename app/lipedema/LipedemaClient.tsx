"use client";

import { useEffect, useState } from "react";
import styles from "./lipedema.module.css";
import { trackFunnelEvent } from "@/lib/funnelAnalytics";

type Perfil = "consciente" | "descubre" | "general";
type Props = { checkoutReady: boolean; priceLabel: string; introductionVideoUrl: string };

const questions = [
  {
    q: "¿Necesito experiencia previa entrenando?",
    a: "No. La guía explica cómo pensar el entrenamiento desde tu punto de partida y por qué es importante adaptar el esfuerzo. No sustituye un programa individualizado."
  },
  {
    q: "¿El ejercicio o la alimentación curan el lipedema?",
    a: "No. No existe una cura a través del ejercicio o la dieta. El movimiento, la fuerza y unos hábitos adecuados pueden apoyar tu capacidad física y bienestar, con respuestas distintas en cada persona."
  },
  {
    q: "¿Es también para mujeres delgadas con lipedema?",
    a: "Sí. El lipedema no equivale a obesidad. La guía aborda el movimiento, el entrenamiento y la alimentación sin reducir esta condición a una cuestión de peso."
  },
  {
    q: "¿Me dais una dieta o un programa personalizado?",
    a: "No. Estás comprando una guía educativa en formato digital. No incluye diagnóstico, consulta clínica, pautas individuales ni seguimiento."
  },
  {
    q: "¿Qué recibiré al comprarla?",
    a: "El ebook digital «Lipedema: que no decida por ti». Cuando se active la venta, el acceso se habilitará tras la confirmación del pago."
  },
  {
    q: "¿Y si tengo dolor intenso o síntomas nuevos?",
    a: "Consulta con tu profesional sanitario. No debes interpretar síntomas nuevos o intensos como algo que haya que resolver con ejercicios por tu cuenta."
  }
];

const learning = [
  { n: "01", icon: "↗", title: "Entrenar con criterio", text: "Entiende cómo plantear la fuerza, regular el esfuerzo y progresar desde tu nivel." },
  { n: "02", icon: "◎", title: "Moverte con más confianza", text: "Descubre cómo encajan caminar, el trabajo aeróbico y la actividad diaria." },
  { n: "03", icon: "◇", title: "Comer entendiendo tu cuerpo", text: "Da sentido a las decisiones de alimentación sin promesas ni dietas milagro." },
  { n: "04", icon: "✳", title: "Dejar de ir a ciegas", text: "Aprende a observar tu respuesta y a tomar decisiones más informadas." }
];

export default function LipedemaClient({ checkoutReady, priceLabel, introductionVideoUrl }: Props) {
  const [perfil, setPerfil] = useState<Perfil>("general");
  const [tracking, setTracking] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = (params.get("perfil") || params.get("utm_content") || "").toLowerCase();
    const next: Perfil = /descubre|inconsciente|perfil2|descubrimiento/.test(raw)
      ? "descubre" : /entrena|consciente|perfil1/.test(raw) ? "consciente" : "general";
    setPerfil(next);
    const attribution: Record<string, string> = { perfil: next };
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"].forEach((key) => {
      const value = params.get(key);
      if (value) attribution[key] = value.slice(0, 200);
    });
    setTracking(attribution);
    trackFunnelEvent("EbookLandingView", {}, "ViewContent");
  }, []);

  const tailored = perfil === "descubre"
    ? { kicker: "Quizá nadie te lo había explicado", title: "El lipedema no tiene que dejarte sin respuestas.", desc: "Si convives con dolor, pesadez o cansancio, quizá aún no sepas cómo pueden ayudarte el movimiento, el entrenamiento y la alimentación a cuidar tu capacidad física." }
    : perfil === "consciente"
    ? { kicker: "Sabes que quieres cuidarte, te falta saber cómo", title: "Entrena sabiendo qué hacer. No a ciegas.", desc: "Si ya sabes que necesitas moverte y prestar atención a tu alimentación, esta guía te ayuda a entender los porqués y a dar tus primeros pasos con más criterio." }
    : { kicker: "Lipedema · GHC Academy", title: "Entiende tu cuerpo. Aprende qué puedes hacer.", desc: "Una guía práctica para descubrir el papel del movimiento, el entrenamiento de fuerza y la alimentación en tu día a día con lipedema." };

  function goToOffer(position: string) {
    trackFunnelEvent("EbookCTAClick", { position });
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function checkout() {
    if (!checkoutReady || busy) return;
    setBusy(true);
    setError("");
    try {
      trackFunnelEvent("EbookCheckoutStart", {}, "InitiateCheckout");
      const response = await fetch("/api/lipedema/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ attribution: tracking })
      });
      const payload = await response.json();
      if (!response.ok || !payload.url) throw new Error(payload.error || "No se pudo iniciar el pago.");
      window.location.assign(payload.url);
    } catch {
      setError("No podemos abrir el pago ahora mismo. Inténtalo de nuevo más tarde.");
      setBusy(false);
    }
  }

  return (
    <main className={styles.root}>
      <div className={styles.announcement}>GHC ACADEMY <span>·</span> UNA GUÍA PARA VIVIR CON MÁS CRITERIO</div>
      <header className={styles.header}>
        <a className={styles.brand} href="#inicio" aria-label="GHC Academy, volver al inicio"><span className={styles.brandLine} /> GHC <strong>ACADEMY</strong></a>
        <a className={styles.headerLink} href="#contenido">Qué aprenderás <span>↗</span></a>
      </header>

      <section className={styles.hero} id="inicio">
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}><span className={styles.pinkDash} /> {tailored.kicker}</div>
          <h1>{tailored.title}</h1>
          <p className={styles.heroLead}>{tailored.desc}</p>
          <div className={styles.heroQuote}>LIPEDEMA: <em>QUE NO DECIDA POR TI.</em></div>
          <div className={styles.heroActions}>
            <button className={styles.primaryButton} onClick={() => goToOffer("hero")}>DESCUBRE LA GUÍA <span>↗</span></button>
            <a className={styles.textLink} href="#video">Conoce a quien la ha creado ↓</a>
          </div>
          <p className={styles.heroSmall}>Guía digital · Entrenamiento, movimiento y alimentación · Sin promesas milagrosas</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.visualArch} aria-hidden="true" />
          <div className={styles.heroEyebrow}>EDICIÓN DIGITAL <span>GHC ACADEMY</span></div>
          <div className={styles.book3d}>
            <div className={styles.bookInner}>
              <span className={styles.coverSmall}>GHC ACADEMY · GUÍA PRÁCTICA</span>
              <strong>LIPEDEMA</strong>
              <em>QUE NO DECIDA<br />POR TI</em>
              <span className={styles.coverDivider} />
              <small>Entrena · Entiende tu cuerpo<br />· Cuida tu alimentación</small>
            </div>
          </div>
          <div className={styles.visualBottom}><span>NO MÁS INFORMACIÓN SIN RUMBO.</span><b>APRENDE QUÉ HACER.</b></div>
        </div>
      </section>

      <div className={styles.trustBar}>
        <span>PARA QUIEN QUIERE ENTENDER</span>
        <i />
        <span>PARA QUIEN QUIERE EMPEZAR</span>
        <i />
        <span>PARA QUIEN QUIERE DECIDIR</span>
      </div>

      <section className={styles.recognize} id="situacion">
        <div className={styles.sectionEyebrow}>01 / HABLEMOS DE TI</div>
        <div className={styles.recognizeGrid}>
          <div><h2>El lipedema es más que <em>una cuestión de imagen.</em></h2><p>Puede haber días de pesadez, molestias o dudas. Y quizá nadie te ha explicado por dónde empezar con aquello que sí puedes aprender.</p></div>
          <div className={styles.recognizeCards}>
            <article><span>01</span><p>«Sé que debería moverme, pero <strong>no sé cómo empezar</strong>».</p></article>
            <article><span>02</span><p>«Tengo información por todas partes, pero <strong>no sé qué aplicar</strong>».</p></article>
            <article><span>03</span><p>«Quiero cuidarme sin que todo gire alrededor <strong>del peso</strong>».</p></article>
          </div>
        </div>
      </section>

      <section className={styles.pinkSection}>
        <span className={styles.sectionEyebrow}>UNA IDEA IMPORTANTE</span>
        <h2>No se trata de hacer más.<br /><em>Se trata de entender mejor qué haces.</em></h2>
        <p>El movimiento, la fuerza y la alimentación pueden formar parte del cuidado del lipedema, adaptados a cada situación y respetando las indicaciones sanitarias.</p>
      </section>

      <section className={styles.learning} id="contenido">
        <div className={styles.sectionEyebrow}>02 / LO QUE TE LLEVAS</div>
        <div className={styles.sectionHeading}><h2>Una guía para pasar <em>de las dudas a las decisiones.</em></h2><p>Sin títulos fríos, sin fórmulas mágicas. Ideas prácticas que puedes comprender y llevar a tu vida.</p></div>
        <div className={styles.learningGrid}>{learning.map((item) => (
          <article className={styles.learningCard} key={item.n}><div className={styles.learningTop}><span>{item.n}</span><span className={styles.learningIcon}>{item.icon}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>
        ))}</div>
        <div className={styles.inlineCta}><span>NO NECESITAS MÁS RUIDO. NECESITAS ORDEN.</span><button onClick={() => goToOffer("contenido")}>QUIERO CONOCER LA GUÍA ↗</button></div>
      </section>

      <section className={styles.videoSection} id="video">
        <div className={styles.videoCopy}>
          <div className={styles.sectionEyebrow}>03 / TE LO EXPLICO PERSONALMENTE</div>
          <h2>Antes de que compres,<br /><em>quiero hablarte de algo.</em></h2>
          <p>Hay una gran diferencia entre tener información sobre lipedema y saber cómo interpretarla para tomar decisiones sobre entrenamiento y alimentación.</p>
          <p>En este vídeo te contaré por qué he creado la guía y qué puedes esperar de ella.</p>
          <div className={styles.author}><img src="/alby-ghc-training.png" alt="Alby Aguiar" /><div><strong>Alby Aguiar</strong><span>Fundador de GHC Training · GHC Academy</span></div></div>
        </div>
        <div className={styles.videoCard}>
          {introductionVideoUrl ? <video controls playsInline preload="metadata" poster="/alby-ghc-training.png" src={introductionVideoUrl} /> :
            <div className={styles.videoPlaceholder}><span className={styles.videoPlay}>▶</span><b>UNA CONVERSACIÓN CONTIGO</b><p>Aquí irá el vídeo personal de presentación de Alby.</p><small>ESPACIO PREPARADO · VÍDEO PENDIENTE DE GRABACIÓN</small></div>}
          <div className={styles.videoFoot}>GHC ACADEMY <span>·</span> ENTENDER PARA DECIDIR</div>
        </div>
      </section>

      <section className={styles.offer} id="oferta">
        <div className={styles.offerVisual}>
          <div className={styles.offerBook}><div><small>GHC ACADEMY</small><strong>LIPEDEMA</strong><em>QUE NO DECIDA<br />POR TI</em><span>GUÍA PRÁCTICA</span></div></div>
          <span className={styles.offerCaption}>EL EBOOK QUE NECESITAS PARA EMPEZAR A ENTENDER.</span>
        </div>
        <div className={styles.offerText}>
          <div className={styles.sectionEyebrow}>04 / AHORA TE TOCA A TI</div>
          <h2>La información ayuda.<br /><em>Saber usarla cambia la perspectiva.</em></h2>
          <p>Una guía digital de GHC Academy para mujeres con lipedema que quieren comprender mejor el entrenamiento, el movimiento y la alimentación, ya sepan que lo necesitan o acaben de descubrirlo.</p>
          <ul><li>✓ Entrenamiento de fuerza y regulación del esfuerzo.</li><li>✓ Movimiento y actividad aeróbica.</li><li>✓ Alimentación con criterio, sin simplificaciones.</li><li>✓ Herramientas para decidir con más independencia.</li></ul>
          <div className={styles.priceArea}>
            <span>EBOOK DIGITAL · ACCESO TRAS LA COMPRA</span>
            {priceLabel ? <strong>{priceLabel}</strong> : <strong className={styles.unpriced}>PRECIO PENDIENTE DE DEFINICIÓN</strong>}
          </div>
          {checkoutReady ? <button className={styles.buyButton} disabled={busy} onClick={checkout}>{busy ? "CONECTANDO CON EL PAGO…" : "QUIERO MI EBOOK"} <span>↗</span></button> :
            <button className={styles.buyButton} disabled aria-disabled="true">COMPRA PENDIENTE DE ACTIVACIÓN <span>↗</span></button>}
          {error && <p className={styles.error} role="alert">{error}</p>}
          <p className={styles.offerMicro}>Pago seguro al activar Stripe · Producto digital · No incluye asesoramiento individual</p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.sectionEyebrow}>EL CRITERIO DETRÁS DE LA GUÍA</div>
        <div className={styles.aboutGrid}><h2>No una promesa.<br /><em>Una manera de entender.</em></h2><p>Alby Aguiar dirige GHC Training y cuenta con una larga trayectoria profesional en entrenamiento, fuerza y preparación física. Esta guía recoge una perspectiva educativa: comprender antes de actuar y adaptar en lugar de copiar rutinas.</p></div>
      </section>

      <section className={styles.faq} id="preguntas">
        <div className={styles.sectionEyebrow}>05 / RESOLVEMOS TUS DUDAS</div>
        <h2>Preguntas <em>frecuentes.</em></h2>
        <div className={styles.faqList}>{questions.map((item) => <details key={item.q}><summary>{item.q}<span>+</span></summary><p>{item.a}</p></details>)}</div>
      </section>

      <section className={styles.finalCta}><span>GHC ACADEMY · LIPEDEMA</span><h2>Que no decida <em>por ti.</em></h2><p>Aprende a entender tu cuerpo y a tomar decisiones con más criterio.</p><button onClick={() => goToOffer("final")}>DESCUBRE EL EBOOK <span>↗</span></button></section>

      <footer className={styles.footer}>
        <div><strong>GHC ACADEMY</strong><span>Una iniciativa educativa del ecosistema GHC.</span></div>
        <div><a href="https://www.ghctraining.com">GHC Training</a><a href="https://ghcacademy.net">GHC Academy</a><a href="mailto:info@ghctraining.com">Contacto</a></div>
        <p>Contenido educativo. No diagnostica ni cura el lipedema y no sustituye la valoración ni las recomendaciones de profesionales sanitarios. © 2026 GHC.</p>
      </footer>
    </main>
  );
}
