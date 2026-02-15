import { useState } from 'react'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const links = [
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#health-check', label: 'Health Check' },
        { href: '#booking', label: 'Book' },
        { href: '#reviews', label: 'Reviews' },
        { href: '#contact', label: 'Contact' },
    ]

    const handleLink = () => setMobileOpen(false)

    return (
        <>
            <nav className="navbar" id="navbar">
                <div className="navbar-inner">
                    {/* Logo */}
                    <a href="#" className="navbar-logo">
                        <div className="logo-icon">
                            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0D7C66" />
                                        <stop offset="100%" stopColor="#F4A261" />
                                    </linearGradient>
                                </defs>
                                <rect width="36" height="36" rx="10" fill="url(#logo-grad)" />
                                <path d="M18 8C14.7 8 12 10.7 12 14c0 2.1 1.1 4 2.8 5.1L13 27h2l1.5-6h3L21 27h2l-1.8-7.9C22.9 18 24 16.1 24 14c0-3.3-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" fill="white" opacity="0.95" />
                                <circle cx="18" cy="14" r="2" fill="white" opacity="0.6" />
                            </svg>
                        </div>
                        CareFirst
                    </a>

                    {/* Desktop Links */}
                    <div className="nav-links">
                        {links.map(l => (
                            <a key={l.href} href={l.href}>{l.label}</a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="navbar-cta">
                        <a href="#booking" className="btn btn-primary btn-sm">Book Now</a>
                        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Drawer */}
            <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                <button className="close-mobile" onClick={() => setMobileOpen(false)}>✕</button>
                {links.map(l => (
                    <a key={l.href} href={l.href} onClick={handleLink}>{l.label}</a>
                ))}
                <div style={{ marginTop: 24 }}>
                    <a href="#booking" className="btn btn-primary" onClick={handleLink} style={{ width: '100%', justifyContent: 'center' }}>
                        Book Appointment
                    </a>
                </div>
            </div>
        </>
    )
}
