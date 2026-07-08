'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeContent from '@/components/ui/FadeContent';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    role: 'Frontend Developer',
    company: 'Nanolix Digital',
    type: 'Part-time · Remote',
    period: 'May 2025 — Present',
    description: [
      'Building high-performance, SEO-optimized sites with Next.js App Router and Headless WordPress',
      'Developing modular React components for scalable architecture',
      'Optimizing Lighthouse scores through image optimization and lazy loading',
    ],
    skills: ['Next.js', 'React', 'WordPress REST API', 'Tailwind CSS', 'Swiper.js', 'React Hook Form'],
  },
  {
    role: 'Frontend Developer',
    company: 'Techriv Solutions',
    type: 'Full-time · On-site',
    period: 'May 2024 — Mar 2025',
    description: [
      'Built responsive web pages following modern UI/UX principles',
      'Developed and tested mobile-first email templates',
      'Enhanced user interactions with HTML, CSS, and JavaScript',
    ],
    skills: ['JavaScript', 'Bootstrap', 'HTML/CSS', 'jQuery', 'Email Templates', 'Responsive Design'],
  },
];

export default function ExperienceSection() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineRef.current?.querySelectorAll('.timeline-line'),
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeContent blur>
          <p className="text-xs font-mono text-ink-muted tracking-[0.2em] uppercase mb-3">
            Experience
          </p>
          <h2 className="font-[500] text-[32px] sm:text-[40px] leading-[1.13] tracking-[-1px] mb-16 text-ink">
            Where I&apos;ve worked
          </h2>
        </FadeContent>

        <div ref={timelineRef} className="relative space-y-8">
          <div className="timeline-line absolute left-[19px] top-0 w-[1.5px] bg-hairline origin-top h-full" />

          {EXPERIENCES.map((exp, i) => (
            <FadeContent key={exp.company} delay={i * 0.15}>
              <motion.div
                className="group relative pl-14"
                whileHover={{ x: 4, transition: { duration: 0.25, ease: 'easeOut' } }}
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-surface-1 border border-hairline flex items-center justify-center text-ink font-medium text-sm z-10 group-hover:bg-surface-2 transition-colors">
                  {exp.company[0]}
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-surface-1 border border-hairline">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-[18px] font-medium leading-[1.2] tracking-[-0.3px] text-ink">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-ink-muted mt-0.5">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-ink-muted/50 whitespace-nowrap shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="text-sm text-ink-muted flex items-start gap-2 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent-blue/50 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-1 rounded bg-surface-2 text-ink-muted/70 border border-hairline"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}