import Navbar from './components/Navbar'
import Hero from './components/Hero'
import useReveal from './hooks/useReveal'
import Features from './components/Features'

export default function App() {
  useReveal()

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  )
}
