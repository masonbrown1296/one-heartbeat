import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Brain, Trophy, Dumbbell, Flame, Handshake, MessageCircle, Users, Building2, ClipboardList, Mic } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'

const pillars = [
  { icon: <Brain size={28} />, title: 'Mental Toughness', desc: 'Developing the resilience, grit, and composure to perform under the highest levels of pressure — when the game is on the line.' },
  { icon: <Trophy size={28} />, title: 'Leadership Development', desc: 'Cultivating the communication, accountability, and influence skills that separate good teams from great ones.' },
  { icon: <Dumbbell size={28} />, title: 'Confidence Building', desc: 'Instilling unshakeable belief and self-trust so athletes and teams compete with authority — in practice and in competition.' },
  { icon: <Flame size={28} />, title: 'Performance Under Pressure', desc: 'Training athletes to elevate when the stakes are highest, building process-driven focus and composure in critical moments.' },
  { icon: <Handshake size={28} />, title: 'Accountability Culture', desc: 'Building a team-wide standard where every individual holds themselves and each other to the highest expectations — every day.' },
  { icon: <MessageCircle size={28} />, title: 'Communication & Connection', desc: 'Forging authentic relationships, deep trust, and elite communication patterns that make teams truly unbreakable.' },
]

const formats = [
  {
    title: 'Team Sessions',
    desc: 'Full-team workshops and training sessions designed to install Warrior Culture from the ground up. Available as single sessions, multi-day intensives, or season-long partnerships.',
    icon: <Users size={28} />,
  },
  {
    title: 'Athletic Department Programs',
    desc: "Comprehensive department-wide programs that align coaches, athletes, and support staff around a single championship culture standard.",
    icon: <Building2 size={28} />,
  },
  {
    title: 'Coach Workshops',
    desc: 'Specialized leadership training for coaching staffs — building communication frameworks, culture-setting strategies, and performance management skills.',
    icon: <ClipboardList size={28} />,
  },
  {
    title: 'Leadership Seminars',
    desc: 'High-impact half-day and full-day seminars for captains, team leaders, and student-athletes stepping into leadership roles.',
    icon: <Mic size={28} />,
  },
]

const outcomes = [
  'Improved team cohesion and chemistry',
  'Stronger leadership at every level',
  'Reduced internal conflict',
  'Higher performance under pressure',
  'Increased accountability',
  'Championship-level culture',
  'Better communication on and off the court',
  'Motivated, focused athletes',
]

export default function WarriorCulture() {
  const pillarsRef = useScrollAnimation()
  const formatsRef = useScrollAnimation()
  const outcomesRef = useScrollAnimation()

  return (
    <div>
      <SEO
        title="Warrior Culture Sessions"
        description="Transform your team's culture, mindset, and performance with proven mental toughness and leadership training built for elite athletes."
        path="/warrior-culture"
      />
      <PageHero
        label="Team Training"
        title={<>Warrior Culture <span className="text-orange">Sessions</span></>}
        subtitle="Transform your team's culture, mindset, and performance with proven mental toughness and leadership training built for elite athletes."
        cta="Book a Session"
        secondaryCta="Learn More"
        secondaryCtaLink="/contact"
      />

      {/* OVERVIEW */}
      <section className="section section-white">
        <div className="container inner-two-col">
          <div className="inner-text fade-up">
            <span className="section-label">What is Warrior Culture?</span>
            <h2 className="section-title">Culture Wins Championships. We Build Both.</h2>
            <div className="orange-bar" />
            <p className="inner-body">
              Warrior Culture is more than a training program — it's a complete mindset and cultural system that transforms how teams think, compete, and lead. Developed by Coach Tommy Brown over two decades of elite coaching experience, Warrior Culture equips athletes and teams with the mental tools and cultural standards needed to consistently perform at their highest level.
            </p>
            <p className="inner-body mt-3">
              We go beyond motivation and inspiration. Every session delivers practical frameworks, real-world strategies, and proven mental performance techniques that athletes can immediately apply — in competition, in the locker room, and in life.
            </p>
            <Link to="/contact" className="btn btn-primary mt-4">Book a Warrior Culture Session</Link>
          </div>
          <div className="inner-image fade-in stagger-2">
            <img src="/priority-images/IMG_2080.jpg" alt="Warrior Culture training session" className="inner-img" loading="lazy" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section section-light" ref={pillarsRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Training Pillars</span>
            <h2 className="section-title">Six Pillars of Warrior Culture</h2>
            <div className="orange-bar orange-bar-center" />
            <p className="section-subtitle" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
              Every Warrior Culture session is built around six proven performance pillars that address the mental and cultural foundations of elite teams.
            </p>
          </div>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={p.title} className={`pillar-card fade-up stagger-${(i % 3) + 1}`}>
                <div className="pillar-icon-wrap">
                  <span className="pillar-icon">{p.icon}</span>
                </div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="section section-dark" ref={formatsRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Program Formats</span>
            <h2 className="section-title section-title-light">Built for Every Program</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <div className="formats-grid">
            {formats.map((f, i) => (
              <div key={f.title} className={`format-card fade-up stagger-${i + 1}`}>
                <span className="format-icon">{f.icon}</span>
                <h3 className="format-title">{f.title}</h3>
                <p className="format-desc">{f.desc}</p>
                <Link to="/contact" className="btn btn-outline-orange btn-sm mt-3">Book This Format</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section section-white" ref={outcomesRef}>
        <div className="container inner-two-col">
          <div className="inner-text fade-up">
            <span className="section-label">Program Outcomes</span>
            <h2 className="section-title">Real Results. Measured Transformation.</h2>
            <div className="orange-bar" />
            <p className="inner-body">
              Programs that implement Warrior Culture consistently report measurable improvements in team performance, culture, and competitive results — both on and off the field.
            </p>
            <ul className="outcomes-list mt-4">
              {outcomes.map(o => (
                <li key={o} className="outcome-item">
                  <span className="outcome-check">✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="inner-image fade-in stagger-2">
            <img src="/ohb-images/IMG_2618.jpg" alt="Team training with One Heartbeat Warriors" className="inner-img" loading="lazy" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <CTABanner
        label="Ready to Build Warrior Culture?"
        title="Bring the Warrior Standard to Your Program"
        subtitle="Reach out today to schedule a consultation with Coach Tommy and design a custom Warrior Culture program for your team."
        primaryCta="Book a Session"
        secondaryCta="Learn About Tommy"
        secondaryCtaLink="/about"
      />
    </div>
  )
}
