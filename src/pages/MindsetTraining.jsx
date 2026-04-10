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
  const introRef = useScrollAnimation()
  const servicesRef = useScrollAnimation()
  const outcomesRef = useScrollAnimation()
  const processRef = useScrollAnimation()
  const virtualRef = useScrollAnimation()

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
        subtitle="Practical mindset and leadership coaching for athletes, coaches, teams, and business leaders. Built on 20 years of real coaching experience, not theory."
        cta="Get a Quote"
        ctaLink="/contact"
        secondaryCta="View Programs"
        secondaryCtaLink="/warrior-culture"
      />

      {/* INTRO */}
      <section className="section section-white" ref={introRef}>
        <div className="container inner-two-col">
          <div className="inner-text fade-up">
            <span className="section-label">The Mental Game</span>
            <h2 className="section-title">The Difference Between Good and Great is Mental.</h2>
            <div className="orange-bar" />
            <p className="inner-body">
              Most people don't lose because of talent. They lose because they get beaten mentally. Confidence, composure, mistake response, how you handle pressure when everything is on the line. That's what separates people who perform from people who fold.
            </p>
            <p className="inner-body mt-3">
              Tommy's mindset training is built on 20 years of coaching at the high school and Division I level. This is practical, in-the-trenches work for athletes, coaches, business teams, and anyone who needs to perform when it counts. No textbook psychology. Real tools you can use immediately.
            </p>
            <div className="philosophy-quote mt-4">
              <blockquote>
                "Win the war in your mind. Everything else follows."
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

      {/* VIRTUAL COACHING */}
      <section className="section section-light" ref={virtualRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Virtual Coaching</span>
            <h2 className="section-title">Small Group & Individual Mindset Training</h2>
            <div className="orange-bar orange-bar-center" />
            <p className="section-subtitle" style={{ textAlign: 'center', margin: '1rem auto 0' }}>
              For athletes, coaches, leaders, and anyone who is tired of self-doubt running the show. Done virtually — no travel required.
            </p>
          </div>
          <div className="split-section fade-up stagger-1" style={{ marginTop: '2.5rem' }}>
            <div className="split-card split-card-navy">
              <h3 className="split-card-title">1-on-1 Virtual Coaching</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                60 minutes. Zoom or phone. Deep, honest, real-world coaching — no fluff. You'll leave every session with a clear, no-excuse plan you can execute immediately.
              </p>
              <ul className="split-card-list">
                {['Stop overthinking and start competing', 'Rebuild grit and confidence after setbacks', 'Develop a process-based mindset that holds under pressure', 'Get clear on your next move and commit to it'].map(i => (
                  <li key={i} className="split-card-item">{i}</li>
                ))}
              </ul>
            </div>
            <div className="split-card split-card-orange">
              <h3 className="split-card-title">Small Group Mindset Circles</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                4–6 people. Virtual. Weekly or bi-weekly. A space for real conversations, honest accountability, and building toughness together — without losing your humanity.
              </p>
              <ul className="split-card-list">
                {['Athletes stuck in their head or playing scared', 'Teams struggling with mistakes or splintered by excuses', 'Leaders who need to toughen their mindset', 'Anyone tired of self-doubt running the show'].map(i => (
                  <li key={i} className="split-card-item">{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-4 fade-up stagger-2">
            <Link to="/contact" className="btn btn-primary btn-lg">Inquire About Virtual Coaching</Link>
          </div>
        </div>
      </section>

      <CTABanner
        label="Ready to Compete at the Highest Level?"
        title="Start Your Mindset Training Today"
        subtitle="Get on a quick call with Tommy to discuss your goals. He'll tell you exactly what he can do and what it costs."
        primaryCta="Book a Consultation"
        secondaryCta="View Speaking"
        secondaryCtaLink="/contact"
      />
    </div>
  )
}
