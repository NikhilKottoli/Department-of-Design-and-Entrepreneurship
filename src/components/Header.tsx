import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '#about',
    dropdown: [
      { label: 'Vision & Mission', path: '#vision' },
      { label: 'Objectives', path: '#objectives' },
    ],
  },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Research', path: '#research' },
  { label: 'Contact', path: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      {/* Top utility bar */}
      <div className="header__topbar">
        <div className="container header__topbar-inner">
          <a href="https://nitk.ac.in" target="_blank" rel="noopener noreferrer" className="header__nitk-link">
            <img
              src="https://nitk.ac.in/design-system/images/logo.png"
              alt="NITK Surathkal"
              className="header__nitk-logo"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            <span>National Institute of Technology Karnataka, Surathkal</span>
          </a>
          <div className="header__topbar-links">
            <a href="https://nitk.ac.in" target="_blank" rel="noopener noreferrer">NITK Home</a>
            <span className="divider">|</span>
            <a href="https://iris.nitk.ac.in" target="_blank" rel="noopener noreferrer">IRIS</a>
            <span className="divider">|</span>
            <a href="https://cdc.nitk.ac.in" target="_blank" rel="noopener noreferrer">CDC</a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <nav className="header__nav" ref={dropdownRef}>
        <div className="container header__nav-inner">
          {/* Department Branding */}
          <Link to="/" className="header__brand">
            <div className="header__brand-text">
              <span className="header__brand-dept">Department of Design and Entrepreneurship</span>
              <span className="header__brand-sub">NIT Karnataka, Surathkal</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="header__links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`header__item ${link.dropdown ? 'header__item--has-dropdown' : ''}`}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.path.startsWith('/') && !link.path.startsWith('#') ? (
                  <Link
                    to={link.path}
                    className={`header__link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                    {link.dropdown && <span className="header__chevron">▾</span>}
                  </Link>
                ) : (
                  <a href={link.path} className="header__link">
                    {link.label}
                    {link.dropdown && <span className="header__chevron">▾</span>}
                  </a>
                )}
                {link.dropdown && (
                  <ul className={`header__dropdown ${activeDropdown === link.label ? 'header__dropdown--open' : ''}`}>
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <a href={item.path} className="header__dropdown-link">{item.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`header__hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`header__mobile-menu ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <div key={link.label} className="header__mobile-item">
              {link.path.startsWith('/') && !link.path.startsWith('#') ? (
                <Link to={link.path} className="header__mobile-link">{link.label}</Link>
              ) : (
                <a href={link.path} className="header__mobile-link">{link.label}</a>
              )}
              {link.dropdown?.map((item) => (
                <a key={item.label} href={item.path} className="header__mobile-sub-link">{item.label}</a>
              ))}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}
