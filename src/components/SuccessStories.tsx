import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import successBg from '@/assets/success-stories-bg.jpg';

const SuccessStories = () => {
  const stories = [
    {
      icon: TrendingUp,
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Scaling customer support operations',
      solution: 'Implemented 24/7 multilingual support center',
      results: [
        '85% reduction in response time',
        '40% increase in customer satisfaction',
        '60% cost savings on support operations'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Users,
      company: 'Global Healthcare Inc.',
      industry: 'Healthcare',
      challenge: 'HIPAA-compliant patient data processing',
      solution: 'Deployed secure data processing workflows',
      results: [
        '99.9% data accuracy rate',
        '100% HIPAA compliance maintained',
        '50% faster processing times'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Clock,
      company: 'E-commerce Giants',
      industry: 'Retail',
      challenge: 'Managing seasonal customer inquiries',
      solution: 'Scalable omnichannel customer service',
      results: [
        '300% increase in inquiry handling',
        '95% first-call resolution rate',
        '45% improvement in NPS scores'
      ],
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Real Results, Real Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our BPO solutions have transformed businesses across industries, delivering measurable results and sustainable growth.
          </p>
        </div>

        {/* Stories Grid */}
        {/* Hero Section with Background Image */}
        <div 
          className="relative h-96 rounded-2xl overflow-hidden mb-16"
          style={{
            backgroundImage: `url(${successBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-variant/90" />
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Transforming Businesses Worldwide
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Our proven track record speaks for itself - delivering exceptional results that drive real business growth and operational excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            
            return (
              <div
                key={index}
                className="card-floating hover-lift transition-all duration-500 group animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700" />
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {story.company}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {story.industry}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      {story.challenge}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      {story.solution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-2">Results</h4>
                    <ul className="space-y-1">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-floating p-8 bg-gradient-card hover-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our growing list of satisfied clients and transform your business operations today.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity group">
              <Link to="/contact" className="flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;