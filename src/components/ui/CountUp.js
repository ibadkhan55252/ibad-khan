'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CountUp = ({
  target,
  duration = 2,
  delay = 0,
  className = '',
  suffix = '',
  ...props
}) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        onUpdate: () => setValue(Math.round(obj.val)),
      });
    }, el);

    return () => ctx.revert();
  }, [target, duration, delay]);

  return (
    <span ref={ref} className={className} {...props}>
      {value}{suffix}
    </span>
  );
};

export default CountUp;