import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Corporate Travel Planner',
    content:
      'The booking process was incredibly smooth, and the Porsche Carrera was in absolute pristine condition. Excellent 24/7 client support.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tech Consultant',
    content:
      'Loved the Tesla Model S Plaid. Clean, fully charged, and ready to go. Pickup took less than 5 minutes at the terminal plaza.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 3,
    name: 'Amanda Ross',
    role: 'Freelance Designer',
    content:
      'Extremely professional team. Transparent rates with zero hidden charges. Will definitely rent from StriveWheels again!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
  },
];

export const Testimonials: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-slate-900/30 border-t border-slate-900 overflow-hidden" data-testid="testimonials">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center relative">
        {/* Title */}
        <div className="space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full"
            >
              <Card className="border-slate-800 bg-slate-950/50 p-8 sm:p-12 shadow-xl relative max-w-2xl mx-auto flex flex-col items-center">
                <Quote className="absolute top-6 left-6 h-10 w-10 text-brand-500/10 pointer-events-none" />
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{current.content}"
                </p>
                <div className="flex items-center gap-4 text-left">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-12 w-12 rounded-full object-cover border border-brand-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{current.name}</h4>
                    <p className="text-xs text-slate-500">{current.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-950 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Previous testimonial"
            data-testid="testimonial-prev"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-950 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Next testimonial"
            data-testid="testimonial-next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
