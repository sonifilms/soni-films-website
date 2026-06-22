import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: SoniFilmsHome,
})

// ─────────────────────────────────────────────
// Icons (inline SVG to avoid extra deps)
// ─────────────────────────────────────────────
function IconCamera() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  )
}
function IconFilm() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  )
}
function IconMonitor() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  )
}
function IconStar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}
function IconZap() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}
function IconGlobe() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}
function IconPackage() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  )
}
function IconDrone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  )
}
function IconScissors() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  )
}
function IconDroplet() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  )
}
function IconSmartphone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )
}
function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
function IconPlay() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  )
}
function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}
function IconX() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}
function IconChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

// Instagram SVG
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
function IconYoutube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.6C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  )
}
function IconVimeo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 7.42c-.09 2.01-1.49 4.76-4.2 8.25C15.05 19.32 12.67 21 10.57 21c-1.32 0-2.44-1.22-3.35-3.66l-1.83-6.72C4.66 8.17 3.96 7 3.23 7c-.16 0-.71.33-1.66.99L0 6.45C1.02 5.57 2.02 4.7 3 3.83 4.33 2.73 5.33 2.15 6 2.08c1.6-.15 2.59.94 2.96 3.27.4 2.5.68 4.06.83 4.66.46 2.1.97 3.14 1.52 3.14.43 0 1.07-.68 1.94-2.04.86-1.37 1.32-2.41 1.38-3.12.12-1.18-.34-1.77-1.38-1.77-.49 0-.99.11-1.51.34.99-3.25 2.9-4.83 5.7-4.74 2.09.06 3.07 1.42 2.96 3.08z"/>
    </svg>
  )
}
function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const services = [
  { icon: <IconCamera />, title: 'Music Video Production', desc: 'High-concept music videos with cinematic storytelling, creative direction, and world-class production quality.' },
  { icon: <IconFilm />, title: 'Film & Web Series', desc: 'Narrative short films and web series with professional direction, stellar cinematography, and post-production.' },
  { icon: <IconMonitor />, title: 'Commercial & Brand Films', desc: 'Compelling brand stories and commercials that connect your product to your audience emotionally.' },
  { icon: <IconStar />, title: 'Fashion & Model Shoots', desc: 'Editorial fashion campaigns and model portfolios with luxury aesthetics and impeccable art direction.' },
  { icon: <IconSmartphone />, title: 'Reels & Social Media Content', desc: 'Scroll-stopping vertical content and digital campaigns engineered for maximum engagement and reach.' },
  { icon: <IconCalendar />, title: 'Event Coverage', desc: 'Cinematic event documentation — weddings, concerts, launches — with a photojournalistic eye for detail.' },
  { icon: <IconScissors />, title: 'Video Editing', desc: 'Precision editing that builds pace, emotion, and narrative. Every cut serves the story.' },
  { icon: <IconDroplet />, title: 'Color Grading', desc: 'Premium colorist work that transforms raw footage into a signature cinematic look and feel.' },
  { icon: <IconDrone />, title: 'Wedding & Pre-wedding Cinematography', desc: 'Creating unforgettable wedding and pre-wedding memories.' },
]

const portfolio = [
  { title: 'Midnight Reverie', category: 'Music Video', bg: 'from-purple-900 to-black' },
  { title: 'Saffron Threads', category: 'Fashion Film', bg: 'from-amber-900 to-black' },
  { title: 'Pulse', category: 'Brand Commercial', bg: 'from-blue-900 to-black' },
  { title: 'The Last Frame', category: 'Short Film', bg: 'from-green-900 to-black' },
  { title: 'Aura', category: 'Celebrity Content', bg: 'from-rose-900 to-black' },
  { title: 'Digital Pulse', category: 'Web Series', bg: 'from-indigo-900 to-black' },
]

const testimonials = [
  {
    name: 'Rijvee Sinha',
    role: 'Artist',
    text: 'It was my first time studio recording. Everything was going very well. From good food to voice recording, video shooting, I had a very good experience. Everyone made me feel very relaxed. I want to thank everyone for giving me such a wonderful experience.',
  },
  {
    name: 'mukul sagar',
    role: 'Youtuber',
    text: 'I had an amazing experience working with Soni Films for my YouTube content. The team was incredibly professional and creative, bringing fresh ideas to the table. The production quality was top-notch, and they really understood how to make content that resonates with my audience. Highly recommend for anyone looking to elevate their digital presence!',
  },
  {
    name: 'Ruchika Arora',
    role: 'Artist',
    text: 'Very genuine and marvellous videgraphy done for my shoots I truly recommend 😇☺️ keep up the good work',
  },
  {
    name: 'D3',
    role: 'R&B Artist',
    text: 'One stop center for all your piece of art. 💯',
  },
]

const whyUs = [  
  { stat: '500+', label: 'Projects Completed', icon: <IconPackage /> },
  { stat: '10+', label: 'Years Experience', icon: <IconFilm /> },
  { stat: '1000+', label: 'Happy Clients', icon: <IconUsers /> },]

const whyFeatures = [
  'Professional Production Team',
  'Cinematic Storytelling',
  'Fast Turnaround',
  'Pan India Availability',
  'End-to-End Production',
  'Post-Production Excellence',
]

// ─────────────────────────────────────────────
// Scroll-reveal hook
// ─────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ─────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Services', 'Work', 'Why Us', 'Contact']

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
<div className="logo-wrapper">
  <img
    src="/soni films logo .png"
    alt="Soni Films"
    className="navbar-logo"
  />

  <span className="logo-text">
    SONI FILMS
  </span>
</div>
          <span className="text-xs tracking-[0.25em] text-white/40 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}> </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="nav-link text-sm font-body uppercase tracking-widest bg-transparent border-none cursor-pointer" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em' }}>
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="btn-gold px-5 py-2.5 rounded text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem' }}
          >
            Book a Project
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-white/10 py-6 px-6 flex flex-col gap-5">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-left text-sm uppercase tracking-widest text-white/70 hover:text-gold-gradient bg-transparent border-none cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo('Contact')} className="btn-gold px-5 py-3 rounded text-xs uppercase tracking-widest text-center">
            Book a Project
          </button>
        </div>
      )}
    </nav>
  )
}

// ─────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────
function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 40%),
              linear-gradient(to bottom, #050505 0%, #0d0d0d 50%, #050505 100%)
            `,
          }}
        />
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }} />
        {/* Horizontal scan lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
        }} />
      </div>

      {/* Gold accent lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, #c9a84c, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, #c9a84c, transparent)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-title */}
        <div
          className="mb-8 inline-flex items-center gap-3"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.2s',
          }}
        >
          <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.35em', color: '#c9a84c', textTransform: 'uppercase' }}>
           
          </span> 
          <div style={{ height: '1px', width: '40px', background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#fff',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease 0.4s',
            marginBottom: '1.5rem',
          }}
        >
          Crafting Stories Through
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'italic',
          }}>
            Cinematic Vision
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            opacity: loaded ? 1 : 0,
            transition: 'all 0.8s ease 0.7s',
            marginBottom: '3rem',
          }}
        >
          Music Videos&nbsp;&nbsp;•&nbsp;&nbsp;Films&nbsp;&nbsp;•&nbsp;&nbsp;Commercials&nbsp;&nbsp;•&nbsp;&nbsp;Digital Content
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 1s',
          }}
        >
          <button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold px-10 py-4 rounded text-sm uppercase tracking-widest w-full sm:w-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View Portfolio
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline px-10 py-4 rounded text-sm uppercase tracking-widest w-full sm:w-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book a Project
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-20 flex flex-col items-center gap-2"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'all 0.8s ease 1.4s',
            animation: loaded ? 'float 3s ease-in-out infinite' : 'none',
          }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Scroll</span>
          <IconChevronDown />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10" style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
    </section>
  )
}

// ─────────────────────────────────────────────
// Marquee strip
// ─────────────────────────────────────────────
function MarqueeStrip() {
  const items = ['Music Videos', 'Short Films', 'Brand Films', 'Commercials', 'Fashion Shoots', 'Web Series', 'Drone Cinematography', 'Color Grading', 'Digital Campaigns', 'Celebrity Content']
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-5 border-y" style={{ borderColor: 'rgba(201,168,76,0.15)', background: '#080808' }}>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-4">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.85rem', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.6)' }}>
              {item}
            </span>
            <span style={{ color: 'rgba(201,168,76,0.3)', fontSize: '0.6rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// About Section
// ─────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left — visual */}
        <Reveal className="relative">
          <div className="relative">
            {/* Main card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: '520px',
                background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              {/* Cinematic frame art */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Film strip */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-around px-2" style={{ borderRight: '1px solid rgba(201,168,76,0.1)' }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="rounded-sm mx-auto" style={{ width: '28px', height: '18px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.15)' }} />
                    ))}
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-12 flex flex-col justify-around px-2" style={{ borderLeft: '1px solid rgba(201,168,76,0.1)' }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="rounded-sm mx-auto" style={{ width: '28px', height: '18px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.15)' }} />
                    ))}
                  </div>

                  {/* Central content */}
                  <div className="absolute inset-12 flex flex-col items-center justify-center text-center gap-6">
                    <div style={{
                      width: '80px', height: '80px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, #c9a84c, #9a7a30)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 40px rgba(201,168,76,0.3)',
                    }}>
                    <img
  src="/siddharth-soni.jpg"
  alt="Siddharth Soni"
  className="founder-photo"
/>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', letterSpacing: '0.1em', color: '#fff', marginBottom: '4px' }}>SIDDHARTH SONI ( Direcorsoni) </p>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: '#c9a84c', letterSpacing: '0.15em', fontStyle: 'italic' }}>Director · DOP · Cinematographer · Editor · Colourist</p>
                    </div>
                    <div className="divider-gold" style={{ width: '80px' }} />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', lineHeight: 1.8 }}>
                      Delhi &nbsp;&nbsp;|&nbsp;&nbsp; Mumbai &nbsp;&nbsp;|&nbsp;&nbsp; Rishikesh &nbsp;&nbsp;|&nbsp;&nbsp; Pan India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-6 rounded-xl p-5"
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #9a7a30)',
                width: '160px',
              }}
            >
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', color: '#0a0a0a', lineHeight: 1 }}>500+</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: 'rgba(0,0,0,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Projects Delivered</p>
            </div>
          </div>
        </Reveal>

        {/* Right — text */}
        <div>
          <Reveal>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>
              About Soni Films
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#fff',
              margin: '1rem 0 1.5rem',
            }}>
              Where Vision Meets{' '}
              <em style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Craft
              </em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
              Soni Films is a premier creative production house founded by Siddharth Soni — a multi-talented Director, DOP, Cinematographer, Editor, and Colourist based in Delhi, India. With over 10+ years of experience crafting stories that resonate, we brings an uncompromising artistic vision to every project.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem' }}>
              From high-concept music videos and cinematic brand films to intimate fashion campaigns and digital narratives, Soni Films delivers end-to-end production solutions for artists, brands, celebrities, agencies, and commercial clients across India and worldwide.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="grid grid-cols-2 gap-4">
              {['Music Videos', 'Wedding & Events', 'Short Films', 'Fashion Shoots', 'Web Series', 'Drone Ops'].map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <IconCheck />
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Services Section
// ─────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>What We Do</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: '#fff',
            marginTop: '0.75rem',
            lineHeight: 1.1,
          }}>
            Full-Spectrum Production{' '}
            <em style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Services
            </em>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 60}>
              <div className="service-card rounded-xl p-8 h-full">
                <div className="mb-5" style={{ color: '#c9a84c' }}>{svc.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
                  {svc.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.5)' }}>
                  {svc.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Portfolio Section
// ─────────────────────────────────────────────
function PortfolioSection() {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>Featured Work</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: '#fff',
            marginTop: '0.75rem',
            lineHeight: 1.1,
          }}>
            Stories We've{' '}
            <em style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Told
            </em>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="portfolio-card rounded-xl overflow-hidden" style={{ height: i === 0 || i === 3 ? '380px' : '280px' }}>
                {/* Gradient placeholder simulating cinematic still */}
                <div className={`w-full h-full bg-gradient-to-br ${item.bg}`} style={{ position: 'relative' }}>
                  <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }} />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '50%',
                      background: 'rgba(201,168,76,0.9)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#0a0a0a',
                    }}>
                      <IconPlay />
                    </div>
                  </div>
                </div>
                <div className="card-overlay">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase' }}>{item.category}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginTop: '0.25rem' }}>{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12">
          <button
            className="btn-outline px-10 py-4 rounded text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View Full Portfolio
          </button>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Why Choose Us
// ─────────────────────────────────────────────
function WhyUsSection() {
  return (
    <section id="why-us" className="py-28 px-6 relative overflow-hidden" style={{ background: '#060606' }}>
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
      }} />

      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>Why Choose Us</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: '#fff',
            marginTop: '0.75rem',
            lineHeight: 1.1,
          }}>
            The Soni Films{' '}
            <em style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Difference
            </em>
          </h2>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {whyUs.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="stat-card rounded-xl p-8 text-center">
                <div className="mb-4 flex justify-center" style={{ color: '#c9a84c' }}>{item.icon}</div>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: '#c9a84c', letterSpacing: '0.05em', lineHeight: 1 }}>{item.stat}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem' }}>{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Features list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyFeatures.map((feat, i) => (
            <Reveal key={feat} delay={i * 80}>
              <div className="flex items-center gap-4 p-5 rounded-xl" style={{ background: '#111', border: '1px solid rgba(201,168,76,0.12)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#c9a84c' }}>
                  <IconCheck />
                </div>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{feat}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>Client Testimonials</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: '#fff',
            marginTop: '0.75rem',
            lineHeight: 1.1,
          }}>
            Voices of{' '}
            <em style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Trust
            </em>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="testimonial-card rounded-xl p-8 h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  ))}
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c9a84c, #9a7a30)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: '1.1rem', color: '#0a0a0a' }}>
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>{t.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#c9a84c', letterSpacing: '0.05em' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Behind The Scenes
// ─────────────────────────────────────────────
function BTSSection() {
  const btsItems = [
    { label: 'On Location', desc: 'Rajasthan Desert Shoot', bg: 'from-orange-950 to-zinc-900', main: true },
    { label: 'Studio Setup', desc: 'Music Video', bg: 'from-violet-950 to-zinc-900' },
    { label: 'Color Suite', desc: 'Post Production', bg: 'from-teal-950 to-zinc-900' },
    { label: 'Drone Ops', desc: 'Aerial Sequence', bg: 'from-sky-950 to-zinc-900' },
    { label: 'Fashion Set', desc: 'Editorial Campaign', bg: 'from-rose-950 to-zinc-900' },
  ]

  return (
    <section className="py-28 px-6" style={{ background: '#080808' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>Behind The Scenes</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            color: '#fff',
            marginTop: '0.75rem',
            lineHeight: 1.1,
          }}>
            The Making of{' '}
            <em style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Magic
            </em>
          </h2>
        </Reveal>

        <Reveal>
          <div className="bts-grid">
            {btsItems.map((item, i) => (
              <div
                key={item.label}
                className={`${item.main ? 'bts-main' : ''} relative rounded-xl overflow-hidden`}
                style={{ minHeight: item.main ? '340px' : '160px' }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${item.bg} absolute inset-0`} />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
                {/* Lens flare effect */}
                <div className="absolute" style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
                  top: '20%', right: '25%',
                }} />
                <div className="absolute bottom-4 left-4">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase' }}>{item.label}</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: item.main ? '1.4rem' : '1rem', color: '#fff', fontWeight: 500 }}>{item.desc}</p>
                </div>
                {/* BTS camera icon */}
                <div className="absolute top-4 right-4 opacity-20" style={{ color: '#c9a84c' }}>
                  <IconCamera />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Contact Section
// ─────────────────────────────────────────────
function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', project: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      })
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', phone: '', email: '', project: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 0% 100%, rgba(201,168,76,0.05) 0%, transparent 60%)',
      }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <Reveal>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c9a84c', textTransform: 'uppercase' }}>Get In Touch</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              color: '#fff',
              marginTop: '0.75rem',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
            }}>
              Let's Create Something{' '}
              <em style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #e8c97a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Extraordinary
              </em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem' }}>
              Whether you're a brand, artist, agency, or individual — we'd love to hear about your vision. Tell us about your project and let's craft something cinematic together.
            </p>
          </Reveal>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: <IconMapPin />, label: 'Location', value: 'Located in · Delhi, Mumbai & Rishikesh' },
              { icon: <IconMail />, label: 'Email', value: 'sonifilms@zohomail.in' },
              { icon: <IconPhone />, label: 'Phone / WhatsApp', value: '+91 9871359419' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={300 + i * 80}>
                <div className="flex items-start gap-4">
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#c9a84c' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>{item.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <Reveal delay={150}>
          <div className="rounded-2xl p-8 lg:p-10" style={{ background: '#0f0f0f', border: '1px solid rgba(201,168,76,0.15)' }}>
            {status === 'success' ? (
              <div className="text-center py-12">
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #9a7a30)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#0a0a0a' }}>
                  <IconCheck />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#fff', marginBottom: '0.75rem' }}>Message Sent!</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline mt-8 px-8 py-3 rounded text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 rounded-lg"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input w-full px-4 py-3 rounded-lg"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Project Type *
                  </label>
                  <select
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', appearance: 'none' }}
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="Music Video">Music Video Production</option>
                    <option value="Short Film">Short Film / Web Series</option>
                    <option value="Brand Film">Commercial & Brand Film</option>
                    <option value="Fashion">Fashion & Model Shoot</option>
                    <option value="Reels">Reels & Social Media Content</option>
                    <option value="Event">Event Coverage</option>
                    <option value="Editing">Video Editing / Color Grading</option>
                    <option value="Drone">Drone Cinematography</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-lg resize-none"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}
                    placeholder="Tell us about your vision, timeline, and budget..."
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#ef4444' }}>
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gold w-full py-4 rounded-lg text-sm uppercase tracking-widest mt-2"
                  style={{ fontFamily: "'Inter', sans-serif", opacity: status === 'sending' ? 0.7 : 1 }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Project Inquiry'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────
function Footer() {
  const socials = [
    { icon: <IconInstagram />, label: 'Instagram', href: 'https://www.instagram.com/directorsoni/' },
    { icon: <IconYoutube />, label: 'YouTube', href: 'https://www.youtube.com/@PraiseMusicIndia' },
    { icon: <IconVimeo />, label: 'Vimeo', href: 'https://vimeo.com/user187876547' },
    { icon: <IconWhatsApp />, label: 'WhatsApp', href: 'https://wa.me/919871359419' },
  ]

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <img src="/soni films logo  2.png" alt="Soni Films" className="end-logo" />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
            Soni Films – Bringing Stories to Life
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.7 }}>
            Founded by Siddharth Soni<br />
            Director · DOP · Cinematographer · Editor · Colourist<br />
            Located in · Delhi, Mumbai & Rishikesh
          </p>
        </div>

        {/* Services quick links */}
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Services</p>
          <div className="flex flex-col gap-2.5">
            {['Music Video Production', 'Film & Web Series', 'Commercial & Brand Films', 'Fashion & Model Shoots', 'Video Editing & Grading', 'Drone Cinematography'].map(s => (
              <span key={s} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
              >{s}</span>
            ))}
          </div>
        </div>

        {/* Social + CTA */}
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', color: '#c9a84c', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Connect</p>
          <div className="flex gap-3 mb-8">
            {socials.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="flex items-center justify-center rounded-lg transition-all duration-300"
                style={{ width: '44px', height: '44px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.15)'; (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.5)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,168,76,0.08)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.2)' }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold w-full py-3.5 rounded-lg text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book a Project
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="divider-gold mx-6" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>
          © {new Date().getFullYear()} Soni Films. All rights reserved.
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)' }}>
          Located in · Delhi, Mumbai & Rishikesh
        </p>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
function SoniFilmsHome() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyUsSection />
      <TestimonialsSection />
      <BTSSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
