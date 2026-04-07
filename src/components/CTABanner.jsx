import { Link } from 'react-router-dom'
import './CTABanner.css'

export default function CTABanner({
  label,
  title,
  subtitle,
  primaryCta = 'Book a Session',
  primaryCtaLink = '/contact',
  secondaryCta,
  secondaryCtaLink = '/',
  variant = 'dark', // 'dark' | 'orange'
}) {
  return (
    <section className={`cta-banner cta-banner--${variant}`}>
      <div className="cta-banner-inner">
        <div className="container cta-banner-content">
          <div className="cta-banner-text">
            {label && <span className="section-label">{label}</span>}
            <h2 className="cta-banner-title display-headline">{title}</h2>
            {subtitle && <p className="cta-banner-subtitle">{subtitle}</p>}
          </div>
          <div className="cta-banner-actions">
            <Link to={primaryCtaLink} className="btn btn-primary btn-lg">{primaryCta}</Link>
            {secondaryCta && (
              <Link to={secondaryCtaLink} className="btn btn-secondary btn-lg">{secondaryCta}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
