"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  data: {
    title: string;
    summary: string;
    repo?: string;
    showStars?: boolean;
    technologies?: string[];
  };
}

export function ZAxisCascade({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.95,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={ref} className="relative w-full bg-[#F4F4F5]">
      {/* Intro section for projects */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48 mb-24 border-b-2 border-zinc-900">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6 font-bold">Selected Work</p>
        <h2 className="text-4xl md:text-6xl tracking-tighter font-black text-zinc-900 max-w-[20ch] leading-[1.1] uppercase">
          SMALL IDEAS TO <br/>
          <span className="text-zinc-400">COMPLETE SYSTEMS.</span>
        </h2>
      </div>

      {projects.map((project, i) => (
        <div
          key={project.id}
          className="stack-card sticky top-0 min-h-[100dvh] w-full flex items-center justify-center px-4 md:px-8 lg:px-12 pb-16 pt-20 lg:pb-24 lg:pt-24 bg-[#F4F4F5]"
        >
          {/* Brutalist Sharp Card */}
          <div className="w-full max-w-[1400px] h-auto min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] bg-white border-[3px] border-zinc-900 shadow-[8px_8px_0px_0px_rgba(9,9,11,1)] overflow-hidden relative flex flex-col lg:flex-row group transition-all duration-300">
            
            {/* Content Side */}
            <div className="w-full lg:w-[45%] p-6 md:p-10 xl:p-16 flex flex-col justify-center z-10 relative bg-white border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-zinc-900 order-2 lg:order-1">
              <div className="relative z-10 w-full">
                <div className="flex items-start justify-between gap-4 mb-4 lg:mb-6">
                  <h3 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl tracking-tighter font-black text-zinc-900 uppercase pr-2 min-w-0 break-words">
                    {project.data.title}
                  </h3>
                  {project.data.repo && (
                    <a 
                      href={`https://github.com/${project.data.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.data.title} on GitHub`}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-zinc-900 flex items-center justify-center transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1 mt-1"
                    >
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="text-base md:text-lg lg:text-xl text-zinc-600 font-medium leading-relaxed mb-8 lg:mb-12">
                  {project.data.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.data.technologies?.map(tech => (
                    <span key={tech} className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-900 border-[1.5px] border-zinc-900 bg-zinc-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative lg:w-[55%] aspect-video md:aspect-[16/7] lg:aspect-auto w-full bg-zinc-100 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 order-1 lg:order-2 border-b-[3px] lg:border-b-0 border-zinc-900 flex-shrink-0 lg:flex-shrink">
              <img 
                src={`/images/${project.id}.png`} 
                alt={project.data.title}
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
