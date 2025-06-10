
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rich-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              {/* Chat bubble + lightning icon */}
              <svg className="w-8 h-8 text-neon-teal" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12C8 8.68629 10.6863 6 14 6H22C25.3137 6 28 8.68629 28 12V18C28 21.3137 25.3137 24 22 24H16L10 28V12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M18 10L14 16H18L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white font-space-grotesk">DVK AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">About</a>
            <a href="#features" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">Features</a>
            <a href="#integrations" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">Integrations</a>
            <a href="#pricing" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">Pricing</a>
            <a href="#careers" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">Careers</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="btn-primary">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-neon-teal transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#about" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">About</a>
              <a href="#features" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">Features</a>
              <a href="#integrations" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">Integrations</a>
              <a href="#pricing" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">Pricing</a>
              <a href="#careers" className="text-gray-300 hover:text-neon-teal transition-colors duration-300">Careers</a>
              <div className="pt-4">
                <Button className="btn-primary w-full">
                  Book a Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
