import { useEffect, useState } from 'react';
import headsetImage from '@/assets/floating-headset.png';
import chartImage from '@/assets/floating-chart.png';
import globeImage from '@/assets/floating-globe.png';

const FloatingElements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main Dashboard */}
      <div 
        className={`absolute top-1/2 right-10 transform -translate-y-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <div className="animate-float hover-lift">
          <div className="w-96 h-64 bg-gradient-to-br from-primary/10 to-primary-variant/10 rounded-2xl shadow-floating flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-gradient mb-2">BPO</div>
              <div className="text-xl text-muted-foreground">Dashboard</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Headset */}
      <div 
        className={`absolute top-20 left-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="animate-float-reverse hover-glow">
          <div className="card-floating p-4 w-20 h-20 flex items-center justify-center">
            <img 
              src={headsetImage} 
              alt="Call Center" 
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div 
        className={`absolute bottom-32 left-32 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="animate-float hover-lift">
          <div className="card-floating p-6 bg-gradient-card">
            <img 
              src={chartImage} 
              alt="Analytics" 
              className="w-16 h-16 mb-2"
            />
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">+58%</div>
              <div className="text-xs text-muted-foreground">Efficiency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Network */}
      <div 
        className={`absolute top-40 right-32 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="animate-float-reverse hover-glow">
          <div className="card-floating p-4 rounded-full w-24 h-24 flex items-center justify-center bg-gradient-primary">
            <img 
              src={globeImage} 
              alt="Global Services" 
              className="w-14 h-14"
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-sm font-semibold text-primary">24/7</div>
            <div className="text-xs text-muted-foreground">Global</div>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div 
        className={`absolute bottom-20 right-20 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="animate-float hover-lift">
          <div className="card-floating p-4 bg-primary/5">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-glow delay-1000" />
    </div>
  );
};

export default FloatingElements;