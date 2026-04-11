import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Calendar, MapPin, Tag, Loader2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './Events.css'

// ─────────────────────────────────────────────────────────────
// GOOGLE SHEETS CSV INTEGRATION
// Tommy manages events in this Google Sheet (no login needed).
//
// Required column headers (exact, case-insensitive):
//   title       — event name
//   date        — display string, e.g. "June 14, 2025"
//   dateISO     — YYYY-MM-DD, e.g. "2025-06-14" (sorting/filtering)
//   location    — city/state or "Virtual"
//   type        — Warrior Culture Session | Athletic Dept Clinic |
//                 Wellness Clinic | Keynote | Camp | Other
//   description — 1–2 sentences about the event
//   link        — full URL for tickets/info (leave blank if none)
//   linkLabel   — button text, e.g. "Register" (default: "Learn More")
// ─────────────────────────────────────────────────────────────
const SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRa6p7j55yMwdCGes8zTQKco1f692Gmzvtve6gizaJJ4yEcsrWcE2fCu5N_V6Yb1y7CE5X2EJPHTRii/pub?output=csv'

const typeColors = {
  'Warrior Culture Session': 'var(--orange-500)',
  'Athletic Dept Clinic': 'var(--navy-700)',
  'Wellness Clinic': '#2e7d5e',
  'Keynote': '#7c3aed',
  'Camp': '#b45309',
  'Other': 'var(--gray-500)',
}

// ── Robust CSV parser (handles quoted fields with commas) ──────
function parseCSV(text) {
  const lines = text.trim().split('\n')
  if (lines.length < 2) return []

  const headers = parseLine(lines[0]).map(h => h.toLowerCase().replace(/\s+/g, ''))

  return lines.slice(1).map(line => {
    const values = parseLine(line)
    const row = {}
    headers.forEach((h, i) => { row[h] = (values[i] || '').trim() })
    return row
  }).filter(r => r.title && r.dateiso)
}

function parseLine(line) {
  const values = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') { inQuotes = !inQuotes; continue }
    if (ch === ',' && !inQuotes) { values.push(current); current = ''; continue }
    current += ch
  }
  values.push(current)
  return values.map(v => v.trim())
}

export default function Events() {
  const eventsRef = useScrollAnimation()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(SHEET_CSV_URL)}`
    fetch(proxyUrl)
      .then(r => { if (!r.ok) throw new Error('Failed to load'); return r.json() })
      .then(data => {
        const rows = parseCSV(data.contents)
        setEvents(rows.map(r => ({
          title: r.title,
          date: r.date,
          dateISO: r.dateiso,
          location: r.location || '',
          type: r.type || 'Other',
          description: r.description || '',
          link: r.link || null,
          linkLabel: r.linklabel || 'Learn More',
        })))
        setLoading(false)
      })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  const today = new Date(new Date().toDateString())
  const upcoming = events
    .filter(e => new Date(e.dateISO) >= today)
    .sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO))
  const past = events
    .filter(e => new Date(e.dateISO) < today)
    .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO))

  const isEmpty = !loading && !error && upcoming.length === 0 && past.length === 0

  return (
    <div>
      <SEO
        title="Upcoming Events"
        description="See where Tommy Brown is speaking, training, and running Warrior Culture sessions. Wellness clinics, team sessions, keynotes, and more."
        path="/events"
      />
      <PageHero
        label="Where Tommy's Headed"
        title={<>Upcoming <span className="text-orange">Events</span></>}
        subtitle="Team sessions, wellness clinics, keynotes, and more. Tommy comes to you — but here's where he'll be."
      />

      <section className="section section-white" ref={eventsRef}>
        <div className="container">

          {/* Loading */}
          {loading && (
            <div className="events-empty fade-up">
              <div className="events-empty-icon">
                <Loader2 size={40} className="events-spinner" />
              </div>
              <p className="events-empty-body">Loading events…</p>
            </div>
          )}

          {/* Error or empty */}
          {(error || isEmpty) && (
            <div className="events-empty fade-up">
              <div className="events-empty-icon">
                <Calendar size={48} />
              </div>
              <h2 className="events-empty-title">Events Coming Soon</h2>
              <p className="events-empty-body">
                Tommy's schedule fills up fast. Check back here for upcoming sessions,
                clinics, and speaking dates — or get on the list and we'll reach out
                when something's in your area.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg mt-4">Get on the List</Link>
            </div>
          )}

          {/* Events */}
          {!loading && !error && (upcoming.length > 0 || past.length > 0) && (
            <>
              {upcoming.length > 0 && (
                <>
                  <div className="section-header fade-up">
                    <span className="section-label">On the Calendar</span>
                    <h2 className="section-title">Upcoming Events</h2>
                    <div className="orange-bar" />
                  </div>
                  <div className="events-list">
                    {upcoming.map((event, i) => (
                      <EventCard key={event.dateISO + event.title} event={event} index={i} />
                    ))}
                  </div>
                </>
              )}

              {past.length > 0 && (
                <div style={{ marginTop: '4rem' }}>
                  <div className="section-header fade-up">
                    <span className="section-label">Past Events</span>
                    <h2 className="section-title" style={{ color: 'var(--gray-400)' }}>Previous Sessions</h2>
                    <div className="orange-bar" />
                  </div>
                  <div className="events-list events-list--past">
                    {past.map((event, i) => (
                      <EventCard key={event.dateISO + event.title} event={event} index={i} past />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      <CTABanner
        label="Want Tommy at Your Event?"
        title="Book a Session or Clinic"
        subtitle="Tommy comes to you. Reach out today to get a quote and lock in a date."
        primaryCta="Get a Quote"
        secondaryCta="Learn About Warrior Culture"
        secondaryCtaLink="/warrior-culture"
      />
    </div>
  )
}

function EventCard({ event, index, past = false }) {
  const color = typeColors[event.type] || typeColors['Other']
  const dateObj = new Date(event.dateISO + 'T12:00:00')

  return (
    <div className={`event-card fade-up stagger-${(index % 3) + 1}${past ? ' event-card--past' : ''}`}>
      <div className="event-card-date-col">
        <div className="event-date-block" style={{ borderColor: past ? 'var(--gray-300)' : color }}>
          <span className="event-date-month" style={{ color: past ? 'var(--gray-400)' : color }}>
            {dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
          </span>
          <span className="event-date-day" style={{ color: past ? 'var(--gray-400)' : 'var(--navy-900)' }}>
            {dateObj.getDate()}
          </span>
          <span className="event-date-year" style={{ color: 'var(--gray-400)' }}>
            {dateObj.getFullYear()}
          </span>
        </div>
      </div>

      <div className="event-card-body">
        <div
          className="event-type-badge"
          style={{
            background: past ? 'var(--gray-100)' : `${color}18`,
            color: past ? 'var(--gray-400)' : color,
          }}
        >
          <Tag size={11} />
          {event.type}
        </div>
        <h3 className="event-title" style={{ color: past ? 'var(--gray-500)' : 'var(--navy-800)' }}>
          {event.title}
        </h3>
        <div className="event-meta">
          <span className="event-location">
            <MapPin size={14} />
            {event.location}
          </span>
        </div>
        {event.description && <p className="event-desc">{event.description}</p>}
      </div>

      {event.link && !past && (
        <div className="event-card-cta">
          <a href={event.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-orange btn-sm">
            {event.linkLabel || 'Learn More'}
          </a>
        </div>
      )}
    </div>
  )
}
