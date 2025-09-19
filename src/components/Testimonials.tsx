import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Solutions',
      company: 'TechStart Solutions',
      rating: 5,
      text: 'Intellivision Services transformed our customer support operations completely. Their 24/7 support team handles our inquiries with such professionalism that our customer satisfaction scores increased by 45% within just three months.',
      avatar: '/api/placeholder/64/64'
    },
    {
      name: 'Michael Chen',
      position: 'COO, Global Manufacturing',
      company: 'Global Manufacturing Co.',
      rating: 5,
      text: 'The data processing accuracy and speed we get from Intellivision is remarkable. They helped us streamline our entire supply chain data management, reducing processing time by 60% while maintaining 99.9% accuracy.',
      avatar: '/api/placeholder/64/64'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Director of Operations, HealthCare Plus',
      company: 'HealthCare Plus',
      rating: 5,
      text: 'Working with Intellivision for our HIPAA-compliant processes has been exceptional. Their attention to security and compliance details gives us complete peace of mind while serving our patients better.',
      avatar: '/api/placeholder/64/64'
    },
    {
      name: 'David Thompson',
      position: 'VP Technology, FinanceFlow',
      company: 'FinanceFlow Inc.',
      rating: 5,
      text: 'The automation solutions implemented by Intellivision revolutionized our workflow efficiency. We achieved 70% cost reduction in manual processes while improving accuracy and speed significantly.',
      avatar: '/api/placeholder/64/64'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">What Our Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses that have transformed their operations with our BPO solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-floating p-8 hover-lift transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-medium text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-gradient mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Retention Rate</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-gradient mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-gradient mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl font-bold text-gradient mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;