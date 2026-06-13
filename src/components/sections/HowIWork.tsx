"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  lines: string[];
}

export function HowIWork({ lines }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !container.current) return;
    
    const ctx = gsap.context(() => {
      const lineEls = gsap.utils.toArray<HTMLElement>(".story-line");
      
      lineEls.forEach((line) => {
        gsap.fromTo(line, 
          { opacity: 0.1, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            }
          }
        );
      });
      
    }, container);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={container} className="py-32 md:py-64 bg-[#F4F4F5] flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto w-full border-b-2 border-zinc-900">
      <div className="w-full mb-24 md:mb-32">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold">Process</p>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col gap-6 md:gap-8 w-full">
        {lines.map((line, i) => (
          <p 
            key={i} 
            className="story-line text-3xl md:text-5xl lg:text-[4rem] tracking-tighter leading-[1.1] font-black text-zinc-900 uppercase"
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
