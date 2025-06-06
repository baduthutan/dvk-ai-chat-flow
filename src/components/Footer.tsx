
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <svg className="w-8 h-8 text-neon-teal" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12C8 8.68629 10.6863 6 14 6H22C25.3137 6 28 8.68629 28 12V18C28 21.3137 25.3137 24 22 24H16L10 28V12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 10L14 16H18L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white font-space-grotesk">DVK AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Human-Level AI Agents for Modern Businesses.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-neon-teal transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-teal transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 w-full">
            <p className="text-gray-500 text-sm">
              © 2025 DVK AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
