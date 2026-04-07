import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Target, Trophy, BarChart3, Mic, Dumbbell, Flame, Crosshair, Swords } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'

const services = [
  {
    icon: <Target size={28} />,
    title: 'Individual Athlete Coaching',
    desc: 'One-on-one performance coaching for athletes at all levels who want to build mental toughness, sharpen focus, and unlock their full competitive potential. Custom programs built around your specific goals.',
  },
  {
    icon: <Trophy size={28} />,
    title: 'Team Mindset Programs',
    desc: 'Season-long or intensive team programs designed to install a championship mindset from top to bottom — creating a culture where every athlete competes with purpose, confidence, and accountability.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Leadership Consulting',
    desc: 'Strategic leadership development for coaches, athletic directors, and team captains. Build communication systems, culture frameworks, and performance standards that sustain excellence.',
  },
  {
    icon: <Mic size={28} />,
    title: 'Speaking Engagements',
    desc: "Coach Tommy's high-energy keynotes and motivational presentations are perfect for team banquets, athletic department events, school programs, and corporate leadership events.",
  },
]

const outcomes = [
  { icon: <Dumbbell size={28} />, title: 'Unbreakable Confidence', desc: 'Process-based self-belief that holds up in the biggest moments — not fragile ego-based confidence.' },
  { icon: <Flame size={28} />, title: 'Elite Resilience', desc: 'The ability to get knocked down and get back up stronger, with more focus and more fire than before.' },
  { icon: <Crosshair size={28} />, title: 'Composure Under Pressure', desc: 'Breathing, focus, and routine systems that keep athletes locked in when the game is on the line.' },
  { icon: <Swords size={28} />, title: 'Competitive Edge', desc: 'The mental habits, routines, and frameworks that separate elite competitors from the rest of the field.' },
]

export default function MindsetTraining() {
  const servicesRef = useScrollAnimation()
  const outcomesRef = useScrollAnimation()
  const processRef = useScrollAnimation()

  return (
    <div>
      <SEO
        title="Mindset Training"
        description="Proven performance psychology and leadership coaching for athletes, teams, and organizations ready to compete at the highest level."
        path="/mindset-training"
      />
      <PageHero
        label="Performance Psychology"
        title={<>Mindset <span className="text-orange">Training</span></>}
        subtitle="Proven performance psychology and leadership coaching for athletes, teams, and organizations ready to compete at the absolute highest level."
        cta="Book a Consultation"
        ctaLink="/contact"
        secondaryCta="View Programs"
        secondaryCtaLink="/warrior-culture"
      />

      {/* INTRO */}
      <section className="section section-white">
        <div className="container inner-two-col">
          <div className="inner-text fade-up">
            <span className="section-label">The Mental Game</span>
            <h2 className="section-title">The Difference Between Good and Great is Mental.</h2>
            <div className="orange-bar" />
            <p className="inner-body">
              Elite athletes at every level have the physical talent to compete. What separates champions from contenders is what happens between the ears. Mental performance training is no longer optional — it's the deciding factor in who wins and who watches.
            </p>
            <p className="inner-body mt-3">
              Coach Tommy's mindset training programs are built on two decades of real-world experience working with elite athletes and championship programs. These aren't motivational speeches — they're proven, science-backed frameworks that change how athletes think, compete, and lead.
            </p>
            <div className="philosophy-quote mt-4">
              <blockquote>
                "The warrior doesn't wait for perfect conditions. The warrior creates perfect conditions with their mindset."
              </blockquote>
              <cite>— Coach Tommy Brown</cite>
            </div>
          </div>
          <div className="inner-image fade-in stagger-2">
            <img src="/priority-images/IMG_3346.jpg" alt="Mindset training session" className="inner-img" loading="lazy" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-light" ref={servicesRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Programs Built for Every Level</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <div className="service-cards">
            {services.map((s, i) => (
              <div key={s.title} className={`service-card fade-up stagger-${(i % 2) + 1}`}>
                <div className="service-card-icon">{s.icon}</div>
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
                <Link to="/contact" className="btn btn-outline-orange btn-sm">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section section-dark" ref={outcomesRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Training Outcomes</span>
            <h2 className="section-title section-title-light">What You'll Gain</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <div className="pillars-grid">
            {outcomes.map((o, i) => (
              <div key={o.title} className={`format-card fade-up stagger-${i + 1}`}>
                <span className="format-icon">{o.icon}</span>
                <h3 className="format-title">{o.title}</h3>
                <p className="format-desc">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-white" ref={processRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">The Warrior Mindset Process</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <div className="process-steps">
            {[
              { step: '01', title: 'Assessment', desc: 'We start with a deep-dive assessment of the athlete or team — identifying mental performance gaps, strengths, and specific development priorities.' },
              { step: '02', title: 'Custom Program Design', desc: 'Based on the assessment, Coach Tommy builds a custom training plan with specific goals, timelines, and measurable outcomes.' },
              { step: '03', title: 'Training & Implementation', desc: 'Regular sessions combining frameworks, exercises, game film review, and real-world application. Theory meets practice.' },
              { step: '04', title: 'Measurement & Accountability', desc: 'Regular check-ins, progress tracking, and adjustments to keep athletes growing and the program delivering results.' },
            ].map((s, i) => (
              <div key={s.step} className={`process-step fade-up stagger-${i + 1}`}>
                <div className="process-step-number">{s.step}</div>
                <div className="process-step-content">
                  <h3 className="process-step-title">{s.title}</h3>
                  <p className="process-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/contact" className="btn btn-primary btn-lg">Start the Process</Link>
          </div>
        </div>
      </section>

      <CTABanner
        label="Ready to Compete at the Highest Level?"
        title="Start Your Mindset Training Today"
        subtitle="Schedule a free consultation with Coach Tommy to discuss your goals and build a custom mindset training program."
        primaryCta="Book a Consultation"
        secondaryCta="View Speaking"
        secondaryCtaLink="/contact"
      />
    </div>
  )
}
