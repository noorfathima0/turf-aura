import { CalendarCheck } from 'lucide-react'
import StoreButtons from './StoreButtons'
import PhoneMockup from './PhoneMockup'
import logo from '../assets/logo.png'
import { HERO } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container hero__stage">
        <h1 className="hero__title">
          <span className="hero__line" data-reveal>{HERO.title}</span>
          <span className="hero__line hero__line--accent" data-reveal style={{ '--delay': '0.1s' }}>
            {HERO.highlight}
          </span>
        </h1>

        <div className="hero__center">
          <span className="hero__glow" aria-hidden="true" />
          <span className="hero__circle" aria-hidden="true" />

          <div className="hero__phone" data-reveal style={{ '--delay': '0.2s' }}>
            <PhoneMockup screenshot={HERO.screenshot} />
          </div>

          <div className="tile tile--logo" aria-hidden="true">
            <img src={logo} alt="" width="60" height="60" />
          </div>

          <div className="tile tile--booking">
            <span className="tile__icon"><CalendarCheck size={20} /></span>
            <span>
              <strong>Slot confirmed</strong>
              <small>Today · 7:00 PM</small>
            </span>
          </div>
        </div>

        <p className="hero__tagline" data-reveal>{HERO.tagline}</p>

        <div className="hero__cta" data-reveal>
          <p>{HERO.description}</p>
          <StoreButtons className="store-buttons--pill" />
        </div>
      </div>
    </section>
  )
}