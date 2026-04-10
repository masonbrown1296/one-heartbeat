import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Trophy, Mic, Radio, Heart, Users, Medal } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './AboutTommy.css'

const highlights = [
  { icon: <Trophy size={20} />, label: 'Former NCAA Head Coach & Athletic Director' },
  { icon: <Users size={20} />, label: '1,000+ Teams Trained in 43 States' },
  { icon: <Mic size={20} />, label: 'Speaker & Author' },
  { icon: <Radio size={20} />, label: 'Podcast Host' },
  { icon: <Heart size={20} />, label: 'Co-Founder, Be Grundy Foundation' },
  { icon: <Medal size={20} />, label: '2008 NAIA National Coach of the Year' },
]

const career = [
  { year: '1989–1993', title: 'College Playing Career', desc: 'Four-year starter and All-American at Covenant College. Finished as a top-five all-time leading scorer and second all-time leading rebounder in program history. Built the grit and competitive edge that would define his coaching career.' },
  { year: '1994–1998', title: 'High School Coach — Orangewood Christian', desc: 'Began coaching at the high school level, quickly establishing a reputation for connecting with players and building disciplined, competitive teams.' },
  { year: '1998–2005', title: 'Head Coach — Bluefield College', desc: 'Built the program into a consistent winner with conference championships and national tournament appearances.' },
  { year: '2004–2005', title: 'Director of Athletics — Bluefield College', desc: 'Oversaw the entire athletic department while continuing as head coach — managing staffing, operations, and program development across all sports.' },
  { year: '2005–2016', title: 'Head Coach — Lee University', desc: '13 straight 20-win seasons. 6× Conference Coach of the Year. 2008 NAIA National Coach of the Year. Multiple national tournament appearances and deep runs. Established himself as one of the top program builders and player development coaches in college basketball.' },
  { year: '2016–2017', title: 'Assistant Coach — University of Illinois (D1)', desc: 'Contributed to scouting, recruiting, and player development at the Big Ten level — the highest level of college basketball.' },
  { year: '2017–2018', title: 'Assistant Coach — Presbyterian College (D1)', desc: 'Continued Division I experience in the Big South Conference, refining the mental performance principles that would become Warrior Culture.' },
  { year: '2018–2020', title: 'Athletic Director & Admissions — Boyd Buchanan School', desc: 'Led the athletic department, hired coaches, built culture, and drove student recruitment and enrollment efforts.' },
  { year: '2013–Present', title: 'Founder — One Heartbeat Warriors', desc: 'Launched One Heartbeat to develop grit, resilience, and confidence in athletes, teams, and organizations. Now over 1,000 teams trained in 43 states.' },
  { year: '2025–Present', title: 'Co-Founder — The Be Grundy Foundation', desc: 'Co-founded a nonprofit with Andrea Campbell-Brown focused on developing grit and resilience, with a special emphasis on supporting female athletes and expanding access to mental performance training.' },
]

const speakingTopics = [
  'The 10 Qualities of a Warrior',
  'The 5 Qualities of Being a Good Teammate',
  'Building a Pitbull Mentality on the Court or Field',
  'Mental Toughness and Resilience',
  'Leadership Under Pressure',
  'The Warrior Mindset',
  'Coaching the Anxious Generation',
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
        description="Former NCAA head coach and athletic director. 2008 NAIA National Coach of the Year. 1,000+ teams trained in 43 states. Tommy Brown helps people win the war in their minds."
        path="/about"
        image="https://one-heartbeat.vercel.app/headshot.webp"
      />
      <PageHero
        label="About Coach Tommy Brown"
        title={<>Built by the Game. <span className="text-orange">Tested by Life.</span></>}
        subtitle="NCAA head coach. Athletic director. 2008 NAIA National Coach of the Year. 20 years in the game, 1,000+ teams trained, and a story that gives the message its weight."
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
              Tommy Brown spent over 20 years in college basketball — building programs, winning games, and being fired. He was head coach at Bluefield College and Lee University, where he put together 13 straight 20-win seasons, won 6 Conference Coach of the Year awards, and was named the 2008 NAIA National Coach of the Year. He later served as a Division I assistant at the University of Illinois and Presbyterian College, and as an athletic director at multiple schools.
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
              { title: 'Team First', body: 'Every winning program starts with the team. You can have all the talent in the world, but if people are selfish, disconnected, or undisciplined, you will lose to teams that are tougher and more together than you.' },
              { title: 'The Mind Leads', body: 'Most teams don\'t lose because of talent. They lose because they get beaten mentally. Confidence, composure, mistake response, emotional regulation. Win the war in your mind first.' },
              { title: 'Grit and Empathy Together', body: 'Toughness without empathy is dangerous. Empathy without grit is soft. The best coaches, leaders, and teams know when to push and when to listen.' },
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
                { format: 'Corporate & Business Events', desc: 'Leadership training for corporate teams and organizations.' },
                { format: 'School Programs', desc: 'Programs for middle school, high school, and college students.' },
                { format: 'Church Groups', desc: 'Faith-based leadership and mental toughness presentations for congregations and youth groups.' },
              ].map(f => (
                <div key={f.format} className="speaking-format-item">
                  <h4>{f.format}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary mt-4">Book Tommy to Speak</Link>
            </div>
          </div>

          {/* INDIVIDUAL MINDSET TRAINING */}
          <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--gray-200)' }}>
            <div className="section-header fade-up">
              <span className="section-label">Virtual Coaching</span>
              <h3 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Small Group & Individual Mindset Training</h3>
              <div className="orange-bar" />
              <p className="section-subtitle">For athletes, leaders, and anyone who is tired of self-doubt running the show.</p>
            </div>
            <div className="split-section fade-up stagger-1" style={{ marginTop: '2rem' }}>
              <div className="split-card split-card-navy">
                <h3 className="split-card-title">1-on-1 Virtual Coaching</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  60-minute sessions via Zoom or phone. Deep, honest, real-world coaching with no filters. You'll leave every session with a clear, no-excuse action plan.
                </p>
                <ul className="split-card-list">
                  {['Stop overthinking and start competing', 'Rebuild grit after setbacks', 'Develop real, process-based confidence', 'Get clear on your next move'].map(i => (
                    <li key={i} className="split-card-item">{i}</li>
                  ))}
                </ul>
              </div>
              <div className="split-card split-card-orange">
                <h3 className="split-card-title">Small Group Mindset Circles</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Virtual sessions for 4–6 people, weekly or bi-weekly. A space for honest conversations, accountability, and building toughness together — without losing your humanity.
                </p>
                <ul className="split-card-list">
                  {['Athletes stuck in their head or playing scared', 'Teams struggling with mistakes or excuses', 'Leaders who need to toughen their mindset', 'Anyone tired of playing small'].map(i => (
                    <li key={i} className="split-card-item">{i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-4 fade-up stagger-2">
              <Link to="/contact" className="btn btn-primary btn-lg">Inquire About Virtual Coaching</Link>
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
