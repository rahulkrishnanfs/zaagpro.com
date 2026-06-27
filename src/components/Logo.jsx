export default function Logo({ size = 38, inkColor = 'var(--zp-ink)' }) {
  return (
    <span className="d-inline-flex align-items-center" style={{ gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        role="img"
        aria-label="Zaagpro Labs logo"
      >
        <rect width="64" height="64" rx="16" fill="#6c4ff2" />
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
            color: inkColor,
            letterSpacing: '-0.02em',
          }}
        >
          Zaagpro <span style={{ color: 'var(--zp-brand)' }}>Labs</span>
        </span>
      </span>
    </span>
  )
}
