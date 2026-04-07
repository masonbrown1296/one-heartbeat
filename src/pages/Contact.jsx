import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import SEO from '../components/shared/SEO'
import './InnerPage.css'
import './Contact.css'

const inquiryTypes = [
  'Warrior Culture Team Session',
  'Individual Camp Registration',
  'Mindset Training / Coaching',
  'Speaking Engagement',
  'Be Grundy Foundation',
  'Media / Press Inquiry',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', organization: '', inquiry: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const formRef = useScrollAnimation()

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here (e.g., API call, Netlify Forms, etc.)
    setSubmitted(true)
  }

  return (
    <div>
      <SEO
        title="Contact"
        description="Ready to bring Warrior Culture to your program? Contact Coach Tommy Brown to book a session, schedule a keynote, or learn more."
        path="/contact"
      />
      <PageHero
        label="Get In Touch"
        title={<>Let's Build Something <span className="text-orange">Great</span></>}
        subtitle="Ready to bring Warrior Culture to your program? Fill out the form below and Coach Tommy will personally be in touch within 24–48 hours."
      />

      <section className="section section-white" ref={formRef}>
        <div className="container contact-layout">
          {/* FORM */}
          <div className="fade-up">
            <h2 className="contact-form-heading">Request Information</h2>
            <p className="contact-form-sub">Tell us about your program and what you're looking for — the more detail, the better.</p>

            {submitted ? (
              <div className="success-message mt-4">
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. Coach Tommy will be in touch within 24–48 hours. One heartbeat. One team.</p>
              </div>
            ) : (
              <form className="contact-form mt-4" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Coach / Athlete Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="(555) 555-5555"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="organization">Organization / School</label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      className="form-input"
                      placeholder="Team, school, or organization"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="inquiry">Type of Inquiry *</label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    className="form-select"
                    required
                    value={formData.inquiry}
                    onChange={handleChange}
                  >
                    <option value="">Select an inquiry type</option>
                    {inquiryTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about your program, your goals, timing, and what you're looking for from One Heartbeat Warriors..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg form-submit">
                  Send Message →
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
                      <a href="mailto:info@oneheartbeatwarriors.com">info@oneheartbeatwarriors.com</a>
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={22} /></div>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-value">
                      <a href="tel:+15555550100">(555) 555-0100</a>
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={22} /></div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">Serving programs nationwide</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={22} /></div>
                  <div>
                    <div className="contact-info-label">Response Time</div>
                    <div className="contact-info-value">Within 24–48 business hours</div>
                  </div>
                </div>
              </div>

              <div className="contact-divider" />

              <h4 className="contact-services-heading">Programs Available</h4>
              <ul className="contact-services-list">
                {['Warrior Culture Team Sessions', 'Individual Athlete Camps', 'Mindset Training & Coaching', 'Speaking Engagements', 'Athletic Department Programs', 'Be Grundy Foundation'].map(s => (
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
