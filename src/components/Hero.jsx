import { Container, Row, Col } from 'react-bootstrap'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

const highlights = [
  'Production-grade agentic systems',
  'Vendor-neutral architecture',
  'Upskilling for your whole team',
]

export default function Hero() {
  return (
    <header
      id="home"
      className="zp-hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(1100px 520px at 12% -8%, rgba(16,185,129,0.16), transparent 60%), radial-gradient(900px 520px at 92% 6%, rgba(37,99,235,0.18), transparent 58%), #ffffff',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(15,118,110,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(circle at 50% 30%, #000 0%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 30%, #000 0%, transparent 78%)',
        }}
      />
      <Container style={{ position: 'relative' }}>
        <Row className="align-items-center g-5">
          <Col lg={6} className="zp-reveal text-center text-lg-start">
            <span className="zp-eyebrow">Agentic AI · Consulting & Enablement</span>
            <h1
              className="zp-display mt-3"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2.3rem, 5vw, 3.6rem)',
                lineHeight: 1.06,
              }}
            >
              Build the{' '}
              <span className="zp-text-gradient">agentic enterprise</span>, the
              right way.
            </h1>
            <p className="zp-lead mt-3 mx-auto mx-lg-0">
              Zaagpro Labs partners with enterprises to design, build, and scale
              reliable AI agents — and trains your teams on the tools shaping the
              future: Claude, Cursor, LangChain, and LangGraph.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start">
              <a href="#contact" className="zp-btn-primary btn d-inline-flex align-items-center gap-2">
                Start a Project <FiArrowRight />
              </a>
              <a href="#training" className="zp-btn-ghost btn">
                Explore Training
              </a>
            </div>

            <ul className="list-unstyled d-flex flex-wrap gap-3 gap-md-4 mt-4 mb-0 justify-content-center justify-content-lg-start">
              {highlights.map((h) => (
                <li key={h} className="d-flex align-items-center gap-2" style={{ color: 'var(--zp-ink)', fontWeight: 500 }}>
                  <FiCheckCircle style={{ color: 'var(--zp-green-600)' }} /> {h}
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={6} className="zp-reveal">
            <HeroVisual />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

function HeroVisual() {
  const nodes = [
    { label: 'Planner Agent', tone: 'green' },
    { label: 'Tool / RAG Layer', tone: 'blue' },
    { label: 'Critic & Guardrails', tone: 'green' },
    { label: 'Human-in-the-loop', tone: 'blue' },
  ]
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid var(--zp-line)',
        borderRadius: 24,
        boxShadow: 'var(--zp-shadow)',
        padding: 26,
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span style={{ fontWeight: 700, color: 'var(--zp-ink)' }}>
          Agent Orchestration
        </span>
        <span
          className="d-inline-flex align-items-center gap-2"
          style={{ fontSize: '0.8rem', color: 'var(--zp-green-600)', fontWeight: 600 }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--zp-green)',
              boxShadow: '0 0 0 4px rgba(16,185,129,0.18)',
            }}
          />
          live
        </span>
      </div>

      <div className="d-flex flex-column gap-2">
        {nodes.map((n, i) => (
          <div key={n.label}>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{
                border: '1px solid var(--zp-line)',
                borderRadius: 14,
                padding: '14px 16px',
                background:
                  n.tone === 'green'
                    ? 'linear-gradient(90deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))'
                    : 'linear-gradient(90deg, rgba(37,99,235,0.10), rgba(37,99,235,0.02))',
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--zp-ink)' }}>
                {n.label}
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: n.tone === 'green' ? 'var(--zp-green-600)' : 'var(--zp-blue-700)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <div
                aria-hidden
                style={{
                  width: 2,
                  height: 16,
                  margin: '2px auto',
                  background:
                    'linear-gradient(var(--zp-green), var(--zp-blue))',
                  borderRadius: 2,
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div
        className="d-flex justify-content-between mt-3 pt-3"
        style={{ borderTop: '1px dashed var(--zp-line)' }}
      >
        <Metric value="99.2%" label="Task success" />
        <Metric value="4.1x" label="Faster delivery" />
        <Metric value="100%" label="Observable" />
      </div>
    </div>
  )
}

function Metric({ value, label }) {
  return (
    <div className="text-center">
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: '1.25rem',
          color: 'var(--zp-ink)',
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: '0.74rem', color: 'var(--zp-muted)' }}>{label}</div>
    </div>
  )
}
