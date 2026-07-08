'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = 'power3.out',
  initialOpacity = 0,
  delay = 0,
  className = '',
  threshold = 0.1,
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
          opacity: initialOpacity,
          y: 30,
          filter: blur ? 'blur(10px)' : 'blur(0px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: duration / 1000,
          delay,
          ease: easing,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [blur, duration, easing, initialOpacity, delay, threshold]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;