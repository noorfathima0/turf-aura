import { MapPin, Bell, Search } from 'lucide-react'

function PlaceholderUI() {
  const turfs = ['Greenfield Turf', 'Aura Arena']
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__top">
        <span className="mock__avatar" />
        <div className="mock__hello">
          <small><MapPin size={10} /> Near you</small>
          <strong>Hey, Player!</strong>
        </div>
        <span className="mock__bell"><Bell size={13} /></span>
      </div>

      <div className="mock__search">
        <Search size={13} /> Search turfs near you
      </div>

      <div className="mock__chips">
        <span>Football</span>
        <span>Cricket</span>
        <span>More</span>
      </div>

      {turfs.map((name) => (
        <div className="mock__card" key={name}>
          <div className="mock__thumb" />
          <div className="mock__info">
            <strong>{name}</strong>
            <span className="mock__tag">Slots open</span>
          </div>
        </div>
      ))}

      <div className="mock__btn">Book a slot</div>
    </div>
  )
}

export default function PhoneMockup({ screenshot }) {
  return (
    <div className="phone">
      <span className="phone__island" />
      <div className="phone__screen">
        {screenshot ? (
          <img src={screenshot} alt="Turf Aura app screen" />
        ) : (
          <PlaceholderUI />
        )}
      </div>
    </div>
  )
}