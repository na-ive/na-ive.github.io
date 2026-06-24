"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";

export function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !container.current) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.set(container.current, { visibility: "visible" });
      gsap.set(".intro-char", { y: 120, opacity: 0, rotateX: -90 });
      gsap.set(".intro-line", { scaleX: 0 });
      gsap.set(".intro-sub", { opacity: 0, y: 30 });

      gsap.to(".intro-char", {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.5,
        stagger: 0.015,
        ease: "power3.out",
      });

      gsap.to(".intro-line", {
        scaleX: 1,
        duration: 0.35,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.to(".intro-sub", {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 0.35,
        ease: "power2.out",
      });

      gsap.to(container.current, {
        y: "-100%",
        duration: 0.5,
        delay: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          document.body.style.overflow = "";
          setDone(true);
        },
      });
    }, container);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [reduce]);

  if (done) return null;

  const name = "NAUFAL AMMAR";

  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F4F4F5]"
      style={{ visibility: "hidden" }}
    >
      <h1 className="flex justify-center gap-x-0 md:gap-x-3 leading-none px-6 whitespace-nowrap" style={{ perspective: "800px" }}>
        {name.split("").map((char, i) => (
          <span
            key={i}
            className={`intro-char inline-block text-[11vw] md:text-[10vw] lg:text-[10rem] font-black tracking-tighter text-zinc-900 uppercase ${char === " " ? "w-[0.35em]" : ""}`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <div className="intro-line w-24 md:w-32 h-[2px] bg-zinc-900 mt-6 md:mt-8 origin-left" />

      <p className="intro-sub text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold mt-6">
        Web Developer
      </p>
    </div>
  );
}
