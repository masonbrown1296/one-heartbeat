import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Star } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './Books.css'

const books = [
  {
    asin: 'B0GWJ7XZYL',
    title: 'The New Recruiting Reality',
    subtitle: "An Insider's Guide for Navigating Today's College Basketball Recruiting Process",
    date: 'April 13, 2026',
    format: 'Paperback',
    isbn: '979-8253088852',
    rating: null,
    reviewCount: null,
    amazonUrl: 'https://www.amazon.com/dp/B0GWJ7XZYL',
    description: `College basketball recruiting has changed — dramatically. What worked five years ago no longer works today.

With the transfer portal, older players staying in college longer, and coaches under pressure to win immediately, the recruiting landscape has shifted in ways most families don't fully understand. And that misunderstanding is costing players opportunities.

In this honest, straightforward guide, longtime college coach Tommy Brown pulls back the curtain on what recruiting actually looks like today — from a coach's perspective. This book isn't built on hype, promises, or outdated advice. It's built on reality.`,
    bullets: [
      'Why high school players now compete against 21–23-year-old college athletes',
      'How the transfer portal has completely reshaped roster building',
      'What coaches are really looking for — and what they\'re not',
      'The biggest mistakes players and parents make in the recruiting process',
    ],
    tag: 'Just Released',
    tagColor: '#b45309',
  },
  {
    asin: 'B0DZP2H4NP',
    title: 'Grundy & Sadie',
    subtitle: 'Unleashing the Power of Grit and Empathy in Life and Leadership',
    date: 'March 6, 2025',
    format: 'Paperback',
    isbn: '979-8309574957',
    rating: 4.4,
    reviewCount: 11,
    amazonUrl: 'https://www.amazon.com/dp/B0DZP2H4NP',
    description: `Success in life and leadership isn't about blending toughness and kindness — it's about knowing when to flip the switch between them.

In Grundy and Sadie, coach and speaker Tommy Brown shares a powerful lesson on resilience and connection, inspired by his two very different dogs. Grundy, a rescue Pitbull, survived over a year in the woods, embodying pure grit. Sadie, a pampered Goldendoodle, has an uncanny ability to sense pain and provide comfort, showcasing the power of empathy. Together, they reveal a simple yet transformative truth: the best leaders, teammates, and people don't just rely on one strength — they know when to push forward with grit and when to lean in with empathy.`,
    bullets: [
      'Develop the resilience to overcome obstacles',
      'Cultivate empathy to build stronger relationships',
      'Recognize when to push and when to pause',
      'Lead with both heart and toughness',
    ],
    tag: 'Latest Release',
    tagColor: 'var(--orange-500)',
  },
  {
    asin: 'B0BYRHH2FN',
    title: 'The 10 Qualities of a Warrior',
    subtitle: 'A Mental Toughness Guide for Coaches and Athletes',
    date: 'March 19, 2023',
    format: 'Paperback',
    isbn: '979-8374833324',
    rating: 4.5,
    reviewCount: 5,
    amazonUrl: 'https://www.amazon.com/dp/B0BYRHH2FN',
    description: `The 10 Qualities of a Warrior is a must-read for anyone looking to cultivate a warrior mindset and improve their lives. Written with clarity and insight, this book explores the ten key qualities that warriors possess and how you can adopt them in your own life.

You'll learn how to stop complaining, feed the positive, understand petty vs. real problems, embrace personal responsibility, not resent others' success, accept coaching as feedback, master the boring, use body language to convey confidence, and get outside your comfort zone.`,
    bullets: [
      'Practical tools grounded in real coaching experience',
      'The same framework Tommy teaches in every Warrior Culture session',
      'Built for coaches, athletes, leaders, and anyone pursuing growth',
      'Direct, honest, and built to be applied immediately',
    ],
    tag: 'The Foundation',
    tagColor: 'var(--navy-700)',
  },
]

function StarRating({ rating, count }) {
  const full = Math.floor(rating)
  const partial = rating % 1
  return (
    <div className="book-rating">
      <div className="book-stars">
        {[1, 2, 3, 4, 5].map(n => (
          <span key={n} className="book-star-wrap">
            <Star
              size={16}
              fill={n <= full ? 'var(--orange-500)' : n === full + 1 && partial >= 0.5 ? 'var(--orange-500)' : 'none'}
              stroke="var(--orange-500)"
              strokeWidth={1.5}
            />
          </span>
        ))}
      </div>
      <span className="book-rating-value">{rating}</span>
      <span className="book-rating-count">({count} ratings on Amazon)</span>
    </div>
  )
}

function BookCover({ book }) {
  const [imgError, setImgError] = useState(false)
  const src = `https://images-na.ssl-images-amazon.com/images/P/${book.asin}.01.LZZZZZZZ.jpg`

  return (
    <div className="book-cover-wrap">
      {!imgError ? (
        <img
          src={src}
          alt={`${book.title} book cover`}
          className="book-cover-img"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="book-cover-fallback">
          <div className="book-cover-spine" />
          <div className="book-cover-content">
            <p className="book-cover-fb-title">{book.title}</p>
            <p className="book-cover-fb-sub">{book.subtitle}</p>
            <p className="book-cover-fb-author">Tommy Brown</p>
          </div>
        </div>
      )}
      <div className="book-cover-shadow" />
    </div>
  )
}

export default function Books() {
  const book1Ref = useScrollAnimation()
  const book2Ref = useScrollAnimation()
  const book3Ref = useScrollAnimation()

  return (
    <div>
      <SEO
        title="Books by Tommy Brown"
        description="Books by coach and speaker Tommy Brown — The New Recruiting Reality, Grundy &amp; Sadie, and The 10 Qualities of a Warrior. Mental toughness, grit, leadership, and recruiting."
        path="/books"
      />
      <PageHero
        label="From the Locker Room to the Page"
        title={<>Books by <span className="text-orange">Tommy Brown</span></>}
        subtitle="The same principles Tommy teaches in every session — on the page, in your hands, ready to use."
      />

      {books.map((book, idx) => (
        <section
          key={book.asin}
          className={`section ${idx % 2 === 0 ? 'section-white' : 'section-light'}`}
          ref={idx === 0 ? book1Ref : idx === 1 ? book2Ref : book3Ref}
        >
          <div className="container">
            <div className={`book-layout fade-up${idx % 2 !== 0 ? ' book-layout--reverse' : ''}`}>
              <div className="book-image-col fade-in stagger-1">
                <BookCover book={book} />
              </div>
              <div className="book-text-col fade-up stagger-2">
                <div className="book-meta-top">
                  <span className="book-tag" style={{ background: `${book.tagColor}18`, color: book.tagColor }}>
                    {book.tag}
                  </span>
                  <span className="book-format">{book.format} · {book.date}</span>
                </div>
                <h2 className="book-title">{book.title}</h2>
                <p className="book-subtitle">{book.subtitle}</p>
                {book.rating && <StarRating rating={book.rating} count={book.reviewCount} />}
                <div className="orange-bar" style={{ margin: '1.25rem 0' }} />
                {book.description.split('\n\n').map((para, i) => (
                  <p key={i} className="inner-body" style={{ marginBottom: '0.875rem' }}>{para}</p>
                ))}
                <ul className="book-bullets">
                  {book.bullets.map(b => (
                    <li key={b} className="book-bullet-item">
                      <span className="outcome-check">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="book-actions">
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Buy on Amazon
                  </a>
                  <span className="book-isbn">ISBN {book.isbn}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        label="Bring the Message Live"
        title="Host a Warrior Culture Session"
        subtitle="The books are the framework. Tommy in the room is the experience. Get a quote for a session with your team."
        primaryCta="Get a Quote"
        secondaryCta="About Tommy"
        secondaryCtaLink="/about"
      />
    </div>
  )
}
