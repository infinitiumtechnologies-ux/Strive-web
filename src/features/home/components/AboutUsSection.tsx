import * as React from 'react';
import { motion } from 'framer-motion';
import { Quote as QuoteIcon, Target, Building, Sparkles } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  // Animation variants
  const fUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 60, damping: 15 } }
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section id="aboutus" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900" data-testid="about-us-section">
      {/* ════════════════════════════════════
          HERO BANNER
      ════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-slate-950 pb-16">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Glow indicators */}
        <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] bg-brand-500/10 pointer-events-none" />
        <div className="absolute -right-48 top-1/3 w-[500px] h-[500px] rounded-full blur-[140px] bg-amber-500/5 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-xs font-semibold text-brand-400 tracking-wider uppercase"
          >
            <Building className="h-3 w-3" />
            Strive Group of Companies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black tracking-tight"
          >
            About{' '}
            <span className="bg-gradient-to-r from-brand-400 to-amber-500 bg-clip-text text-transparent">
              Strive Wheels
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A product of <strong>Strive Mobility Solutions Pvt. Ltd.</strong> and the broader 
            <strong> Strive Group of Companies</strong>, dedicated to redefining corporate transit 
            and premium travel mobility.
          </motion.p>
        </div>
      </div>

      {/* ════════════════════════════════════
          FOUNDER & VISION SECTION
      ════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Founder Quote */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={fUp}
            className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-slate-900 bg-slate-900/30 relative overflow-hidden"
          >
            {/* Giant quote decorator */}
            <QuoteIcon className="absolute -right-6 -top-6 h-32 w-32 text-slate-850/10 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 text-brand-500">
                <QuoteIcon className="h-6 w-6" />
                <span className="text-xs font-bold uppercase tracking-widest">Founder's Message</span>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed italic">
                "As the founder of Strive-he, I envisioned a hospitality company that not only meets but exceeds expectations, creating unforgettable experiences for every guest. With dedication to excellence and a passion for hospitality, we strive to make every moment with us truly exceptional."
              </p>
            </div>
            
            <div className="mt-8 border-t border-slate-800/60 pt-6">
              <p className="text-lg font-black text-white">Bhanu Teja</p>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mt-0.5">CEO & Founder</p>
            </div>
          </motion.div>

          {/* Corporate Vision */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={fUp}
            className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-slate-900 bg-slate-900/30 relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-amber-500">
                <Target className="h-6 w-6" />
                <span className="text-xs font-bold uppercase tracking-widest">Our Vision</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Employment & Community Growth</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                We are committed to creating meaningful employment opportunities and fostering economic growth within our community. As part of our mission, we aim to provide stable and rewarding careers, ensuring fair wages and benefits for a minimum of 125+ individuals.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                By investing in our workforce, we strive to not only support the livelihoods of our employees but also contribute to the prosperity and well-being of our society as a whole.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/60 pt-6">
              <div>
                <p className="text-3xl font-black text-brand-500">125+</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Stable Careers Targeted</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">Local Empowerment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════
          THE STORY (SINCE 2016)
      ════════════════════════════════════ */}
      <div className="py-20 bg-slate-900/10 border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase">
              Since 2016
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Story of Perseverance
            </h3>
            <div className="h-0.5 w-16 bg-brand-500 mx-auto rounded-full mt-4" />
          </div>

          {/* Narrative Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto"
          >
            <motion.p variants={fUp}>
              The Strive Group of Companies is more than just a collection of businesses—it is a testament to the power of vision, dedication, and unwavering persistence. At its heart is <strong>Mr. Bhanu Teja</strong>, a man whose journey from humble beginnings to becoming a visionary entrepreneur is as inspiring as it is remarkable.
            </motion.p>

            <motion.p variants={fUp} className="border-l-2 border-brand-500/50 pl-6 my-6 italic text-slate-200">
              Mr. Teja’s story began in the most modest of roles, starting his career as a bellboy, where he learned the intricacies of business operations and the art of customer service from the ground up. Despite facing numerous challenges, rejections, and failures along the way, his passion for hospitality and a deep desire to create memorable experiences never wavered. Through hard work and perseverance, he gained invaluable experience and knowledge, transforming every setback into a stepping stone for his future.
            </motion.p>

            <motion.p variants={fUp}>
              With years of learning and a deep understanding of both success and failure, Mr. Teja sought to create something more—a platform that would not only meet but exceed expectations, a company that would redefine the very essence of hospitality. It was from this vision that the word <strong>“Strive”</strong> was born. Strive was not just a name—it was a symbol of Mr. Teja’s relentless determination, his constant “try,” and his unwavering belief that no dream is too big when you’re committed to pushing beyond your limits.
            </motion.p>

            <motion.p variants={fUp}>
              The Strive Group of Companies was built on the foundation of this relentless spirit, and today, it stands as a beacon of excellence in the hospitality and business sectors. From the heart of MICE and hospitality services to premium granite offerings and wholesome, homemade food, Strive encompasses a range of ventures that reflect Mr. Teja’s vision of providing exceptional experiences and products to every individual.
            </motion.p>

            <motion.p variants={fUp}>
              However, what truly sets Strive apart is its deep commitment to people. Mr. Teja’s vision extended beyond just business success—he sought to create meaningful employment opportunities, to foster economic growth within his community, and to build a company that would not only thrive but uplift those around it. Strive is dedicated to creating stable, rewarding careers for its employees, offering fair wages and benefits to a minimum of 125+ individuals. By investing in the workforce, Strive is not just shaping the future of its own business, but also contributing to the prosperity and well-being of society as a whole.
            </motion.p>

            <motion.div
              variants={fUp}
              className="mt-10 p-6 rounded-xl border border-slate-800 bg-slate-900/30 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="p-4 rounded-full bg-brand-500/10 text-brand-500">
                <Sparkles className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">From Bellboy to Founder, Employee to Employer</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mr. Bhanu Teja’s journey is a reminder that true success is born from perseverance, passion, and an unwavering belief in oneself. Strive is not just a company—it’s a reflection of a dream realized, a legacy of hard work, and a commitment to creating a brighter, more prosperous future for all.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
