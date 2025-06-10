'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useLanguage } from '@/lib/i18n/ClientLanguageProvider';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-darker-charcoal relative overflow-hidden">
      {/* Background decorative elements - dimmed */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-teal/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-electric-lime/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Abstract swirl - dimmed and centered */}
        <motion.svg 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-3" 
          viewBox="0 0 400 400"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <path d="M50,200 Q200,50 350,200 Q200,350 50,200" stroke="#00E5C0" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        </motion.svg>
      </motion.div>

      <div className="container mx-auto max-w-4xl relative z-20">
        {/* Floating Chat Bubble Testimonials */}
        <motion.div 
          className="absolute inset-0 z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Testimonial Bubble 1 - Top Left */}
          <motion.div 
            className="absolute -top-16 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] bg-white/10 backdrop-blur-sm border border-neon-teal p-3 sm:p-4 rounded-lg chat-bubble transform -rotate-2 -left-[15vw] sm:-left-[20vw] md:-left-[25vw] lg:-left-[22vw] cursor-grab active:cursor-grabbing"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.2 }}
            drag
            dragConstraints={{ left: -200, right: 200, top: -100, bottom: 100 }}
            dragElastic={0.1}
            dragMomentum={false}
            style={{ zIndex: 10 }}
          >
            <p className="text-gray-200 text-xs sm:text-sm">
              {t('cta.testimonials.1.text')}
            </p>
            <div className="flex items-center mt-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <span className="ml-2 text-[10px] sm:text-xs text-gray-300">{t('cta.testimonials.1.author')}</span>
            </div>
          </motion.div>

          {/* Testimonial Bubble 2 - Top Right */}
          <motion.div 
            className="absolute -top-8 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] bg-white/10 backdrop-blur-sm border border-electric-lime p-3 sm:p-4 rounded-lg chat-bubble transform rotate-1 -right-[15vw] sm:-right-[20vw] md:-right-[25vw] lg:-right-[22vw] cursor-grab active:cursor-grabbing"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.2 }}
            drag
            dragConstraints={{ left: -200, right: 200, top: -100, bottom: 100 }}
            dragElastic={0.1}
            dragMomentum={false}
            style={{ zIndex: 10 }}
          >
            <p className="text-gray-200 text-xs sm:text-sm">
              {t('cta.testimonials.2.text')}
            </p>
            <div className="flex items-center mt-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-400 to-green-400"></div>
              <span className="ml-2 text-[10px] sm:text-xs text-gray-300">{t('cta.testimonials.2.author')}</span>
            </div>
          </motion.div>

          {/* Testimonial Bubble 3 - Bottom Left */}
          <motion.div 
            className="absolute -bottom-16 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] bg-white/10 backdrop-blur-sm border border-bright-violet p-3 sm:p-4 rounded-lg chat-bubble transform rotate-3 -left-[15vw] sm:-left-[20vw] md:-left-[25vw] lg:-left-[22vw] cursor-grab active:cursor-grabbing"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: 4 }}
            transition={{ duration: 0.2 }}
            drag
            dragConstraints={{ left: -200, right: 200, top: -100, bottom: 100 }}
            dragElastic={0.1}
            dragMomentum={false}
            style={{ zIndex: 10 }}
          >
            <p className="text-gray-200 text-xs sm:text-sm">
              {t('cta.testimonials.3.text')}
            </p>
            <div className="flex items-center mt-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-yellow-400 to-red-400"></div>
              <span className="ml-2 text-[10px] sm:text-xs text-gray-300">{t('cta.testimonials.3.author')}</span>
            </div>
          </motion.div>

          {/* Testimonial Bubble 4 - Bottom Right */}
          <motion.div 
            className="absolute -bottom-8 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] bg-white/10 backdrop-blur-sm border border-neon-teal p-3 sm:p-4 rounded-lg chat-bubble transform -rotate-2 -right-[15vw] sm:-right-[20vw] md:-right-[25vw] lg:-right-[22vw] cursor-grab active:cursor-grabbing"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.2 }}
            drag
            dragConstraints={{ left: -200, right: 200, top: -100, bottom: 100 }}
            dragElastic={0.1}
            dragMomentum={false}
            style={{ zIndex: 10 }}
          >
            <p className="text-gray-200 text-xs sm:text-sm">
              {t('cta.testimonials.4.text')}
            </p>
            <div className="flex items-center mt-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-green-400 to-teal-400"></div>
              <span className="ml-2 text-[10px] sm:text-xs text-gray-300">{t('cta.testimonials.4.author')}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Main CTA Content */}
        <motion.div 
          className="text-center py-20 px-8 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('cta.title.prefix')}{' '}
            <motion.span 
              className="text-neon-teal text-glow"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(0,229,192,0.5)",
                  "0 0 20px rgba(0,229,192,0.7)",
                  "0 0 10px rgba(0,229,192,0.5)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {t('cta.title.highlight')}
            </motion.span>
            {t('cta.title.suffix')}
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('cta.subtitle')}
          </motion.p>

          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-neon-teal text-white text-lg px-8 py-7 rounded-lg hover:bg-neon-teal/90 hover:shadow-[0_0_15px_rgba(0,229,192,0.5)] transition-all">
                {t('cta.button')}
              </Button>
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t('cta.footer')}
          </motion.p>
        </motion.div>
      </div>

      {/* Add scroll event listener for parallax effect */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            window.addEventListener('scroll', function() {
              const scrollPosition = window.scrollY;
              document.documentElement.style.setProperty('--scroll', scrollPosition);
            });
          });
        `
      }} />
    </section>
  );
};

export default CTASection;
