import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';

/* =========================================================================
   QUALIFICATIONS & PERSONAL JOURNEY DATA
   ========================================================================= */
const organizations = [
  {
    title: 'Bina Nusantara Computer Club',
    subtitle: 'Member, LnT (Learning and Training)',
    time: '2023 - 2024',
    image: '/WhatsApp Image 2025-09-11 at 05.20.32_1e8146a5.jpg',
  },
  {
    title: 'UREEKA',
    subtitle: 'Core Team, Design and Creative / Web Programming Division',
    time: '2024 - Present',
    image: '/WhatsApp Image 2025-09-11 at 05.25.24_b76f9705.jpg',
  },
  {
    title: 'UKM Binus Badminton',
    subtitle: 'Activist, Training Division',
    time: '2024 - Present',
    image: '/Screenshot 2025-09-11 054038.png',
  },
];

const workplaces = [
  {
    title: 'Binusian Mentor (Scholarship)',
    subtitle: 'Hosting Academic Mentoring & Study Sessions',
    time: '2024 - 4th Semester',
    image: '/1757923349493.jpg',
  },
  {
    title: 'Rumah Belajar',
    subtitle: 'Part-time Tutor for Math Olympiad Elementary Participants',
    time: 'August 2025 - Present',
  },
  {
    title: 'Lotus Group',
    subtitle: 'System Developer Intern, Develop ERP system for inventory, management for multi businesses',
    time: 'February 2026 - Present',
    image: '/WhatsApp Image 2026-09-21 at 15.51.14.jpeg',
  },
];

export default function Qualifications() {
  const [activeTab, setActiveTab] = useState('orgs');
  const activeData = activeTab === 'orgs' ? organizations : workplaces;

  return (
    <section className="section" id="qualifications">
      <div className="bd-container">
        {/* Section Header with Animated SVG Drawing Line */}
        <SectionTitle
          preText="My"
          accentText="Journey"
          subtitle="My personal journey"
        />

        {/* Outer Glassmorphism Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--glass-shadow)',
            borderRadius: '24px',
            padding: '2.5rem 1.8rem',
            position: 'relative',
          }}
        >
          {/* Tab Navigation Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginBottom: '2.5rem',
            }}
          >
            {/* Organizations Tab */}
            <motion.button
              onClick={() => setActiveTab('orgs')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                color: activeTab === 'orgs' ? 'var(--first-color)' : 'var(--second-color)',
                position: 'relative',
                paddingBottom: '0.4rem',
                transition: 'color 0.25s ease',
              }}
            >
              <GraduationCap size={22} />
              <span>Organizations</span>
              {activeTab === 'orgs' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2.5px',
                    backgroundColor: 'var(--first-color)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </motion.button>

            {/* Workplace Tab */}
            <motion.button
              onClick={() => setActiveTab('work')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                color: activeTab === 'work' ? 'var(--first-color)' : 'var(--second-color)',
                position: 'relative',
                paddingBottom: '0.4rem',
                transition: 'color 0.25s ease',
              }}
            >
              <Briefcase size={22} />
              <span>WorkPlace</span>
              {activeTab === 'work' && (
                <motion.div
                  layoutId="activeTabUnderline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2.5px',
                    backgroundColor: 'var(--first-color)',
                    borderRadius: '2px',
                  }}
                />
              )}
            </motion.button>
          </div>

          {/* Alternating Zigzag Timeline with Framer Motion Animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0rem',
                position: 'relative',
              }}
            >
              {activeData.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isLast = index === activeData.length - 1;

                return (
                  <div
                    key={item.title}
                    className="timeline-row"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 36px 1fr',
                      columnGap: '1.5rem',
                      alignItems: 'stretch',
                      minHeight: '130px',
                    }}
                  >
                    {/* LEFT COLUMN */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingBottom: isLast ? '0' : '1.75rem',
                      }}
                    >
                      {isLeft && (
                        <TimelineCard item={item} isLeft={true} index={index} />
                      )}
                    </div>

                    {/* CENTER COLUMN: Rounder Dot & Animated Connecting Line */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                      }}
                    >
                      {/* Bouncing Rounder Node Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 16,
                          delay: index * 0.15,
                        }}
                        style={{
                          width: '14px',
                          height: '14px',
                          backgroundColor: 'var(--first-color)',
                          borderRadius: '50%',
                          boxShadow: '0 0 0 4px rgba(140, 122, 107, 0.22), 0 2px 6px rgba(0,0,0,0.15)',
                          flexShrink: 0,
                          marginTop: '1.25rem',
                          zIndex: 2,
                        }}
                      />

                      {/* Sliding / Drawing Vertical Timeline Line */}
                      {!isLast && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            ease: 'easeInOut',
                            delay: index * 0.15 + 0.1,
                          }}
                          style={{
                            width: '2px',
                            flex: 1,
                            backgroundColor: 'var(--first-color)',
                            opacity: 0.7,
                            transformOrigin: 'top',
                            borderRadius: '1px',
                          }}
                        />
                      )}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingBottom: isLast ? '0' : '1.75rem',
                      }}
                    >
                      {!isLeft && (
                        <TimelineCard item={item} isLeft={false} index={index} />
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Responsive mobile adjustments */}
      <style>{`
        @media screen and (max-width: 680px) {
          .timeline-row {
            grid-template-columns: 28px 1fr !important;
            column-gap: 1.25rem !important;
          }
          .timeline-row > div:nth-child(1) {
            display: none !important;
          }
          .timeline-row > div:nth-child(2) {
            grid-column: 1 !important;
          }
          .timeline-row > div:nth-child(3) {
            grid-column: 2 !important;
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================================
   INDIVIDUAL GLASSMORPHISM TIMELINE CARD WITH SLIDING & BOUNCE ANIMATION
   ========================================================================= */
function TimelineCard({ item, isLeft, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -50 : 50,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 18,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: '0 16px 36px rgba(140, 122, 107, 0.18)',
      }}
      style={{
        width: '100%',
        maxWidth: '320px',
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        borderRadius: '18px',
        padding: '1.25rem 1.4rem',
        boxShadow: '0 10px 28px rgba(140, 122, 107, 0.1), 0 1px 2px rgba(255, 255, 255, 0.9) inset',
        cursor: 'default',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Title */}
      <h3
        style={{
          fontSize: '1.05rem',
          fontWeight: 600,
          color: 'var(--second-color)',
          marginBottom: '0.35rem',
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>

      {/* Subtitle / Role */}
      <p
        style={{
          fontSize: '0.84rem',
          color: 'var(--text-color-light)',
          marginBottom: item.image ? '0.75rem' : '0.5rem',
          lineHeight: 1.4,
        }}
      >
        {item.subtitle}
      </p>

      {/* Image Preview with Hover Micro-interaction */}
      {item.image && (
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.25 }}
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '0.75rem',
            border: '1.5px solid rgba(255, 255, 255, 0.85)',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
            maxHeight: '140px',
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: '100%',
              height: '110px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>
      )}

      {/* Calendar Date Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.78rem',
          fontWeight: 500,
          color: 'var(--first-color)',
          background: 'rgba(140, 122, 107, 0.1)',
          padding: '0.25rem 0.65rem',
          borderRadius: '9999px',
        }}
      >
        <Calendar size={13} />
        <span>{item.time}</span>
      </div>
    </motion.div>
  );
}

/* =========================================================================
   [COMMENTED OUT PREVIOUS FLAT LIST VERSION AS REQUESTED]
   =========================================================================

export function PreviousQualificationsFlatList() {
  const [activeTab, setActiveTab] = useState('orgs');

  return (
    <section className="section" id="qualifications">
      <div className="bd-container">
        <h2 className="section-title">
          My <span className="serif-italic text-accent">Journey</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-color-light)', marginTop: '-1.5rem', marginBottom: '2.5rem' }}>
          Leadership, organizations & professional experience
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <button onClick={() => setActiveTab('orgs')}>Organizations</button>
          <button onClick={() => setActiveTab('work')}>Workplace</button>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {activeTab === 'orgs' ? (
            <div>
              {organizations.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {workplaces.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
========================================================================= */
