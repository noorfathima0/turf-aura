import { ArrowUp } from 'lucide-react'
import logo from '../assets/logo.png'
import { NAV_LINKS, LINKS, FOOTER } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="footer__logo">
              <img src={logo} alt="" width="40" height="40" loading="lazy" />
              <span>Turf Aura</span>
            </a>
            <p>{FOOTER.blurb}</p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h3>Explore</h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3>Get the app</h3>
            <ul>
              <li>
                <a href={LINKS.appStore} target="_blank" rel="noopener noreferrer">
                  App Store
                </a>
              </li>
              <li>
                <a href={LINKS.playStore} target="_blank" rel="noopener noreferrer">
                  Google Play
                </a>
              </li>
            </ul>
          </div>

          {FOOTER.email && (
            <div className="footer__col">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="footer__bottom">
          <p>© {year} Turf Aura. All rights reserved.</p>
          <a href="#top" className="footer__top">
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}