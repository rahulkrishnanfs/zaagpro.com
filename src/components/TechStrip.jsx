import { Container } from 'react-bootstrap'

const tools = ['Claude', 'Cursor', 'LangChain', 'LangGraph', 'OpenAI', 'Anthropic', 'Pinecone', 'AWS Bedrock']

export default function TechStrip() {
  return (
    <section className="py-4 zp-bg-soft" style={{ borderTop: '1px solid var(--zp-line)', borderBottom: '1px solid var(--zp-line)' }}>
      <Container>
        <p
          className="text-center mb-3"
          style={{ fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--zp-muted)', fontWeight: 700 }}
        >
          The agentic stack we engineer & teach
        </p>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4">
          {tools.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--zp-ink)',
                opacity: 0.72,
                padding: '6px 14px',
                border: '1px solid var(--zp-line)',
                borderRadius: 999,
                background: '#fff',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
