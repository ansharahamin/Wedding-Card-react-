import { useEffect, useRef, useState } from 'react';
import coverVideo from '../assets/cover-opening-v2.mp4';
import closedCover from '../assets/card-closed.webp';

const REVEAL_AT = 2.4; // seconds, is waqt invitation show hoti hai

export default function Cover({ onReveal, onDone }) {
  const videoRef = useRef(null);
  const revealedRef = useRef(false);
  const [started, setStarted] = useState(false);
  const [fading, setFading] = useState(false);

  // cover ke waqt peeche scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOpen = () => {
    if (started) return;
    setStarted(true);
    videoRef.current.play();
  };

  const handleTimeUpdate = () => {
    if (revealedRef.current) return;
    if (videoRef.current.currentTime >= REVEAL_AT) {
      revealedRef.current = true;
      
      onReveal();
      setFading(true);
    }
  };

  const handleTransitionEnd = (e) => {
    if (e.target === e.currentTarget && fading) onDone();
  };

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`fixed inset-0 z-50 overflow-hidden bg-bg transition-opacity duration-1000 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src={coverVideo}
        poster={closedCover}
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <button
        onClick={handleOpen}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 font-label uppercase tracking-widest text-sm text-maroon border border-maroon px-6 py-2 rounded-full transition-opacity duration-500 ${
          started ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        Tap to Open
      </button>
    </div>
  );
}