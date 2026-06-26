import { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from './Logo'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#marketing', label: 'AI Marketing' },
  { href: '#training', label: 'Training' },
  { href: '#process', label: 'How We Work' },
  { href: '#about', label: 'Why Us' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy — highlight the link for the section currently in view.
  useEffect(() => {
    const ids = ['home', ...links.map((l) => l.href.slice(1)), 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`zp-navbar ${scrolled ? 'is-scrolled' : ''} ${expanded ? 'is-open' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => setExpanded(false)}>
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="zp-nav" className="zp-toggle">
          <span className="zp-toggle-bar" />
          <span className="zp-toggle-bar" />
          <span className="zp-toggle-bar" />
        </Navbar.Toggle>

        <Navbar.Collapse id="zp-nav">
          <Nav className="ms-auto align-items-lg-center zp-nav">
            {links.map((l) => (
              <Nav.Link
                key={l.href}
                href={l.href}
                onClick={() => setExpanded(false)}
                className={`zp-nav-link ${active === l.href ? 'active' : ''}`}
              >
                {l.label}
              </Nav.Link>
            ))}
            <a
              href="#contact"
              className="zp-btn-primary btn zp-nav-cta ms-lg-3"
              onClick={() => setExpanded(false)}
            >
              Book a Strategy Call
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
