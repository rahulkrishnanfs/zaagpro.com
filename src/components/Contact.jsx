import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { FiMail, FiMapPin, FiCheck } from 'react-icons/fi'

const interests = ['Agentic AI consulting', 'Team training', 'Both']

// Contact form submissions are delivered here via FormSubmit (no backend
// required). The first submission triggers a one-time confirmation email to
// this address — click the link in it to activate delivery.
const CONTACT_EMAIL = 'chat@rahulra.dev'
const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: interests[0],
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const sent = status === 'sent'

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          interest: form.interest,
          message: form.message,
          _subject: `New enquiry from ${form.name || 'website'} — Zaagpro Labs`,
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="zp-section"
      style={{
        background:
          '#0b1437',
      }}
    >
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={5} className="zp-reveal" style={{ color: '#e2e8f0' }}>
            <span
              className="zp-eyebrow"
              style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', color: '#5eead4' }}
            >
              Let's talk
            </span>
            <h2
              className="zp-title"
              style={{ color: '#fff' }}
            >
              Ready to build your{' '}
              <span className="zp-text-gradient">agentic roadmap?</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.08rem', maxWidth: 520 }}>
              Tell us about your goals. We'll get back within one business day to
              schedule a no-obligation strategy call.
            </p>

            <div className="d-flex flex-column gap-3 mt-4">
              <a
                href="mailto:info@zaagpro.com"
                className="d-flex align-items-center gap-3"
                style={{ color: '#e2e8f0' }}
              >
                <span className="zp-icon-badge" style={{ width: 46, height: 46, fontSize: '1.1rem' }}>
                  <FiMail />
                </span>
                info@zaagpro.com
              </a>
              <div className="d-flex align-items-center gap-3" style={{ color: '#e2e8f0' }}>
                <span className="zp-icon-badge" style={{ width: 46, height: 46, fontSize: '1.1rem' }}>
                  <FiMapPin />
                </span>
                Remote-first · Serving enterprises worldwide
              </div>
            </div>
          </Col>

          <Col lg={7} className="zp-reveal">
            <div
              style={{
                background: '#fff',
                borderRadius: 22,
                padding: 30,
                boxShadow: 'var(--zp-shadow)',
              }}
            >
              {sent ? (
                <div className="text-center py-5">
                  <span
                    className="zp-icon-badge mx-auto"
                    style={{ width: 64, height: 64, fontSize: '1.8rem' }}
                  >
                    <FiCheck />
                  </span>
                  <h3 className="mt-3" style={{ fontWeight: 800 }}>
                    Thank you, {form.name || 'there'}!
                  </h3>
                  <p style={{ color: 'var(--zp-muted)' }}>
                    Your message is on its way. We'll be in touch within one
                    business day.
                  </p>
                </div>
              ) : (
                <Form onSubmit={onSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Label className="fw-semibold">Full name</Form.Label>
                      <Form.Control
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Jane Doe"
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label className="fw-semibold">Work email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="jane@company.com"
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label className="fw-semibold">Company</Form.Label>
                      <Form.Control
                        value={form.company}
                        onChange={update('company')}
                        placeholder="Acme Inc."
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Label className="fw-semibold">I'm interested in</Form.Label>
                      <Form.Select value={form.interest} onChange={update('interest')}>
                        {interests.map((i) => (
                          <option key={i}>{i}</option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col xs={12}>
                      <Form.Label className="fw-semibold">How can we help?</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell us about your goals, timeline, and team…"
                      />
                    </Col>
                    <Col xs={12}>
                      <button
                        type="submit"
                        className="zp-btn-primary btn w-100"
                        disabled={status === 'sending'}
                      >
                        {status === 'sending' ? 'Sending…' : 'Send message'}
                      </button>
                      {status === 'error' && (
                        <p
                          className="text-center mt-3 mb-0"
                          style={{ fontSize: '0.86rem', color: '#dc2626' }}
                        >
                          Something went wrong. Please email us directly at{' '}
                          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#dc2626', fontWeight: 600 }}>
                            {CONTACT_EMAIL}
                          </a>
                          .
                        </p>
                      )}
                      <p
                        className="text-center mt-3 mb-0"
                        style={{ fontSize: '0.82rem', color: 'var(--zp-muted)' }}
                      >
                        We respect your privacy. No spam, ever.
                      </p>
                    </Col>
                  </Row>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
