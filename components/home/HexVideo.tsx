"use client";

import { useEffect, useRef, useState } from "react";

type HexVideoProps = {
  src: string;
  label?: string;
  className?: string;
};

export default function HexVideo({ src, label, className = "" }: HexVideoProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReduceMotion(mediaQuery.matches);
    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);
    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <figure ref={rootRef} className={`ghc-hex-video ${className}`}>
      <div className="ghc-hex-video-inner">
        {shouldLoad ? (
          <video
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={label}
          >
            <source src={src} />
          </video>
        ) : null}
        <div className="ghc-hex-video-overlay" aria-hidden="true" />
      </div>
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}
