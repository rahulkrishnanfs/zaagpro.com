import NavBar from './components/NavBar'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import Services from './components/Services'
import Marketing from './components/Marketing'
import Training from './components/Training'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <TechStrip />
        <Services />
        <Marketing />
        <Training />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
