
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from './FloatingElements';
import heroVideo from '@/assets/WhatsApp Video 2025-09-18 at 18.45.00_47e81e1a.mp4';

const HeroSection = () => {
  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Background Video: always visible */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover min-h-[400px] max-h-screen"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>
      {/* Floating Elements: hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <FloatingElements />
      </div>

      {/* Hero Content: always visible, but on mobile only show content (no floating elements, trust, or scroll indicator) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
        <div className="animate-slide-up w-full">
          {/* Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-white">
            <span className="block">Streamlined Operations &</span>
            <span className="block text-gradient">Exceptional Support for</span>
            <span className="block">Growing Businesses</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base xs:text-lg sm:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow">
            We optimize, automate, and accelerate your business processes with absolute 
            transparency and efficiency at its core. Scale your operations globally with our 
            24/7 expert support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-4 rounded-xl group"
            >
              <Link to="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-lg px-8 py-4 rounded-xl group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators: hidden on mobile */}
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto text-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient">500+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-gradient">15+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator: hidden on mobile */}
      <div className="hidden md:absolute md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2 md:animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;