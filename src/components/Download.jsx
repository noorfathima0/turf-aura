import { Check, Smartphone } from 'lucide-react'
import StoreButtons from './StoreButtons'
import logo from '../assets/logo.png'

export default function Download() {
  return (
    <section className="section section--soft" id="download">
      <div className="container">
        <div className="download__card" data-reveal>
          <div className="download__copy">
            <span className="download__eyebrow">Download</span>
            <h2>
              Ready to <span className="download__accent">own the game?</span>
            </h2>
            <p>
              Get Turf Aura on your phone and book your next game in seconds. No calling, no
              waiting, just play.
            </p>
            <StoreButtons />
          </div>

          <div className="download__visual" aria-hidden="true">
            <span className="download__ring download__ring--1" />
            <span className="download__ring download__ring--2" />
            <span className="download__ring download__ring--3" />

            <div className="download__icon">
              <img src={logo} alt="" width="128" height="128" loading="lazy" />
            </div>

            <span className="download__chip download__chip--1">
              <Check size={16} /> Free to download
            </span>
            <span className="download__chip download__chip--2">
              <Smartphone size={16} /> iOS &amp; Android
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}