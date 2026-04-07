import { Link } from 'react-router-dom'
import './PageHero.css'

export default function PageHero({ label, title, subtitle, cta, ctaLink = '/contact', secondaryCta, secondaryCtaLink = '/' }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {label && <span className="section-label">{label}</span>}
        <h1 className="page-hero-title display-headline">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        {(cta || secondaryCta) && (
          <div className="page-hero-actions">
            {cta && <Link to={ctaLink} className="btn btn-primary btn-lg">{cta}</Link>}
            {secondaryCta && <Link to={secondaryCtaLink} className="btn btn-secondary btn-lg">{secondaryCta}</Link>}
          </div>
        )}
      </div>
    </section>
  )
}
