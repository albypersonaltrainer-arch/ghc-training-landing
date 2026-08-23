"use client";

import { useEffect, useRef, useState } from "react";

type HexVideoProps = {
  src: string;
  label?: string;
  className?: string;
};

const METHOD_SECOND_VIDEO = {
  src: "https://www.pexels.com/download/video/35585625/",
  sourcePage: "https://www.pexels.com/video/personal-training-session-in-modern-gym-setting-35585625/",
  provider: "Pexels",
  creator: "khezez | خزاز",
  license: "Pexels License",
} as const;

export default function HexVideo({ src, label, className = "" }: HexVideoProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const isSecondMethodVideo = className.split(/\s+/).includes("hex-b");
  const resolvedSrc = isSecondMethodVideo ? METHOD_SECOND_VIDEO.src : src;

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
    <figure
      ref={rootRef}
      className={`ghc-hex-video ${className}`}
      data-media-source={isSecondMethodVideo ? METHOD_SECOND_VIDEO.sourcePage : undefined}
      data-media-license={isSecondMethodVideo ? METHOD_SECOND_VIDEO.license : undefined}
    >
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
            <source src={resolvedSrc} />
          </video>
        ) : null}
        <div className="ghc-hex-video-overlay" aria-hidden="true" />
      </div>
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}
