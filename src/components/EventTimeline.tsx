import { motion } from 'motion/react';
import { Heart, MapPin, Utensils, Sparkles, Clock } from 'lucide-react';

const events = [
  {
    time: '9.30 AM',
    title: 'Poruwa Ceremony',
    description: 'The Poruwa Ceremony commences at 9.30 am at Hotel Kashyapa, Avissawella.',
    icon: Heart,
    color: 'from-rose-400 to-rose-500'
  },
  {
    time: '11.30 AM',
    title: 'Registration',
    description: 'Signing of the marriage registration, followed by the wedding celebration.',
    icon: Sparkles,
    color: 'from-blue-500 to-blue-600'
  },
  {
    time: '4.15 PM',
    title: 'Going Away',
    description: 'We bid farewell as the newlyweds leave to begin their journey together.',
    icon: MapPin,
    color: 'from-amber-400 to-amber-500'
  },
];

export function EventTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 py-12">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-brand-plum)]/0 via-[var(--color-brand-plum)]/50 to-[var(--color-brand-plum)]/0 hidden md:block" />

      <div className="space-y-16 relative">
        {events.map((event, index) => {
          const Icon = event.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal group ${isEven ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Dot on time line */}
              <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-6 h-6 rounded-full bg-white border-4 border-[var(--color-brand-plum)] shadow-[0_0_15px_rgba(98,114,84,0.4)] flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-plum)] group-hover:scale-150 transition-transform" />
                </motion.div>
              </div>

              {/* Side Content: Time for Desktop */}
              <div className="hidden md:flex w-1/2 px-12 justify-end group-even:justify-start">
                <motion.div
                  whileHover={{ x: isEven ? 10 : -10 }}
                  className={`flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--color-brand-plum)]/20 bg-[var(--color-brand-plum)]/5 backdrop-blur-sm shadow-sm`}
                >
                  <Clock className="w-4 h-4 text-[var(--color-brand-plum)]" />
                  <span className="font-serif text-[var(--color-brand-plum)] font-bold text-lg">{event.time}</span>
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="w-full md:w-1/2 pl-10 md:pl-0">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden group-hover:shadow-[0_25px_50px_rgba(24,61,114,0.08)] transition-all duration-500"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--color-brand-plum)]/10 to-transparent rounded-bl-[100px] pointer-events-none transition-transform group-hover:scale-110" />

                  <div className="flex items-start gap-5">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-[var(--color-brand-plum)] to-[var(--color-brand-lavender)] text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      {/* Mobile Time */}
                      <div className="md:hidden flex items-center gap-1.5 text-[var(--color-brand-plum)] font-serif font-bold text-sm mb-2 uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </div>

                      <h3 className="text-2xl font-serif text-[var(--color-brand-plum)] mb-3 group-hover:text-[var(--color-brand-plum)] transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed font-serif text-lg italic opacity-90">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Line Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-brand-plum)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
