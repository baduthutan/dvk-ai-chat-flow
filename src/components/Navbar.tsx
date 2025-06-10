import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LanguageToggler } from './LanguageToggler';
import { useLanguage } from '@/lib/i18n/ClientLanguageProvider';

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-darker-charcoal/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-2xl font-bold text-white">DVK AI</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.features')}
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              {t('nav.about')}
            </a>
          </motion.div>

          {/* CTA and Language Toggle */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="hidden md:block">
              <LanguageToggler />
            </div>
            <Button className="bg-neon-teal text-white hover:bg-neon-teal/90">
              {t('nav.getStarted')}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 