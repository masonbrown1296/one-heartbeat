import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Brain, Dumbbell, Crown, MessageCircle, Target, Zap, Crosshair, CircleDot, Flame } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './IndividualCamps.css'

const classroomTopics = [
  { icon: <Brain size={28} />, title: 'Mental Toughness', desc: 'Training the mindset to compete through adversity, failure, and pressure without breaking down.' },
  { icon: <Dumbbell size={28} />, title: 'Confidence Building', desc: 'Developing genuine, process-based confidence that holds up in the most competitive moments.' },
  { icon: <Crown size={28} />, title: 'Leadership Skills', desc: 'Learning how to lead teammates, command respect, and elevate the people around you.' },
  { icon: <MessageCircle size={28} />, title: 'Communication', desc: 'On-court communication, body language, and the verbal skills that make great teammates.' },
  { icon: <Target size={28} />, title: 'Mindset Habits', desc: 'Daily routines, pre-game preparation, and habits that the best athletes use to stay locked in.' },
]

const onCourtTopics = [
  { icon: <Zap size={28} />, title: 'Skill Development', desc: 'Position-specific drills and fundamental skill building led by elite coaches.' },
  { icon: <Crosshair size={28} />, title: 'Explosiveness & Athleticism', desc: 'Speed, quickness, first-step explosiveness, and functional athleticism training.' },
  { icon: <CircleDot size={28} />, title: 'Game Decision Making', desc: 'Reading the game, making quick decisions, and developing IQ that sets you apart.' },
  { icon: <Flame size={28} />, title: 'Competitive Training', desc: 'Live game situations, controlled scrimmaging, and high-intensity competitive drills.' },
]

export default function IndividualCamps() {
  const classRef = useScrollAnimation()
  const courtRef = useScrollAnimation()
  const detailsRef = useScrollAnimation()

  return (
    <div>
      <SEO
        title="Individual Camps"
        description="Complete athlete development combining elite mindset training in the classroom with high-intensity on-court skill work for serious competitors."
        path="/individual-camps"
      />
      <PageHero
        label="Athlete Development"
        title={<>Individual <span className="text-orange">Camps</span></>}
        subtitle="Complete athlete development combining elite mindset training in the classroom with high-intensity on-court skill work. Built for serious competitors ready to reach the next level."
        cta="Register Interest"
        ctaLink="/contact"
        secondaryCta="Learn More"
        secondaryCtaLink="/contact"
      />

      {/* OVERVIEW */}
      <section className="section section-white">
        <div className="container inner-two-col">
          <div className="inner-text fade-up">
            <span className="section-label">Camp Overview</span>
            <h2 className="section-title">Total Athlete Development. Zero Shortcuts.</h2>
            <div className="orange-bar" />
            <p className="inner-body">
              One Heartbeat Warriors Individual Camps are unlike any other camp experience. We combine classroom-based mental performance training with elite on-court skill development to produce complete, confident, competition-ready athletes.
            </p>
            <p className="inner-body mt-3">
              Every aspect of our camp is intentional. From the moment athletes arrive, they are immersed in Warrior Culture — a standard of excellence, accountability, and relentless effort that defines how champions are built.
            </p>
            <div className="camp-highlights mt-4">
              <div className="camp-highlight-item">
                <span className="camp-h-value">Morning</span>
                <span className="camp-h-label">Classroom Mindset Training</span>
              </div>
              <div className="camp-highlight-item">
                <span className="camp-h-value">Afternoon</span>
                <span className="camp-h-label">On-Court Skill Development</span>
              </div>
              <div className="camp-highlight-item">
                <span className="camp-h-value">Evening</span>
                <span className="camp-h-label">Competitive Game Sessions</span>
              </div>
            </div>
          </div>
          <div className="inner-image fade-in stagger-2">
            <img src="/priority-images/IMG_9965.jpg" alt="Individual camp training" className="inner-img" loading="lazy" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* CLASSROOM */}
      <section className="section section-light" ref={classRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">Classroom Training</span>
            <h2 className="section-title">The Mind Leads. The Body Follows.</h2>
            <div className="orange-bar" />
            <p className="section-subtitle">
              Championship performance starts in the mind. Our classroom sessions deliver the mental frameworks, tools, and habits that elite athletes live by.
            </p>
          </div>
          <div className="pillars-grid">
            {classroomTopics.map((t, i) => (
              <div key={t.title} className={`pillar-card fade-up stagger-${(i % 3) + 1}`}>
                <div className="pillar-icon-wrap">
                  <span className="pillar-icon">{t.icon}</span>
                </div>
                <h3 className="pillar-title">{t.title}</h3>
                <p className="pillar-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ON-COURT */}
      <section className="section section-dark" ref={courtRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">On-Court Training</span>
            <h2 className="section-title section-title-light">Compete Harder. Train Smarter.</h2>
            <div className="orange-bar" />
            <p className="section-subtitle section-subtitle-light">
              Our on-court sessions are led by elite coaches and built around the specific skills, athleticism, and competitive habits that get athletes noticed at the next level.
            </p>
          </div>
          <div className="formats-grid">
            {onCourtTopics.map((t, i) => (
              <div key={t.title} className={`format-card fade-up stagger-${i + 1}`}>
                <span className="format-icon">{t.icon}</span>
                <h3 className="format-title">{t.title}</h3>
                <p className="format-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section section-white" ref={detailsRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Camp Information</span>
            <h2 className="section-title">What to Expect</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <div className="split-section">
            <div className="split-card split-card-navy fade-up stagger-1">
              <h3 className="split-card-title">Who It's For</h3>
              <ul className="split-card-list">
                {['High school athletes (grades 8–12)', 'College-bound prospects', 'Athletes seeking a competitive edge', 'Players wanting elite mentorship', 'Any sport — mental training is universal', 'Limited spots — serious inquiries only'].map(i => (
                  <li key={i} className="split-card-item">{i}</li>
                ))}
              </ul>
            </div>
            <div className="split-card split-card-orange fade-up stagger-2">
              <h3 className="split-card-title">What You'll Leave With</h3>
              <ul className="split-card-list">
                {['A proven mental performance framework', 'Confidence you can build on', 'Accountability tools for daily use', 'Stronger leadership skills', 'Improved physical skills and athleticism', 'A Warrior Culture mindset for life'].map(i => (
                  <li key={i} className="split-card-item">{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link to="/contact" className="btn btn-primary btn-lg">Register Your Interest</Link>
          </div>
        </div>
      </section>

      <CTABanner
        label="Limited Availability"
        title="Secure Your Spot Today"
        subtitle="Camp spots are limited to ensure every athlete gets personalized attention. Contact us today to register your interest and get on the list."
        primaryCta="Register Interest"
        secondaryCta="Ask a Question"
        secondaryCtaLink="/contact"
      />
    </div>
  )
}
