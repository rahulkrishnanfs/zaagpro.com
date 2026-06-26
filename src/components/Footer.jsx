import { Container, Row, Col } from 'react-bootstrap'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import Logo from './Logo'

const groups = [
  {
    title: 'Services',
    links: [
      { label: 'Agentic AI Strategy', href: '#services' },
      { label: 'Agent Development', href: '#services' },
      { label: 'Enterprise Integration', href: '#services' },
      { label: 'Governance & Evals', href: '#services' },
    ],
  },
  {
    title: 'AI Marketing',
    links: [
      { label: 'Develop & Design', href: '#marketing' },
      { label: 'Promote & Publish', href: '#marketing' },
      { label: 'Optimize ROI', href: '#marketing' },
    ],
  },
  {
    title: 'Training',
    links: [
      { label: 'Claude', href: '#training' },
      { label: 'Cursor', href: '#training' },
      { label: 'LangChain', href: '#training' },
      { label: 'LangGraph', href: '#training' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why Us', href: '#about' },
      { label: 'How We Work', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#07161e', color: '#94a3b8', paddingTop: 60 }}>
      <Container>
        <Row className="g-5">
          <Col lg={4}>
            <div style={{ filter: 'brightness(1.6)' }}>
              <Logo />
            </div>
            <p className="mt-3" style={{ maxWidth: 320 }}>
              Agentic AI consulting and training for the enterprise. We help you
              design, build, and scale reliable AI agents — and grow the teams
              behind them.
            </p>
            <div className="d-flex gap-2 mt-3">
              {[FiLinkedin, FiTwitter, FiGithub].map((Icon, i) => (
                <a
                  key={i}
                  href="#home"
                  aria-label="social link"
                  className="d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#cbd5e1',
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Col>

          {groups.map((g) => (
            <Col xs={6} md={4} lg={2} key={g.title}>
              <h4
                style={{
                  color: '#fff',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                {g.title}
              </h4>
              <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} style={{ color: '#94a3b8' }}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 mt-5 py-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.88rem' }}
        >
          <span>© {new Date().getFullYear()} Zaagpro Labs. All rights reserved.</span>
          <span>Built for the agentic enterprise.</span>
        </div>
      </Container>
    </footer>
  )
}
