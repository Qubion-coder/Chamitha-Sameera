import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { FloatingPetals } from './components/FloatingPetals';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { CeremonyDetails } from './components/CeremonyDetails';
import { CoupleDetails } from './components/CoupleDetails';
// Removed Timeline import
// Removed Gallery import
import { Location } from './components/Location';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { IntroVideo } from './components/IntroVideo';
import { HeroContent } from './components/HeroContent';
import { CornerFlowers } from './components/CornerFlowers';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingDate = new Date('2026-12-16T09:30:00');

  const startMusic = () => {
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      setIsMusicPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden bg-brand-ivory">
      <FloatingPetals />
      
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/paulyudin-wedding-485932.mp3"
        loop
      />

      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroVideo key="intro" onComplete={() => { setShowIntro(false); setShowMain(true); startMusic(); }} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-brand-gold-deep hover:bg-stone-800 hover:text-brand-champagne transition-all active:scale-90 shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-full border border-brand-gold/20 scale-110 group-hover:scale-125 transition-transform" />
              {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>

            <section id="hero">
              <Hero />
            </section>

            <HeroContent />

            <section id="countdown" className="py-16 sm:py-32 relative overflow-hidden bg-gradient-to-br from-[#1D3557] via-[#457B9D] to-[#2C3E50]">
              <CornerFlowers position="top-left" opacity={0.4} scale={1.2} />
              <CornerFlowers position="bottom-right" opacity={0.4} scale={1.2} />
              {/* Premium Background Ambient Glows */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-white/5 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] bg-brand-primary-light/10 blur-[120px] rounded-full" />
              </div>
              
              <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-primary-light/60" />
                  <span className="text-brand-primary-light uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Final Countdown</span>
                  <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-brand-primary-light/60" />
                </div>
                
                <h2 className="text-5xl sm:text-7xl font-display text-white tracking-tight mb-6 drop-shadow-sm">
                  Until We Say <span className="italic text-brand-primary-light font-light">"I Do"</span>
                </h2>
                
                <p className="text-lg sm:text-xl font-serif italic text-blue-100/80 mb-12 sm:mb-16 max-w-2xl text-center leading-relaxed">
                  Time is standing still as we eagerly await the moment our forever begins.
                </p>

                <Countdown targetDate={weddingDate} />
              </div>
            </section>

            <section id="couple" className="py-16 sm:py-32 bg-gradient-to-b from-brand-ivory to-brand-champagne relative overflow-hidden">
              <CornerFlowers position="top-right" opacity={0.6} scale={1.5} />
              <CornerFlowers position="bottom-left" opacity={0.6} scale={1.5} />
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
              <CoupleDetails />
            </section>

            <section id="ceremony" className="py-16 sm:py-32 bg-brand-champagne/40 relative overflow-hidden">
              <CornerFlowers position="all" opacity={0.6} scale={1.3} />
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold-deep/20 to-transparent" />
              <CeremonyDetails />
            </section>

            {/* Timeline section removed entirely as requested */}

            <section id="location" className="py-16 sm:py-32 bg-gradient-to-br from-[#1D3557] to-[#2C3E50] relative overflow-hidden">
              <CornerFlowers position="bottom-left" opacity={0.4} scale={1.2} />
              <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
              <Location />
            </section>

            <section id="rsvp" className="py-16 sm:py-32 bg-brand-ivory relative overflow-hidden">
              <CornerFlowers position="top-right" opacity={0.6} scale={1.6} />
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 pointer-events-none" />
              <RSVPForm />
            </section>

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

