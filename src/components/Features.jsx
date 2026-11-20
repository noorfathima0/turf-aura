import { Check } from 'lucide-react'
import { FEATURES } from '../data/content'

export default function Features() {
  const highlights = FEATURES.slice(0, 4)
  const extras = FEATURES.slice(4)

  return (
    <section className="section" id="features">
      <div className="container features__layout">
        {/* Staggered cards */}
        <div className="features__cards-wrapper">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="feature-item"
              data-reveal
              style={{ '--delay': `${i * 0.08}s` }}
            >
              <article
                className={`feature-card ${
                  i === 0 || i === 3 ? 'feature-card--dark' : 'feature-card--light'
                }`}
              >
                <span className="feature-card__icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </div>
          ))}
        </div>

        {/* Info column */}
        <div className="features__info" data-reveal>
          <span className="section-heading__eyebrow">Features</span>
          <h2>
            Everything you need to hit the <span className="text-accent">turf</span>
          </h2>
          <p>
            Tired of calling around different grounds just to get a game going? Turf Aura
            brings it all into one app: search, book and play, with no calling and no waiting.
          </p>
          <p>
            Whether it is a quick pick-up game or a planned match, you can see what is
            available right now and lock in your slot in seconds.
          </p>

          <ul className="features__list">
            {extras.map(({ title, text }) => (
              <li key={title}>
                <span className="features__check">
                  <Check size={16} aria-hidden="true" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#download" className="btn btn--dark">Get the app</a>
        </div>
      </div>
    </section>
  )
}