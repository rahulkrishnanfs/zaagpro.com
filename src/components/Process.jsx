import { Container, Row, Col } from 'react-bootstrap'

const steps = [
  {
    n: '01',
    title: 'Discover',
    desc: 'We map your goals, data, and constraints to pinpoint the agentic use cases with the highest impact.',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'We architect the agent system — orchestration, tools, guardrails, and evals — with a clear delivery plan.',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'We develop in tight iterations alongside your team, shipping working software with measurable quality.',
  },
  {
    n: '04',
    title: 'Scale & Enable',
    desc: 'We harden for production, set up observability, and upskill your team to own and extend the system.',
  },
]

export default function Process() {
  return (
    <section id="process" className="zp-section">
      <Container>
        <div className="text-center zp-reveal">
          <span className="zp-eyebrow">How we work</span>
          <h2 className="zp-title">
            A clear path from idea to{' '}
            <span className="zp-text-gradient">production</span>
          </h2>
          <p className="zp-lead mx-auto">
            A proven, transparent engagement model designed to de-risk adoption and
            deliver value fast.
          </p>
        </div>

        <Row className="g-4 mt-2">
          {steps.map((s) => (
            <Col md={6} lg={3} key={s.n} className="zp-reveal">
              <div className="zp-card h-100">
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: '2.2rem',
                    background: 'var(--zp-gradient)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s.n}
                </span>
                <h3 className="mt-2" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--zp-muted)', margin: 0 }}>{s.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
