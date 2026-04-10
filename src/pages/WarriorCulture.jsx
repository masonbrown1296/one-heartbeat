import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Brain, Trophy, Dumbbell, Flame, Handshake, MessageCircle, Users, Building2, ClipboardList, Mic } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'

const sessionTopics = [
  'Mental toughness training',
  'The 10 Qualities of a Warrior',
  'Building a pit bull mentality on the court or field',
  'Tips to developing real confidence',
  'Keys to overcoming mistakes',
  'How to redefine failure',
  'Performing under pressure',
  'Captains and leadership training (available add-on)',
]

const tenQualities = [
  "Don't complain",
  'Feed the positive',
  'Understand petty vs real problems',
  'Embrace personal responsibility',
  "Do not resent other people's success",
  'Accept coaching as feedback',
  'Master the boring',
  'Body language screams confidence',
  'Redefine failure',
  'Get outside your comfort zone',
]

const sampleSchedule = [
  { session: 'Session 1', desc: 'Individual Team — Mental Toughness & Confidence' },
  { session: 'Session 2', desc: 'Individual Team — Mental Toughness & Confidence' },
  { session: 'Session 3', desc: 'Individual Team — Mental Toughness & Confidence' },
  { session: 'Session 4', desc: 'Individual Team — Mental Toughness & Confidence' },
  { session: 'Session 5', desc: 'Captains / Team Leaders — Leadership & Influence' },
  { session: 'Session 6', desc: 'Coaches — Coaching the Anxious Generation' },
]

export default function WarriorCulture() {
  const whatRef = useScrollAnimation()
  const sessionRef = useScrollAnimation()
  const deptRef = useScrollAnimation()
  const qualitiesRef = useScrollAnimation()
  const differentRef = useScrollAnimation()

  return (
    <div>
      <SEO
        title="Warrior Culture Sessions"
        description="Mental toughness and leadership training for your team. Tommy comes to you and leads every session personally. 1,000+ teams trained in 43 states."
        path="/warrior-culture"
      />
      <PageHero
        label="We Come to You"
        title={<>Warrior Culture <span className="text-orange">Sessions</span></>}
        subtitle="Mental toughness and leadership training for athletic teams, businesses, and organizations. Tommy travels to your location and personally leads every session."
        cta="Get a Quote"
        ctaLink="/contact"
        secondaryCta="See What's Included"
      />

      {/* WHAT IS IT */}
      <section className="section section-white" ref={whatRef}>
        <div className="container inner-two-col">
          <div className="inner-text fade-up">
            <span className="section-label">What is Warrior Culture?</span>
            <h2 className="section-title">A Coach in the Room. Not a Program in a Box.</h2>
            <div className="orange-bar" />
            <p className="inner-body">
              Warrior Culture is mental toughness and leadership training built for real teams in real locker rooms. Tommy developed it over 20 years of coaching at the high school and Division I college level, and he has delivered it to over 1,000 teams in 43 states.
            </p>
            <p className="inner-body mt-3">
              This is hands-on, in-person work. Tommy comes to your facility, connects with your people, and delivers training your team will actually remember and use. Athletes, coaches, businesses, faculty groups, church organizations. The message adapts. The standard stays the same.
            </p>
            <Link to="/contact" className="btn btn-primary mt-4">Get a Quote</Link>
          </div>
          <div className="inner-image fade-in stagger-2">
            <img src="/priority-images/IMG_2080.jpg" alt="Warrior Culture training session" className="inner-img" loading="lazy" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* WHAT A SESSION INCLUDES */}
      <section className="section section-light" ref={sessionRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">What's Included</span>
            <h2 className="section-title">What a Session Covers</h2>
            <div className="orange-bar" />
            <p className="section-subtitle">
              A standard team session runs about 90 minutes, but timing is flexible based on your needs. Every session is personally led by Tommy.
            </p>
          </div>
          <div className="inner-two-col" style={{ alignItems: 'start' }}>
            <div className="fade-up stagger-1">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--navy-800)', marginBottom: '1.25rem' }}>Session Topics</h3>
              <ul className="outcomes-list">
                {sessionTopics.map(t => (
                  <li key={t} className="outcome-item">
                    <span className="outcome-check">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up stagger-2">
              <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--navy-800)', marginBottom: '0.75rem' }}>Quick Details</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  <div><strong style={{ color: 'var(--navy-800)' }}>Duration:</strong> ~90 minutes per team (flexible)</div>
                  <div><strong style={{ color: 'var(--navy-800)' }}>Location:</strong> Tommy comes to you. Your gym, your facility, your campus.</div>
                  <div><strong style={{ color: 'var(--navy-800)' }}>Led by:</strong> Tommy Brown. Personally. Every time.</div>
                  <div><strong style={{ color: 'var(--navy-800)' }}>Best for:</strong> Athletic teams, business teams, faculty, church groups, leadership programs</div>
                </div>
                <Link to="/contact" className="btn btn-primary mt-4" style={{ display: 'inline-block' }}>Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATHLETIC DEPARTMENT FORMAT */}
      <section className="section section-dark" ref={deptRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Athletic Department Clinics</span>
            <h2 className="section-title section-title-light">Multiple Teams. One Visit. One Price.</h2>
            <div className="orange-bar orange-bar-center" />
            <p className="section-subtitle section-subtitle-light" style={{ maxWidth: 640, margin: '1rem auto 0' }}>
              Tommy also runs department-wide clinics where each team gets their own dedicated session. Shorter format, separate sessions, all for one price. Schedule is flexible based on your needs.
            </p>
          </div>
          <div style={{ maxWidth: 680, margin: '2.5rem auto 0' }}>
            <h3 className="fade-up" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--orange-400)', marginBottom: '1.25rem', textAlign: 'center' }}>Sample Clinic Schedule</h3>
            <div className="fade-up stagger-1" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {sampleSchedule.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--orange-500)', whiteSpace: 'nowrap', minWidth: 80 }}>{s.session}</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{s.desc}</span>
                </div>
              ))}
            </div>
            <p className="fade-up stagger-2" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textAlign: 'center', marginTop: '1.25rem' }}>Each session lasts approximately one hour. Schedule adapts to your department's needs.</p>
          </div>
        </div>
      </section>

      {/* TEN QUALITIES OF A WARRIOR */}
      <section className="section section-white" ref={qualitiesRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">The Foundation</span>
            <h2 className="section-title">Ten Qualities of a Warrior</h2>
            <div className="orange-bar orange-bar-center" />
            <p className="section-subtitle" style={{ margin: '1rem auto 0', textAlign: 'center', maxWidth: 580 }}>
              These are the standards Tommy teaches and holds every team to. They come from his book and 20 years of coaching experience.
            </p>
          </div>
          <div className="fade-up stagger-1" style={{ maxWidth: 600, margin: '2rem auto 0' }}>
            <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {tenQualities.map((q, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: i % 2 === 0 ? 'var(--gray-50)' : 'transparent', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.25rem', color: 'var(--orange-500)', minWidth: 32, textAlign: 'center' }}>{i + 1}</span>
                  <span style={{ fontSize: '1rem', color: 'var(--navy-800)', fontWeight: 500 }}>{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* WHAT MAKES OHB DIFFERENT */}
      <section className="section section-light" ref={differentRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Why One Heartbeat</span>
            <h2 className="section-title">What Makes This Different</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <div className="inner-two-col fade-up stagger-1" style={{ alignItems: 'start', marginTop: '1.5rem' }}>
            <div>
              <p className="inner-body" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--navy-800)', marginBottom: '1.25rem' }}>
                This isn't a program. It's a coach in the room.
              </p>
              <ul className="outcomes-list">
                <li className="outcome-item"><span className="outcome-check">✓</span>Personally led by a former Head Coach and Athletic Director</li>
                <li className="outcome-item"><span className="outcome-check">✓</span>1,000+ teams trained across 43 states</li>
                <li className="outcome-item"><span className="outcome-check">✓</span>Built for real locker rooms, not theory</li>
                <li className="outcome-item"><span className="outcome-check">✓</span>Designed for the pressures coaches and leaders actually face</li>
                <li className="outcome-item"><span className="outcome-check">✓</span>Focused on grit and empathy, not one at the expense of the other</li>
              </ul>
            </div>
            <div>
              <div className="philosophy-quote">
                <blockquote>
                  "Connecting with teams isn't a skill set. It's my greatest strength. No facilitators. No handoff. I lead every session."
                </blockquote>
                <cite>— Coach Tommy Brown</cite>
              </div>
              <img src="/ohb-images/IMG_2618.jpg" alt="Tommy training a team" loading="lazy" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover', marginTop: '1.5rem' }} />
            </div>
          </div>
        </div>
      </section>

      {/* TOP 5 REASONS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Why Book a Session</span>
            <h2 className="section-title section-title-light">Top 5 Reasons to Host a Warrior Culture Session</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <div style={{ maxWidth: 760, margin: '2.5rem auto 0', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              'Your team will have more mental toughness and confidence as a result.',
              'Tommy will get your back. He is not worried about feelings or parents.',
              'It is very affordable.',
              'The session can be customized to meet your team\'s specific needs.',
              'Your team will have more mental toughness and confidence. Yes — it\'s worth saying twice.',
            ].map((reason, i) => (
              <div key={i} className="fade-up" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.75rem', padding: '1.25rem 1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--orange-500)', lineHeight: 1, flexShrink: 0, minWidth: '2rem', textAlign: 'center' }}>{i + 1}</span>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.0625rem', lineHeight: 1.7, margin: 0 }}>{reason}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 fade-up">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
          </div>
        </div>
      </section>

      <CTABanner
        label="Ready to Build Warrior Culture?"
        title="Host a Session for Your Team"
        subtitle="Tommy comes to you. Reach out today to get a quote and start the conversation."
        primaryCta="Get a Quote"
        secondaryCta="Learn About Tommy"
        secondaryCtaLink="/about"
      />
    </div>
  )
}
