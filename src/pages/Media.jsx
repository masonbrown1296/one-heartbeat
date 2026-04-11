import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './Media.css'

// ─────────────────────────────────────────────────────────────
// YOUTUBE CHANNEL ID
// To activate the YouTube video feed, replace the empty string
// below with your channel ID (format: UCxxxxxxxxxxxxxxxxxx).
// Find it in YouTube Studio → Settings → Channel → Advanced settings.
// ─────────────────────────────────────────────────────────────
const YOUTUBE_CHANNEL_ID = ''
const YOUTUBE_HANDLE = '@Oneheartbeatwarriors'

const SPOTIFY_SHOW_ID = '7xD2nQ7LFirN0Qj8J3TQah'

export default function Media() {
  const podcastRef = useScrollAnimation()
  const videoRef = useScrollAnimation()
  const galleryRef = useScrollAnimation()

  return (
    <div>
      <SEO
        title="Media"
        description="Podcast episodes, videos, interviews, and behind-the-scenes footage from the One Heartbeat Warriors movement."
        path="/media"
      />
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
              Real conversations on mental toughness, leadership, and what it takes to
              build a Warrior mindset — on the field and beyond.
            </p>
          </div>
          <div className="spotify-embed-wrap fade-up stagger-1">
            <iframe
              src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="One Heartbeat Warriors Podcast on Spotify"
            />
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEOS */}
      <section className="section section-light" ref={videoRef}>
        <div className="container">
          <div className="section-header fade-up">
            <span className="section-label">Video Content</span>
            <h2 className="section-title">Watch & Learn</h2>
            <div className="orange-bar" />
          </div>
          <YoutubeSection />
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
            {[
              '/priority-images/IMG_1952.jpg',
              '/ohb-images/IMG_2617.jpg',
              '/ohb-images/IMG_3013.jpg',
              '/ohb-images/IMG_2894.jpg',
              '/ohb-images/IMG_1631.jpg',
              '/ohb-images/IMG_2581.jpg',
              '/ohb-images/IMG_2930.jpg',
              '/ohb-images/IMG_3084.jpg',
              '/ohb-images/IMG_2740.jpg',
            ].map((src, i) => (
              <div
                key={i}
                className={`gallery-item ${i === 0 ? 'gallery-featured' : ''}`}
                style={{ overflow: 'hidden', borderRadius: '0.75rem' }}
              >
                <img
                  src={src}
                  alt={`One Heartbeat Warriors gallery photo ${i + 1}`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div className="gallery-overlay"><span>View</span></div>
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

// ── YouTube RSS via allorigins CORS proxy ──────────────────────
function YoutubeSection() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!YOUTUBE_CHANNEL_ID) { setLoading(false); return }

    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`

    fetch(proxyUrl)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(data => {
        const parser = new DOMParser()
        const xml = parser.parseFromString(data.contents, 'text/xml')
        const entries = Array.from(xml.querySelectorAll('entry')).slice(0, 6)
        const parsed = entries.map(entry => {
          const videoId = entry.querySelector('videoId')?.textContent
          const title = entry.querySelector('title')?.textContent || ''
          const published = entry.querySelector('published')?.textContent || ''
          const link = entry.querySelector('link')?.getAttribute('href') || `https://youtu.be/${videoId}`
          const thumb = entry.querySelector('thumbnail')?.getAttribute('url')
            || (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null)
          const description = entry.querySelector('description')?.textContent || ''
          return { videoId, title, published, link, thumb, description }
        })
        setVideos(parsed)
        setLoading(false)
      })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  // No channel ID configured yet — show subscribe prompt
  if (!YOUTUBE_CHANNEL_ID) {
    return (
      <div className="yt-stub fade-up stagger-1">
        <div className="yt-stub-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </div>
        <h3 className="yt-stub-title">Watch on YouTube</h3>
        <p className="yt-stub-body">
          Training sessions, keynotes, behind-the-scenes footage, and more from
          Coach Tommy Brown and One Heartbeat Warriors.
        </p>
        <a
          href={`https://www.youtube.com/${YOUTUBE_HANDLE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-md"
        >
          Subscribe on YouTube
        </a>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="yt-stub fade-up stagger-1">
        <p style={{ color: 'var(--gray-500)' }}>Loading videos…</p>
      </div>
    )
  }

  if (error || videos.length === 0) {
    return (
      <div className="yt-stub fade-up stagger-1">
        <h3 className="yt-stub-title">Watch on YouTube</h3>
        <a
          href={`https://www.youtube.com/${YOUTUBE_HANDLE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-md"
        >
          Visit Our Channel
        </a>
      </div>
    )
  }

  return (
    <div className="video-grid fade-up stagger-2">
      {videos.map(v => (
        <a
          key={v.videoId}
          href={v.link}
          target="_blank"
          rel="noopener noreferrer"
          className="video-card"
          style={{ textDecoration: 'none' }}
        >
          <div className="video-thumb" style={{ background: 'var(--navy-900)', position: 'relative' }}>
            {v.thumb && (
              <img
                src={v.thumb}
                alt={v.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            )}
            <div className="play-btn" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          <div className="video-info">
            <h3 className="video-title">{v.title}</h3>
            {v.published && (
              <p className="video-desc" style={{ fontSize: '0.8rem', color: 'var(--gray-400)', margin: 0 }}>
                {new Date(v.published).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            )}
          </div>
        </a>
      ))}
    </div>
  )
}
