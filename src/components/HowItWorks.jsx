import { STEPS } from '../data/content'

// The curve is drawn in a 1160 x 720 box. NODES use the same box, so each
// node sits on the line at any width. If you change PATH, move the nodes too.
const W = 1160
const H = 720
const PATH =
  'M0 450 C90 495 160 540 240 540 C380 540 470 420 620 420 C760 420 790 190 900 190 L960 190'
const NODES = [
  { x: 240, y: 540 },
  { x: 620, y: 420 },
  { x: 900, y: 190 },
]

export default function HowItWorks() {
  return (
    <section className="section section--soft process" id="how-it-works">
      <span className="process__bg" aria-hidden="true" />

      <div className="container">
        <div className="process__stage">
          {/* Desktop curve */}
          <svg
            className="process__curve"
            viewBox={`0 0 ${W} ${H}`}
            aria-hidden="true"
            data-reveal
          >
            <defs>
              <linearGradient id="processGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0a9b3a" />
                <stop offset="55%" stopColor="#6cbf1f" />
                <stop offset="100%" stopColor="#ffe600" />
              </linearGradient>
            </defs>
            <path className="process__path" d={PATH} pathLength="1" />
          </svg>

          {/* Intro block */}
          <div className="process__intro" data-reveal>
            <span className="section-heading__eyebrow">How it works</span>
            <h2>
              From search to <span className="text-accent">kick-off</span> in 3 steps
            </h2>
            <p>
              No calling around, no waiting for a reply. Find a ground, pick a slot and you
              are set.
            </p>
            <a href="#download" className="btn btn--dark">Get the app</a>
          </div>

          {/* Steps */}
          <ol className="process__steps">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li
                className="step"
                key={title}
                data-reveal
                style={{
                  '--x': `${(NODES[i].x / W) * 100}%`,
                  '--y': `${(NODES[i].y / H) * 100}%`,
                  '--delay': `${0.15 + i * 0.2}s`,
                }}
              >
                <span className="step__node">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="step__num" aria-hidden="true">{i + 1}</span>
                <div className="step__body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}