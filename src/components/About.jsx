import { Container, Row, Col } from 'react-bootstrap'
import { FiTarget, FiZap, FiLock, FiTrendingUp } from 'react-icons/fi'

const reasons = [
  {
    icon: <FiTarget />,
    title: 'Outcome-obsessed',
    desc: 'We measure success by business value delivered, not slideware. Every engagement ties to clear KPIs.',
  },
  {
    icon: <FiZap />,
    title: 'Practitioners, not theorists',
    desc: 'Our team ships agentic systems for a living and brings battle-tested patterns to your problems.',
  },
  {
    icon: <FiLock />,
    title: 'Enterprise-ready',
    desc: 'Security, compliance, and governance are designed in from day one — not bolted on later.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'We make you self-sufficient',
    desc: 'We transfer knowledge as we build, so your teams can confidently own and scale what we create.',
  },
]

const stats = [
  { value: '50+', label: 'Agentic deployments' },
  { value: '1,200+', label: 'Engineers trained' },
  { value: '4.1x', label: 'Avg. delivery speedup' },
  { value: '98%', label: 'Client satisfaction' },
]

export default function About() {
  return (
    <section id="about" className="zp-section zp-bg-soft">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={5} className="zp-reveal">
            <span className="zp-eyebrow">Why Zaagpro Labs</span>
            <h2 className="zp-title">
              Your partner for the{' '}
              <span className="zp-text-gradient">agentic shift</span>
            </h2>
            <p className="zp-lead">
              We exist to help enterprises move beyond experiments and into
              dependable, value-generating agentic systems — while building the
              internal capability to keep innovating.
            </p>

            <Row className="g-3 mt-2">
              {stats.map((s) => (
                <Col xs={6} key={s.label}>
                  <div
                    style={{
                      background: '#fff',
                      border: '1px solid var(--zp-line)',
                      borderRadius: 14,
                      padding: '16px 18px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.6rem',
                        color: 'var(--zp-ink)',
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--zp-muted)' }}>
                      {s.label}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={7} className="zp-reveal">
            <Row className="g-4">
              {reasons.map((r) => (
                <Col md={6} key={r.title}>
                  <div className="zp-card h-100">
                    <span className="zp-icon-badge">{r.icon}</span>
                    <h3 className="mt-3" style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                      {r.title}
                    </h3>
                    <p style={{ color: 'var(--zp-muted)', margin: 0 }}>{r.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
