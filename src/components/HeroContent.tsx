import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { CornerFlowers } from './CornerFlowers';

export const HeroContent: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const guest = urlParams.get('guest');
  const prefix = urlParams.get('prefix');

  return (
    <section className="relative min-h-screen py-24 sm:py-32 flex items-center justify-center overflow-hidden">
      <CornerFlowers position="all" opacity={0.8} scale={1.8} />
      {/* Background Image with Elegant Overlays */}
      <div className="absolute inset-0 z-0 bg-brand-ivory">
        <div className="absolute inset-0 bg-brand-ivory/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-primary/5" />
        <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Subtle top decoration */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-brand-primary/60 to-transparent" />
            <Heart className="w-5 h-5 text-brand-pink fill-brand-pink/40 drop-shadow-sm" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-brand-primary/60 to-transparent" />
          </div>

          <span className="text-brand-primary uppercase tracking-[0.6em] text-xs sm:text-sm font-medium mb-10 block drop-shadow-sm font-sans">
            The Celebration of Love
          </span>

          <div className="relative mb-12 w-full flex justify-center">
            <h1 className="relative text-6xl sm:text-8xl lg:text-9xl font-display text-stone-800 leading-tight drop-shadow-sm">
              Chamitha <br className="sm:hidden" />
              <span className="text-brand-primary-light italic font-light mx-4 sm:mx-8 text-5xl sm:text-7xl lg:text-8xl inline-block -translate-y-2 sm:-translate-y-4">&</span>
              <br className="sm:hidden" />
              Sameera
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="hidden sm:block h-[1px] w-24 bg-gradient-to-r from-transparent to-brand-primary/40" />
            <div className="flex flex-col items-center gap-4">
              {guest && (
                <span className="text-3xl sm:text-4xl font-display text-brand-primary mb-2 drop-shadow-sm">
                  Dear {prefix ? `${prefix} ` : ''}{guest},
                </span>
              )}
              <p className="text-xl sm:text-3xl font-serif italic text-stone-700 tracking-wide px-4 text-center max-w-2xl leading-relaxed">
                Together with our families, we joyfully invite you to join us
              </p>
            </div>
            <div className="hidden sm:block h-[1px] w-24 bg-gradient-to-l from-transparent to-brand-primary/40" />
          </div>

          {/* Enhanced Date pill with premium glass effect */}
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/40 via-brand-primary-light/40 to-brand-primary/40 rounded-full blur-[8px] opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 transform group-hover:scale-105" />
            <div className="relative px-8 sm:px-16 py-4 sm:py-6 bg-white/70 backdrop-blur-lg border border-brand-primary/50 rounded-full shadow-[0_8px_30px_rgba(70,130,180,0.1)] flex items-center justify-center">
              <span className="relative text-2xl sm:text-4xl font-serif text-brand-primary tracking-[0.3em] font-medium drop-shadow-sm flex items-center gap-4">
                <Sparkles className="w-4 h-4 text-brand-primary-light" />
                16 . 12 . 2026
                <Sparkles className="w-4 h-4 text-brand-primary-light" />
              </span>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 w-full flex justify-center">
            <div className="relative w-[300px] sm:w-[400px] lg:w-[500px] aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-[6px] sm:border-[8px] border-white/80 shadow-[0_20px_50px_rgba(70,130,180,0.15)] group">
              <img 
                src="/pre/couple-3.jpeg" 
                alt="Couple" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(70,130,180,0.1)] pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
