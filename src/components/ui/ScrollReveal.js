'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  baseOpacity = 0,
  enableBlur = false,
  baseRotation = 3,
  blurStrength = 4,
  duration = 1,
  delay = 0,
  className = '',
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: baseOpacity,
          rotateX: baseRotation,
          filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
          y: 30,
        },
        {
          opacity: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [baseOpacity, enableBlur, baseRotation, blurStrength, duration, delay]);

  return (
    <div ref={ref} className={className} style={{ perspective: '1000px' }} {...props}>
      {children}
    </div>
  );
};

export default ScrollReveal;