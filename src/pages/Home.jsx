import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Swords, Trophy, Brain, Heart } from 'lucide-react'
import SEO from '../components/shared/SEO'
import './Home.css'

const stats = [
  { value: '1,000+', label: 'Teams Trained' },
  { value: '43', label: 'States' },
  { value: '20+', label: 'Years in Coaching' },
  { value: '6×', label: 'Conference Coach of the Year' },
]

const programs = [
  {
    icon: <Swords size={28} />,
    title: 'Warrior Culture Sessions',
    desc: 'Mental toughness, confidence, and leadership training for your team. Tommy comes to you and leads every session personally. No facilitators. No handoff.',
    link: '/warrior-culture',
    tag: 'Most Popular',
  },
  {
    icon: <Trophy size={28} />,
    title: 'Individual Camps',
    desc: 'Classroom mindset training combined with on-court skill work for athletes ready to get serious about their game and their mentality.',
    link: '/individual-camps',
    tag: null,
  },
  {
    icon: <Brain size={28} />,
    title: 'Mindset Training',
    desc: 'One-on-one and group coaching for athletes, coaches, and business leaders who want practical tools to handle pressure, lead better, and compete harder.',
    link: '/mindset-training',
    tag: null,
  },
  {
    icon: <Heart size={28} />,
    title: 'Be Grundy Foundation',
    desc: 'Giving underserved youth the mentorship, life skills, and belief that every young person deserves. Named for the man who changed Tommy\'s life.',
    link: '/be-grundy-foundation',
    tag: null,
  },
]

const testimonials = [
  {
    quote: "One Heartbeat's message is truly awesome. It is valuable information for athletes at any level. He covers toughness, being coachable, body language, being a great teammate — and does it in an extremely relatable way to today's student-athlete.",
    name: 'Dan Earl',
    title: 'Chattanooga Basketball',
  },
  {
    quote: "Tommy is as real as it gets. No fluff, no corporate jargon — just truth that people can apply. Our team was engaged the entire time, and the feedback afterward was outstanding.",
    name: 'Ryan Ross',
    title: 'Axle Logistics',
  },
  {
    quote: "Tommy is real! You don't get fugazi stuff! He says what you need your athletes to hear! Our players walked away more aware of how their attitude, effort, and response affect the whole team. Tommy has a gift for saying hard things in a way athletes can actually receive.",
    name: 'Jason Shaver',
    title: 'Franklin County Boys Basketball Coach',
  },
  {
    quote: "Our girls connected with Tommy right away. He brought a mix of toughness, honesty, and encouragement that made a real impact. His session helped them think differently about confidence, pressure, and how they respond when things don't go their way.",
    name: 'Deidra Cox',
    title: 'Cedar Bluff High School Volleyball Coach',
  },
  {
    quote: "Tommy had a powerful impact on both our students and our faculty. His ability to tailor his message to each group while reinforcing the same core principles made it especially effective for our entire school community.",
    name: 'Earl Sadler',
    title: 'Head of School, Pamlico Christian Academy',
  },
  {
    quote: "Warrior Culture is more than a session. It's a mindset shift. Tommy helped our players see how much control they have over their attitude, effort, and response.",
    name: 'Chris Randall',
    title: 'White Plains High School Boys Basketball Coach',
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
        description="Mental toughness, confidence, and leadership training for athletes, coaches, businesses, and organizations. Coach Tommy Brown has trained over 1,000 teams in 43 states. We come to you."
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
            Mental toughness, confidence, and leadership training for athletes, coaches, businesses, and organizations. We come to you.
          </p>
          <div className="home-hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
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
              Winning starts in the mind. One Heartbeat Warriors exists to equip athletes, coaches, teams, businesses, and organizations with the mental tools and cultural standards needed to perform at their highest level. On the court, in the office, in life.
            </p>
            <p className="mission-body mt-3">
              Through Warrior Culture, we build people who are committed to excellence, accountable to the people around them, and tough enough to handle whatever comes next. Tommy has led sessions with over 1,000 college and high school athletic teams, business groups, faculty, and church organizations in 43 states.
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
              Every program is built on what actually works in real locker rooms, boardrooms, and team settings. Practical. Proven. Led personally by Coach Tommy.
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

      {/* ── FEATURED QUOTE ── */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', lineHeight: 0.8, color: 'var(--orange-500)', opacity: 0.6, marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>&ldquo;</div>
            <blockquote style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.375rem)', lineHeight: 1.75, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 300, marginBottom: '1.75rem' }}>
              One Heartbeat's message is truly awesome. It is valuable information for athletes at any level. He covers toughness, being coachable, body language, being a great teammate — and does it in an extremely relatable way to today's student-athlete.
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-display)', flexShrink: 0 }}>D</div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Dan Earl</p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>Chattanooga Basketball</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header section-header-center">
            <span className="section-label">What Coaches & Leaders Say</span>
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
              Tommy Brown is a former college basketball head coach and athletic director who spent 20 years in the game, including Division I in the Big Ten and Big South. He now travels the country leading Warrior Culture sessions for athletic teams, businesses, and organizations. He's worked with over 1,000 teams in 43 states.
            </p>
            <ul className="about-credentials">
              <li><span className="credential-dot" />Former NCAA Head Coach & Athletic Director</li>
              <li><span className="credential-dot" />1,000+ teams trained in 43 states</li>
              <li><span className="credential-dot" />Speaker, author, and podcast host</li>
              <li><span className="credential-dot" />Co-founder, Be Grundy Foundation</li>
              <li><span className="credential-dot" />Works with teams, businesses, churches, and schools</li>
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
            Host a Warrior Culture Session
          </h2>
          <p className="final-cta-subtitle">
            Tommy comes to your team, your campus, your organization. Team sessions, department-wide clinics, keynotes, or season-long partnerships. Let's get your people in the room.
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
