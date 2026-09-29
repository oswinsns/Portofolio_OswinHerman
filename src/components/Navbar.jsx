import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Qualifications', href: '#qualifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(245, 242, 238, 0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.5)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <nav
        className="bd-container"
        style={{
          height: 'var(--header-height)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="#home"
          style={{
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: '-0.02em',
            color: 'var(--second-color)',
          }}
        >
          Oswin <span className="serif-italic text-accent">Herman</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    color: activeSection === item.href.replace('#', '') ? 'var(--first-color)' : 'var(--second-color)',
                    position: 'relative',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--first-color)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--second-color)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              width: '100%',
              background: 'rgba(245, 242, 238, 0.96)',
              backdropFilter: 'blur(20px)',
              padding: '2rem',
              borderBottom: '1px solid rgba(140, 122, 107, 0.15)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: activeSection === item.href.replace('#', '') ? 'var(--first-color)' : 'var(--second-color)',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media screen and (min-width: 768px) {
          .desktop-menu { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
