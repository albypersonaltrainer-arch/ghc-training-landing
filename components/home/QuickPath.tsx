"use client";

import { useMemo, useState } from "react";
import { ghcTraining } from "@/config/ghcTraining";

const steps = ["goal", "place", "mode"] as const;
type Step = (typeof steps)[number];

type ChoiceState = {
  goal: string;
  place: string;
  mode: string;
};

export default function QuickPath() {
  const [choices, setChoices] = useState<ChoiceState>({ goal: "", place: "", mode: "" });
  const [step, setStep] = useState<Step>("goal");

  const currentIndex = steps.indexOf(step);
  const complete = Boolean(choices.goal && choices.place && choices.mode);

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hola Alby, quiero empezar con GHC Training.\n\nObjetivo: ${choices.goal || "Por definir"}\nDónde entreno: ${choices.place || "Por definir"}\nModalidad: ${choices.mode || "Por definir"}\n\nQuiero información sobre la valoración inicial.`
    );
    return `https://wa.me/${ghcTraining.contact.phoneE164}?text=${text}`;
  }, [choices]);

  const selectChoice = (key: Step, value: string) => {
    const next = { ...choices, [key]: value };
    setChoices(next);

    const index = steps.indexOf(key);
    if (index < steps.length - 1) {
      setStep(steps[index + 1]);
    }
  };

  const options =
    step === "goal"
      ? ghcTraining.quickPath.goals
      : step === "place"
        ? ghcTraining.quickPath.places
        : ghcTraining.quickPath.modes;

  const title =
    step === "goal"
      ? "¿Qué quieres conseguir?"
      : step === "place"
        ? "¿Dónde quieres entrenar?"
        : "¿Cómo prefieres empezar?";

  return (
    <div className="ghc-path-card">
      <div className="ghc-path-progress" aria-label={`Paso ${currentIndex + 1} de 3`}>
        {steps.map((item, index) => (
          <button
            key={item}
            type="button"
            onClick={() => setStep(item)}
            className={index <= currentIndex ? "is-active" : ""}
            aria-label={`Ir al paso ${index + 1}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      <div className="ghc-path-body">
        <p className="ghc-kicker">Tu punto de partida</p>
        <h3>{complete ? "Ya sabemos algo importante sobre tu contexto." : title}</h3>

        {!complete ? (
          <div className="ghc-choice-grid">
            {options.map((option) => (
              <button
                type="button"
                key={option}
                className={choices[step] === option ? "is-selected" : ""}
                onClick={() => selectChoice(step, option)}
              >
                <span>{option}</span>
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="ghc-path-result">
            <div className="ghc-path-summary">
              <span><small>Objetivo</small>{choices.goal}</span>
              <span><small>Entorno</small>{choices.place}</span>
              <span><small>Modalidad</small>{choices.mode}</span>
            </div>
            <p>Esto orienta el punto de partida, pero no sustituye la valoración. Ahora necesitamos entender tu historial, capacidad actual y prioridades.</p>
            <div className="ghc-path-actions">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ghc-button ghc-button-primary">
                Continuar por WhatsApp <span aria-hidden="true">↗</span>
              </a>
              <button
                type="button"
                className="ghc-text-button"
                onClick={() => {
                  setChoices({ goal: "", place: "", mode: "" });
                  setStep("goal");
                }}
              >
                Empezar de nuevo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
