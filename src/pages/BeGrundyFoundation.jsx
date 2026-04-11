import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { HeartHandshake, Handshake, Megaphone, Shirt } from 'lucide-react'
import PageHero from '../components/PageHero'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './BeGrundyFoundation.css'

const teamMembers = [
  { name: 'Tommy Brown', role: 'Co-Founder', bio: 'Former college head coach and founder of One Heartbeat Warriors. Tommy created the Be Grundy Foundation in honor of a mentor whose belief in him changed the trajectory of his life.' },
  { name: 'Andrea Campbell-Brown', role: 'Co-Founder', bio: 'Co-founded the Be Grundy Foundation with Tommy. Oversees foundation strategy, partnerships, and community development initiatives.' },
  { name: 'Coach D. Williams', role: 'Youth Development Lead', bio: 'Former college athlete turned educator with over 15 years of mentorship experience. Leads youth programming and on-the-ground impact.' },
]

const waysToSupport = [
  { icon: <HeartHandshake size={28} />, title: 'Make a Donation', desc: 'Every dollar goes directly toward programming, scholarships, and resources for youth who need it most. No donation is too small.' },
  { icon: <Handshake size={28} />, title: 'Become a Partner', desc: 'Align your organization with a mission that changes lives. Corporate partnerships, sponsorships, and cause-marketing opportunities available.' },
  { icon: <Megaphone size={28} />, title: 'Spread the Word', desc: 'Share our mission with your network. Follow us on social media and help us reach more young people who need the Warrior mindset.' },
  { icon: <Shirt size={28} />, title: 'Volunteer', desc: 'Join our team of dedicated volunteers and bring your skills, passion, and time to directly impact youth in your community.' },
]

export default function BeGrundyFoundation() {
  const missionRef = useScrollAnimation()
  const storyRef = useScrollAnimation()
  const teamRef = useScrollAnimation()
  const supportRef = useScrollAnimation()

  return (
    <div>
      <SEO
        title="Be Grundy Foundation"
        description="Empowering underserved youth through mental toughness training, mentorship, and life skills — giving every young person the tools and belief to write their own story."
        path="/be-grundy-foundation"
      />
      <PageHero
        label="Community Impact"
        title={<>Be Grundy <span className="text-orange">Foundation</span></>}
        subtitle="Empowering underserved youth through mental toughness training, mentorship, and life skills — giving every young person the tools and belief to write their own story."
        cta="Support the Foundation"
        ctaLink="/contact"
        secondaryCta="Learn Our Story"
      />

      {/* STORY */}
      <section className="section section-white" ref={storyRef}>
        <div className="container">
          <div className="grundy-story fade-up">
            <div className="grundy-story-image">
              <img src="/grundy.jpg" alt="Grundy the dog" className="grundy-img" loading="lazy" style={{ borderRadius: '1rem', width: '100%', objectFit: 'cover' }} />
            </div>
            <div className="grundy-story-text">
              <img src="/begrundy-logo-blue.svg" alt="Be Grundy Foundation" style={{ height: 90, width: 'auto', display: 'block', marginBottom: '1.25rem' }} />
              <span className="section-label">Our Story</span>
              <h2 className="section-title">A Name That Means Everything.</h2>
              <div className="orange-bar" />
              <p className="inner-body">
                The Be Grundy Foundation is named after Grundy, Tommy's rescue pitbull who survived over a year alone in the Tennessee woods. Grundy's story of grit and resilience became the foundation's symbol. But the name also honors every mentor, coach, and person who believed in a young person when nobody else did.
              </p>
              <p className="inner-body mt-3">
                Tommy and his wife Andrea Campbell-Brown co-founded the foundation because they believe that kind of belief should be available to every kid, not just the lucky ones. Regardless of zip code, background, or circumstance. One person believing in you can change everything.
              </p>
              <p className="inner-body mt-3">
                Through sports-based mentorship, life skills workshops, academic support, and scholarships, the Be Grundy Foundation puts the tools of growth in the hands of young people who need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section section-dark" ref={missionRef}>
        <div className="container mission-statement-block">
          <div className="mission-statement-content fade-in">
            <span className="section-label">Our Mission</span>
            <h2 className="section-title section-title-light">Be the Grundy for Someone Else.</h2>
            <div className="orange-bar" />
            <p className="section-subtitle section-subtitle-light">
              We exist to provide underserved youth with the mentorship, resources, and development opportunities needed to discover their potential, build their character, and create a life they are proud of — on the field and beyond.
            </p>
          </div>
        </div>
      </section>


      {/* TEAM */}
      <section className="section section-white" ref={teamRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">The People Behind the Mission</h2>
            <div className="orange-bar orange-bar-center" />
          </div>
          <div className="team-grid">
            {teamMembers.map((m, i) => (
              <div key={m.name} className={`team-card fade-up stagger-${i + 1}`}>
                <div className="team-avatar" style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--orange-500, #f97316)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.5rem', margin: '0 auto' }}>
                  {m.name.charAt(0)}
                </div>
                <h3 className="team-name">{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p className="team-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO SUPPORT */}
      <section className="section section-navy" ref={supportRef}>
        <div className="container">
          <div className="section-header section-header-center fade-up">
            <span className="section-label">Join Us</span>
            <h2 className="section-title section-title-light">Ways to Support</h2>
            <div className="orange-bar orange-bar-center" />
            <p className="section-subtitle section-subtitle-light">
              Every form of support matters. Find the way that works for you and help us change more lives.
            </p>
          </div>
          <div className="support-grid">
            {waysToSupport.map((s, i) => (
              <div key={s.title} className={`support-card fade-up stagger-${(i % 2) + 1}`}>
                <div className="support-icon">{s.icon}</div>
                <h3 className="support-title">{s.title}</h3>
                <p className="support-desc">{s.desc}</p>
                <Link to="/contact" className="btn btn-outline-orange btn-sm mt-3">Get Involved</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-orange">
        <div className="container text-center">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Make an Impact Today</span>
          <h2 className="final-cta-title display-headline">Be Someone's Grundy</h2>
          <p className="final-cta-subtitle">
            Your support — whether it's a donation, a partnership, or your time — directly changes the life trajectory of a young person who needs it.
          </p>
          <div className="final-cta-actions">
            <Link to="/contact" className="btn btn-white btn-lg">Donate or Partner</Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">Volunteer</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
