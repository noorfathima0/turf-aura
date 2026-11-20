import Navbar from './components/Navbar'
import Hero from './components/Hero'
import useReveal from './hooks/useReveal'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Download />
      </main>
      <Footer />
    </div>
  )
}
