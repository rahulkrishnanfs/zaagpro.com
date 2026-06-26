export default function Logo({ size = 38 }) {
  return (
    <span className="d-inline-flex align-items-center" style={{ gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="Zaagpro Labs logo"
      >
        <defs>
          <linearGradient id="zpLogoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#10b981" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#zpLogoGrad)" />
        <path
          d="M20 18h24L24 46h22"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ lineHeight: 1.05 }}>
        <span
          className="d-block"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: '1.18rem',
            color: 'var(--zp-ink)',
            letterSpacing: '-0.02em',
          }}
        >
          Zaagpro <span className="zp-text-gradient">Labs</span>
        </span>
      </span>
    </span>
  )
}
