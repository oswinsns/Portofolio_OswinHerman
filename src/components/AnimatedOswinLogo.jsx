import React, { useEffect, useRef } from 'react';
import { animate, svg, stagger } from 'animejs';

export default function AnimatedOswinLogo({ width = '100%', maxWidth = '260px' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Target all animated stroke paths inside this container
    const targets = containerRef.current.querySelectorAll('.oswin-drawable');
    if (!targets || targets.length === 0) return;

    // Create drawable proxies using Anime.js v4
    const drawables = svg.createDrawable(targets);

    // Run the signature Anime.js draw animation
    const animation = animate(drawables, {
      draw: ['0 0', '0 1', '1 1'],
      ease: 'inOutQuad',
      duration: 2200,
      delay: stagger(120),
      loop: true,
    });

    return () => {
      if (animation && animation.pause) {
        animation.pause();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        width,
        maxWidth,
      }}
      title="Oswin"
    >
      <svg
        viewBox="0 0 415 105"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: '100%',
          height: 'auto',
          overflow: 'visible',
          display: 'block',
        }}
      >
        {/* =========================================================================
            LAYER 1: FAINT GHOST GUIDE (Soft outline like the Anime.js hero background)
           ========================================================================= */}
        <g stroke="var(--first-color, #8C7A6B)" strokeWidth="3" opacity="0.18">
          {/* O */}
          <path d="M 50 18 C 72 18, 86 33, 86 52 C 86 71, 72 86, 50 86 C 28 86, 14 71, 14 52 C 14 33, 28 18, 50 18 Z" />
          {/* s */}
          <path d="M 140 38 C 135 33, 126 31, 117 31 C 105 31, 98 37, 98 44 C 98 53, 110 56, 125 59 C 139 62, 146 66, 146 73 C 146 81, 136 86, 118 86 C 106 86, 97 81, 94 74" />
          {/* w */}
          <path d="M 166 32 L 178 74 C 182 82, 190 85, 198 85 C 206 85, 212 81, 216 73 L 224 50 L 232 73 C 236 81, 242 85, 250 85 C 258 85, 266 82, 270 74 L 282 32" />
          {/* i */}
          <path d="M 304 32 L 304 86" />
          <path d="M 304 15 L 304 19" strokeWidth="4" />
          {/* n */}
          <path d="M 328 86 L 328 32 M 328 47 C 334 37, 345 32, 358 32 C 372 32, 378 41, 378 56 L 378 86" />
          {/* Dot . */}
          <path d="M 398 83 L 398 86" strokeWidth="4.5" />
        </g>

        {/* =========================================================================
            LAYER 2: ACTIVE ANIME.JS DRAWABLE PATHS (The luminous moving line!)
           ========================================================================= */}
        <g
          stroke="var(--first-color, #8C7A6B)"
          strokeWidth="3.4"
          style={{
            filter: 'drop-shadow(0 0 5px rgba(140, 122, 107, 0.45))',
          }}
        >
          {/* O */}
          <path
            className="oswin-drawable"
            d="M 50 18 C 72 18, 86 33, 86 52 C 86 71, 72 86, 50 86 C 28 86, 14 71, 14 52 C 14 33, 28 18, 50 18 Z"
          />
          {/* s */}
          <path
            className="oswin-drawable"
            d="M 140 38 C 135 33, 126 31, 117 31 C 105 31, 98 37, 98 44 C 98 53, 110 56, 125 59 C 139 62, 146 66, 146 73 C 146 81, 136 86, 118 86 C 106 86, 97 81, 94 74"
          />
          {/* w */}
          <path
            className="oswin-drawable"
            d="M 166 32 L 178 74 C 182 82, 190 85, 198 85 C 206 85, 212 81, 216 73 L 224 50 L 232 73 C 236 81, 242 85, 250 85 C 258 85, 266 82, 270 74 L 282 32"
          />
          {/* i stem */}
          <path
            className="oswin-drawable"
            d="M 304 32 L 304 86"
          />
          {/* i dot */}
          <path
            className="oswin-drawable"
            d="M 304 15 L 304 19"
            strokeWidth="4"
          />
          {/* n */}
          <path
            className="oswin-drawable"
            d="M 328 86 L 328 32 M 328 47 C 334 37, 345 32, 358 32 C 372 32, 378 41, 378 56 L 378 86"
          />
          {/* Dot . */}
          <path
            className="oswin-drawable"
            d="M 398 83 L 398 86"
            strokeWidth="4.5"
          />
        </g>
      </svg>
    </div>
  );
}
