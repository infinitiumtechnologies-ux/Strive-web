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
            A flagship brand of <strong>The Strive Mobility Solutions Pvt. Ltd.</strong>, proudly operating under the <strong>Strive Group of Companies</strong>, delivering innovative corporate mobility, employee transportation, and premium travel solutions.
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
                &ldquo;At Strive Wheels, our vision is to redefine corporate mobility through innovation, reliability, and exceptional service. We are committed to delivering safe, intelligent, and technology-driven transportation solutions that empower businesses and ensure every journey is comfortable, punctual, and seamless. Our mission is not just to move people&mdash;but to create a smarter, more sustainable future for corporate mobility.&rdquo;
              </p>
            </div>
            
            <div className="mt-8 border-t border-slate-800/60 pt-6">
              <p className="text-lg font-black text-white">Aluri Bhanuteja</p>
              <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mt-0.5">Founder &amp; Managing Director</p>
              <p className="text-xs font-semibold uppercase tracking-wider mt-1">
                <a 
                  href="https://www.strive-he.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-500 hover:text-brand-400 hover:underline transition-colors"
                >
                  Strive Group Of Companies
                </a>
              </p>
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
              <h3 className="text-xl sm:text-2xl font-black text-white">Driving Employment. Empowering Communities.</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                At Strive Wheels, every journey creates an opportunity. We are committed to generating meaningful employment, nurturing talent, and strengthening the communities we serve. Our vision extends beyond transportation&mdash;we aim to create a sustainable ecosystem that fosters economic growth, professional development, and long-term social impact.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                As we continue to expand, we are dedicated to creating 125+ direct employment opportunities, providing fair compensation, continuous learning, career advancement, and a workplace built on dignity, inclusion, and excellence. Through responsible business practices and community-focused initiatives, we aspire to drive progress for individuals, businesses, and society alike.
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
              The Strive Group of Companies is more than a collection of businesses&mdash;it is the realization of a vision built on resilience, determination, and an unwavering commitment to excellence. Founded by <strong>A. Bhanu Teja</strong>, the Group reflects a journey shaped by perseverance, continuous learning, and the belief that every challenge presents an opportunity for growth.
            </motion.p>

            <motion.p variants={fUp} className="border-l-2 border-brand-500/50 pl-6 my-6 italic text-slate-200">
              Mr. Teja began his professional journey in the hospitality industry in one of its most fundamental roles, gaining first-hand experience in customer service, operational excellence, and the values that define exceptional guest experiences. Every stage of his career contributed to a deeper understanding of business, leadership, and the importance of creating lasting relationships built on trust and service.
            </motion.p>

            <motion.p variants={fUp}>
              Like many entrepreneurs, his path was marked by challenges, setbacks, and valuable lessons. Rather than viewing these experiences as obstacles, he embraced them as opportunities to learn, improve, and grow stronger. These experiences laid the foundation for a vision that would eventually evolve into the Strive Group of Companies.
            </motion.p>

            <motion.p variants={fUp}>
              The name &ldquo;Strive&rdquo; represents far more than a brand&mdash;it reflects a mindset. It symbolizes continuous improvement, resilience, innovation, and the determination to pursue excellence without compromise. It is a commitment to moving forward, embracing change, and consistently exceeding expectations.
            </motion.p>

            <motion.p variants={fUp}>
              Today, the Strive Group of Companies operates across multiple sectors, including corporate mobility, hospitality, MICE services, premium accommodations, food and agriculture, granite, logistics, and technology-driven business solutions. Each business has been established with a common objective: to deliver exceptional quality, create lasting value for customers, and build trusted partnerships that stand the test of time.
            </motion.p>

            <motion.p variants={fUp}>
              Beyond business success, the Group remains deeply committed to creating meaningful social impact. We believe sustainable growth is achieved by investing in people, empowering communities, and creating opportunities that improve lives. As part of our long-term vision, Strive is committed to generating 1,00,000+ direct employment opportunities, providing fair compensation, professional development, and an inclusive workplace where talent can thrive.
            </motion.p>

            <motion.p variants={fUp}>
              As we continue to grow, our purpose remains unchanged&mdash;to build world-class enterprises that combine innovation, integrity, and operational excellence while contributing to India&apos;s economic development and creating lasting value for our customers, employees, partners, and communities.
            </motion.p>

            <motion.div
              variants={fUp}
              className="mt-10 p-6 rounded-xl border border-slate-800 bg-slate-900/30 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="p-4 rounded-full bg-brand-500/10 text-brand-500">
                <Sparkles className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">From Bellboy to Founder. From Employee to Employer.</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A. Teja&apos;s journey reflects the power of resilience, continuous learning, and unwavering determination. What began with humble beginnings has evolved into a vision of building sustainable businesses that create opportunities, empower people, and deliver lasting value. Today, Strive Group of Companies stands as a testament to the belief that with purpose, perseverance, and integrity, every challenge can become the foundation of something extraordinary.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
