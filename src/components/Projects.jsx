import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronUp } from 'lucide-react';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with inventory management, RESTful microservices, and an administrative analytics dashboard.',
    image: '/Screenshot 2025-09-14 131428.png',
    badges: ['GoLang', 'GORM', 'Gin', 'HTML', 'CSS', 'PostgreSQL'],
    codeUrl: 'https://github.com/oswinsns/ProjectEcommerceGolang_BNCC',
    demoUrl: '#',
  },
  {
    title: 'Food Classifier Platform',
    description: 'Deep Learning Computer Vision application identifying diverse food types from uploaded images in real-time.',
    image: '/Screenshot 2025-09-14 131559.png',
    badges: ['Python', 'Streamlit', 'Scikit-Learn', 'CNN', 'MobileNet'],
    codeUrl: 'https://github.com/oswinsns/FoodGuesserAIStreamLit-ArtificialIntelligenceProject',
    demoUrl: '#',
  },
  {
    title: 'Flood Report App (Collab)',
    description: 'ElevAIte Hackathon collaborative project leveraging AI and Azure geospatial APIs for real-time flood alert predictions.',
    image: '/Screenshot 2025-09-29 021825.png',
    badges: ['React', 'TypeScript', 'TailwindCSS', 'Azure', 'Shadcn UI'],
    codeUrl: 'https://github.com/Irrazional/AiScReam-MVP',
    demoUrl: '#',
  },
  {
    title: 'Task Manager Platform',
    description: 'Modern frontend productivity application featuring dynamic task workflows, priority tags, and progress tracking.',
    image: '/Screenshot 2025-09-14 131630.png',
    badges: ['React', 'Vite', 'Chakra UI', 'Framer Motion'],
    codeUrl: 'https://github.com/oswinsns/ProjectChakraUI',
    demoUrl: '#',
  },
  {
    title: 'Task Manager (Next.js Alt)',
    description: 'High-performance alternative task manager built with Next.js server components and atomic Tailwind design tokens.',
    image: '/Screenshot 2025-09-29 021345.png',
    badges: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    codeUrl: 'https://github.com/oswinsns/ProjectChakraUI',
    demoUrl: '#',
  },
  {
    title: 'Pacman Game (Java OOP)',
    description: 'Classic arcade game recreated from scratch in Java, implementing strict Object-Oriented design patterns and collision algorithms.',
    image: '/Pacman_Game.png',
    badges: ['Java', 'JFrame / Swing', 'OOP Architecture'],
    codeUrl: 'https://github.com/oswinsns/Pacman_buatanOswin',
    demoUrl: '#',
  },
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="section" id="work">
      <div className="bd-container">
        <SectionTitle
          preText="Featured"
          accentText="Projects"
          subtitle="Selected software engineering and design works"
        />

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {projects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#2A241F',
                  boxShadow: '0 12px 32px rgba(62, 56, 50, 0.12)',
                  aspectRatio: '16 / 11',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                }}
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.2, 0, 0, 1)',
                    display: 'block',
                  }}
                />

                {/* Balcony-Window Slide Up Layer */}
                <motion.div
                  initial={false}
                  animate={{
                    y: isHovered ? '0%' : 'calc(100% - 3.4rem)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    top: 'auto',
                    bottom: 0,
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(28, 24, 20, 0.96) 0%, rgba(38, 32, 27, 0.92) 80%, rgba(45, 38, 32, 0.85) 100%)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1rem 1.4rem 1.4rem',
                    color: '#fff',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {/* Balcony Header with Arrow */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff' }}>
                      {project.title}
                    </h4>
                    <motion.div
                      animate={{ rotate: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        flexShrink: 0,
                      }}
                    >
                      <ChevronUp size={16} />
                    </motion.div>
                  </div>

                  {/* Balcony Expanded Content */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '0.6rem' }}>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(240, 235, 230, 0.85)', lineHeight: 1.55 }}>
                      {project.description}
                    </p>

                    {/* Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            padding: '0.2rem 0.6rem',
                            borderRadius: '9999px',
                            background: 'rgba(255, 255, 255, 0.12)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            color: 'rgba(255, 255, 255, 0.9)',
                          }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.2rem' }}>
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.45rem 1rem',
                            borderRadius: '9999px',
                            background: 'rgba(255, 255, 255, 0.15)',
                            color: '#fff',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                          }}
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.45rem 1rem',
                          borderRadius: '9999px',
                          background: 'var(--first-color)',
                          color: '#fff',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                        }}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
