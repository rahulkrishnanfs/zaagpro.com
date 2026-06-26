# Zaagpro Labs

Marketing website for **Zaagpro Labs** — an agentic AI studio offering enterprise
consulting and hands-on training for **Claude, Cursor, LangChain, and LangGraph**.

Built with **React + Vite + Bootstrap (React-Bootstrap)** and a green/blue brand theme.

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/) + [React-Bootstrap](https://react-bootstrap.netlify.app/)
- [react-icons](https://react-icons.github.io/react-icons/)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    NavBar.jsx     # sticky, blurred navigation
    Hero.jsx       # headline + agent-orchestration visual
    TechStrip.jsx  # tech-stack strip
    Services.jsx   # consulting services grid
    Training.jsx   # Claude / Cursor / LangChain / LangGraph tracks
    Process.jsx    # engagement model
    About.jsx      # why us + stats
    Contact.jsx    # lead-capture form
    Footer.jsx
    Logo.jsx
  hooks/
    useReveal.js   # IntersectionObserver scroll animations
  index.css        # brand theme tokens + global styles
  App.jsx          # page assembly
```

## Customization

- **Brand colors / theme:** edit the CSS variables in `src/index.css` (`:root`).
- **Content:** copy lives inside each component file as plain data arrays.
- **Contact form:** `Contact.jsx` currently handles submit client-side. Wire the
  `onSubmit` handler to your CRM, email service, or API endpoint.
