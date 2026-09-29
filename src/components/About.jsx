import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="bd-container">
        <SectionTitle
          preText="About"
          accentText="Me"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginTop: '2.5rem',
          }}
        >
          {/* About Image with Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(140, 122, 107, 0.2)',
              border: '3px solid rgba(255, 255, 255, 0.7)',
              maxWidth: '380px',
              margin: '0 auto',
            }}
          >
            <img
              src="/WhatsApp Image 2024-02-14 at 23.27.34_41b2aaa8.jpg"
              alt="Oswin Herman"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '21px',
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* About Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--second-color)', marginBottom: '1rem' }}>
              I'm Oswin
            </h3>

            <p style={{ color: 'var(--text-color-light)', marginBottom: '1.25rem', lineHeight: 1.75 }}>
              I'm currently pursuing <strong>Computer Science at Bina Nusantara University (GPA 3.91 / 4.00)</strong>, with hands-on experience in building projects that bridge <strong>web development, data science, and machine learning.</strong>
            </p>

            <p style={{ color: 'var(--text-color-light)', marginBottom: '1.25rem', lineHeight: 1.75 }}>
              I enjoy turning ideas into functional applications — from creating responsive modern web platforms with React, Vite, and Shadcn UI, to developing robust backend architectures in Go (Gin, GORM, JWT) and Laravel. I also explore data-driven solutions such as fraud detection algorithms and deep learning computer vision classifiers.
            </p>

            <p style={{ color: 'var(--text-color-light)', marginBottom: '2rem', lineHeight: 1.75 }}>
              Beyond tech, I have mentored peers, taught problem-solving to students, and led coding sessions & sports community initiatives. Always eager to learn, build, and collaborate!
            </p>

            {/* Metric Highlights */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1.4rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '16px',
                  boxShadow: '0 6px 18px rgba(140, 122, 107, 0.1)',
                }}
              >
                <div style={{ color: 'var(--first-color)' }}>
                  <Briefcase size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--second-color)' }}>02+ Years</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-color-light)' }}>Experience</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1.4rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '16px',
                  boxShadow: '0 6px 18px rgba(140, 122, 107, 0.1)',
                }}
              >
                <div style={{ color: 'var(--first-color)' }}>
                  <Award size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--second-color)' }}>10+ Projects</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-color-light)' }}>Completed</div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1.4rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '16px',
                  boxShadow: '0 6px 18px rgba(140, 122, 107, 0.1)',
                }}
              >
                <div style={{ color: 'var(--first-color)' }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--second-color)' }}>3.91 / 4.00</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-color-light)' }}>Binus CS GPA</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
