import { useState, useEffect, useRef } from 'react'

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const C = {
  primary: '#0B72BD',
  primaryLight: '#EBF5FF',
  primaryHover: '#0960A0',
  secondary: '#0D9E77',
  secondaryLight: '#E6F7F2',
  tertiary: '#F3F8FE',
  emergency: '#DC2626',
  emergencyLight: '#FEF2F2',
  emerald: '#059669',
  emeraldLight: '#ECFDF5',
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const HOSPITALS = [
  { id: 1, name: 'Apollo Hospitals', city: 'Hyderabad', phone: '+91 40 2360 7777', beds: 550, img: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=280&fit=crop&auto=format' },
  { id: 2, name: 'KIMS Hospital', city: 'Secunderabad', phone: '+91 40 4488 5000', beds: 1000, img: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=400&h=280&fit=crop&auto=format' },
  { id: 3, name: "Care Hospitals", city: 'Banjara Hills', phone: '+91 40 6165 6565', beds: 440, img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=280&fit=crop&auto=format' },
  { id: 4, name: 'Yashoda Hospitals', city: 'Somajiguda', phone: '+91 40 4567 4567', beds: 350, img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=280&fit=crop&auto=format' },
  { id: 5, name: 'Aster Prime Hospital', city: 'Ameerpet', phone: '+91 40 4455 4455', beds: 300, img: 'https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=400&h=280&fit=crop&auto=format' },
  { id: 6, name: 'Star Hospitals', city: 'Banjara Hills', phone: '+91 40 4477 7999', beds: 220, img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=280&fit=crop&auto=format' },
]

const PACKAGES = [
  { id: 1, topic: 'Complete Body Check-up', save: '30', price: 1999, originalPrice: 2850, available: '2026-10-01', desc: 'Comprehensive 82-test panel covering CBC, lipid profile, liver function, kidney function, thyroid, diabetes markers, and vitamin levels. Includes a free teleconsultation to review your results with a specialist.', img: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=400&h=280&fit=crop&auto=format' },
  { id: 2, topic: "Women's Wellness Package", save: '25', price: 2499, originalPrice: 3330, available: '2026-10-01', desc: 'Designed for women aged 25–55. Covers hormonal panel, bone density markers, breast health indicators, iron studies, PCOS screening, and a gynaecologist review session.', img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=280&fit=crop&auto=format' },
]

const BLOG_POSTS = [
  { id: 1, title: 'Understanding Your Blood Test Results: A Plain-Language Guide', excerpt: 'Your CBC report came back — now what? We break down every marker, what normal looks like, and when to call your doctor.', category: 'Diagnostics', date: 'Sep 12, 2026', img: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=640&h=400&fit=crop&auto=format' },
  { id: 2, title: 'How to Book the Right Specialist for Your Symptoms', excerpt: 'Cardiologist, internist, or general physician? A simple decision tree to help you book the right doctor the first time.', category: 'Doctor Booking', date: 'Sep 5, 2026', img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=640&h=400&fit=crop&auto=format' },
  { id: 3, title: 'Ordering Medicine Online Safely: What to Check Before You Buy', excerpt: "Generic vs. branded, expiry dates, storage requirements — here's how to make sure your digital pharmacy order is exactly right.", category: 'e-Pharmacy', date: 'Aug 28, 2026', img: 'https://images.unsplash.com/photo-1580281657529-557a6abb6387?w=640&h=400&fit=crop&auto=format' },
]

const TESTIMONIALS = [
  { quote: "Booked a cardiologist at Apollo in under 3 minutes. The confirmation came instantly and the reminder before my appointment was genuinely helpful.", name: 'Rajeev N.', location: 'Hyderabad', rating: 5 },
  { quote: "I was skeptical about ordering prescription medicine online but the verification process gave me real confidence. Delivered same-day to my door.", name: 'Meena P.', location: 'Secunderabad', rating: 5 },
  { quote: "The ambulance reached us in 9 minutes. In an emergency you don't have time to search — having Zeniva already on my phone made a difference.", name: 'Suresh K.', location: 'Banjara Hills', rating: 5 },
]

const FAQS = [
  { q: 'How do I book a doctor appointment?', a: 'Search by specialty or doctor name, select a time slot that works for you, and confirm with a one-time OTP. You\'ll receive a WhatsApp confirmation and a reminder 2 hours before your appointment.' },
  { q: 'Are all listed doctors verified?', a: 'Yes. Every doctor on Zeniva holds an active MCI/NMC registration. We verify credentials quarterly and display verification status on every profile.' },
  { q: 'How long does medicine delivery take?', a: 'For Hyderabad metro areas, same-day delivery is available before 3 PM. Orders placed after 3 PM ship next morning. Prescription medicines require an uploaded or e-prescription before dispatch.' },
  { q: 'What happens if I need to cancel my appointment?', a: 'You can cancel or reschedule up to 2 hours before your appointment at no charge. Late cancellations receive a full credit to your Zeniva wallet, valid for 90 days.' },
  { q: 'Is my health data secure?', a: 'All health records are encrypted with AES-256, stored in HIPAA-aligned infrastructure, and never shared with third parties without explicit patient consent.' },
  { q: 'How fast can an ambulance reach me?', a: 'Our partner network targets a 10-minute response time within Hyderabad city limits for ALS ambulances. Basic life support units typically arrive in 6–8 minutes.' },
]

// ─── Icons ────────────────────────────────────────────────────────────────────

const Ico = {
  Search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  Menu: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h12"/></svg>,
  X: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  ChevDown: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>,
  ArrowRight: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  Phone: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.6a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 10.91A16 16 0 0013 17.82l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  Mail: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  Shield: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  Star: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Users: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  Stethoscope: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 104.5 2a2 2 0 00-2 2v4a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2.3"/><path d="M8 15v1a6 6 0 006 6v0a6 6 0 006-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,
  FlaskConical: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.527a2 2 0 01-.211.896L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45l-5.069-10.127A2 2 0 0114 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>,
  Pill: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20.5L3.5 13.5a5 5 0 117.07-7.07l7 7a5 5 0 11-7.07 7.07z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/></svg>,
  Ambulance: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17H3a1 1 0 01-1-1V6a1 1 0 011-1h10l5 5v5"/><path d="M14 17h-4"/><path d="M20 17h1a1 1 0 001-1v-3.28a1 1 0 00-.293-.707l-2-2A1 1 0 0019 9.72V17"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M8 5v4M6 7h4"/></svg>,
  Building2: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/></svg>,
  FileText: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  MapPin: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>,
  Check: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Quote: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.82 1.24-1.46 2.11-1.91L9.18 6c-1.39.61-2.5 1.5-3.3 2.69-.81 1.19-1.22 2.51-1.22 3.96 0 1.48.41 2.66 1.22 3.54.82.87 1.92 1.31 3.32 1.31.96 0 1.76-.31 2.4-.94.64-.62.95-1.43.95-2.43l-.35.6zm7.81 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .52-.82 1.24-1.46 2.11-1.91L17.0 6c-1.39.61-2.5 1.5-3.3 2.69-.81 1.19-1.22 2.51-1.22 3.96 0 1.48.41 2.66 1.22 3.54.82.87 1.92 1.31 3.32 1.31.96 0 1.76-.31 2.4-.94.64-.62.95-1.43.95-2.43l-.35.6z"/></svg>,
  Loader: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-spin"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.2"/><path d="M21 12a9 9 0 00-9-9"/></svg>,
  FirstAid: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>,
  BookOpen: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  StarFilled: ({ size = 14 }: { size?: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function Eyebrow({ children, color = C.primary }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3" style={{ color }}>
      {children}
    </span>
  )
}

function SectionHeading({ children, sub, center }: { children: React.ReactNode; sub?: string; center?: boolean }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight mb-3">{children}</h2>
      {sub && <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl" style={center ? { margin: '0 auto' } : {}}>{sub}</p>}
    </div>
  )
}

function PrimaryBtn({ children, onClick, href, outline, small, full, white }: {
  children: React.ReactNode; onClick?: () => void; href?: string; outline?: boolean; small?: boolean; full?: boolean; white?: boolean
}) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 ${full ? 'w-full' : ''} ${small ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-sm'}`
  const style = outline
    ? { border: `2px solid ${white ? '#fff' : C.primary}`, color: white ? '#fff' : C.primary, background: 'transparent' }
    : white
    ? { background: '#fff', color: C.primary }
    : { background: C.primary, color: '#fff' }
  const hoverClass = outline
    ? white ? 'hover:bg-white/15' : 'hover:bg-primary-light'
    : white ? 'hover:bg-slate-50' : 'hover:bg-primary-hover'
  if (href) return <a href={href} className={`${base} ${hoverClass}`} style={style}>{children}</a>
  return <button onClick={onClick} className={`${base} ${hoverClass}`} style={style}>{children}</button>
}

function SecondaryBtn({ children, onClick, href, outline, full, white }: {
  children: React.ReactNode; onClick?: () => void; href?: string; outline?: boolean; full?: boolean; white?: boolean
}) {
  const base = `inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-lg px-6 py-3 transition-all duration-200 ${full ? 'w-full' : ''}`
  const style = outline
    ? { border: `2px solid ${white ? '#fff' : C.secondary}`, color: white ? '#fff' : C.secondary, background: 'transparent' }
    : { background: C.secondary, color: '#fff' }
  const hoverClass = outline ? 'hover:bg-secondary-light' : 'hover:opacity-90'
  if (href) return <a href={href} className={`${base} ${hoverClass}`} style={style}>{children}</a>
  return <button onClick={onClick} className={`${base} ${hoverClass}`} style={style}>{children}</button>
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTab, setSearchTab] = useState<'Doctor' | 'Test' | 'Medicine'>('Doctor')
  const [searchQuery, setSearchQuery] = useState('')
  const [hospitalState] = useState<'loaded'>('loaded')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' })
  const [contactSent, setContactSent] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactSent(true)
  }

  const SERVICES = [
    { icon: <Ico.Stethoscope />, title: 'Doctor Consultation', desc: 'Book in-person or video consultations with 2,400+ verified specialists across 40+ specialties.', color: C.primary },
    { icon: <Ico.FlaskConical />, title: 'Diagnostics & Lab Tests', desc: 'Order blood panels, imaging, and pathology from NABL-accredited labs. Home sample collection available.', color: C.primary },
    { icon: <Ico.Pill />, title: 'e-Pharmacy', desc: 'Prescription and OTC medicines delivered same-day. Automatic refill reminders. Licensed pharmacist review.', color: C.primary },
    { icon: <Ico.Ambulance />, title: 'Ambulance', desc: 'ALS and BLS ambulances on call 24/7. Average 10-minute response within city limits. Real-time GPS tracking.', color: C.emergency, bg: C.emergencyLight },
    { icon: <Ico.Building2 />, title: 'Hospital Directory', desc: 'Browse 180+ partner hospitals with bed availability, specialties, accreditations, and direct booking links.', color: C.primary },
    { icon: <Ico.FileText />, title: 'Health Records', desc: 'Centralised, encrypted health vault. Share with any doctor in one tap. Download, print, or request history.', color: C.primary },
  ]

  const WHY = [
    { icon: <Ico.Shield />, title: 'Verified Providers', desc: 'Every doctor holds an active MCI/NMC registration verified quarterly. Every lab is NABL-accredited.' },
    { icon: <Ico.Clock />, title: 'Book in Minutes', desc: 'Search, select, pay — average booking takes under 3 minutes from any device, any time.' },
    { icon: <Ico.FileText />, title: 'Data Protected', desc: 'AES-256 encryption, HIPAA-aligned storage, and a strict no-third-party-sharing policy.' },
    { icon: <Ico.Phone />, title: '24/7 Support', desc: 'Clinical advisors available round the clock via call, chat, or WhatsApp for any care-related question.' },
  ]

  const STEPS = [
    { num: '01', title: 'Search & Choose', desc: 'Find a doctor by specialty, name, or symptom. Filter by location, availability, and language.', color: C.primary },
    { num: '02', title: 'Book & Confirm', desc: 'Pick your preferred slot and pay securely. Instant WhatsApp confirmation with all details.', color: C.secondary },
    { num: '03', title: 'Get Care', desc: "Attend in-person or join your video consultation. Your records update automatically.", color: C.primary },
  ]

  return (
    <div className="bg-white min-h-screen">

      {/* ══ MOBILE MENU ═══════════════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-50 bg-white flex flex-col"
        style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.34s cubic-bezier(0.22,1,0.36,1)' }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <span className="font-bold text-xl" style={{ color: C.primary }}>Zeniva <span className="font-normal text-slate-600">Health</span></span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-slate-500 p-2"><Ico.X /></button>
        </div>
        <nav className="flex flex-col px-5 py-4 gap-1">
          {['Services', 'Hospitals', 'Packages', 'Health Tips', 'About', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 text-base font-medium text-slate-700 hover:text-primary border-b border-slate-50 last:border-0"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="px-5 py-4 mt-auto flex flex-col gap-3">
          <PrimaryBtn full>Book Appointment</PrimaryBtn>
          <PrimaryBtn outline full>Sign In</PrimaryBtn>
        </div>
      </div>

      {/* ══ HEADER ════════════════════════════════════════════════════ */}
      <header
        className="sticky top-0 z-30 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.96)' : '#fff',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 #e2e8f0' : '0 1px 0 #f1f5f9',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: C.primary }}>
              <Ico.FirstAid />
            </div>
            <span className="font-bold text-lg text-slate-800">Zeniva <span className="font-normal text-slate-500">Health</span></span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {['Services', 'Hospitals', 'Packages', 'Health Tips', 'About'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+914012345678" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-primary transition-colors">
              <Ico.Phone />
              <span>040-1234-5678</span>
            </a>
            <PrimaryBtn small outline href="#contact">Contact</PrimaryBtn>
            <PrimaryBtn small href="#book">Book Now</PrimaryBtn>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-slate-600"><Ico.Menu /></button>
        </div>
      </header>

      {/* ══ 1. HERO ═══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        id="hero"
        style={{ minHeight: 640 }}
      >
        {/* ── Full-bleed animated background image ── */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=900&fit=crop&auto=format"
            alt="Verified doctor consulting with patient at Zeniva Health"
            className="w-full h-full object-cover animate-kenburns"
            style={{ transformOrigin: 'center center' }}
          />
          {/* Left-heavy gradient: opaque on left (text stays dark+readable), transparent on right (image shows through) */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(100deg, #EBF5FF 0%, #EBF5FFe6 32%, #EBF5FFb0 52%, #EBF5FF55 68%, transparent 85%)',
            }}
          />
          {/* Subtle bottom vignette for depth */}
          <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: 'linear-gradient(to top, rgba(235,245,255,0.5), transparent)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column — unchanged content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: C.primaryLight, color: C.primary }}
                data-reveal
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.secondary }} />
                Serving 18 Districts · Telangana &amp; AP
              </div>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-5"
                data-reveal data-reveal-delay="100"
              >
                Quality Healthcare,<br />
                <span style={{ color: C.primary }}>One Platform.</span>
              </h1>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg" data-reveal data-reveal-delay="200">
                Book verified doctors, order medicine, schedule diagnostics, and access ambulance services — all in one place, in minutes.
              </p>

              <div className="flex flex-wrap gap-3 mb-10" data-reveal data-reveal-delay="300">
                <PrimaryBtn href="#book">Book Appointment</PrimaryBtn>
                <PrimaryBtn outline href="#services">Explore Services</PrimaryBtn>
                <a
                  href="tel:+914012345678"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg border-2 transition-all duration-200"
                  style={{ borderColor: C.emergency, color: C.emergency }}
                >
                  <Ico.Phone />
                  Emergency
                </a>
              </div>

              {/* Search bar */}
              <div
                className="rounded-2xl p-4 shadow-lg"
                style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.9)' }}
                data-reveal data-reveal-delay="400"
              >
                {/* Tabs */}
                <div className="flex gap-1 p-1 rounded-xl mb-4" style={{ background: '#F1F5F9' }}>
                  {(['Doctor', 'Test', 'Medicine'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setSearchTab(tab)}
                      className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                      style={
                        searchTab === tab
                          ? { background: '#fff', color: C.primary, boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }
                          : { color: '#64748B' }
                      }
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {/* Input */}
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Ico.Search /></span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder={searchTab === 'Doctor' ? 'Search doctor or specialty…' : searchTab === 'Test' ? 'Search test name or package…' : 'Search medicine name…'}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-all"
                      style={{ borderColor: '#E2E8F0', background: '#FAFAFA' }}
                      onFocus={e => { e.currentTarget.style.borderColor = C.primary; e.currentTarget.style.boxShadow = `0 0 0 3px ${C.primary}20` }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>
                  <button
                    className="px-5 py-3 rounded-xl text-sm font-semibold text-white flex-shrink-0 transition-colors"
                    style={{ background: C.primary }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.primaryHover }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.primary }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right column — stats overlaid on the visible image area */}
            <div className="hidden lg:flex flex-col justify-end gap-5 h-full py-4">
              {/* MCI trust badge — floating on image */}
              <div className="flex justify-end" data-reveal data-reveal-delay="100">
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 24px rgba(11,114,189,0.18)', border: '1px solid rgba(255,255,255,0.9)' }}
                >
                  {/* Pulse ring */}
                  <div className="relative w-7 h-7 flex items-center justify-center flex-shrink-0">
                    <div className="absolute inset-0 rounded-full animate-pulse-ring" style={{ background: C.emerald + '40' }} />
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: C.emerald }}>
                      <Ico.Check />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">MCI Verified Doctors</div>
                    <div className="text-[10px] text-slate-500">Credentials checked quarterly</div>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Partner Hospitals', value: '180+', filled: true, primary: true, delay: 'animate-stat-d1' },
                  { label: 'Verified Doctors', value: '2,400+', filled: false, delay: 'animate-stat-d2' },
                  { label: 'Districts Covered', value: '18', filled: false, delay: 'animate-stat-d3' },
                  { label: 'Avg Emergency Response', value: '10 min', filled: true, secondary: true, delay: 'animate-stat-d4' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-4 text-center animate-stat ${stat.delay}`}
                    style={
                      stat.filled && (stat as any).primary
                        ? { background: C.primary, color: '#fff' }
                        : stat.filled && (stat as any).secondary
                        ? { background: C.secondary, color: '#fff' }
                        : { background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.85)' }
                    }
                  >
                    <div className="text-2xl font-bold mb-0.5" style={!stat.filled ? { color: C.primary } : {}}>{stat.value}</div>
                    <div className="text-xs font-medium" style={!stat.filled ? { color: '#64748B' } : { opacity: 0.85 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. WHY CHOOSE US ══════════════════════════════════════════ */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12" data-reveal>
            <Eyebrow>Why Choose Zeniva</Eyebrow>
            <SectionHeading center sub="A platform built around what patients actually need — speed, trust, and continuity of care.">
              Healthcare that works for you
            </SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border transition-all duration-250 hover:-translate-y-1"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${C.primary}18` }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)' }}
                data-reveal
                data-reveal-delay={String(i * 100) as any}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: C.primaryLight, color: C.primary }}>
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. FEATURED SERVICES ══════════════════════════════════════ */}
      <section id="services" className="py-16 md:py-24" style={{ background: C.tertiary }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="mb-12" data-reveal>
            <Eyebrow>What We Offer</Eyebrow>
            <SectionHeading sub="Everything you need to manage your family's healthcare in one place.">
              Our Services
            </SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex flex-col border-l-4 transition-all duration-250 cursor-pointer hover:-translate-y-1 group"
                style={{ borderLeftColor: svc.color, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 28px ${svc.color}22` }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)' }}
                data-reveal
                data-reveal-delay={String((i % 3) * 100) as any}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: svc.bg ?? C.primaryLight, color: svc.color }}
                >
                  {svc.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{svc.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2" style={{ color: svc.color }}>
                  Explore <Ico.ArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. HOW IT WORKS ═══════════════════════════════════════════ */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14" data-reveal>
            <Eyebrow>Simple Process</Eyebrow>
            <SectionHeading center sub="From search to care in 3 straightforward steps.">
              How It Works
            </SectionHeading>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[calc(16.5%+2rem)] right-[calc(16.5%+2rem)] h-px" style={{ background: `linear-gradient(90deg, ${C.primary}, ${C.secondary}, ${C.primary})`, opacity: 0.25 }} />
            {STEPS.map((step, i) => (
              <div key={i} className="text-center" data-reveal data-reveal-delay={String(i * 150) as any}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-lg font-bold relative"
                  style={{ background: step.color }}
                >
                  {step.num}
                  <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-white border-2" style={{ borderColor: step.color }} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-reveal>
            <PrimaryBtn href="#book">Get Started <Ico.ArrowRight /></PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ══ 5. PARTNER HOSPITALS ══════════════════════════════════════ */}
      <section id="hospitals" className="py-16 md:py-24" style={{ background: C.tertiary }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12" data-reveal>
            <div>
              <Eyebrow>Our Network</Eyebrow>
              <SectionHeading sub="180+ accredited partner hospitals across Telangana and Andhra Pradesh.">
                Partner Hospitals
              </SectionHeading>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1.5 text-sm font-semibold hover:underline" style={{ color: C.primary }}>
              View all hospitals <Ico.ArrowRight />
            </a>
          </div>

          {/* Populated state */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOSPITALS.map((h, i) => (
              <div
                key={h.id}
                className="bg-white rounded-2xl overflow-hidden border transition-all duration-250 hover:-translate-y-1"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 28px ${C.primary}18` }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)' }}
                data-reveal
                data-reveal-delay={String((i % 3) * 100) as any}
              >
                <div className="relative overflow-hidden bg-slate-100" style={{ height: 160 }}>
                  <img src={h.img} alt={h.name} className="w-full h-full object-cover" />
                  <span
                    className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{ background: C.emeraldLight, color: C.emerald }}
                  >
                    <Ico.Check /> Verified Partner
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-800 mb-1">{h.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                    <Ico.MapPin /> {h.city}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                    <Ico.Phone /> {h.phone}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{h.beds} beds</span>
                    <a href="#" className="flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: C.primary }}>
                      View details <Ico.ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-reveal>
            <PrimaryBtn outline href="#">View All Hospitals <Ico.ArrowRight /></PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ══ 6. ACTIVE PACKAGES ════════════════════════════════════════ */}
      <section id="packages" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12" data-reveal>
            <div>
              <Eyebrow>Limited-Time Offers</Eyebrow>
              <SectionHeading sub="Curated health packages at special rates — bundled tests, consultations, and reports.">
                Active Health Packages
              </SectionHeading>
            </div>
          </div>

          {/* Two-package (multi) layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {PACKAGES.map((pkg, i) => (
              <div
                key={pkg.id}
                className="rounded-2xl border overflow-hidden flex flex-col"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
                data-reveal
                data-reveal-delay={String(i * 150) as any}
              >
                <div className="relative bg-slate-100 overflow-hidden" style={{ height: 200 }}>
                  <img src={pkg.img} alt={pkg.topic} className="w-full h-full object-cover" />
                  <span
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: C.emeraldLight, color: C.emerald }}
                  >
                    Save {pkg.save}%
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-slate-800">{pkg.topic}</h3>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xl font-bold" style={{ color: C.primary }}>Rs. {pkg.price.toLocaleString()}</div>
                      <div className="text-xs text-slate-400 line-through">Rs. {pkg.originalPrice.toLocaleString()}</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3 line-clamp-3">{pkg.desc}</p>
                  <p className="text-xs text-slate-400 mb-5">Available from {new Date(pkg.available).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                  <div className="mt-auto">
                    <SecondaryBtn full href="#contact">Contact Us to Book</SecondaryBtn>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. HEALTH TIPS / BLOG ══════════════════════════════════════ */}
      <section id="health-tips" className="py-16 md:py-24" style={{ background: C.tertiary }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12" data-reveal>
            <div>
              <Eyebrow>Zeniva Journal</Eyebrow>
              <SectionHeading sub="Practical health guidance written by our clinical advisors.">
                Health Tips & Articles
              </SectionHeading>
            </div>
            <a href="#" className="hidden md:flex items-center gap-1.5 text-sm font-semibold hover:underline" style={{ color: C.primary }}>
              Read all articles <Ico.ArrowRight />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <a
                key={post.id}
                href="#"
                className="group bg-white rounded-2xl overflow-hidden border flex flex-col hover:-translate-y-1 transition-all duration-250"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 28px ${C.primary}18` }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)' }}
                data-reveal
                data-reveal-delay={String(i * 100) as any}
              >
                <div className="overflow-hidden bg-slate-100" style={{ height: 190 }}>
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: C.primaryLight, color: C.primary }}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: C.primary }}>
                    Read more <Ico.ArrowRight />
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10 md:hidden" data-reveal>
            <PrimaryBtn outline href="#">Read All Articles <Ico.ArrowRight /></PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ══ 8. TESTIMONIALS ════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14" data-reveal>
            <Eyebrow>Patient Stories</Eyebrow>
            <SectionHeading center sub="Real feedback from real patients — unedited, unfiltered.">
              What Our Patients Say
            </SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border flex flex-col"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', background: '#FAFCFF' }}
                data-reveal
                data-reveal-delay={String(i * 100) as any}
              >
                <div className="mb-4" style={{ color: C.primaryLight }}>
                  <Ico.Quote />
                </div>
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => <Ico.StarFilled key={j} />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 italic mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t" style={{ borderColor: '#F1F5F9' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: C.primary }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. FAQ ════════════════════════════════════════════════════ */}
      <section id="faq" className="py-16 md:py-24" style={{ background: C.tertiary }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">
            {/* Left image — desktop only */}
            <div className="hidden lg:block w-72 xl:w-80 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100 sticky top-24" style={{ height: 460 }}>
              <img
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=640&h=920&fit=crop&auto=format"
                alt="Zeniva partner hospital corridor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Right FAQ accordion */}
            <div>
              <div className="mb-10" data-reveal>
                <Eyebrow>Got Questions?</Eyebrow>
                <SectionHeading sub="Everything patients commonly ask before booking their first appointment.">
                  Frequently Asked Questions
                </SectionHeading>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {FAQS.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border overflow-hidden transition-all duration-200"
                    style={{ borderColor: openFaq === i ? C.primary : '#E2E8F0', boxShadow: openFaq === i ? `0 0 0 1px ${C.primary}30` : 'none' }}
                    data-reveal
                    data-reveal-delay={String((i % 2) * 100) as any}
                  >
                    <button
                      className="w-full flex items-center justify-between gap-3 p-4 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-sm font-semibold text-slate-800 leading-snug">{faq.q}</span>
                      <span
                        className="flex-shrink-0 transition-transform duration-250 text-slate-400"
                        style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', color: openFaq === i ? C.primary : undefined }}
                      >
                        <Ico.ChevDown />
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-250"
                      style={{ maxHeight: openFaq === i ? 200 : 0 }}
                    >
                      <p className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. CONTACT CTA BAND ══════════════════════════════════════ */}
      <section id="contact" className="relative overflow-hidden py-16 md:py-24" style={{ background: C.secondary }}>
        {/* One decorative glow — the only other instance after hero */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #ffffff60, transparent 70%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left — CTA */}
            <div data-reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 mb-5" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
                <Ico.FirstAid />
                Available 24/7 including holidays
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to take charge<br />of your health?
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
                Call us, book online, or send a message — our clinical team is available around the clock to help you find the right care.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryBtn white href="tel:+914012345678">
                  <Ico.Phone /> 040-1234-5678
                </PrimaryBtn>
                <PrimaryBtn outline white href="#send-message">
                  <Ico.Mail /> Send a Message
                </PrimaryBtn>
              </div>
            </div>

            {/* Right — inline contact form */}
            <div
              id="send-message"
              className="bg-white rounded-2xl p-7"
              style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.15)' }}
              data-reveal data-reveal-delay="200"
            >
              {contactSent ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-white" style={{ background: C.secondary }}>
                    <Ico.Check />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Message Received</h3>
                  <p className="text-sm text-slate-500">Our team will call you back within 2 hours during business hours, or by 9 AM the next morning.</p>
                  <button className="mt-5 text-sm font-medium hover:underline" style={{ color: C.primary }} onClick={() => setContactSent(false)}>Send another message</button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-slate-800 mb-5">Get in Touch</h3>
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-all"
                        style={{ borderColor: '#E2E8F0' }}
                        onFocus={e => { e.currentTarget.style.borderColor = C.secondary; e.currentTarget.style.boxShadow = `0 0 0 3px ${C.secondary}20` }}
                        onBlur={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={e => setContactForm(f => ({ ...f, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-all"
                        style={{ borderColor: '#E2E8F0' }}
                        onFocus={e => { e.currentTarget.style.borderColor = C.secondary; e.currentTarget.style.boxShadow = `0 0 0 3px ${C.secondary}20` }}
                        onBlur={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">How can we help?</label>
                      <textarea
                        required
                        rows={3}
                        value={contactForm.message}
                        onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Describe your health concern or question…"
                        className="w-full px-4 py-3 rounded-xl border text-sm text-slate-700 placeholder:text-slate-400 outline-none transition-all resize-none"
                        style={{ borderColor: '#E2E8F0' }}
                        onFocus={e => { e.currentTarget.style.borderColor = C.secondary; e.currentTarget.style.boxShadow = `0 0 0 3px ${C.secondary}20` }}
                        onBlur={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none' }}
                      />
                    </div>
                    <SecondaryBtn full>Send Message <Ico.ArrowRight /></SecondaryBtn>
                    <p className="text-xs text-slate-400 text-center">Your information is protected and never shared with third parties.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════ */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: C.primary }}>
                  <Ico.FirstAid />
                </div>
                <span className="font-bold text-lg text-white">Zeniva <span className="font-normal text-slate-400">Health</span></span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
                Connecting patients to quality healthcare across Telangana and Andhra Pradesh since 2024.
              </p>
              <div className="flex items-center gap-1.5 text-sm mb-2">
                <Ico.Phone /> <a href="tel:+914012345678" className="hover:text-white transition-colors">040-1234-5678</a>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <Ico.Mail /> <a href="mailto:care@zenivahealth.in" className="hover:text-white transition-colors">care@zenivahealth.in</a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">Services</h4>
              {['Doctor Consultation', 'Diagnostics', 'e-Pharmacy', 'Ambulance', 'Hospital Directory', 'Health Records'].map(l => (
                <a key={l} href="#services" className="block text-sm mb-3 hover:text-white transition-colors">{l}</a>
              ))}
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">Company</h4>
              {['About Us', 'Careers', 'Blog', 'Press', 'Partner with Us'].map(l => (
                <a key={l} href="#" className="block text-sm mb-3 hover:text-white transition-colors">{l}</a>
              ))}
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-5">Help</h4>
              {['FAQ', 'Contact Support', 'Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
                <a key={l} href="#" className="block text-sm mb-3 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-700/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500">© 2026 Zeniva Health Technologies Pvt. Ltd. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" style={{ background: C.emerald }} />
                All systems operational
              </span>
              {['Privacy', 'Terms', 'Accessibility'].map(l => (
                <a key={l} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
