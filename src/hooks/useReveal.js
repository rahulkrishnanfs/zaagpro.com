import { useEffect } from 'react'

// Adds the `is-visible` class to any `.zp-reveal` element when it scrolls
// into view, powering subtle entrance animations across the page.
export default function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.zp-reveal'))
    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
