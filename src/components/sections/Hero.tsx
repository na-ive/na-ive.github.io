"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";

interface Props {
  children?: React.ReactNode;
}

export function Hero({ children }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !container.current) return;
    
    const ctx = gsap.context(() => {
      // Fade up lines
      gsap.from(".hero-line", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });
      
      gsap.fromTo(".hero-sub", 
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.8 }
    );
    }, container);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={container} className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto w-full pt-24 pb-12">
      <div className="flex flex-col gap-8 md:gap-12 relative z-10">
        {children}
      </div>
      
      <div className="hero-sub absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-900 font-bold">
        <span>Scroll to explore</span>
        <div className="w-12 h-[1.5px] bg-zinc-900"></div>
      </div>
    </section>
  );
}
