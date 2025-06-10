import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo and Tagline */}
          <motion.div 
            className="flex flex-col items-center space-y-3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="relative"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-8 h-8 text-neon-teal" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M8 12C8 8.68629 10.6863 6 14 6H22C25.3137 6 28 8.68629 28 12V18C28 21.3137 25.3137 24 22 24H16L10 28V12Z" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M18 10L14 16H18L16 22" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-white font-space-grotesk"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                DVK AI
              </motion.span>
            </motion.div>
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Human-Level AI Agents for Modern Businesses.
            </motion.p>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-neon-teal transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-neon-teal transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="border-t border-gray-800 pt-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.p 
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              © 2025 DVK AI. All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
