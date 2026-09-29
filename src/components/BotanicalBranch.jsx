import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BotanicalBranch() {
  const { scrollY } = useScroll();
  // Subtle parallax effect on scroll
  const branch1Y = useTransform(scrollY, [0, 1000], [0, -60]);
  const branch2Y = useTransform(scrollY, [0, 1000], [0, 80]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* =========================================================================
          BRANCH 1: TOP LEFT CORNER (Cascading gently down into the Hero)
         ========================================================================= */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-30px',
          left: '-40px',
          width: '320px',
          height: '420px',
          opacity: 0.18,
          y: branch1Y,
          transformOrigin: 'top left',
        }}
        initial={{ opacity: 0, rotate: -6 }}
        animate={{
          opacity: 0.18,
          rotate: [-1.5, 2, -1.5],
          x: [0, 4, 0],
        }}
        transition={{
          opacity: { duration: 1.5, ease: 'easeOut' },
          rotate: { repeat: Infinity, duration: 14, ease: 'easeInOut' },
          x: { repeat: Infinity, duration: 14, ease: 'easeInOut' },
        }}
      >
        <svg
          viewBox="0 0 300 400"
          fill="none"
          stroke="var(--first-color, #8C7A6B)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Main Stem */}
          <path
            d="M 20 10 Q 90 90, 130 180 T 210 330 Q 230 370, 260 395"
            strokeWidth="2.2"
          />

          {/* Leaf 1 (Left near top) */}
          <path d="M 60 55 C 30 40, 20 65, 45 75 C 65 75, 60 55, 60 55 Z" fill="rgba(140, 122, 107, 0.25)" />
          {/* Leaf 2 (Right near top) */}
          <path d="M 85 85 C 115 70, 130 95, 105 105 C 85 105, 85 85, 85 85 Z" fill="rgba(140, 122, 107, 0.2)" />

          {/* Leaf 3 (Left mid-upper) */}
          <path d="M 105 135 C 70 120, 60 150, 90 160 C 110 160, 105 135, 105 135 Z" fill="rgba(140, 122, 107, 0.25)" />
          {/* Leaf 4 (Right mid) */}
          <path d="M 130 175 C 165 155, 185 180, 155 195 C 135 195, 130 175, 130 175 Z" fill="rgba(140, 122, 107, 0.2)" />

          {/* Leaf 5 (Left mid-lower) */}
          <path d="M 155 225 C 120 205, 110 240, 140 250 C 160 250, 155 225, 155 225 Z" fill="rgba(140, 122, 107, 0.25)" />
          {/* Leaf 6 (Right lower) */}
          <path d="M 185 275 C 225 255, 240 285, 210 300 C 190 300, 185 275, 185 275 Z" fill="rgba(140, 122, 107, 0.2)" />

          {/* Leaf 7 (Terminal leaf tip) */}
          <path d="M 235 350 C 270 335, 285 365, 255 380 C 240 375, 235 350, 235 350 Z" fill="rgba(140, 122, 107, 0.3)" />

          {/* Delicate Little Bud Accents */}
          <circle cx="50" cy="50" r="2.5" fill="var(--first-color, #8C7A6B)" />
          <circle cx="120" cy="88" r="2.5" fill="var(--first-color, #8C7A6B)" />
          <circle cx="170" cy="165" r="2.5" fill="var(--first-color, #8C7A6B)" />
          <circle cx="230" cy="265" r="2.5" fill="var(--first-color, #8C7A6B)" />
        </svg>
      </motion.div>

      {/* =========================================================================
          BRANCH 2: RIGHT EDGE (Delicate balance in the background)
         ========================================================================= */}
      <motion.div
        style={{
          position: 'absolute',
          top: '38%',
          right: '-50px',
          width: '260px',
          height: '380px',
          opacity: 0.14,
          y: branch2Y,
          transformOrigin: 'bottom right',
        }}
        initial={{ opacity: 0, rotate: 8 }}
        animate={{
          opacity: 0.14,
          rotate: [2, -2, 2],
          y: [0, -6, 0],
        }}
        transition={{
          opacity: { duration: 2, ease: 'easeOut' },
          rotate: { repeat: Infinity, duration: 18, ease: 'easeInOut' },
          y: { repeat: Infinity, duration: 18, ease: 'easeInOut' },
        }}
      >
        <svg
          viewBox="0 0 260 380"
          fill="none"
          stroke="var(--first-color, #8C7A6B)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Stem curving inward */}
          <path
            d="M 240 350 Q 180 260, 150 170 T 80 40 Q 60 15, 30 10"
            strokeWidth="2"
          />

          {/* Leaves along branch 2 */}
          <path d="M 200 300 C 170 280, 160 310, 185 320 C 205 320, 200 300, 200 300 Z" fill="rgba(140, 122, 107, 0.2)" />
          <path d="M 165 230 C 130 210, 120 245, 150 255 C 170 255, 165 230, 165 230 Z" fill="rgba(140, 122, 107, 0.22)" />
          <path d="M 130 150 C 95 130, 85 165, 115 175 C 135 175, 130 150, 130 150 Z" fill="rgba(140, 122, 107, 0.2)" />
          <path d="M 95 80 C 65 60, 55 90, 80 100 C 100 100, 95 80, 95 80 Z" fill="rgba(140, 122, 107, 0.25)" />
          <path d="M 45 20 C 15 10, 10 35, 35 45 C 50 45, 45 20, 45 20 Z" fill="rgba(140, 122, 107, 0.3)" />

          {/* Little Bud Dots */}
          <circle cx="180" cy="290" r="2.2" fill="var(--first-color, #8C7A6B)" />
          <circle cx="140" cy="220" r="2.2" fill="var(--first-color, #8C7A6B)" />
          <circle cx="105" cy="140" r="2.2" fill="var(--first-color, #8C7A6B)" />
        </svg>
      </motion.div>
    </div>
  );
}
