// src/components/Hero.jsx
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import heroImg from '../assets/hero-end-frame.webp';
import { weddingData } from '../data/weddingData';

export default function Hero() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from('.hero-text', {
      opacity: 0,
      y: 24,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.25,
      delay: 0.4,
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="@container relative w-full max-w-[480px] mx-auto">
      <img src={heroImg} alt="" className="block w-full h-auto" />

      {/* text arch ke khaali hisse mein, percentage se position hota hai */}
      <div className="absolute left-0 right-0 top-[47%] flex flex-col items-center text-center px-[18%]">
        <p className="hero-text font-label uppercase tracking-[0.25em] text-gold text-[2.6cqw]">
          {weddingData.tagline}
        </p>

        <h1 className="hero-text font-heading italic text-[#5b6a4a] text-[10.5cqw] leading-none mt-[3cqw]">
          {weddingData.brideName} &amp; {weddingData.groomName}
        </h1>

        <p className="hero-text font-label uppercase tracking-[0.2em] text-gold text-[2.4cqw] mt-[3cqw]">
          {weddingData.date}
        </p>
      </div>
    </section>
  );
}