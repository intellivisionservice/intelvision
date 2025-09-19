import { Building, Zap, Heart, GraduationCap } from 'lucide-react';

const WhoWeServe = () => {
  const industries = [
    {
      icon: Building,
      title: 'Enterprise Businesses',
      description: 'Scale operations with our comprehensive BPO solutions designed for large organizations requiring robust infrastructure and compliance.',
      stats: '500+ Clients',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Technology Companies',
      description: 'Accelerate growth with specialized tech support, software development assistance, and digital transformation services.',
      stats: '99.9% Uptime',
      color: 'purple'
    },
    {
      icon: Heart,
      title: 'Healthcare Providers',
      description: 'HIPAA-compliant services including patient support, appointment scheduling, and medical data processing solutions.',
      stats: 'HIPAA Certified',
      color: 'green'
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Support student services, administrative processes, and online learning platforms with dedicated educational BPO services.',
      stats: '24/7 Support',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      purple: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      green: 'text-green-500 bg-green-500/10 border-green-500/20',
      orange: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Who We Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide specialized BPO solutions across diverse industries, understanding unique challenges and delivering tailored outcomes.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const colorClasses = getColorClasses(industry.color);
            
            return (
              <div
                key={index}
                className="card-floating p-8 hover-lift transition-all duration-500 group animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${colorClasses} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="inline-flex items-center px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-primary">
                  {industry.stats}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;