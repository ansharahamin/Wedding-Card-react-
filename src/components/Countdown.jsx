// src/components/Countdown.jsx
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gatevedio from '../assets/wedding_gate_only.mp4';
import { weddingData } from '../data/weddingData';
import  useCountdown  from '../hooks/useCountdown';
gsap.registerPlugin(ScrollTrigger);
export default function Countdown() {
  const ref = useRef(null);
  const daysLeft = useCountdown(weddingData.targetDate);

  useGSAP(() => {
    gsap.from('.countdown-text', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 75%',
      },
    });
  }, { scope: ref });

return (
  <section
    ref={ref}
    className="countdown-section relative w-full min-h-[260px] overflow-hidden flex flex-col items-center justify-center text-center"
  >
    <p className="countdown-text only-text font-heading italic text-[30px] leading-none text-[#5d6341]">
      Only
    </p>

    <p className="countdown-text number-text font-heading italic text-[58px] leading-none text-[#5d6341] mt-8">
      {daysLeft}
    </p>

    <p className="countdown-text days-text font-label uppercase tracking-[0.35em] text-[9px] text-[#b08b67] mt-7">
      Day To Go
    </p>
    <video
  src={gatevedio}
  className="w-full h-auto block"
  autoPlay
  muted
  playsInline
/>
  </section>
);
}