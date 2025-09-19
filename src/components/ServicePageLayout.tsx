import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, TrendingUp, Clock, Users, Shield, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  icon: LucideIcon;
  problems: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  solutions: Array<{
    title: string;
    description: string;
    features: string[];
    image: string;
  }>;
  results: Array<{
    metric: string;
    description: string;
    icon: LucideIcon;
  }>;
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  ctaText: string;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  icon: IconComponent,
  problems,
  solutions,
  results,
  process,
  ctaText,
}) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="relative py-32 overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-variant/90" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-6 hover-glow">
                <IconComponent className="w-4 h-4 mr-2" />
                Premium Service
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
                Problems We Solve
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-foreground">Addressing Your Key Challenges</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We understand the unique challenges your business faces and provide targeted solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problems.map((problem, index) => {
                const ProblemIcon = problem.icon;
                return (
                  <div
                    key={index}
                    className="card-floating p-8 hover-lift transition-all duration-500 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <ProblemIcon className="w-7 h-7 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
                Our Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-foreground">Comprehensive Solutions Tailored for You</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven methodologies and advanced technologies deliver exceptional results.
              </p>
            </div>

            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="card-floating p-8 hover-lift transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {solution.description}
                      </p>
                      <div className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-primary-variant/10 rounded-2xl flex items-center justify-center overflow-hidden">
                        {solution.image ? (
                          <img src={solution.image} alt={solution.title} className="object-cover w-full h-full rounded-2xl" />
                        ) : (
                          <IconComponent className="w-24 h-24 text-primary/50" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Results */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
                Typical Results
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-foreground">Measurable Impact & ROI</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our clients consistently achieve significant improvements across key performance metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => {
                const ResultIcon = result.icon;
                return (
                  <div
                    key={index}
                    className="card-floating p-8 text-center hover-lift transition-all duration-500 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <ResultIcon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {result.metric}
                    </div>
                    <p className="text-muted-foreground">
                      {result.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
                Our Process
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-foreground">How We Deliver Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology ensures seamless implementation and optimal results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="relative group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-floating p-6 hover-lift transition-all duration-500 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-floating p-12 text-center bg-gradient-card hover-glow animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {ctaText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  View Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;