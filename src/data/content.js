import {Zap, MapPin, Clock, RefreshCcw, ShieldCheck, Trophy, Search, CalendarCheck } from 'lucide-react'

export const LINKS = {
  appStore: 'https://apps.apple.com/in/app/turf-aura/id6746241005',
  playStore: 'https://play.google.com/store/apps/details?id=com.tezfo.turfaura',
}

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Download', href: '#download' },
]

export const HERO = {
  title: 'Book your turf.',
  highlight: 'Own the game.',
  tagline: 'The easiest way to get on the pitch.',
  description:
    'Find nearby turfs, check live slots and lock in your game in seconds. No calls, no waiting, just play.',
  screenshot: null, // later: import a real app screenshot and put it here
}

export const FEATURES = [
  {
    icon: Clock,
    title: 'Real-time availability',
    text: 'See which slots are open right now. Availability updates instantly, so you never chase a booked-out turf.',
  },
  {
    icon: Zap,
    title: 'Instant online booking',
    text: 'Pick your slot and confirm in a few taps. No more calling around or waiting for a reply.',
  },
  {
    icon: MapPin,
    title: 'Find turfs near you',
    text: 'Explore turfs by location, amenities and ratings to find the right ground for your game.',
  },
  {
    icon: RefreshCcw,
    title: 'Easy cancellations',
    text: 'Plans change. Cancel or reschedule a booking without the hassle.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure payments',
    text: 'Pay safely in the app with integrated, secure payment so your booking is locked in right away.',
  },
  {
    icon: Trophy,
    title: 'Football, cricket & more',
    text: 'Whether it is football, cricket or an indoor facility, find a venue that fits your sport.',
  },
]

export const STEPS = [
  {
    icon: Search,
    title: 'Find a turf',
    text: 'Search turfs near you and explore them by location, amenities and ratings.',
  },
  {
    icon: CalendarCheck,
    title: 'Pick your slot',
    text: 'Check real-time availability and choose the day and time that suits your game.',
  },
  {
    icon: Trophy,
    title: 'Book & play',
    text: 'Confirm instantly with secure payment, then show up and enjoy the game.',
  },
]

export const SCREENS = [
  {
    icon: MapPin,
    title: 'Discover turfs',
    text: 'Browse nearby turfs by location, amenities and ratings.',
  },
  {
    icon: Clock,
    title: 'Live availability',
    text: 'See open slots in real time before you decide.',
  },
  {
    icon: Zap,
    title: 'Instant booking',
    text: 'Pick a slot and confirm in a few taps.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure payment',
    text: 'Pay safely in the app and get your booking locked in.',
  },
  {
    icon: RefreshCcw,
    title: 'Easy changes',
    text: 'Cancel or reschedule when plans change.',
  },
]

export const FOOTER = {
  blurb:
    'Turf Aura is your all-in-one sports turf booking app. Search, book and play, with no calling and no waiting.',
  // Add the client's real contact email to show a Contact column, e.g. 'hello@turfaura.com'
  email: '',
}