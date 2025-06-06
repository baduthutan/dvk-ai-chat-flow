
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-deep-charcoal relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-lime/10 rounded-full blur-3xl"></div>
        
        {/* Abstract swirl */}
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5" viewBox="0 0 400 400">
          <path d="M50,200 Q200,50 350,200 Q200,350 50,200" stroke="#00E5C0" strokeWidth="2" fill="none" strokeDasharray="5,5">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 200 200"
              to="360 200 200"
              dur="30s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* User Avatars Collage */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center -space-x-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`w-12 h-12 rounded-full border-2 border-neon-teal flex items-center justify-center text-white font-semibold text-sm ${
                  i % 4 === 0 ? 'bg-gradient-to-r from-purple-400 to-pink-400' :
                  i % 4 === 1 ? 'bg-gradient-to-r from-blue-400 to-purple-400' :
                  i % 4 === 2 ? 'bg-gradient-to-r from-green-400 to-blue-400' :
                  'bg-gradient-to-r from-yellow-400 to-orange-400'
                }`}
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-${20 + i * 5}px) rotate(-${i * 45}deg)`,
                  zIndex: 8 - i
                }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Convert More Customers with{' '}
            <span className="text-neon-teal text-glow">AI Agents</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See DVK AI in action, live—no credit card required.
          </p>

          <div className="mb-6">
            <Button className="btn-primary text-lg px-8 py-4 hover:animate-glow-pulse">
              Book a Demo
            </Button>
          </div>

          <p className="text-gray-500 text-sm">
            Schedule at your convenience—slots fill up fast.
          </p>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-teal mb-1">500+</div>
            <div className="text-gray-400 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-electric-lime mb-1">1M+</div>
            <div className="text-gray-400 text-sm">Messages Processed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-bright-violet mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-soft-mint mb-1">99%</div>
            <div className="text-gray-400 text-sm">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
