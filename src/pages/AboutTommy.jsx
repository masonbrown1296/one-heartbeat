import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import './InnerPage.css'
import './AboutTommy.css'

const highlights = [
  { icon: '🏆', label: 'Division I Coaching Experience' },
  { icon: '🎤', label: 'National Keynote Speaker' },
  { icon: '📻', label: 'Podcast Host' },
  { icon: '❤️', label: 'Foundation Founder' },
  { icon: '👥', label: '500+ Athletes Developed' },
  { icon: '🏅', label: 'Multiple Coach of the Year Awards' },
]

const career = [
  { year: '2003–2008', title: 'College Playing Career', desc: 'Four-year college athlete competing at a high level, developing the competitive drive and work ethic that would define his coaching philosophy.' },
  { year: '2008–2012', title: 'Assistant Coach, High School', desc: "Tommy's coaching career began at the high school level, where he immediately showed an ability to connect with young athletes and drive program culture." },
  { year: '2012–2016', title: 'Division I Assistant Coach', desc: 'Advanced to Division I athletics, working with elite college athletes and developing the mental performance frameworks that would become Warrior Culture.' },
  { year: '2016–2019', title: 'Head Coach & Program Builder', desc: 'Led multiple programs to postseason success while establishing a reputation as one of the most effective culture-builders in collegiate athletics.' },
  { year: '2019', title: 'Founded One Heartbeat Warriors', desc: 'Launched One Heartbeat Warriors to bring mental performance and leadership training to teams, programs, and organizations nationwide.' },
  { year: '2021', title: 'Founded Be Grundy Foundation', desc: 'Created the Be Grundy Foundation to empower underserved youth through sports, mentorship, and life skills — honoring a mentor who changed his life.' },
]

const speakingTopics = [
  'Building Championship Culture',
  'Mental Toughness and Resilience',
  'Leadership Under Pressure',
  'The Warrior Mindset',
  'From Adversity to Excellence',
  'Team Chemistry and Communication',
  'The Mind-Performance Connection',
  'Building Programs That Last',
]

export default function AboutTommy() {
  const bioRef = useScrollAnimation()
  const careerRef = useScrollAnimation()
  const speakingRef = useScrollAnimation()

  return (
    <div>
      <PageHero
        label="About Coach Tommy Brown"
        title={<>Built by the Game. <span className="text-orange">Proven by Results.</span></>}
        subtitle="Two decades of elite coaching, mentorship, and leadership development — creating warriors one athlete at a time."
      />

      {/* BIO */}
      <section className="section section-white" ref={bioRef}>
        <div className="container inner-two-col">
          <div className="about-bio-image fade-in">
            <div className="placeholder-img about-bio-img">
              <span>Coach Tommy Brown</span>
            </div>
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
            <h2 className="section-title">A Warrior Forged Through Experience.</h2>
            <div className="orange-bar" />
            <p className="inner-body">
              Coach Tommy Brown's journey from competitive athlete to nationally recognized mental performance trainer and leadership coach is a story of relentless pursuit of excellence — and a deep belief in the transformative power of the right environment and the right mindset.
            </p>
            <p className="inner-body mt-3">
              After a decorated playing career and over two decades of coaching at the high school and Division I collegiate levels, Coach Tommy has seen firsthand what separates programs that win one championship from programs that build sustained excellence. The answer is always culture — and culture starts in the mind.
            </p>
            <p className="inner-body mt-3">
              Today, Coach Tommy works with athletes, coaches, and organizations across the country, delivering the mental performance frameworks, leadership tools, and cultural standards that create champions — on and off the field.
            </p>
            <div className="philosophy-quote mt-4">
              <blockquote>
                "I don't just train athletes. I forge warriors. People who are committed to excellence in everything they do — not just when it's convenient."
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
            <h2 className="section-title">The Path of a Warrior</h2>
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
              <div className="placeholder-img inner-img">
                <span>Career Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section-dark">
        <div className="container coaching-philosophy">
          <div className="section-header fade-up">
            <span className="section-label">Coaching Philosophy</span>
            <h2 className="section-title section-title-light">What Tommy Believes</h2>
            <div className="orange-bar" />
          </div>
          <div className="philosophy-blocks fade-up stagger-2">
            {[
              { title: 'Culture First', body: 'Every championship starts with culture. You cannot win consistently without an organizational DNA built on accountability, trust, and relentless pursuit of excellence.' },
              { title: 'The Mind Leads', body: 'Physical talent is the entry ticket. Mental performance is the differentiator. Athletes who master their mindset unlock levels of performance that talent alone never could.' },
              { title: 'People Over Plays', body: "Investing in the person first always produces the best athlete. When a young person knows they're valued as a human being, they give everything they have as a competitor." },
              { title: 'Standards, Not Rules', body: 'Rules create compliance. Standards create ownership. Warrior Culture is built on standards that athletes choose to hold themselves to — because they believe in what they\'re building.' },
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
              Coach Tommy delivers powerful, high-energy keynotes and presentations that inspire athletes, coaches, and organizations to perform at their absolute best.
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
                { format: 'Keynote Presentations', desc: '45–90 minute high-impact keynotes for athletic events, banquets, and conferences.' },
                { format: 'Team Workshops', desc: 'Interactive half-day or full-day workshops combining speaking with exercises and application.' },
                { format: 'Corporate Events', desc: 'Leadership and performance training for corporate teams and organizational leaders.' },
                { format: 'School Programs', desc: 'Youth motivational programs for middle school, high school, and college students.' },
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
        title="Ready to Elevate Your Program?"
        subtitle="Whether you need a keynote speaker, a season-long partner, or a transformational camp experience — Tommy Brown delivers."
        primaryCta="Book a Session"
        secondaryCta="View Programs"
        secondaryCtaLink="/warrior-culture"
      />
    </div>
  )
}
