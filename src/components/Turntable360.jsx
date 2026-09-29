import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TOTAL_FRAMES = 8;

export default function Turntable360() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isEntering, setIsEntering] = useState(true);
  const [clickBounce, setClickBounce] = useState(0);
  const circleRef = useRef(null);

  // Preload images and trigger welcome slide-down + 360 spin
  useEffect(() => {
    // 1. Eagerly preload all 8 angle images
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/angle_images/angle${i}.png`;
    }

    // 2. Trigger slide down into circle + concurrent 360 spin
    let spinInterval;
    const startTimer = setTimeout(() => {
      setIsEntering(false);

      let step = 0;
      spinInterval = setInterval(() => {
        step++;
        setFrameIndex(step % TOTAL_FRAMES);
        if (step >= TOTAL_FRAMES) {
          clearInterval(spinInterval);
          setFrameIndex(0);
        }
      }, 100);
    }, 450);

    return () => {
      clearTimeout(startTimer);
      if (spinInterval) clearInterval(spinInterval);
    };
  }, []);

  // Subtle 3D tilt on mouse hover
  const handleMouseMove = (e) => {
    if (!circleRef.current) return;
    const rect = circleRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const tiltX = -(y / (rect.height / 2)) * 7;
    const tiltY = (x / (rect.width / 2)) * 7;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Replay spin & slide down on click
  const handleCircleClick = () => {
    setClickBounce((prev) => prev + 1);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setFrameIndex(step % TOTAL_FRAMES);
      if (step >= TOTAL_FRAMES) {
        clearInterval(interval);
        setFrameIndex(0);
      }
    }, 85);
  };

  return (
    <div 
      className="turntable-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        userSelect: 'none',
        perspective: '1000px',
        width: '100%',
        maxWidth: '380px',
        margin: '0 auto',
      }}
    >
      {/* 3D Turntable Circle with strict overflow: hidden so avatar is perfectly contained */}
      <motion.div
        ref={circleRef}
        onClick={handleCircleClick}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? 1.025 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          borderRadius: '50%',
          backgroundColor: 'var(--first-color)',
          position: 'relative',
          overflow: 'hidden', // Kept strictly hidden so the avatar ends up inside the circle
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          boxShadow: isHovered 
            ? '0 25px 60px -10px rgba(140, 122, 107, 0.55), 0 0 35px rgba(140, 122, 107, 0.25)' 
            : '0 18px 45px -12px rgba(140, 122, 107, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer',
        }}
        whileTap={{ scale: 0.98 }}
        title="Click to replay 360° spin"
      >
        {/* Ambient Lighting Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.35), transparent 70%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* 
          Avatar Slide-Down Layer:
          - Starts higher up (-160px)
          - Slides down smoothly along Y into the circle
          - Stays strictly inside the circle (overflow: hidden)
          - Perfectly horizontally centered via flexbox
        */}
        <motion.div
          key={clickBounce}
          initial={{ y: -160, opacity: 0 }}
          animate={{
            y: isEntering ? -160 : 0,
            opacity: 1,
          }}
          transition={{
            y: { type: 'spring', damping: 15, stiffness: 75, mass: 1 },
            opacity: { duration: 0.25 },
          }}
          style={{
            width: '82%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginBottom: '-2%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <motion.img
            key={frameIndex}
            initial={{ opacity: 0.92 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.06 }}
            src={`/angle_images/angle${frameIndex + 1}.png`}
            alt="Oswin Herman"
            draggable="false"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              userSelect: 'none',
              filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.16))',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
