import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionTitle Component
 * Renders an elegant section header with an animated SVG path drawing line
 * underneath the accented word, inspired by Anime.js svg.createDrawable.
 *
 * @param {string} preText - Primary title text (e.g. "Technical", "My", "About")
 * @param {string} accentText - Accented italic word with SVG drawing (e.g. "Skills", "Journey")
 * @param {string} [subtitle] - Optional subtitle below title
 * @param {boolean} [loopTracer=true] - Whether to show the continuous flowing light tracer
 */
export default function SectionTitle({
  preText,
  accentText,
  subtitle,
  loopTracer = true,
}) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2.8rem' }}>
      <h2
        style={{
          fontSize: 'var(--h2-font-size)',
          fontWeight: 700,
          color: 'var(--second-color)',
          letterSpacing: '-0.02em',
          lineHeight: 1.25,
          position: 'relative',
          display: 'inline-block',
          margin: 0,
        }}
      >
        {preText}{' '}
        <span
          style={{
            position: 'relative',
            display: 'inline-block',
          }}
        >
          {/* The Accented Italic Word */}
          <span className="serif-italic text-accent">{accentText}</span>

          {/* =========================================================================
              ANIMATED SVG DRAWING LINE (Anime.js style pathLength & pathOffset)
             ========================================================================= */}
          <svg
            viewBox="0 0 160 22"
            fill="none"
            style={{
              position: 'absolute',
              left: '-6%',
              bottom: '-10px',
              width: '112%',
              height: '20px',
              overflow: 'visible',
              pointerEvents: 'none',
            }}
            aria-hidden="true"
          >
            {/* Background subtle ghost guide path */}
            <path
              d="M 3 13 Q 48 3, 90 9 T 157 7"
              stroke="var(--first-color, #8C7A6B)"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.22"
            />

            {/* 1. Main Path Drawing on scroll into view (draw: 0 -> 1) */}
            <motion.path
              d="M 3 13 Q 48 3, 90 9 T 157 7"
              stroke="var(--first-color, #8C7A6B)"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                pathLength: {
                  duration: 1.15,
                  ease: [0.25, 1, 0.5, 1], // easeOutCubic
                  delay: 0.15,
                },
                opacity: { duration: 0.25, delay: 0.15 },
              }}
            />

            {/* 2. Continuous flowing tracer pulse (Anime.js loop: '0 0' -> '1 1') */}
            {loopTracer && (
              <motion.path
                d="M 3 13 Q 48 3, 90 9 T 157 7"
                stroke="rgba(255, 255, 255, 0.95)"
                strokeWidth="3.2"
                strokeLinecap="round"
                initial={{ pathLength: 0.22, pathOffset: 0, opacity: 0 }}
                animate={{
                  pathOffset: [0, 1],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                  delay: 1.4,
                }}
              />
            )}
          </svg>
        </span>
      </h2>

      {/* Subtitle if provided */}
      {subtitle && (
        <p
          className="serif-italic"
          style={{
            color: 'var(--text-color-light)',
            marginTop: '0.85rem',
            marginBottom: 0,
            fontSize: '0.96rem',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
