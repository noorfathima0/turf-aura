import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SCREENS } from '../data/content'

// Any image dropped into src/assets/screens/ is picked up automatically,
// sorted by filename (1.png, 2.png, ...). With none, placeholders show.
const modules = import.meta.glob('../assets/screens/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

const slides = images.length
  ? images.map((src, i) => ({ ...(SCREENS[i] ?? { title: `Screen ${i + 1}` }), src }))
  : SCREENS

function Placeholder({ icon: Icon, title }) {
  return (
    <div className="shot-ph" aria-hidden="true">
      <div className="shot-ph__hero">
        <span className="shot-ph__icon">{Icon && <Icon size={22} aria-hidden="true" />}</span>
      </div>
      <strong>{title}</strong>
      <span className="shot-ph__line" />
      <span className="shot-ph__line shot-ph__line--short" />
      <div className="shot-ph__card" />
      <div className="shot-ph__card" />
      <div className="shot-ph__btn" />
    </div>
  )
}

export default function Screenshots() {
  const trackRef = useRef(null)
  const [nav, setNav] = useState({ canPrev: false, canNext: false })

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setNav({
      canPrev: el.scrollLeft > 4,
      canNext: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    })
  }, [])

  useEffect(() => {
    const el = trackRef.current
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scrollByOne = (dir) => {
    const el = trackRef.current
    const slide = el.querySelector('.shot')
    el.scrollBy({ left: dir * (slide.offsetWidth + 24), behavior: 'smooth' })
  }

  return (
    <section className="section screens" id="screenshots">
      <div className="container screens__head">
        <div className="screens__intro" data-reveal>
          <span className="section-heading__eyebrow">App preview</span>
          <h2>
            See Turf Aura in <span className="text-accent">action</span>
          </h2>
          <p>A quick look at the screens that take you from search to kick-off.</p>
        </div>

        <div className="screens__nav" hidden={!(nav.canPrev || nav.canNext)}>
          <button
            type="button"
            aria-label="Previous screens"
            disabled={!nav.canPrev}
            onClick={() => scrollByOne(-1)}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Next screens"
            disabled={!nav.canNext}
            onClick={() => scrollByOne(1)}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <ul className="screens__track" ref={trackRef} tabIndex={0} aria-label="App screenshots">
        {slides.map(({ icon, title, text, src }, i) => (
          <li
            className="shot"
            key={title}
            data-reveal
            style={{ '--delay': `${i * 0.08}s` }}
            >
            <div className="shot__screen">
                {src ? (
                <img src={src} alt={`Turf Aura app: ${title}`} width="210" height="443" loading="lazy" decoding="async" />
                ) : (
                <Placeholder icon={icon} title={title} />
                )}
            </div>
            <h3>{title}</h3>
            {text && <p>{text}</p>}
            </li>
        ))}
      </ul>
    </section>
  )
}