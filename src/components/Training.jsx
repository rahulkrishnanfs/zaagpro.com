import { Container, Row, Col } from 'react-bootstrap'
import { FiArrowRight } from 'react-icons/fi'

const tracks = [
  {
    tag: 'Anthropic',
    name: 'Claude',
    accent: '#d97757',
    summary:
      'Master prompt engineering, tool use, and the Claude API to build safe, capable assistants and agents.',
    topics: ['Prompt & context engineering', 'Tool use & MCP', 'Agentic workflows', 'Safety best practices'],
  },
  {
    tag: 'AI Code Editor',
    name: 'Cursor',
    accent: '#0ea5e9',
    summary:
      'Turn your engineering org into an AI-native team that ships faster with Cursor agents and workflows.',
    topics: ['Agent & composer mastery', 'Rules & project context', 'Codebase-wide refactors', 'Team rollout playbook'],
  },
  {
    tag: 'Framework',
    name: 'LangChain',
    accent: '#10b981',
    summary:
      'Build robust LLM applications with chains, retrieval, memory, and tool integrations that scale.',
    topics: ['RAG pipelines', 'Memory & retrievers', 'Tool & API integration', 'Production patterns'],
  },
  {
    tag: 'Orchestration',
    name: 'LangGraph',
    accent: '#2563eb',
    summary:
      'Design stateful, multi-agent systems with cycles, human-in-the-loop, and durable execution.',
    topics: ['Graph-based agents', 'State & persistence', 'Human-in-the-loop', 'Multi-agent collaboration'],
  },
]

export default function Training() {
  return (
    <section id="training" className="zp-section zp-bg-soft">
      <Container>
        <div className="text-center zp-reveal">
          <span className="zp-eyebrow">Training & enablement</span>
          <h2 className="zp-title">
            Hands-on training on the tools that{' '}
            <span className="zp-text-gradient">matter</span>
          </h2>
          <p className="zp-lead mx-auto">
            Practical, project-based programs led by practitioners. Delivered live,
            remote, or embedded with your teams — tailored to your stack and goals.
          </p>
        </div>

        <Row className="g-4 mt-2">
          {tracks.map((t) => (
            <Col md={6} key={t.name} className="zp-reveal">
              <div
                className="zp-card h-100"
                style={{ borderTop: `4px solid ${t.accent}` }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--zp-muted)',
                      }}
                    >
                      {t.tag}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '2px 0 0' }}>
                      {t.name}
                    </h3>
                  </div>
                  <span
                    aria-hidden
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 12,
                      background: `${t.accent}1a`,
                      color: t.accent,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '1.2rem',
                    }}
                  >
                    {t.name[0]}
                  </span>
                </div>

                <p style={{ color: 'var(--zp-muted)', margin: '14px 0 16px' }}>
                  {t.summary}
                </p>

                <div className="d-flex flex-wrap gap-2">
                  {t.topics.map((topic) => (
                    <span
                      key={topic}
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        color: 'var(--zp-ink)',
                        background: '#fff',
                        border: '1px solid var(--zp-line)',
                        borderRadius: 999,
                        padding: '6px 12px',
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5 zp-reveal">
          <a href="#contact" className="zp-btn-primary btn d-inline-flex align-items-center gap-2">
            Request a tailored training plan <FiArrowRight />
          </a>
        </div>
      </Container>
    </section>
  )
}
