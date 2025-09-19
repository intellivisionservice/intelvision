import { Button } from '@/components/ui/button';
import { ArrowRight, Headphones, MessageSquare, BarChart3, Cog, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: Headphones,
      title: 'Call Center Solutions',
      description: 'Inbound and outbound call services with multi-lingual support and advanced CRM integration.',
      features: ['24/7 Availability', 'Multi-channel Support', 'Real-time Analytics'],
      color: 'blue',
    },
    {
      icon: MessageSquare,
      title: 'Customer Support',
      description: 'Comprehensive customer service across all touchpoints with AI-powered automation.',
      features: ['Omnichannel Support', 'AI Chatbots', 'Ticket Management'],
      color: 'green',
    },
    {
      icon: BarChart3,
      title: 'Data Processing',
      description: 'Accurate data entry, processing, and analytics to drive informed business decisions.',
      features: ['Data Entry', 'Quality Assurance', 'Business Intelligence'],
      color: 'purple',
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation and workflow optimization.',
      features: ['Workflow Design', 'RPA Implementation', 'Process Optimization'],
      color: 'orange',
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure regulatory compliance and data security with our certified processes.',
      features: ['GDPR Compliance', 'ISO Certified', 'Data Security'],
      color: 'red',
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge technology solutions.',
      features: ['Cloud Migration', 'API Integration', 'Digital Strategy'],
      color: 'indigo',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      green: 'text-green-500 bg-green-500/10 border-green-500/20',
      purple: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      orange: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
      red: 'text-red-500 bg-red-500/10 border-red-500/20',
      indigo: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
            Our Core Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Comprehensive BPO Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From call center operations to digital transformation, we provide end-to-end 
            business process outsourcing solutions tailored to your industry needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = getColorClasses(service.color);
            
            return (
              <div
                key={index}
                className="card-floating p-8 hover-lift transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${colorClasses} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary/5 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-floating p-8 md:p-12 bg-gradient-card hover-glow">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
              Ready to Optimize Your Operations?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our BPO solutions can transform your business processes 
              and drive sustainable growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity group">
                <Link to="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;