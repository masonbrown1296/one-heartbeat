import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import './InnerPage.css'
import './Media.css'

const episodes = [
  { ep: 'EP. 48', title: 'Building a Championship Culture From Scratch', guest: 'Coach Tommy Brown', duration: '52 min', date: 'Jan 2025' },
  { ep: 'EP. 47', title: 'Mental Toughness is Not What You Think It Is', guest: 'Dr. James Carter', duration: '44 min', date: 'Dec 2024' },
  { ep: 'EP. 46', title: 'The Leadership Habits That Separate Elite Teams', guest: 'Coach Williams', duration: '58 min', date: 'Dec 2024' },
  { ep: 'EP. 45', title: 'Coaching Through Adversity — When the Season Falls Apart', guest: 'Coach Tommy Brown', duration: '41 min', date: 'Nov 2024' },
  { ep: 'EP. 44', title: 'How to Build Confidence That Actually Holds Up', guest: 'Dr. Sarah Miles', duration: '47 min', date: 'Nov 2024' },
  { ep: 'EP. 43', title: 'What Great Captains Do Differently', guest: 'Marcus T.', duration: '39 min', date: 'Oct 2024' },
]

const videos = [
  { title: 'Warrior Culture Full Keynote', desc: 'Coach Tommy delivers the full Warrior Culture keynote at the National Coaches Summit.', duration: '45:22', type: 'Keynote' },
  { title: 'Mental Toughness Training Session', desc: 'Behind the scenes of a live team mental performance training session.', duration: '18:07', type: 'Training' },
  { title: 'Be Grundy Foundation Launch', desc: 'The emotional story behind the foundation and what it means to Tommy.', duration: '8:45', type: 'Foundation' },
  { title: 'Interview: Building Champions', desc: 'Coach Tommy sits down with ESPN Radio to discuss what it takes to build a champion.', duration: '22:30', type: 'Interview' },
]

export default function Media() {
  const podcastRef = useScrollAnimation()
  const videoRef = useScrollAnimation()
  const galleryRef = useScrollAnimation()

  return (
    <div>
      <PageHero
        label="Media & Content"
        title={<>One Heartbeat <span className="text-orange">Media</span></>}
        subtitle="Podcast episodes, videos, interviews, and behind-the-scenes footage from the Warrior Culture movement."
      />

      {/* PODCAST */}
      <section className="section section-white" ref={podcastRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">The Podcast</span>
            <h2 className="section-title">One Heartbeat Warriors Podcast</h2>
            <div className="orange-bar" />
            <p className="section-subtitle">
              Real conversations with elite coaches, athletes, and performance experts on mental toughness, leadership, and what it takes to be a Warrior.
            </p>
          </div>
          <div className="podcast-player-featured fade-up stagger-1">
            <div className="podcast-featured-thumb placeholder-img">
              <span>Podcast Cover Art</span>
            </div>
            <div className="podcast-featured-info">
              <span className="section-label">Latest Episode</span>
              <h3 className="podcast-featured-title">Building a Championship Culture From Scratch</h3>
              <p className="podcast-featured-desc">
                Coach Tommy goes deep on the exact process he uses to build Warrior Culture in new programs — from day one culture assessments to full program transformation.
              </p>
              <div className="podcast-platforms">
                <span className="podcast-platform-label">Listen on:</span>
                <div className="podcast-platform-links">
                  {['Spotify', 'Apple Podcasts', 'YouTube'].map(p => (
                    <a key={p} href="#" className="podcast-platform-btn">{p}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h3 className="episodes-heading fade-up mt-6">Recent Episodes</h3>
          <div className="podcast-grid">
            {episodes.map((e, i) => (
              <div key={e.ep} className={`podcast-card fade-up stagger-${(i % 2) + 1}`}>
                <div className="podcast-thumb placeholder-img">
                  <span>#</span>
                </div>
                <div>
                  <div className="podcast-ep">{e.ep}</div>
                  <div className="podcast-title">{e.title}</div>
                  <div className="podcast-meta">{e.guest} · {e.duration} · {e.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="section section-light" ref={videoRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">Video Content</span>
            <h2 className="section-title">Watch & Learn</h2>
            <div className="orange-bar" />
          </div>
          <div className="video-grid fade-up stagger-2">
            {videos.map(v => (
              <div key={v.title} className="video-card">
                <div className="video-thumb placeholder-img">
                  <button className="play-btn" aria-label={`Play ${v.title}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                  <div className="video-duration">{v.duration}</div>
                  <div className="video-type-tag">{v.type}</div>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{v.title}</h3>
                  <p className="video-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section section-dark" ref={galleryRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">Photo Gallery</span>
            <h2 className="section-title section-title-light">Warrior Culture in Action</h2>
            <div className="orange-bar" />
          </div>
          <div className="gallery-grid fade-up stagger-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`gallery-item placeholder-img ${i === 0 ? 'gallery-featured' : ''}`}>
                <span>Photo {i + 1}</span>
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        label="Interested in Media?"
        title="Book Tommy for Your Next Event or Feature"
        subtitle="For speaking bookings, podcast guest appearances, interviews, or media inquiries, contact us today."
        primaryCta="Media Inquiry"
        secondaryCta="Book Tommy"
        secondaryCtaLink="/contact"
      />
    </div>
  )
}
