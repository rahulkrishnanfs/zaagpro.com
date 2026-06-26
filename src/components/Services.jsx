import { Container, Row, Col } from 'react-bootstrap'
import {
  FiCompass,
  FiCpu,
  FiLayers,
  FiShield,
  FiActivity,
  FiUsers,
} from 'react-icons/fi'

const services = [
  {
    icon: <FiCompass />,
    title: 'Agentic AI Strategy',
    desc: 'Identify high-ROI use cases, define a pragmatic roadmap, and align stakeholders on where agents create real business value.',
    points: ['Opportunity assessment', 'ROI & risk modeling', 'Build-vs-buy guidance'],
  },
  {
    icon: <FiCpu />,
    title: 'Agent Design & Development',
    desc: 'We architect and ship multi-agent systems — planners, tools, memory, and orchestration — built on LangChain & LangGraph.',
    points: ['Multi-agent orchestration', 'RAG & tool integration', 'Eval-driven development'],
  },
  {
    icon: <FiLayers />,
    title: 'Enterprise Integration',
    desc: 'Connect agents securely to your data, APIs, and internal systems with patterns that scale across the organization.',
    points: ['Secure data connectors', 'API & workflow automation', 'Cloud deployment (AWS/Azure/GCP)'],
  },
  {
    icon: <FiShield />,
    title: 'Governance & Guardrails',
    desc: 'Ship responsibly with safety layers, policy controls, and human-in-the-loop checkpoints your compliance team trusts.',
    points: ['Guardrails & policy', 'PII & data protection', 'Audit & traceability'],
  },
  {
    icon: <FiActivity />,
    title: 'Evals & Observability',
    desc: 'Measure what matters. We instrument agents with evaluation suites and monitoring so quality never drifts in production.',
    points: ['Automated eval pipelines', 'Tracing & monitoring', 'Continuous improvement'],
  },
  {
    icon: <FiUsers />,
    title: 'Team Enablement',
    desc: 'Hands-on training and embedded coaching so your engineers can confidently build and maintain agentic systems themselves.',
    points: ['Role-based curricula', 'Pair-building sessions', 'Internal best practices'],
  },
]

export default function Services() {
  return (
    <section id="services" className="zp-section">
      <Container>
        <div className="text-center zp-reveal">
          <span className="zp-eyebrow">What we do</span>
          <h2 className="zp-title">
            End-to-end <span className="zp-text-gradient">agentic AI</span>{' '}
            consulting
          </h2>
          <p className="zp-lead mx-auto">
            From strategy to production and beyond — we help enterprises adopt
            agentic development with confidence, safety, and measurable outcomes.
          </p>
        </div>

        <Row className="g-4 mt-2">
          {services.map((s) => (
            <Col md={6} lg={4} key={s.title} className="zp-reveal">
              <div className="zp-card">
                <span className="zp-icon-badge">{s.icon}</span>
                <h3 className="mt-3" style={{ fontSize: '1.22rem', fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--zp-muted)', marginBottom: 16 }}>{s.desc}</p>
                <ul className="list-unstyled m-0 d-flex flex-column gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="d-flex align-items-center gap-2"
                      style={{ fontSize: '0.92rem', color: 'var(--zp-ink)' }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: 'var(--zp-gradient)',
                          flex: '0 0 auto',
                        }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
