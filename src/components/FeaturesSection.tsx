
import React from 'react';
import { Search, TrendingUp, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FeaturesSection = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: feature1Ref, isInView: feature1InView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: feature2Ref, isInView: feature2InView } = useScrollAnimation({ threshold: 0.3 });
  const { ref: feature3Ref, isInView: feature3InView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-rich-black to-darker-charcoal">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 scroll-fade-in ${headerInView ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Agents That Convert Customers, Integrated Into Your Messaging Channels
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Our AI assistants help scale sales on channels like WhatsApp, Instagram, Teams, and email—so you boost revenue while keeping it personal.
          </p>
        </div>

        {/* Features Rows */}
        <div className="space-y-24">
          {/* Feature Row 1: Text Left, Image Right */}
          <div ref={feature1Ref} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 scroll-fade-in ${feature1InView ? 'animate' : ''}`}>
            <div className={`md:w-1/2 space-y-6 scroll-slide-left ${feature1InView ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neon-teal/20 rounded-lg flex items-center justify-center">
                  <Search className="w-6 h-6 text-neon-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-electric-lime">
                  Increase Conversion Rate with AI Recommendations
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                DVK AI suggests relevant products or articles to users at the precise moment they're browsing, leading to higher click-through and checkout rates.
              </p>
            </div>
            
            {/* Mini Chat Widget Mockup */}
            <div className={`md:w-1/2 scroll-slide-right ${feature1InView ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="bg-gray-900 rounded-2xl p-4 border border-gray-700 max-w-sm mx-auto">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-neon-teal rounded-full"></div>
                    <span className="text-neon-teal text-sm font-semibold">DVK AI</span>
                  </div>
                  <div className="bg-neon-teal/20 border border-neon-teal rounded-lg p-3">
                    <p className="text-sm text-white mb-2">You might like this product...</p>
                    <div className="bg-gray-800 rounded p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-700 transition-colors">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                      <div className="text-xs">
                        <div className="text-white">Premium Headphones</div>
                        <div className="text-gray-400">$299.99</div>
                      </div>
                      <svg className="w-4 h-4 text-neon-teal ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Row 2: Image Left, Text Right */}
          <div ref={feature2Ref} className={`flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 scroll-fade-in ${feature2InView ? 'animate' : ''}`}>
            {/* Product Page Mockup */}
            <div className={`md:w-1/2 scroll-slide-left ${feature2InView ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="bg-gray-900 rounded-2xl p-4 border border-gray-700 max-w-sm mx-auto">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"></div>
                    <div>
                      <h4 className="text-white text-sm font-semibold">Wireless Mouse</h4>
                      <p className="text-gray-400 text-xs">$79.99</p>
                    </div>
                  </div>
                  <button className="w-full bg-electric-lime text-deep-charcoal py-2 rounded-lg font-semibold text-sm">
                    Add to Cart
                  </button>
                  
                  {/* DVK AI Popup */}
                  <div className="bg-electric-lime/20 border border-electric-lime rounded-lg p-3 relative">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-electric-lime rounded-full"></div>
                      <span className="text-electric-lime text-xs font-semibold">DVK AI suggests</span>
                    </div>
                    <p className="text-white text-xs mb-2">Perfect match: Wireless charging pad</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">+$29.99</span>
                      <button className="bg-electric-lime text-deep-charcoal px-3 py-1 rounded text-xs font-semibold">
                        Add Both
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`md:w-1/2 space-y-6 scroll-slide-right ${feature2InView ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bright-violet/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-bright-violet" />
                </div>
                <h3 className="text-2xl font-semibold text-electric-lime">
                  Boost Average Order Value with Smart Upsells
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                DVK AI uses customer data to recommend add-ons or upgrades in chat, seamlessly increasing basket size.
              </p>
            </div>
          </div>

          {/* Feature Row 3: Text Left, Image Right */}
          <div ref={feature3Ref} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 scroll-fade-in ${feature3InView ? 'animate' : ''}`}>
            <div className={`md:w-1/2 space-y-6 scroll-slide-left ${feature3InView ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-electric-lime/20 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-electric-lime" />
                </div>
                <h3 className="text-2xl font-semibold text-electric-lime">
                  24/7 Availability Across All Channels
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Never miss a customer inquiry again. DVK AI provides instant responses to customers at any time of day, in any time zone, on any messaging platform.
              </p>
            </div>
            
            {/* Multi-channel Mockup */}
            <div className={`md:w-1/2 scroll-slide-right ${feature3InView ? 'animate' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="relative mx-auto max-w-sm">
                {/* WhatsApp-style bubble */}
                <div className="absolute top-0 left-0 bg-green-600/20 border border-green-500 rounded-lg p-3 w-48 animate-float">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-xs font-semibold">WhatsApp</span>
                  </div>
                  <p className="text-white text-xs">Hi! How can I help you today?</p>
                </div>
                
                {/* Teams-style bubble */}
                <div className="absolute top-16 right-0 bg-purple-600/20 border border-purple-500 rounded-lg p-3 w-48 animate-drift">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-400 text-xs font-semibold">Teams</span>
                  </div>
                  <p className="text-white text-xs">I found the answer in your knowledge base!</p>
                </div>
                
                {/* Email-style bubble */}
                <div className="absolute top-32 left-12 bg-blue-600/20 border border-blue-500 rounded-lg p-3 w-48 animate-gentle-pulse">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-blue-400 text-xs font-semibold">Email</span>
                  </div>
                  <p className="text-white text-xs">Your ticket has been updated with a solution.</p>
                </div>
                
                {/* Center DVK AI logo */}
                <div className="h-48 flex items-center justify-center pt-24">
                  <div className="bg-neon-teal/30 p-4 rounded-full animate-glow-pulse">
                    <div className="w-12 h-12 bg-rich-black rounded-full border-2 border-neon-teal flex items-center justify-center text-neon-teal font-bold">
                      DVK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
