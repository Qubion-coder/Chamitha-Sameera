import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles, Palette, Utensils, Car } from 'lucide-react';

interface CeremonyDetailsProps {
  event?: string | null;
}

export const CeremonyDetails: React.FC<CeremonyDetailsProps> = ({ event = 'both' }) => {
  const isHomecoming = event === 'homecoming';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-lavender/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

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
              <span className="text-brand-plum uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[11px] sm:text-xs font-bold drop-shadow-sm">
                The Sacred Union
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-brand-plum/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sinhala text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
                <>විවාහ <br /><span className="italic font-light text-brand-plum">උත්සවය</span></>
            </h2>

            <p className="text-stone-500/90 font-sinhala text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
                අපගේ මේ සුන්දර දිනයට ඔබගේ ආශිර්වාදය ලබා දීමට පැමිණෙන මෙන් ආදරයෙන් ආරාධනා කර සිටිමු.
            </p>

            {/* Premium Timeline */}
            <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-lavender/30 pl-10 sm:pl-12 py-4">

              {/* Date */}
              <div className="relative group flex items-center min-h-[48px]">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <Calendar className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sinhala text-2xl sm:text-3xl text-stone-800 group-hover:text-brand-plum transition-colors duration-500">
                    දිනය: 2026 දෙසැම්බර් 16
                  </h4>
                </div>
              </div>

              {/* Location */}
              <div className="relative group flex items-center min-h-[48px]">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <MapPin className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sinhala text-2xl sm:text-3xl text-stone-800 leading-relaxed group-hover:text-brand-plum transition-colors duration-500">
                    <span className="font-semibold text-stone-700">ස්ථානය:</span> Hotel Kashyapa, <br className="hidden sm:block" /> Avissawella
                  </h4>
                </div>
              </div>

              {/* Time */}
              <div className="relative group flex items-center min-h-[48px]">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <Clock className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sinhala text-2xl sm:text-3xl text-stone-800 leading-relaxed group-hover:text-brand-plum transition-colors duration-500">
                    <span className="font-semibold text-stone-700">වේලාව:</span> 9.00 AM - 4.00 PM
                  </h4>
                </div>
              </div>

              {/* Poruwa Ceremony */}
              <div className="relative group flex items-center min-h-[48px]">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <Sparkles className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sinhala text-2xl sm:text-3xl text-stone-800 leading-relaxed group-hover:text-brand-plum transition-colors duration-500">
                    <span className="font-semibold text-stone-700">පෝරුවේ චාරිත්‍ර:</span> 9.30 AM
                  </h4>
                </div>
              </div>

              {/* Registration */}
              <div className="relative group flex items-center min-h-[48px]">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <Heart className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sinhala text-2xl sm:text-3xl text-stone-800 leading-relaxed group-hover:text-brand-plum transition-colors duration-500">
                    <span className="font-semibold text-stone-700">විවාහ ලියාපදිංචිය:</span> 11.30 AM
                  </h4>
                </div>
              </div>

              {/* Going Away */}
              <div className="relative group flex items-center min-h-[48px]">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-lavender/40 shadow-lg flex items-center justify-center group-hover:border-brand-plum group-hover:shadow-[0_4px_15px_rgba(176,137,104,0.3)] transition-all duration-500">
                  <Car className="w-5 h-5 text-brand-plum group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sinhala text-2xl sm:text-3xl text-stone-800 leading-relaxed group-hover:text-brand-plum transition-colors duration-500">
                    <span className="font-semibold text-stone-700">පිටත්ව යාම:</span> 4.15 PM
                  </h4>
                </div>
              </div>


            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
};
