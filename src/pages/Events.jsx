import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Calendar, MapPin, Tag } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABanner from '../components/CTABanner'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './Events.css'

// ─────────────────────────────────────────────────────────────
// ADD EVENTS HERE
// Each event needs:
//   title       — name of the event
//   date        — display string, e.g. 'June 14, 2025'
//   dateISO     — machine-readable, e.g. '2025-06-14' (used for sorting)
//   location    — city/state or 'Virtual'
//   type        — 'Warrior Culture Session' | 'Athletic Dept Clinic' |
//                 'Wellness Clinic' | 'Keynote' | 'Camp' | 'Other'
//   description — one or two sentences about the event
//   link        — URL for tickets/info, or null if none
//   linkLabel   — button text if link is set, e.g. 'Register' or 'Learn More'
// ─────────────────────────────────────────────────────────────
const events = [
  // Example (delete or replace):
  // {
  //   title: 'Warrior Culture Team Session — Riverside High School',
  //   date: 'June 14, 2025',
  //   dateISO: '2025-06-14',
  //   location: 'Chattanooga, TN',
  //   type: 'Warrior Culture Session',
  //   description: 'A full Warrior Culture session for the Riverside boys basketball program covering mental toughness, the 10 Qualities of a Warrior, and confidence training.',
  //   link: null,
  //   linkLabel: 'Learn More',
  // },
]

const typeColors = {
  'Warrior Culture Session': 'var(--orange-500)',
  'Athletic Dept Clinic': 'var(--navy-700)',
  'Wellness Clinic': '#2e7d5e',
  'Keynote': '#7c3aed',
  'Camp': '#b45309',
  'Other': 'var(--gray-500)',
}

export default function Events() {
  const eventsRef = useScrollAnimation()

  const upcoming = events
    .filter(e => new Date(e.dateISO) >= new Date(new Date().toDateString()))
    .sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO))

  const past = events
    .filter(e => new Date(e.dateISO) < new Date(new Date().toDateString()))
    .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO))

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
          {upcoming.length === 0 && past.length === 0 ? (
            <div className="events-empty fade-up">
              <div className="events-empty-icon">
                <Calendar size={48} />
              </div>
              <h2 className="events-empty-title">Events Coming Soon</h2>
              <p className="events-empty-body">
                Tommy's schedule fills up fast. Check back here for upcoming sessions, clinics, and speaking dates — or get on the list and we'll reach out when something's in your area.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg mt-4">Get on the List</Link>
            </div>
          ) : (
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
  return (
    <div className={`event-card fade-up stagger-${(index % 3) + 1}${past ? ' event-card--past' : ''}`}>
      <div className="event-card-date-col">
        <div className="event-date-block" style={{ borderColor: past ? 'var(--gray-300)' : color }}>
          <span className="event-date-month" style={{ color: past ? 'var(--gray-400)' : color }}>
            {new Date(event.dateISO + 'T12:00:00').toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
          </span>
          <span className="event-date-day" style={{ color: past ? 'var(--gray-400)' : 'var(--navy-900)' }}>
            {new Date(event.dateISO + 'T12:00:00').getDate()}
          </span>
          <span className="event-date-year" style={{ color: 'var(--gray-400)' }}>
            {new Date(event.dateISO + 'T12:00:00').getFullYear()}
          </span>
        </div>
      </div>

      <div className="event-card-body">
        <div className="event-type-badge" style={{ background: past ? 'var(--gray-100)' : `${color}18`, color: past ? 'var(--gray-400)' : color }}>
          <Tag size={11} />
          {event.type}
        </div>
        <h3 className="event-title" style={{ color: past ? 'var(--gray-500)' : 'var(--navy-800)' }}>{event.title}</h3>
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
