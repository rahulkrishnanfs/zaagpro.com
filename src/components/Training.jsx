import { Container, Row, Col } from 'react-bootstrap'
import {
  FiArrowRight,
  FiClock,
  FiBarChart2,
  FiVideo,
  FiMessageSquare,
  FiCode,
  FiLink,
  FiShare2,
} from 'react-icons/fi'

const tracks = [
  {
    tag: 'Anthropic',
    name: 'Claude',
    icon: <FiMessageSquare />,
    accent: '#6c4ff2',
    level: 'Foundational → Advanced',
    duration: '2 days',
    format: 'Live / Remote',
    summary:
      'Master prompt engineering, tool use, and the Claude API to build safe, capable assistants and agents.',
    topics: [
      'Prompt & context engineering',
      'Tool use & MCP',
      'Agentic workflows',
      'Safety best practices',
    ],
  },
  {
    tag: 'AI Code Editor',
    name: 'Cursor',
    icon: <FiCode />,
    accent: '#6c4ff2',
    level: 'All levels',
    duration: '1 day',
    format: 'Live / On-site',
    summary:
      'Turn your engineering org into an AI-native team that ships faster with Cursor agents and workflows.',
    topics: [
      'Agent & composer mastery',
      'Rules & project context',
      'Codebase-wide refactors',
      'Team rollout playbook',
    ],
  },
  {
    tag: 'Framework',
    name: 'LangChain',
    icon: <FiLink />,
    accent: '#6c4ff2',
    level: 'Intermediate',
    duration: '2 days',
    format: 'Live / Remote',
    summary:
      'Build robust LLM applications with chains, retrieval, memory, and tool integrations that scale.',
    topics: [
      'RAG pipelines',
      'Memory & retrievers',
      'Tool & API integration',
      'Production patterns',
    ],
  },
  {
    tag: 'Orchestration',
    name: 'LangGraph',
    icon: <FiShare2 />,
    accent: '#6c4ff2',
    level: 'Advanced',
    duration: '2 days',
    format: 'Live / Remote',
    summary:
      'Design stateful, multi-agent systems with cycles, human-in-the-loop, and durable execution.',
    topics: [
      'Graph-based agents',
      'State & persistence',
      'Human-in-the-loop',
      'Multi-agent collaboration',
    ],
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
          {tracks.map((t, idx) => (
            <Col md={6} key={t.name} className="zp-reveal">
              <article className="zp-track-card h-100">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <span
                      className="zp-track-icon"
                      style={{ background: `${t.accent}14`, color: t.accent }}
                      aria-hidden
                    >
                      {t.icon}
                    </span>
                    <div>
                      <span className="zp-track-tag">{t.tag}</span>
                      <h3 className="zp-track-name">{t.name}</h3>
                    </div>
                  </div>
                  <span className="zp-track-index" aria-hidden>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="zp-track-summary">{t.summary}</p>

                <div className="zp-track-meta">
                  <span>
                    <FiBarChart2 style={{ color: t.accent }} /> {t.level}
                  </span>
                  <span>
                    <FiClock style={{ color: t.accent }} /> {t.duration}
                  </span>
                  <span>
                    <FiVideo style={{ color: t.accent }} /> {t.format}
                  </span>
                </div>

                <div className="zp-track-divider" />

                <p className="zp-track-learn-label">What you'll learn</p>
                <ul className="zp-track-topics">
                  {t.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="zp-track-link"
                  style={{ color: t.accent }}
                >
                  View curriculum <FiArrowRight />
                </a>
              </article>
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
