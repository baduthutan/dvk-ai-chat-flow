
import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-rich-black to-darker-charcoal">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Agents That Convert Customers, Integrated Into Your Messaging Channels
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Our AI assistants help scale sales on channels like WhatsApp, Instagram, Slack, Teams, and email—so you boost revenue while keeping it personal.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Feature 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neon-teal/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-neon-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <circle cx="15" cy="9" r="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-electric-lime">
                Increase Conversion Rate with AI Recommendations
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              DVK AI suggests relevant products or articles to users at the precise moment they're browsing, leading to higher click-through and checkout rates.
            </p>
            
            {/* Mini Chat Widget Mockup */}
            <div className="bg-gray-900 rounded-2xl p-4 border border-gray-700 max-w-sm">
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

          {/* Feature 2 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-bright-violet/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-bright-violet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                  <circle cx="9" cy="9" r="1"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-electric-lime">
                Boost Average Order Value with Smart Upsells
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              DVK AI uses customer data to recommend add-ons or upgrades in chat, seamlessly increasing basket size.
            </p>

            {/* Product Page Mockup */}
            <div className="bg-gray-900 rounded-2xl p-4 border border-gray-700 max-w-sm">
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
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
