import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Clock, Globe } from 'lucide-react';

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    funding: 0,
    clients: 0,
    users: 0,
    efficiency: 0,
  });

  const finalValues = {
    funding: 250,
    clients: 500,
    users: 50,
    efficiency: 40,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedValues({
          funding: Math.round(finalValues.funding * easeOut),
          clients: Math.round(finalValues.clients * easeOut),
          users: Math.round(finalValues.users * easeOut),
          efficiency: Math.round(finalValues.efficiency * easeOut),
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: TrendingUp,
      value: `$${animatedValues.funding}M+`,
      label: 'In cost savings generated for clients',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Users,
      value: `${animatedValues.clients}+`,
      label: 'Global enterprises trust our BPO solutions',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Clock,
      value: `${animatedValues.users}M+`,
      label: 'Hours of operations managed monthly',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Globe,
      value: `${animatedValues.efficiency}%`,
      label: 'Average improvement in operational efficiency',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive BPO solutions deliver measurable impact for businesses worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`card-floating p-8 text-center hover-lift transition-all duration-500 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 border border-primary/20 rounded-full text-sm text-primary hover-glow transition-all duration-300">
            <span className="font-medium">Ready to transform your operations?</span>
            <span className="ml-2">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;