const sites = [
  { label: 'GHC Training', href: 'https://www.ghctraining.com', current: true, role: 'Entrenamiento personal' },
  {
    label: 'GHC Academy',
    href: 'https://ghcacademy.net?utm_source=ghctraining&utm_medium=ecosystem&utm_campaign=ghc_ecosystem',
    current: false,
    role: 'Formación profesional',
  },
  {
    label: 'GHC Nutrition',
    href: 'https://www.ghcnutrition.com?utm_source=ghctraining&utm_medium=ecosystem&utm_campaign=ghc_ecosystem',
    current: false,
    role: 'Nutrición y suplementación',
  },
] as const;

export default function GHCEcosystemLinks() {
  return (
    <nav
      aria-label="Ecosistema GHC"
      style={{
        borderTop: '1px solid rgba(242,244,241,.10)',
        background: '#080B0A',
        color: '#F2F4F1',
      }}
    >
      <div
        style={{
          width: 'min(100% - 32px, 1180px)',
          margin: '0 auto',
          padding: '22px 0 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px 22px',
        }}
      >
        <span
          style={{
            color: '#22D65B',
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
          }}
        >
          Ecosistema GHC
        </span>
        {sites.map((site) => (
          <a
            key={site.label}
            href={site.href}
            aria-current={site.current ? 'page' : undefined}
            aria-label={`${site.label} · ${site.role}`}
            title={site.role}
            data-ghc-ecosystem-link={site.label}
            data-ghc-source="ghctraining"
            style={{
              color: site.current ? '#F2F4F1' : 'rgba(242,244,241,.66)',
              fontSize: 13,
              fontWeight: site.current ? 900 : 750,
              textDecoration: 'none',
              borderBottom: site.current ? '1px solid #22D65B' : '1px solid transparent',
              paddingBottom: 3,
            }}
          >
            {site.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
