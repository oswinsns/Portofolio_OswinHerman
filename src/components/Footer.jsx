import React from 'react';
import { Linkedin, Instagram, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(140, 122, 107, 0.15)',
        padding: '3.5rem 0 2.5rem',
        marginTop: '4rem',
        backgroundColor: 'rgba(240, 235, 230, 0.5)',
      }}
    >
      <div
        className="bd-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a
            href="https://www.linkedin.com/in/oswin-herman-somally"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--second-color)',
              boxShadow: '0 4px 12px rgba(140, 122, 107, 0.12)',
            }}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/oswinhs?igsh=czlreHE3azcxbXho"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--second-color)',
              boxShadow: '0 4px 12px rgba(140, 122, 107, 0.12)',
            }}
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://github.com/oswinsns"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--second-color)',
              boxShadow: '0 4px 12px rgba(140, 122, 107, 0.12)',
            }}
          >
            <Github size={18} />
          </a>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--second-color)', fontStyle: 'italic' }}>
          "The World only belongs to those who paid attention"
        </p>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-color-light)' }}>
          Designed & Built with modern React, Vite & Framer Motion
        </p>
      </div>
    </footer>
  );
}
