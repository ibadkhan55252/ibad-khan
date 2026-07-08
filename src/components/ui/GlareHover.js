'use client';
import { useRef, useState } from 'react';

const GlareHover = ({
  children,
  className = '',
  glareColor = 'rgba(255, 255, 255, 0.03)',
  glareAngle = -30,
  ...props
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(${glareAngle}deg, transparent 20%, ${glareColor} 50%, transparent 80%)`,
          transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
          opacity,
        }}
      />
    </div>
  );
};

export default GlareHover;