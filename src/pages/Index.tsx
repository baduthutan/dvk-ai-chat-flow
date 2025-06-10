import React from 'react';
import Header from '@/components/Header';
import  HeroSection  from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-rich-black">
      <Header />
      <AnimatedSection animation="fadeIn">
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <FeaturesSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={0.3}>
        <StatsSection />
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={0.4}>
        <CTASection />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
