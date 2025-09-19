import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import contactHero from '@/assets/contact-hero.jpg';

const Contact = () => {
  const offices = [
    {
      city: 'New York',
      address: '123 Business Ave, Suite 500, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@intellivisionservices.com'
    },
    {
      city: 'London',
      address: '45 Corporate Street, London EC2A 4DP, UK',
      phone: '+44 20 7123 4567',
      email: 'london@intellivisionservices.com'
    },
    {
      city: 'Mumbai',
      address: '789 Tech Park, Bandra East, Mumbai 400051, India',
      phone: '+91 22 6789 0123',
      email: 'mumbai@intellivisionservices.com'
    }
  ];

  const services = [
    'Call Center Solutions',
    'Customer Support',
    'Data Processing',
    'Process Automation',
    'Compliance & Security',
    'Digital Transformation'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section with Background Image */}
        <section 
          className="relative py-32 overflow-hidden"
          style={{
            backgroundImage: `url(${contactHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-variant/90" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium mb-6 hover-glow">
                Get In Touch
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Let's Transform Your Business Together
              </h1>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Ready to optimize your operations and drive growth? Contact our experts today to discuss how our comprehensive BPO solutions can help your business succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card-floating p-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@company.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Ready to discuss your business needs? Our team of experts is here to help you find the perfect BPO solution. Reach out to us through any of the channels below.
                  </p>
                </div>

                {/* Quick Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="card-floating p-6 text-center hover-lift transition-all duration-300">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                  <div className="card-floating p-6 text-center hover-lift transition-all duration-300">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground text-sm">contact@intellivisionservices.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="card-floating p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-primary font-medium">
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>

                {/* Office Locations */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div key={index} className="card-floating p-4 hover-lift transition-all duration-300">
                        <h4 className="font-medium text-foreground mb-2">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{office.address}</p>
                        <div className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                          <span className="text-primary">{office.phone}</span>
                          <span className="text-primary">{office.email}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-floating p-12 text-center bg-gradient-card hover-glow animate-fade-in">
              <h2 className="text-3xl font-bold text-gradient mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join hundreds of satisfied clients who have transformed their operations with our BPO services. Let's discuss your specific needs and create a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group"
                >
                  Schedule Consultation
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                >
                  Download Brochure
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

export default Contact;