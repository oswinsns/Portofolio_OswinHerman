import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit, Palette } from 'lucide-react';

const skillsData = [
  {
    number: '01',
    title: 'Frontend Development',
    subtitle: 'Modern & Responsive Web Experiences',
    icon: Code2,
    color: '#8C7A6B',
    accentBg: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(245,242,238,0.7) 100%)',
    badges: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Chakra UI', 'Framer Motion', 'StreamLit']
  },
  {
    number: '02',
    title: 'Backend Engineering',
    subtitle: 'Scalable APIs & Database Architecture',
    icon: Server,
    color: '#746456',
    accentBg: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(238,232,224,0.7) 100%)',
    badges: ['Node.js', 'GoLang', 'PHP', 'GORM', 'MySQL', 'PostgreSQL', 'RESTful APIs', 'JWT Auth', 'Firebase']
  },
  {
    number: '03',
    title: 'Machine Learning & Data',
    subtitle: 'Intelligent Models & Analytics',
    icon: BrainCircuit,
    color: '#655546',
    accentBg: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(232,224,214,0.75) 100%)',
    badges: ['Python', 'Scikit-Learn', 'TensorFlow', 'SQL', 'Hadoop', 'Pandas / NumPy', 'Jupyter Notebook', 'Data Pipeline']
  },
  {
    number: '04',
    title: 'UI / UX Design',
    subtitle: 'Human-Centered Interfaces & Systems',
    icon: Palette,
    color: '#554639',
    accentBg: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(227,218,206,0.8) 100%)',
    badges: ['Figma', 'Design Systems', 'Interactive Prototyping', 'PowerBI', 'Tableau', 'Adobe XD', 'Canva']
  }
];

export default function SkillsStack() {
  return (
    <section className="section" id="skills" style={{ position: 'relative', paddingBottom: '6rem' }}>
      <div className="bd-container">
        <h2 className="section-title">
          Technical <span className="serif-italic text-accent">Skills</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-color-light)', marginTop: '-1.5rem', marginBottom: '3rem', fontSize: '0.95rem' }}>
          Scroll down to browse through my capabilities stack
        </p>

        {/* Stacking Cards Container */}
        <div style={{ position: 'relative', maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  position: 'sticky',
                  top: `calc(5.5rem + ${index * 22}px)`,
                  background: skill.accentBg,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  padding: '2.2rem 2.5rem',
                  boxShadow: `0 ${12 + index * 6}px ${35 + index * 8}px rgba(62, 56, 50, ${0.08 + index * 0.03}), 0 1px 2px rgba(255, 255, 255, 0.9) inset`,
                  marginBottom: '1rem',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  zIndex: index + 1,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
                  {/* Left Column: Number, Icon, Title */}
                  <div style={{ flex: '1 1 260px', minWidth: '220px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                      <span className="serif-italic" style={{ fontSize: '2.2rem', fontWeight: 600, color: skill.color, lineHeight: 1 }}>
                        {skill.number}
                      </span>
                      <div 
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '14px',
                          background: 'rgba(255, 255, 255, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: skill.color,
                          boxShadow: '0 4px 12px rgba(140, 122, 107, 0.15)',
                        }}
                      >
                        <Icon size={24} />
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--second-color)', marginBottom: '0.25rem' }}>
                      {skill.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-color-light)' }}>
                      {skill.subtitle}
                    </p>
                  </div>

                  {/* Right Column: Badges */}
                  <div style={{ flex: '2 1 340px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {skill.badges.map((badge) => (
                        <motion.span
                          key={badge}
                          whileHover={{ scale: 1.06, y: -2 }}
                          style={{
                            padding: '0.45rem 1rem',
                            background: 'rgba(255, 255, 255, 0.75)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255, 255, 255, 0.8)',
                            borderRadius: '9999px',
                            fontSize: '0.84rem',
                            fontWeight: 500,
                            color: 'var(--second-color)',
                            boxShadow: '0 3px 10px rgba(140, 122, 107, 0.08)',
                            cursor: 'default',
                          }}
                        >
                          {badge}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
