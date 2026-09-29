import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * BotanicalBranch SVG Component
 * Recreates the hand-drawn ink botanical branch illustration with slender willow/olive leaves,
 * delicate central veins, curving stem, and Framer Motion breeze sway + scroll parallax.
 */
function BotanicalBranchSVG({ className, style }) {
  return (
    <svg
      viewBox="0 0 950 820"
      fill="none"
      stroke="var(--first-color, #8C7A6B)"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: '100%', height: '100%', ...style }}
      className={className}
    >
      <defs>
        {/* Soft gradient fill for leaf shading depth */}
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--first-color, #8C7A6B)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--first-color, #8C7A6B)" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* =========================================================================
          1. MAIN STEM & BASE TENDRILS
         ========================================================================= */}
      <g strokeWidth="2.4" opacity="0.95">
        {/* Main graceful arching stem from bottom-right to top-left */}
        <path d="M 885 680 C 800 730, 680 730, 560 645 C 440 560, 350 450, 255 335 C 190 255, 140 180, 92 88" />
        {/* Secondary overlapping base tail tendril */}
        <path d="M 855 670 C 785 735, 695 735, 605 685" strokeWidth="1.8" opacity="0.8" />
      </g>

      {/* =========================================================================
          2. LEAF PETIOLES (Small connecting stems)
         ========================================================================= */}
      <g strokeWidth="1.6" opacity="0.85">
        <path d="M 92 88 L 120 160" />
        <path d="M 235 295 L 245 220" />
        <path d="M 200 280 L 155 330" />
        <path d="M 290 375 L 320 335" />
        <path d="M 270 360 L 235 440" />
        <path d="M 360 460 L 375 360" />
        <path d="M 330 435 L 245 520" />
        <path d="M 365 470 L 370 540" />
        <path d="M 440 550 L 460 450" />
        <path d="M 420 535 L 370 610" />
        <path d="M 510 610 L 515 520" />
        <path d="M 500 600 L 440 680" />
        <path d="M 570 655 L 610 600" />
        <path d="M 580 665 L 540 750" />
        <path d="M 680 710 L 685 640" />
        <path d="M 720 720 L 705 765" />
      </g>

      {/* =========================================================================
          3. LEAVES (Contours, Shading, and Central Veins)
         ========================================================================= */}
      <g strokeWidth="1.7">
        {/* --- LEAF 1: Terminal Top-Left Leaf (Pointing up-left) --- */}
        <path
          d="M 120 160 C 100 130, 85 95, 92 88 C 115 105, 140 140, 140 170 C 135 185, 128 175, 120 160 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 120 160 Q 106 125, 92 88" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 2: Top Upright Slender Leaf --- */}
        <path
          d="M 245 220 C 235 180, 230 150, 245 160 C 265 180, 280 230, 260 270 C 252 250, 248 235, 245 220 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 252 260 Q 248 200, 245 160" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 3: Leftmost Horizontal Leaf --- */}
        <path
          d="M 155 330 C 110 325, 60 310, 40 318 C 70 345, 130 375, 175 370 C 168 355, 160 340, 155 330 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 170 365 Q 105 340, 40 318" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 4: Small Leaf between #2 and #3 --- */}
        <path
          d="M 148 315 C 135 300, 145 275, 165 285 C 175 300, 165 325, 148 315 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 152 318 Q 155 295, 165 285" strokeWidth="0.9" opacity="0.75" />

        {/* --- LEAF 5: Small Leaflet pointing up --- */}
        <path
          d="M 320 335 C 310 315, 320 290, 335 305 C 345 320, 335 345, 320 335 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 322 338 Q 328 318, 335 305" strokeWidth="0.9" opacity="0.75" />

        {/* --- LEAF 6: Upper Tall Pointed Leaf --- */}
        <path
          d="M 375 360 C 355 310, 345 260, 355 235 C 385 260, 410 320, 395 385 C 388 375, 380 365, 375 360 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 390 378 Q 375 300, 355 235" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 7: Upper Diagonal Leaf pointing up-right --- */}
        <path
          d="M 460 450 C 440 400, 445 345, 470 325 C 500 355, 520 420, 490 480 C 475 465, 465 455, 460 450 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 485 470 Q 470 395, 470 325" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 8: Upper Right Slender Leaf --- */}
        <path
          d="M 515 520 C 495 480, 500 440, 520 460 C 545 490, 560 550, 535 580 C 525 560, 520 540, 515 520 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 530 570 Q 520 500, 520 460" strokeWidth="1" opacity="0.75" />

        {/* --- LEAF 9: Upper Rightmost Upright Leaf --- */}
        <path
          d="M 610 600 C 585 550, 580 505, 595 515 C 625 540, 640 600, 620 655 C 615 635, 612 615, 610 600 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 618 645 Q 605 565, 595 515" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 10: Downward Leaf (Mid-Left) --- */}
        <path
          d="M 235 440 C 220 470, 205 510, 220 520 C 250 515, 275 480, 260 440 C 250 440, 240 440, 235 440 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 252 445 Q 235 480, 220 520" strokeWidth="1" opacity="0.75" />

        {/* --- LEAF 11: Downward Leaf pointing left --- */}
        <path
          d="M 245 520 C 215 540, 180 550, 195 565 C 235 560, 280 535, 275 500 C 265 510, 255 515, 245 520 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 270 510 Q 230 540, 195 565" strokeWidth="1" opacity="0.75" />

        {/* --- LEAF 12: Inward Small Leaf on Stem --- */}
        <path
          d="M 345 425 C 335 445, 350 470, 375 460 C 390 440, 370 415, 345 425 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 350 425 Q 365 445, 375 460" strokeWidth="0.9" opacity="0.75" />

        {/* --- LEAF 13: Small Leaflet hanging down --- */}
        <path
          d="M 370 540 C 360 560, 365 585, 380 575 C 395 555, 385 530, 370 540 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 372 542 Q 375 562, 380 575" strokeWidth="0.9" opacity="0.75" />

        {/* --- LEAF 14: Downward Slender Leaf pointing down-left --- */}
        <path
          d="M 370 610 C 340 645, 325 680, 345 690 C 385 680, 420 640, 410 595 C 395 600, 380 605, 370 610 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 405 602 Q 365 650, 345 690" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 15: Long Horizontal Leaf pointing left --- */}
        <path
          d="M 440 680 C 400 685, 355 675, 415 650 C 480 635, 525 655, 520 685 C 490 685, 465 682, 440 680 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 515 675 Q 450 670, 415 650" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 16: Downward Slender Leaf (Bottom Center) --- */}
        <path
          d="M 540 750 C 510 780, 490 820, 505 825 C 545 810, 580 765, 570 720 C 560 730, 550 740, 540 750 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 565 730 Q 530 780, 505 825" strokeWidth="1.1" opacity="0.75" />

        {/* --- LEAF 17: Base Upright Small Leaflet (Lower Right) --- */}
        <path
          d="M 685 640 C 670 615, 675 585, 690 595 C 705 615, 700 650, 685 640 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 686 638 Q 688 610, 690 595" strokeWidth="0.9" opacity="0.75" />

        {/* --- LEAF 18: Base Downward Small Leaflet (Lower Right Tail) --- */}
        <path
          d="M 705 765 C 690 785, 685 815, 700 810 C 720 790, 720 755, 705 765 Z"
          fill="url(#leafGrad)"
        />
        <path d="M 707 767 Q 700 792, 700 810" strokeWidth="0.9" opacity="0.75" />
      </g>
    </svg>
  );
}

export default function BotanicalBranch() {
  const { scrollY } = useScroll();

  // Scroll parallax for depth of field
  const branch1Y = useTransform(scrollY, [0, 1000], [0, -70]);
  const branch2Y = useTransform(scrollY, [0, 1000], [0, 90]);

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
          BRANCH 1: TOP LEFT CORNER (Cascading down gracefully over the hero)
         ========================================================================= */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: '460px',
          maxWidth: '52vw',
          height: 'auto',
          aspectRatio: '95 / 82',
          opacity: 0.22,
          y: branch1Y,
          transformOrigin: 'top left',
          filter: 'drop-shadow(0 4px 12px rgba(140, 122, 107, 0.15))',
        }}
        initial={{ opacity: 0, rotate: -4 }}
        animate={{
          opacity: 0.22,
          rotate: [-1.2, 1.8, -1.2],
          x: [0, 5, 0],
        }}
        transition={{
          opacity: { duration: 1.5, ease: 'easeOut' },
          rotate: { repeat: Infinity, duration: 15, ease: 'easeInOut' },
          x: { repeat: Infinity, duration: 15, ease: 'easeInOut' },
        }}
      >
        <BotanicalBranchSVG />
      </motion.div>

      {/* =========================================================================
          BRANCH 2: MIDDLE/BOTTOM RIGHT (Flipped balance in the background)
         ========================================================================= */}
      <motion.div
        style={{
          position: 'absolute',
          top: '42%',
          right: '-60px',
          width: '380px',
          maxWidth: '44vw',
          height: 'auto',
          aspectRatio: '95 / 82',
          opacity: 0.16,
          y: branch2Y,
          transform: 'scaleX(-1) rotate(25deg)', // Flipped & oriented for natural composition
          transformOrigin: 'bottom right',
          filter: 'drop-shadow(0 4px 10px rgba(140, 122, 107, 0.12))',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.16,
          rotate: [23, 27, 23],
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 2, ease: 'easeOut' },
          rotate: { repeat: Infinity, duration: 19, ease: 'easeInOut' },
          y: { repeat: Infinity, duration: 19, ease: 'easeInOut' },
        }}
      >
        <BotanicalBranchSVG />
      </motion.div>
    </div>
  );
}
