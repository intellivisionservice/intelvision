import { Button } from '@/components/ui/button';
import { Headphones, MessageSquare, BarChart3, Cog, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import callCenterBg from '@/assets/call-center-bg.jpg';
import customerSupportBg from '@/assets/customer-support-bg.jpg';
import dataProcessingBg from '@/assets/data-processing-bg.jpg';
import processAutomationBg from '@/assets/process-automation-bg.jpg';
import complianceBg from '@/assets/compliance-bg.jpg';
import digitalTransformationBg from '@/assets/digital-transformation-bg.jpg';

const FlipServiceCards = () => {
  const services = [
    {
      icon: Headphones,
      title: 'Call Center Solutions',
      shortDescription: 'Professional inbound and outbound call services with multi-lingual support.',
      longDescription: 'Comprehensive call center operations featuring advanced CRM integration, real-time analytics, and 24/7 availability. Our expert agents deliver exceptional customer experiences across all communication channels with personalized service protocols.',
      link: '/services/call-center',
      image: callCenterBg
    },
    {
      icon: MessageSquare,
      title: 'Customer Support',
      shortDescription: 'Omnichannel customer service with AI-powered automation solutions.',
      longDescription: 'Transform your customer service with our comprehensive support platform featuring AI chatbots, intelligent ticket management, and seamless omnichannel integration. Deliver consistent, high-quality support experiences that build lasting customer relationships.',
      link: '/services/customer-support',
      image: customerSupportBg
    },
    {
      icon: BarChart3,
      title: 'Data Processing',
      shortDescription: 'Accurate data entry and analytics to drive business decisions.',
      longDescription: 'Leverage our advanced data processing capabilities including automated data entry, quality assurance protocols, and comprehensive business intelligence reporting. Turn your raw data into actionable insights that drive strategic business growth.',
      link: '/services/data-processing',
      image: dataProcessingBg
    },
    {
      icon: Cog,
      title: 'Process Automation',
      shortDescription: 'Intelligent workflow optimization and RPA implementation services.',
      longDescription: 'Streamline your operations with our cutting-edge process automation solutions. We design, implement, and optimize intelligent workflows using RPA technology that reduces costs, eliminates errors, and accelerates business processes.',
      link: '/services/process-automation',
      image: processAutomationBg
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      shortDescription: 'GDPR compliance and certified data security processes.',
      longDescription: 'Ensure regulatory compliance and data security with our ISO-certified processes. We maintain the highest standards of data protection, GDPR compliance, and security protocols to safeguard your business and customer information.',
      link: '/services/compliance',
      image: complianceBg
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      shortDescription: 'Modernize operations with cutting-edge technology solutions.',
      longDescription: 'Accelerate your digital transformation journey with our comprehensive technology solutions. From cloud migration to API integration and digital strategy development, we help modernize your business for the digital age.',
      link: '/services/digital-transformation',
      image: digitalTransformationBg
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
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
            Transform your business operations with our innovative BPO services designed to optimize efficiency and drive growth.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="group perspective-1000 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front Side with background image and dark overlay */}
                  <div className="absolute inset-0 w-full h-full backface-hidden card-floating border border-primary/10 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center relative flex flex-col items-center justify-center p-8 text-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/60" />
                      <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">
                          {service.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back Side: only description and button, center-aligned, larger text */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-primary/95 flex flex-col items-center justify-center p-8 text-center">
                    <p className="text-lg leading-relaxed text-white/90 mb-6">
                      {service.longDescription}
                    </p>
                    <Link to={service.link}>
                      <Button 
                        variant="secondary" 
                        className="w-full mt-2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:scale-105 transition-transform"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlipServiceCards;