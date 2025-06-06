
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
        {/* Floating Chat Bubble Testimonials */}
        <div className="absolute inset-0">
          {/* Testimonial Bubble 1 */}
          <div 
            className="absolute top-[10%] left-[15%] max-w-xs bg-white/10 backdrop-blur-sm border border-neon-teal p-4 rounded-lg chat-bubble transform -rotate-2"
            style={{transform: "translateY(calc(-10% + (var(--scroll) * 0.05)))"}}
          >
            <p className="text-gray-200 text-sm">
              "DVK AI helped us increase our conversion rate by 40% in just two months!"
            </p>
            <div className="flex items-center mt-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <span className="ml-2 text-xs text-gray-300">Sarah, Marketing Director</span>
            </div>
          </div>

          {/* Testimonial Bubble 2 */}
          <div 
            className="absolute top-[30%] right-[10%] max-w-xs bg-white/10 backdrop-blur-sm border border-electric-lime p-4 rounded-lg chat-bubble transform rotate-1"
            style={{transform: "translateY(calc(10% + (var(--scroll) * -0.03))) rotate(1deg)"}}
          >
            <p className="text-gray-200 text-sm">
              "Our average order value increased by 25% after implementing DVK AI's smart upsells."
            </p>
            <div className="flex items-center mt-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-green-400"></div>
              <span className="ml-2 text-xs text-gray-300">Michael, E-commerce Lead</span>
            </div>
          </div>

          {/* Testimonial Bubble 3 */}
          <div 
            className="absolute bottom-[20%] left-[20%] max-w-xs bg-white/10 backdrop-blur-sm border border-bright-violet p-4 rounded-lg chat-bubble transform rotate-3"
            style={{transform: "translateY(calc(-5% + (var(--scroll) * 0.02))) rotate(3deg)"}}
          >
            <p className="text-gray-200 text-sm">
              "Our team can now focus on high-value tasks while DVK AI handles routine customer inquiries."
            </p>
            <div className="flex items-center mt-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-red-400"></div>
              <span className="ml-2 text-xs text-gray-300">Alex, Customer Support Manager</span>
            </div>
          </div>

          {/* Testimonial Bubble 4 */}
          <div 
            className="absolute bottom-[10%] right-[25%] max-w-xs bg-white/10 backdrop-blur-sm border border-neon-teal p-4 rounded-lg chat-bubble transform -rotate-2"
            style={{transform: "translateY(calc(15% + (var(--scroll) * -0.04))) rotate(-2deg)"}}
          >
            <p className="text-gray-200 text-sm">
              "DVK AI integrated seamlessly with our existing systems. Implementation was a breeze."
            </p>
            <div className="flex items-center mt-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-teal-400"></div>
              <span className="ml-2 text-xs text-gray-300">Jamie, CTO</span>
            </div>
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="text-center pt-40 pb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Convert More Customers with{' '}
            <span className="text-neon-teal text-glow">AI Agents</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See DVK AI in action, live—no credit card required.
          </p>

          <div className="mb-6">
            <Button className="bg-neon-teal text-white text-lg px-8 py-7 rounded-lg hover:bg-neon-teal/90 hover:shadow-[0_0_15px_rgba(0,229,192,0.5)] transition-all">
              Book a Demo
            </Button>
          </div>

          <p className="text-gray-500 text-sm">
            Schedule at your convenience—slots fill up fast.
          </p>
        </div>
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
