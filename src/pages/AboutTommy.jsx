import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Trophy, Mic, Radio, Heart, Users, Medal } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './AboutTommy.css'

const highlights = [
  { icon: <Trophy size={20} />, label: 'Former D1 Head Coach & Athletic Director' },
  { icon: <Users size={20} />, label: '1,000+ Teams Trained in 43 States' },
  { icon: <Mic size={20} />, label: 'Speaker & Author' },
  { icon: <Radio size={20} />, label: 'Podcast Host' },
  { icon: <Heart size={20} />, label: 'Co-Founder, Be Grundy Foundation' },
  { icon: <Medal size={20} />, label: 'Big Ten & Big South Experience' },
]

const career = [
  { year: '2003-2008', title: 'College Playing Career', desc: 'Four-year college athlete. Developed the competitive drive and work ethic that would define his coaching career.' },
  { year: '2008-2012', title: 'High School Coach & AD', desc: 'Began coaching at the high school level and served as Athletic Director. Showed an immediate ability to connect with young athletes and build program culture.' },
  { year: '2012-2016', title: 'Division I Assistant Coach', desc: 'Moved to Division I athletics in the Big South conference, working with college athletes and developing the mental performance frameworks behind Warrior Culture.' },
  { year: '2016-2019', title: 'Head Coach & Program Builder', desc: 'Led programs to postseason success. Built a reputation as one of the most effective culture-builders in collegiate athletics.' },
  { year: '2019', title: 'Founded One Heartbeat Warriors', desc: 'Launched One Heartbeat to bring Warrior Culture sessions to teams, programs, and organizations nationwide. Now over 1,000 teams in 43 states.' },
  { year: '2021', title: 'Co-Founded Be Grundy Foundation', desc: 'Created the Be Grundy Foundation with his wife Andrea Campbell-Brown to serve underserved youth through sports, mentorship, and life skills.' },
]

const speakingTopics = [
  'Building Championship Culture',
  'Mental Toughness and Resilience',
  'Leadership Under Pressure',
  'The Warrior Mindset',
  'Coaching the Anxious Generation',
  'Team Chemistry and Communication',
  'Grit and Empathy in Leadership',
  'Overcoming Adversity',
]

export default function AboutTommy() {
  const bioRef = useScrollAnimation()
  const careerRef = useScrollAnimation()
  const philosophyRef = useScrollAnimation()
  const speakingRef = useScrollAnimation()

  return (
    <div>
      <SEO
        title="About Coach Tommy Brown"
        description="Former D1 head coach and athletic director. 20 years in coaching. 1,000+ teams trained in 43 states. Tommy Brown helps people win the war in their minds."
        path="/about"
        image="https://one-heartbeat.vercel.app/headshot.webp"
      />
      <PageHero
        label="About Coach Tommy Brown"
        title={<>Built by the Game. <span className="text-orange">Tested by Life.</span></>}
        subtitle="Former college head coach. Athletic director. Speaker. Author. 20 years in the game, 1,000+ teams trained, and a story that gives the message its weight."
      />

      {/* BIO */}
      <section className="section section-white" ref={bioRef}>
        <div className="container inner-two-col">
          <div className="about-bio-image fade-in">
            <img src="/headshot.webp" alt="Coach Tommy Brown" className="about-bio-img" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
            <div className="about-highlights-grid">
              {highlights.map((h, i) => (
                <div key={h.label} className="about-highlight">
                  <span>{h.icon}</span>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="inner-text fade-up stagger-2">
            <span className="section-label">The Story</span>
            <h2 className="section-title">A Coach Who Has Lived It.</h2>
            <div className="orange-bar" />
            <p className="inner-body">
              Tommy Brown spent 20 years in college basketball as a head coach and assistant at the Division I level, including time in the Big Ten and Big South. He has been an athletic director. He has built programs, won games, and been fired. He rebuilt his career, his identity, and his purpose from the ground up.
            </p>
            <p className="inner-body mt-3">
              He grew up with dyslexia and ADHD. Graduating college took everything he had. He has lost friends, walked through family pain, and experienced the kind of life that forces deeper roots. That is why his message carries both grit and empathy.
            </p>
            <p className="inner-body mt-3">
              Today, Tommy travels the country leading Warrior Culture sessions for athletic teams, businesses, faculty groups, and organizations. Over 1,000 teams in 43 states. He goes to them. He leads every session personally. And his message reaches because it comes from someone who has been through enough to stop pretending.
            </p>
            <div className="philosophy-quote mt-4">
              <blockquote>
                "I don't just teach mental toughness. I've had to live it. That's the difference."
              </blockquote>
              <cite>— Coach Tommy Brown</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="section section-light" ref={careerRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">Career Journey</span>
            <h2 className="section-title">The Path</h2>
            <div className="orange-bar" />
          </div>
          <div className="inner-two-col">
            <div className="timeline fade-up stagger-1">
              {career.map(c => (
                <div key={c.year} className="timeline-item">
                  <div className="timeline-year">{c.year}</div>
                  <div className="timeline-title">{c.title}</div>
                  <div className="timeline-desc">{c.desc}</div>
                </div>
              ))}
            </div>
            <div className="inner-image fade-in stagger-2">
              <img src="/priority-images/IMG_8808.jpg" alt="Coach Tommy Brown coaching athletes" className="inner-img" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section-dark" ref={philosophyRef}>
        <div className="container coaching-philosophy">
          <div className="section-header fade-up">
            <span className="section-label">What Tommy Believes</span>
            <h2 className="section-title section-title-light">Coaching Philosophy</h2>
            <div className="orange-bar" />
          </div>
          <div className="philosophy-blocks fade-up stagger-2">
            {[
              { title: 'Culture First', body: 'Every winning program starts with culture. You can have all the talent in the world, but if people are selfish, disconnected, or undisciplined, you will lose to teams that are tougher and more together than you.' },
              { title: 'The Mind Leads', body: 'Most teams don\'t lose because of talent. They lose because they get beaten mentally. Confidence, composure, mistake response, emotional regulation. Win the war in your mind first.' },
              { title: 'People Over Plays', body: 'When a person knows they are valued as a human being, they give everything they have as a competitor. Invest in the person. The athlete follows.' },
              { title: 'Grit and Empathy Together', body: 'Toughness without empathy is dangerous. Empathy without grit is incomplete. The best coaches, leaders, and teams know when to push and when to listen.' },
            ].map((p, i) => (
              <div key={p.title} className={`philosophy-block stagger-${i + 1}`}>
                <h3 className="philosophy-block-title">{p.title}</h3>
                <p className="philosophy-block-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKING */}
      <section className="section section-white" ref={speakingRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Speaking Engagements</span>
            <h2 className="section-title">Book Tommy to Speak</h2>
            <div className="orange-bar orange-bar-center" />
            <p className="section-subtitle" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
              High-energy keynotes and presentations for teams, schools, athletic departments, businesses, and conferences. Tommy speaks the way he coaches: direct, personal, and practical.
            </p>
          </div>
          <div className="speaking-layout">
            <div className="speaking-topics fade-up stagger-1">
              <h3 className="speaking-topics-title">Keynote Topics</h3>
              <ul className="speaking-topics-list">
                {speakingTopics.map(t => (
                  <li key={t} className="speaking-topic-item">
                    <span className="outcome-check">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="speaking-formats fade-up stagger-2">
              <h3 className="speaking-formats-title">Speaking Formats</h3>
              {[
                { format: 'Keynote Presentations', desc: '45-90 minute keynotes for athletic events, banquets, and conferences.' },
                { format: 'Team Workshops', desc: 'Half-day or full-day workshops combining speaking with hands-on exercises.' },
                { format: 'Corporate & Business Events', desc: 'Leadership and culture training for corporate teams and organizations.' },
                { format: 'School Programs', desc: 'Programs for middle school, high school, and college students.' },
              ].map(f => (
                <div key={f.format} className="speaking-format-item">
                  <h4>{f.format}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary mt-4">Book Tommy to Speak</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        label="Work With Tommy"
        title="Ready to Get Your Team in the Room?"
        subtitle="Whether you need a session, a keynote, or a season-long partnership, Tommy will work with you to build something that lasts."
        primaryCta="Get a Quote"
        secondaryCta="View Programs"
        secondaryCtaLink="/warrior-culture"
      />
    </div>
  )
}
