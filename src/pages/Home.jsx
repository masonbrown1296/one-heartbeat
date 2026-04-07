import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Swords, Trophy, Brain, Heart } from 'lucide-react'
import SEO from '../components/shared/SEO'
import './Home.css'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Athletes Trained' },
  { value: '50+', label: 'Teams Served' },
  { value: '100%', label: 'Warrior Mindset' },
]

const programs = [
  {
    icon: <Swords size={28} />,
    title: 'Warrior Culture Sessions',
    desc: 'Team-wide mental performance and leadership training that builds championship culture, accountability, and cohesion from within.',
    link: '/warrior-culture',
    tag: 'Most Popular',
  },
  {
    icon: <Trophy size={28} />,
    title: 'Individual Camps',
    desc: 'Intensive athlete development combining classroom mindset training with elite on-court skill work for serious competitors.',
    link: '/individual-camps',
    tag: null,
  },
  {
    icon: <Brain size={28} />,
    title: 'Mindset Training',
    desc: 'Performance psychology and leadership consulting for individual athletes, teams, and organizations ready to compete at the next level.',
    link: '/mindset-training',
    tag: null,
  },
  {
    icon: <Heart size={28} />,
    title: 'Be Grundy Foundation',
    desc: 'Empowering underserved youth through sports, mentorship, and life skills — giving every kid a fighting chance.',
    link: '/be-grundy-foundation',
    tag: null,
  },
]

const testimonials = [
  {
    quote: "Coach Tommy's Warrior Culture program completely transformed the way our team competed. We went from a talented group of individuals to a championship-caliber unit. His approach to mental toughness and accountability is unlike anything I've seen in 20 years of coaching.",
    name: 'Coach Marcus Williams',
    title: 'Head Basketball Coach, Division I University',
  },
  {
    quote: "The mindset training we received from One Heartbeat Warriors gave our athletes tools they'll use for the rest of their lives — not just in sports, but in everything they do. Tommy has a rare ability to connect with young people and push them beyond their limits.",
    name: 'Coach Sarah Johnson',
    title: 'Athletic Director, Midwest Conference',
  },
  {
    quote: "After attending the individual camp, my son came back a different athlete. His confidence, his composure under pressure, and his leadership on the court all improved dramatically. Tommy Brown is the real deal — a world-class trainer and an even better mentor.",
    name: 'Marcus Thompson',
    title: 'Parent of Division I Prospect',
  },
  {
    quote: "We brought Tommy in for a full-season Warrior Culture program and the results spoke for themselves. Best defensive rating in program history. Zero internal drama. A team that genuinely loved competing for each other. That's the Tommy Brown effect.",
    name: 'Coach David Rivera',
    title: 'Head Football Coach, State Champions',
  },
]

const logos = ['University Athletics', 'Elite Prep Academy', 'National Champions', 'Youth Alliance', 'Elite Training Inc.']

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = (index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [current])

  const t = testimonials[current]

  return (
    <div className="testimonials-slider">
      <div className={`testimonial-card-inner ${isAnimating ? 'fading' : ''}`}>
        <div className="testimonial-quote-mark">&ldquo;</div>
        <blockquote className="testimonial-text">{t.quote}</blockquote>
        <div className="testimonial-author">
          <div className="testimonial-avatar" style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
            {t.name.charAt(0)}
          </div>
          <div>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-title">{t.title}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const missionRef = useScrollAnimation()
  const programsRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const aboutRef = useScrollAnimation()
  const mediaRef = useScrollAnimation()

  return (
    <div className="home">
      <SEO
        title="Home"
        description="One Heartbeat Warriors — Elite mental performance and leadership training for athletes, coaches, and organizations. Build mental toughness, confidence, and championship culture."
        path="/"
      />
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-bg" />
        <div className="home-hero-overlay" />
        <div className="home-hero-stripe" />
        <div className="container home-hero-content">
          <span className="section-label fade-in visible">One Heartbeat Warriors</span>
          <h1 className="home-hero-title display-headline">
            Build Tougher Athletes.<br />
            <span className="text-orange">Stronger Teams.</span><br />
            Better Leaders.
          </h1>
          <p className="home-hero-subtitle">
            One Heartbeat Warriors helps athletes, coaches, and organizations develop mental toughness, confidence, and leadership through proven performance training.
          </p>
          <div className="home-hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Book a Session</Link>
            <Link to="/warrior-culture" className="btn btn-secondary btn-lg">Explore Programs</Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stats-bar section-deepnavy" ref={statsRef}>
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className={`stat-item fade-up stagger-${i + 1}`}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section section-white" ref={missionRef}>
        <div className="container mission-layout">
          <div className="mission-text fade-up">
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">One Heartbeat. One Standard. Zero Excuses.</h2>
            <div className="orange-bar" />
            <p className="mission-body">
              We believe that championship performance starts in the mind. One Heartbeat Warriors exists to equip every athlete, coach, and team with the mental tools, leadership skills, and cultural foundation needed to compete at the highest level — on the court, in the classroom, and in life.
            </p>
            <p className="mission-body mt-3">
              Through Warrior Culture, we don't just train athletes. We forge warriors — individuals with an unshakeable commitment to excellence, accountability to their teammates, and the mental fortitude to perform under any pressure.
            </p>
            <Link to="/about" className="btn btn-outline-orange mt-4">Meet Coach Tommy</Link>
          </div>
          <div className="mission-image-block fade-in stagger-2">
            <img src="/priority-images/IMG_1952.jpg" alt="Coach Tommy Brown speaking to athletes" className="mission-img" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
            <div className="mission-card">
              <span className="mission-card-number">1</span>
              <p className="mission-card-text">Heartbeat. One Team. One Goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section section-light" ref={programsRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Programs & Services</span>
            <h2 className="section-title">Train. Lead. Dominate.</h2>
            <div className="orange-bar orange-bar-center" />
            <p className="section-subtitle section-subtitle-muted">
              Every program is built around proven mental performance principles, leadership development, and real-world athlete training.
            </p>
          </div>
          <div className="programs-grid">
            {programs.map((p, i) => (
              <Link to={p.link} key={p.title} className={`program-card fade-up stagger-${i + 1}`}>
                {p.tag && <span className="program-tag">{p.tag}</span>}
                <div className="program-icon">{p.icon}</div>
                <h3 className="program-title">{p.title}</h3>
                <p className="program-desc">{p.desc}</p>
                <span className="program-link-text">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-center">
            <span className="section-label">What Coaches & Athletes Say</span>
            <h2 className="section-title section-title-light">Warrior Results</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section section-white" ref={aboutRef}>
        <div className="container about-preview-layout">
          <div className="about-preview-image fade-in">
            <img src="/headshot.webp" alt="Coach Tommy Brown" className="about-img" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
            <div className="about-credential-badge">
              <span className="about-badge-number">20+</span>
              <span className="about-badge-text">Years Coaching</span>
            </div>
          </div>
          <div className="about-preview-text fade-up stagger-2">
            <span className="section-label">About Coach Tommy Brown</span>
            <h2 className="section-title">Built by the Game. Proven on Every Level.</h2>
            <div className="orange-bar" />
            <p className="about-preview-body">
              Coach Tommy Brown is a nationally recognized mental performance trainer, leadership coach, and motivational speaker with over two decades of experience developing elite athletes and championship programs across the country.
            </p>
            <ul className="about-credentials">
              <li><span className="credential-dot" />Division I coaching experience</li>
              <li><span className="credential-dot" />Award-winning motivational speaker</li>
              <li><span className="credential-dot" />Founder, Be Grundy Foundation</li>
              <li><span className="credential-dot" />Host, One Heartbeat Warriors Podcast</li>
              <li><span className="credential-dot" />500+ athletes personally developed</li>
            </ul>
            <Link to="/about" className="btn btn-primary mt-4">Meet Tommy</Link>
          </div>
        </div>
      </section>

      {/* ── MEDIA ── */}
      <section className="section section-light" ref={mediaRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">Media & Impact</span>
            <h2 className="section-title">Warrior Culture in Action</h2>
            <div className="orange-bar" />
          </div>
          <div className="media-grid fade-up stagger-2">
            {[
              '/priority-images/IMG_2080.jpg',
              '/ohb-images/IMG_2617.jpg',
              '/ohb-images/IMG_3013.jpg',
              '/priority-images/IMG_3346.jpg',
              '/ohb-images/IMG_2894.jpg',
              '/ohb-images/IMG_1631.jpg',
            ].map((src, n) => (
              <div key={n} className="media-thumb" style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.75rem' }}>
                <img src={src} alt={`One Heartbeat Warriors photo ${n + 1}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div className="media-thumb-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/media" className="btn btn-outline-orange">See All Media</Link>
          </div>
        </div>
      </section>

      {/* ── PARTNERS / LOGOS ── */}
      <section className="logos-bar section-deepnavy">
        <div className="container">
          <p className="logos-bar-label">Trusted by programs nationwide</p>
          <div className="logos-row">
            {logos.map(l => (
              <div key={l} className="logo-pill">{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta section-orange section">
        <div className="final-cta-bg" />
        <div className="container final-cta-content">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Ready to Elevate?</span>
          <h2 className="final-cta-title display-headline">
            Bring Warrior Culture to Your Program
          </h2>
          <p className="final-cta-subtitle">
            Whether it's a team session, individual camp, keynote speech, or season-long partnership — let's build something great together.
          </p>
          <div className="final-cta-actions">
            <Link to="/contact" className="btn btn-white btn-lg">Request Information</Link>
            <Link to="/warrior-culture" className="btn btn-secondary btn-lg">View Programs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
