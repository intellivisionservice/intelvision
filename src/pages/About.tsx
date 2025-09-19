import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Heart, MapPin, Award, Globe } from 'lucide-react';
import globalPresence from '@/assets/global-presence.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as partners with our clients, fostering long-term relationships built on trust.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to stay ahead of industry trends.'
    }
  ];

  const leaders = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      experience: '15+ years in BPO industry',
      bio: 'Leading strategic vision and operational excellence across all service lines.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      experience: '12+ years in technology',
      bio: 'Driving digital transformation and technology innovation initiatives.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'VP of Operations',
      experience: '10+ years in operations',
      bio: 'Overseeing service delivery and quality assurance across global operations.'
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
                About Intellivision Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Transforming Business Operations Since 2010
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Leading Business Process Outsourcing company with over a decade of experience in transforming businesses through innovative solutions, cutting-edge technology, and exceptional service delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To empower businesses worldwide by providing innovative, reliable, and cost-effective business process outsourcing solutions that drive operational excellence and sustainable growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to being more than just a service provider – we are your strategic partner in achieving operational efficiency, reducing costs, and focusing on your core business objectives.
                </p>
              </div>
              <div className="card-floating p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Strategic Partnership</h3>
                  <p className="text-muted-foreground">
                    Building long-term relationships that go beyond traditional outsourcing arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground animate-fade-in">Our Vision</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                To be the global leader in business process outsourcing, recognized for our innovation, quality, and commitment to client success.
              </p>
            </div>
            <div className="card-floating p-12 text-center bg-gradient-card hover-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gradient mb-6">2030 Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By 2030, we envision Intellivision Services as the preferred BPO partner for Fortune 500 companies, 
                  operating across 25+ countries with a workforce of 50,000+ professionals, delivering cutting-edge 
                  AI-powered solutions that redefine industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground animate-fade-in">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                The core principles that guide our decisions and define our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="card-floating p-8 hover-lift transition-all duration-500 group animate-fade-in text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground animate-fade-in">Our Story</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2010 - The Beginning</h3>
                      <p className="text-muted-foreground">
                        Founded with a vision to provide exceptional BPO services to growing businesses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2015 - Global Expansion</h3>
                      <p className="text-muted-foreground">
                        Expanded operations to multiple countries, serving clients across 3 continents.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2020 - Digital Innovation</h3>
                      <p className="text-muted-foreground">
                        Implemented AI and automation technologies to enhance service delivery.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2024 - Industry Leadership</h3>
                      <p className="text-muted-foreground">
                        Recognized as a leader in the BPO industry with 500+ satisfied clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-floating p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-gradient mb-2">14+</div>
                      <div className="text-sm text-muted-foreground">Years of Excellence</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Clients Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient mb-2">10,000+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground animate-fade-in">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Meet the visionary leaders driving our success and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="card-floating p-8 hover-lift transition-all duration-500 group animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{leader.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{leader.experience}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground animate-fade-in">Global Presence</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Serving clients worldwide with local expertise and global standards.
              </p>
            </div>
            <div 
              className="relative h-96 rounded-2xl overflow-hidden mb-12 animate-fade-in"
              style={{
                backgroundImage: `url(${globalPresence})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: '0.2s'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-variant/80" />
              <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Connecting the World</h3>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Our strategic locations across North America, Europe, and Asia-Pacific ensure 24/7 service delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-floating p-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">North America</h3>
                <p className="text-muted-foreground">Primary operations in USA and Canada</p>
              </div>
              <div className="card-floating p-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Europe</h3>
                <p className="text-muted-foreground">Service centers in UK, Germany, and Poland</p>
              </div>
              <div className="card-floating p-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Asia-Pacific</h3>
                <p className="text-muted-foreground">Operations in India, Philippines, and Australia</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;