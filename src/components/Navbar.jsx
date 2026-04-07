import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/warrior-culture', label: 'Warrior Culture' },
  { to: '/individual-camps', label: 'Camps' },
  { to: '/mindset-training', label: 'Mindset' },
  { to: '/be-grundy-foundation', label: 'Be Grundy' },
  { to: '/about', label: 'About Tommy' },
  { to: '/media', label: 'Media' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <header className={`navbar${isScrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={close}>
          <span className="logo-line1">ONE HEARTBEAT</span>
          <span className="logo-line2">WARRIORS</span>
        </Link>

        <nav className={`navbar-nav${isOpen ? ' open' : ''}`} aria-label="Main navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta btn btn-primary btn-sm" onClick={close}>
            Book a Session
          </Link>
        </nav>

        <button
          className={`hamburger${isOpen ? ' open' : ''}`}
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isOpen && <div className="nav-overlay" onClick={close} aria-hidden="true" />}
    </header>
  )
}
