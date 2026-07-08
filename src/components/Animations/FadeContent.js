'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FadeContent({
  children,
  blur = false,
  duration = 1000,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startPct = (1 - threshold) * 100;
    const getSeconds = val => (val > 10 ? val / 1000 : val);

    gsap.set(el, { autoAlpha: initialOpacity, filter: blur ? 'blur(10px)' : 'blur(0px)' });

    const tl = gsap.timeline({ paused: true, delay: getSeconds(delay) });
    tl.to(el, { autoAlpha: 1, filter: 'blur(0px)', duration: getSeconds(duration), ease });

    const st = ScrollTrigger.create({
      trigger: el,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => { st.kill(); tl.kill(); gsap.killTweensOf(el); };
  }, [blur, duration, ease, delay, threshold, initialOpacity]);

  return <div ref={ref} className={className} {...props}>{children}</div>;
}