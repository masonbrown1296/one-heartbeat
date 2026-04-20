import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import PageHero from '../components/PageHero'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './Contact.css'

const EMAILJS_SERVICE_ID = 'service_xz59269'
const EMAILJS_TEMPLATE_ID = 'template_ctei6tj'
const EMAILJS_PUBLIC_KEY = '995WCwa1J0sT1-AjY'

const inquiryTypes = [
  'Warrior Culture Team Session',
  'Athletic Department Clinic',
  'Individual Camp',
  'Mindset Training / Coaching',
  'Speaking Engagement',
  'Business / Organization Session',
  'Be Grundy Foundation',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', organization: '', inquiry: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [showCallPopup, setShowCallPopup] = useState(false)
  const formRef = useScrollAnimation()

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(false)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '—',
          organization: formData.organization || '—',
          inquiry: formData.inquiry,
          message: formData.message || '—',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <SEO
        title="Contact"
        description="Get a quote on a Warrior Culture session. Contact Coach Tommy Brown to book a session, schedule a call, or learn more about pricing."
        path="/contact"
      />
      <PageHero
        label="Get In Touch"
        title={<>Let's Get Your Team <span className="text-orange">in the Room</span></>}
        subtitle="Most people want to know: how much does a session cost and how long does it last? The easiest way to find out is to get on a quick call with Tommy."
      />

      {/* QUICK CONTACT BANNER */}
      <section className="section-deepnavy" style={{ padding: '2.5rem var(--section-x)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '0.5rem' }}>Fastest way to get a quote:</p>
            <p style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <MessageSquare size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8, color: 'var(--orange-500)' }} />
              Text or call Tommy directly
            </p>
          </div>
          <button
            onClick={() => setShowCallPopup(true)}
            className="btn btn-primary btn-lg"
            style={{ whiteSpace: 'nowrap' }}
          >
            Schedule a Call
          </button>
        </div>
      </section>

      {/* CALL POPUP */}
      {showCallPopup && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)', padding: '1rem' }} onClick={() => setShowCallPopup(false)}>
          <div style={{ background: '#fff', borderRadius: '1rem', padding: '2.5rem', maxWidth: 420, width: '100%', textAlign: 'center', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowCallPopup(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--gray-400)' }} aria-label="Close">&times;</button>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy-800)', marginBottom: '0.75rem' }}>Talk to Tommy</h3>
            <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              The fastest way to get a quote on a Warrior Culture session. Call or text Tommy directly and he'll walk you through pricing, timing, and what to expect.
            </p>
            <a href="tel:+14232844614" className="btn btn-primary btn-lg" style={{ display: 'block', marginBottom: '0.75rem' }}>
              <Phone size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
              Call Tommy
            </a>
            <a href="sms:+14232844614" className="btn btn-outline-orange btn-lg" style={{ display: 'block' }}>
              <MessageSquare size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
              Text Tommy
            </a>
            <p style={{ color: 'var(--gray-400)', fontSize: '0.8rem', marginTop: '1rem' }}>Or fill out the form below if you prefer email.</p>
          </div>
        </div>
      )}

      <section className="section section-white" ref={formRef}>
        <div className="container contact-layout">
          {/* FORM */}
          <div className="fade-up">
            <h2 className="contact-form-heading">Request a Quote</h2>
            <p className="contact-form-sub">Tell us about your team or organization. Tommy will personally follow up within 24-48 hours.</p>

            {submitted ? (
              <div className="success-message mt-4">
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. Tommy will be in touch within 24-48 hours. If you need a faster response, call or text him directly.</p>
              </div>
            ) : (
              <form className="contact-form mt-4" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name *</label>
                    <input id="name" name="name" type="text" className="form-input" placeholder="Full name" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="your@email.com" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" className="form-input" placeholder="(555) 555-5555" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="organization">Team / Organization</label>
                    <input id="organization" name="organization" type="text" className="form-input" placeholder="School, team, business, etc." value={formData.organization} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry">What are you interested in? *</label>
                  <select id="inquiry" name="inquiry" className="form-select" required value={formData.inquiry} onChange={handleChange}>
                    <option value="">Select one</option>
                    {inquiryTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Anything else we should know?</label>
                  <textarea id="message" name="message" className="form-textarea" placeholder="Number of teams, timing, questions about pricing, etc." value={formData.message} onChange={handleChange} style={{ minHeight: 100 }} />
                </div>

                {submitError && (
                  <p style={{ color: '#c0392b', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    Something went wrong. Please try again or text Tommy directly at 423-284-4614.
                  </p>
                )}
                <button type="submit" className="btn btn-primary btn-lg form-submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="fade-up stagger-2">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={22} /></div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">
                      <a href="mailto:tbrown@oneheartbeatwarriors.com">tbrown@oneheartbeatwarriors.com</a>
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={22} /></div>
                  <div>
                    <div className="contact-info-label">Call or Text</div>
                    <div className="contact-info-value">
                      <a href="tel:+14232844614">423-284-4614</a>
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={22} /></div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">Tommy comes to you. Serving all 50 states.</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={22} /></div>
                  <div>
                    <div className="contact-info-label">Response Time</div>
                    <div className="contact-info-value">Within 24-48 hours</div>
                  </div>
                </div>
              </div>

              <div className="contact-divider" />

              <h4 className="contact-services-heading">Available Programs</h4>
              <ul className="contact-services-list">
                {['Warrior Culture Team Sessions', 'Athletic Department Clinics', 'Individual Athlete Camps', 'Mindset Training & Coaching', 'Keynote Speaking', 'Business & Organization Sessions'].map(s => (
                  <li key={s} className="contact-service-item">
                    <span className="credential-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
