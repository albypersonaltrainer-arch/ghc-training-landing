type HexVideoProps = {
  src: string;
  label?: string;
  className?: string;
};

export default function HexVideo({ src, label, className = "" }: HexVideoProps) {
  return (
    <figure className={`ghc-hex-video ${className}`}>
      <div className="ghc-hex-video-inner">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={label}
        >
          <source src={src} />
        </video>
        <div className="ghc-hex-video-overlay" aria-hidden="true" />
      </div>
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}
