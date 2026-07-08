'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeContent from '@/components/ui/FadeContent';
import CountUp from '@/components/ui/CountUp';

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: 'React / Next.js', level: 90 },
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Bootstrap', level: 80 },
  { name: 'WordPress / Headless', level: 80 },
  { name: 'HTML / CSS', level: 95 },
];

const EXTRA_SKILLS = [
  { label: 'GSAP', level: 'Advanced' },
  { label: 'Motion', level: 'Advanced' },
  { label: 'jQuery', level: 'Advanced' },
  { label: 'REST API', level: 'Proficient' },
  { label: 'Git / GitHub', level: 'Proficient' },
  { label: 'Responsive Design', level: 'Advanced' },
  { label: 'Performance', level: 'Proficient' },
  { label: 'Figma', level: 'Proficient' },
];

export default function SkillsSection() {
  const barsRef = useRef(null);

  useEffect(() => {
    if (!barsRef.current) return;

    const ctx = gsap.context(() => {
      const bars = barsRef.current.querySelectorAll('.skill-bar-fill');
      gsap.set(bars, { width: 0 });
      gsap.to(bars, {
        width: (i) => `${SKILLS[i].level}%`,
        duration: 1.4,
        stagger: 0.08,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: barsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, barsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeContent blur>
          <p className="text-xs font-mono text-ink-muted tracking-[0.2em] uppercase mb-12">
            Skills
          </p>
        </FadeContent>

        <div className="grid md:grid-cols-2 gap-12">
          <div ref={barsRef}>
            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <FadeContent key={skill.name} delay={i * 0.06}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[15px] text-ink tracking-[-0.15px]">{skill.name}</span>
                    <span className="text-[13px] font-mono text-ink-muted font-medium">
                      <CountUp target={skill.level} suffix="%" duration={1.5} />
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-surface-1 overflow-hidden">
                    <div
                      className="skill-bar-fill h-full rounded-full bg-ink"
                      style={{ width: 0 }}
                    />
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 content-start">
            {EXTRA_SKILLS.map((item, i) => (
              <FadeContent key={item.label} delay={0.1 + i * 0.06}>
                <div className="px-4 py-3.5 rounded-xl border border-hairline bg-surface-1 text-center hover:bg-surface-2 transition-colors">
                  <div className="text-sm text-ink font-medium">{item.label}</div>
                  <div className="text-[11px] text-ink-muted/60 mt-1 font-mono">{item.level}</div>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}