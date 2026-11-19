import Navbar from './components/Navbar'
import Hero from './components/Hero'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  )
}