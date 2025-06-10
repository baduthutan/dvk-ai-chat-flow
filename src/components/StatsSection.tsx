import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const StatsSection = () => {
  return (
    <section className="py-24 px-6 bg-darker-charcoal">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Turn Prospects Into Customers More Effectively Than Humans
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Chart Card */}
          <motion.div 
            className="bg-deep-charcoal rounded-3xl p-8 border border-gray-700"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-electric-lime mb-6 text-center">
              Performance Comparison
            </h3>
            
            {/* Chart Area */}
            <div className="relative h-64 bg-gray-900 rounded-xl p-4 mb-4">
              <div className="absolute inset-4">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 text-xs text-gray-400">$50k</div>
                <div className="absolute left-0 top-1/4 text-xs text-gray-400">$40k</div>
                <div className="absolute left-0 top-2/4 text-xs text-gray-400">$30k</div>
                <div className="absolute left-0 top-3/4 text-xs text-gray-400">$20k</div>
                <div className="absolute left-0 bottom-0 text-xs text-gray-400">$10k</div>
                
                {/* X-axis labels */}
                <div className="absolute bottom-0 left-8 text-xs text-gray-400">Jan</div>
                <div className="absolute bottom-0 left-1/3 text-xs text-gray-400">Apr</div>
                <div className="absolute bottom-0 left-2/3 text-xs text-gray-400">Jul</div>
                <div className="absolute bottom-0 right-8 text-xs text-gray-400">Dec</div>
                
                {/* Chart lines */}
                <svg className="w-full h-full" viewBox="0 0 300 200">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="60" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* With DVK AI line */}
                  <motion.polyline
                    fill="none"
                    stroke="#A5FF00"
                    strokeWidth="3"
                    points="20,160 80,140 140,100 200,60 260,20"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  
                  {/* Without DVK AI line */}
                  <motion.polyline
                    fill="none"
                    stroke="#666666"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    points="20,160 80,155 140,150 200,145 260,140"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                  />
                  
                  {/* Data points */}
                  <motion.circle 
                    cx="260" 
                    cy="20" 
                    r="4" 
                    fill="#A5FF00"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                  />
                  <motion.circle 
                    cx="260" 
                    cy="140" 
                    r="3" 
                    fill="#666666"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8 }}
                  />
                </svg>
                
                {/* Legend */}
                <motion.div 
                  className="absolute top-4 right-4 space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-electric-lime"></div>
                    <span className="text-xs text-electric-lime">With DVK AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-gray-500 border-dashed"></div>
                    <span className="text-xs text-gray-400">Without DVK AI</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <p className="text-center text-gray-400 text-sm">
              Our goal: streamline SMB customer support, making it faster and easier than ever.
            </p>
          </motion.div>

          {/* Stat Card */}
          <motion.div 
            className="bg-deep-charcoal rounded-3xl p-8 border border-gray-700 flex flex-col justify-center items-center text-center relative"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="relative mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* 3D effect for the number */}
              <div className="text-8xl font-bold text-neon-teal relative">
                10×
                <motion.div 
                  className="absolute inset-0 text-neon-teal/30 transform translate-x-1 translate-y-1 -z-10"
                  animate={{ 
                    translateX: [4, 6, 4],
                    translateY: [4, 6, 4],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  10×
                </motion.div>
              </div>
            </motion.div>
            
            <h3 className="text-3xl font-semibold text-white mb-4">
              Boost Support Efficiency
            </h3>
            
            <p className="text-gray-400 leading-relaxed max-w-sm">
              DVK AI can handle 10× more chats than a human rep, 24/7, with near-zero latency.
            </p>

            {/* Decorative elements */}
            <motion.div 
              className="absolute top-8 right-8 w-16 h-16 border-2 border-neon-teal/20 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute bottom-8 left-8 w-12 h-12 border-2 border-electric-lime/20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Additional Stats Row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="text-4xl font-bold text-neon-teal mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              99.9%
            </motion.div>
            <div className="text-white font-semibold mb-1">Uptime</div>
            <div className="text-gray-400 text-sm">Always available for your customers</div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="text-4xl font-bold text-electric-lime mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              &lt;2s
            </motion.div>
            <div className="text-white font-semibold mb-1">Response Time</div>
            <div className="text-gray-400 text-sm">Lightning-fast customer support</div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="text-4xl font-bold text-bright-violet mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              95%
            </motion.div>
            <div className="text-white font-semibold mb-1">Satisfaction Rate</div>
            <div className="text-gray-400 text-sm">Customers love our AI agents</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
