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
          <span className="hero__line hero-rise">{HERO.title}</span>
          <span className="hero__line hero__line--accent hero-rise" style={{ '--delay': '0.08s' }}>
            {HERO.highlight}
          </span>
        </h1>

        <div className="hero__center">
          <span className="hero__glow" aria-hidden="true" />
          <span className="hero__circle" aria-hidden="true" />

          <div className="hero__phone hero-anim" style={{ '--delay': '0.15s' }}>
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

        <p className="hero__tagline hero-anim" style={{ '--delay': '0.25s' }}>{HERO.tagline}</p>

        <div className="hero__cta hero-anim" style={{ '--delay': '0.3s' }}>
          <p>{HERO.description}</p>
          <StoreButtons className="store-buttons--pill" />
        </div>
      </div>
    </section>
  )
}