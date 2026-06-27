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
        background: '#f5f4fd',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(108,79,242,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,79,242,0.06) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(circle at 50% 30%, #000 0%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 30%, #000 0%, transparent 78%)',
        }}
      />
      <Container style={{ position: 'relative' }}>
        <Row className="justify-content-center">
          <Col lg={10} xl={9} className="zp-reveal text-center">
            <span className="zp-eyebrow">Agentic AI · Consulting & Enablement</span>
            <h1
              className="zp-display mt-3"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                lineHeight: 1.05,
              }}
            >
              Build the{' '}
              <span className="zp-text-gradient">agentic enterprise</span>, the
              right way.
            </h1>
            <p className="zp-lead mt-3 mx-auto">
              Zaagpro Labs partners with enterprises to design, build, and scale
              reliable AI agents — and trains your teams on the tools shaping the
              future: Claude, Cursor, LangChain, and LangGraph.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center">
              <a href="#contact" className="zp-btn-primary btn d-inline-flex align-items-center gap-2">
                Start a Project <FiArrowRight />
              </a>
              <a href="#training" className="zp-btn-ghost btn">
                Explore Training
              </a>
            </div>

            <ul className="list-unstyled d-flex flex-wrap gap-3 gap-md-4 mt-4 mb-0 justify-content-center">
              {highlights.map((h) => (
                <li key={h} className="d-flex align-items-center gap-2" style={{ color: 'var(--zp-ink)', fontWeight: 500 }}>
                  <FiCheckCircle style={{ color: 'var(--zp-green-600)' }} /> {h}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
