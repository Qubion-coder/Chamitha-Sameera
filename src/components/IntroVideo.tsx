import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStart = () => {
    setHasStarted(true);
    // Use a small timeout to ensure the video element is rendered before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false; // Unmute since user interacted
        videoRef.current.play().catch(err => {
          console.error("Video play failed:", err);
          // Fallback: try muted play if unmuted fails
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-gradient-to-br from-[#1D3557] via-[#457B9D] to-[#2C3E50] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {!hasStarted ? (
          <motion.div 
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            transition={{ duration: 1.2 }}
            className="relative z-10 flex flex-col items-center gap-10 px-6 text-center"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative"
            >
              {/* Premium Background Ambient Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-brand-primary-light/5 blur-[100px] rounded-full pointer-events-none" />
              
              <h2 className="relative text-brand-primary-muted uppercase tracking-[0.7em] text-[10px] sm:text-xs font-bold mb-4 sm:mb-8 drop-shadow-md">
                Wedding Invitation
              </h2>
              <h1 className="relative text-6xl sm:text-[9rem] font-display text-white tracking-widest mb-4 drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                CHAMITHA <span className="text-brand-primary-light italic font-light">&</span> SAMEERA
              </h1>
              <div className="w-32 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto mt-10 shadow-[0_0_15px_rgba(70,130,180,0.5)]" />
            </motion.div>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              onClick={handleStart}
              className="group relative px-20 py-6 bg-white/5 hover:bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full transition-all duration-700 hover:scale-110 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-primary-deep/10 to-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-center gap-5">
                <span className="text-white tracking-[0.5em] font-bold text-[11px] uppercase drop-shadow-md">Enter Invitation</span>
                <Play className="w-4 h-4 text-brand-primary-light fill-brand-primary-light transition-transform group-hover:scale-125" />
              </div>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative w-full h-full bg-black"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              autoPlay
              preload="auto"
              onEnded={onComplete}
              onError={(e) => {
                console.error("Video error event:", e);
                setTimeout(onComplete, 1000);
              }}
            >
              <source src="/Video Project 7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-60" />
      </div>
    </div>
  );
};
