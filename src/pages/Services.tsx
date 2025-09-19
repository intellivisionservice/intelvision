import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Headphones, MessageSquare, BarChart3, Cog, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import callCenterBg from '@/assets/call-center-bg.jpg';
import customerSupportBg from '@/assets/customer-support-bg.jpg';
import dataProcessingBg from '@/assets/data-processing-bg.jpg';
import processAutomationBg from '@/assets/process-automation-bg.jpg';
import complianceBg from '@/assets/compliance-bg.jpg';
import digitalTransformationBg from '@/assets/digital-transformation-bg.jpg';

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: 'Call Center Solutions',
      description: 'Professional inbound and outbound call services with advanced CRM integration, real-time analytics, and 24/7 multilingual support. Our expert agents deliver exceptional customer experiences across all communication channels.',
      keyFeatures: [
        'Inbound & Outbound Call Management',
        'Advanced CRM Integration',
        '24/7 Multilingual Support'
      ],
      link: '/services/call-center',
      image: callCenterBg
    },
    {
      icon: MessageSquare,
      title: 'Customer Support',
      description: 'Transform your customer service with our comprehensive omnichannel support platform featuring AI chatbots, intelligent ticket management, and seamless integration across all customer touchpoints.',
      keyFeatures: [
        'Omnichannel Support Platform',
        'AI-Powered Chatbots',
        'Intelligent Ticket Management'
      ],
      link: '/services/customer-support',
      image: customerSupportBg
    },
    {
      icon: BarChart3,
      title: 'Data Processing',
      description: 'Leverage our advanced data processing capabilities including automated data entry, quality assurance protocols, and comprehensive business intelligence reporting to turn raw data into actionable insights.',
      keyFeatures: [
        'Automated Data Entry',
        'Quality Assurance Protocols',
        'Business Intelligence Reporting'
      ],
      link: '/services/data-processing',
      image: dataProcessingBg
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline your operations with cutting-edge process automation solutions. We design, implement, and optimize intelligent workflows using RPA technology that reduces costs and eliminates errors.',
      keyFeatures: [
        'Robotic Process Automation (RPA)',
        'Workflow Optimization',
        'Intelligent Process Design'
      ],
      link: '/services/process-automation',
      image: processAutomationBg
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure regulatory compliance and data security with our ISO-certified processes. We maintain the highest standards of data protection, GDPR compliance, and security protocols.',
      keyFeatures: [
        'ISO-Certified Processes',
        'GDPR Compliance',
        'Advanced Security Protocols'
      ],
      link: '/services/compliance',
      image: complianceBg
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Accelerate your digital transformation journey with comprehensive technology solutions. From cloud migration to API integration and digital strategy development for the modern business.',
      keyFeatures: [
        'Cloud Migration Services',
        'API Integration',
        'Digital Strategy Development'
      ],
      link: '/services/digital-transformation',
      image: digitalTransformationBg
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
                Our Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Comprehensive BPO Solutions
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform your business operations with our innovative BPO services designed to optimize efficiency, reduce costs, and drive sustainable growth across all industry verticals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Content */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Key Features */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Key Features:</h3>
                        <ul className="space-y-3">
                          {service.keyFeatures.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-muted-foreground">
                              <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link to={service.link}>
                        <Button 
                          size="lg" 
                          className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Image */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div 
                        className="relative h-80 rounded-2xl overflow-hidden hover-lift transition-all duration-500 group"
                        style={{
                          backgroundImage: `url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-variant/20 group-hover:from-primary/30 group-hover:to-primary-variant/30 transition-all duration-500" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <h3 className="text-white font-semibold text-lg mb-2">
                              {service.title}
                            </h3>
                            <p className="text-white/80 text-sm">
                              Professional service delivery with measurable results
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-floating p-12 text-center bg-gradient-card hover-glow animate-fade-in">
              <h2 className="text-3xl font-bold text-gradient mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's discuss how our comprehensive BPO solutions can help optimize your operations, reduce costs, and drive sustainable growth for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;