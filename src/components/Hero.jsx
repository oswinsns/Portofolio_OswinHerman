import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Linkedin, Instagram, Github } from 'lucide-react';
import Turntable360 from './Turntable360';

export default function Hero() {
  return (
    <section 
      className="section" 
      id="home"
      style={{
        paddingTop: 'calc(var(--header-height) + 3rem)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div 
        className="bd-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '3rem',
          width: '100%',
        }}
      >
        {/* Left Side: Headline & Links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p 
            style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--first-color)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.6rem',
            }}
          >
            Welcome to my space
          </p>

          <h1
            style={{
              fontSize: 'var(--big-font-size)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--second-color)',
              marginBottom: '1.25rem',
            }}
          >
            Hi, I'm <span className="serif-italic text-accent">Oswin</span>
            <br />
            A <span className="serif-italic text-accent">Computer Science</span>
            <br />
            Enthusiast
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-color-light)',
              maxWidth: '460px',
              marginBottom: '2rem',
              lineHeight: 1.7,
            }}
          >
            Passionate software developer focusing on innovative web interfaces, full-stack architecture, machine learning, and human-centered design.
          </p>

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href="https://drive.google.com/drive/folders/1EYcKfoT5aRp3luGPXTgbNmZntuOKTK6R?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Check My Resume</span>
              <FileText size={18} />
            </a>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
              <a
                href="https://www.linkedin.com/in/oswin-herman-somally"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--second-color)',
                  boxShadow: '0 4px 12px rgba(140, 122, 107, 0.12)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Linkedin size={19} />
              </a>

              <a
                href="https://www.instagram.com/oswinhs?igsh=czlreHE3azcxbXho"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--second-color)',
                  boxShadow: '0 4px 12px rgba(140, 122, 107, 0.12)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Instagram size={19} />
              </a>

              <a
                href="https://github.com/oswinsns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--second-color)',
                  boxShadow: '0 4px 12px rgba(140, 122, 107, 0.12)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Github size={19} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: 360 Turntable */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          style={{ width: '100%' }}
        >
          <Turntable360 />
        </motion.div>
      </div>
    </section>
  );
}
