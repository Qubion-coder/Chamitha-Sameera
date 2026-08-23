import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

export const CeremonyDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-primary/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-brand-primary uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                The Sacred Union
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-brand-primary/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
              A Celebration of <br />
              <span className="italic font-light text-brand-primary">Tradition & Love</span>
            </h2>

            <p className="text-stone-500/90 font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
              We are honored to invite you to witness our union as we exchange vows in a traditional Poruwa ceremony, surrounded by the beauty of nature and the warmth of our loved ones.
            </p>

            {/* Premium Timeline */}
            <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-primary/40 pl-10 sm:pl-12 py-4">

              {/* Calendar */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                  <Calendar className="w-5 h-5 text-brand-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-gold-deep transition-colors duration-500">Wednesday, December 16</h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">The Year Two Thousand Twenty Six</p>
                </div>
              </div>

              {/* Clock */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                  <Clock className="w-5 h-5 text-brand-gold-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-gold-deep transition-colors duration-500">09:30 AM</h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">Poruwa Ceremony</p>
                </div>
              </div>

              {/* Location */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-primary/30 shadow-lg flex items-center justify-center group-hover:border-brand-primary group-hover:shadow-[0_4px_15px_rgba(70,130,180,0.3)] transition-all duration-500">
                  <MapPin className="w-5 h-5 text-brand-gold-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-gold-deep transition-colors duration-500">Hotel Kashyapa</h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold">Awissawella</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual Composition */}
        <div className="lg:w-1/2 w-full relative mt-16 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Artistic Background Frame */}
            <div className="absolute -inset-4 sm:-inset-6 border-[2px] border-brand-gold/30 rounded-[2rem] sm:rounded-[3rem] -z-10 translate-x-4 sm:translate-x-8 translate-y-4 sm:translate-y-8" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-champagne/40 rounded-[2rem] sm:rounded-[3rem] blur-2xl -z-20" />

            {/* Main Creative Image Frame */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-[6px] sm:border-[8px] border-white shadow-[0_20px_50px_rgba(70,130,180,0.2)] bg-brand-champagne group flex items-center justify-center">
              <img 
                src="/pre/couple-2.jpeg" 
                alt="Ceremony" 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-black/5 pointer-events-none mix-blend-overlay opacity-70 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>

            {/* Premium Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="absolute -bottom-6 sm:-bottom-16 -left-2 sm:-left-16 bg-white/85 backdrop-blur-xl p-4 sm:p-10 shadow-[0_30px_60px_rgba(70,130,180,0.15)] rounded-2xl max-w-[200px] sm:max-w-[340px] border border-white"
            >
              <div className="absolute inset-x-8 -top-px h-[2px] bg-gradient-to-r from-transparent via-brand-gold-deep/60 to-transparent" />
              <div className="relative">
                <Heart className="text-brand-pink w-6 h-6 sm:w-10 sm:h-10 mb-2 sm:mb-5 fill-brand-pink/20 drop-shadow-sm" />
                <Sparkles className="absolute top-0 right-10 w-3 h-3 sm:w-4 sm:h-4 text-brand-gold-deep animate-pulse" />
              </div>
              <h4 className="font-display text-xl sm:text-4xl text-stone-800 mb-1 sm:mb-3 tracking-tight">Going Away</h4>
              <p className="text-stone-500/90 font-serif text-[11px] sm:text-[16px] leading-snug sm:leading-relaxed mb-3 sm:mb-6">
                Join us as we embark on our new journey and wave us goodbye.
              </p>
              <div className="inline-block px-3 sm:px-5 py-1.5 sm:py-2.5 bg-brand-primary/10 rounded-full border border-brand-primary/30 shadow-sm">
                <span className="text-brand-primary font-sans font-bold tracking-[0.1em] sm:tracking-[0.2em] text-[8px] sm:text-[11px] uppercase block drop-shadow-sm">04:15 PM</span>
              </div>
            </motion.div>

            {/* Decorative Floating Circles */}
            <div className="absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:w-32 rounded-full border-[1.5px] border-dashed border-brand-gold/30 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -top-2 -right-2 w-16 sm:w-24 h-16 sm:w-24 rounded-full border-[1.5px] border-brand-gold/20" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

