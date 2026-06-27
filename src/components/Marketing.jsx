import { Container, Row, Col } from 'react-bootstrap'
import {
  FiEdit3,
  FiImage,
  FiSend,
  FiBarChart2,
  FiTrendingUp,
  FiArrowRight,
} from 'react-icons/fi'

const pillars = [
  {
    icon: <FiEdit3 />,
    title: 'Develop',
    desc: 'AI agents craft your content strategy, calendars, captions, and campaigns tuned to your brand voice and audience.',
  },
  {
    icon: <FiImage />,
    title: 'Design',
    desc: 'Generative AI produces on-brand visuals, ad creatives, and video concepts in minutes — not weeks.',
  },
  {
    icon: <FiSend />,
    title: 'Promote',
    desc: 'Automated, multi-channel publishing and engagement across LinkedIn, Instagram, X, TikTok, and more.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Optimize',
    desc: 'Agents analyze performance, A/B test, and reallocate spend in real time to maximize ROI.',
  },
]

export default function Marketing() {
  return (
    <section id="marketing" className="zp-section">
      <Container>
        <div className="text-center zp-reveal">
          <span className="zp-eyebrow">AI Social Media Marketing</span>
          <h2 className="zp-title">
            Grow revenue with{' '}
            <span className="zp-text-gradient">agentic marketing</span>
          </h2>
          <p className="zp-lead mx-auto">
            We help brands develop, design, and promote marketing with AI and
            agentic AI — turning social channels into a measurable, always-on
            growth engine.
          </p>
        </div>

        <Row className="g-4 mt-2">
          {pillars.map((p) => (
            <Col md={6} lg={3} key={p.title} className="zp-reveal">
              <div className="zp-card h-100">
                <span className="zp-icon-badge">{p.icon}</span>
                <h3 className="mt-3" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--zp-muted)', margin: 0 }}>{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        <div
          className="mt-5 zp-reveal"
          style={{
            background: 'var(--zp-gradient)',
            borderRadius: 'var(--zp-radius)',
            padding: '36px 32px',
            color: '#fff',
            boxShadow: 'var(--zp-shadow)',
          }}
        >
          <div className="text-center">
            <span
              className="d-inline-flex align-items-center gap-2"
              style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.9 }}
            >
              <FiTrendingUp /> Real outcomes
            </span>
            <h3 className="mt-2" style={{ color: '#fff', fontWeight: 800, fontSize: '1.75rem' }}>
              Marketing that pays for itself
            </h3>
            <p
              className="mx-auto"
              style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 0, maxWidth: 620 }}
            >
              From content engines to performance campaigns, our AI-driven
              approach drives engagement and revenue you can measure.
            </p>
            <a
              href="#contact"
              className="btn mt-4 d-inline-flex align-items-center gap-2"
              style={{ background: '#fff', color: 'var(--zp-green-700)', fontWeight: 700, borderRadius: 12, padding: '11px 22px' }}
            >
              Boost my marketing <FiArrowRight />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
