import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Business Process Outsourcing: AI and Automation Trends',
      excerpt: 'Explore how artificial intelligence and automation are revolutionizing the BPO industry. From intelligent chatbots to robotic process automation, discover the technologies that are reshaping how businesses operate and deliver customer service in 2024.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Technology',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Maximizing ROI Through Strategic Call Center Outsourcing',
      excerpt: 'Learn the essential strategies for maximizing return on investment when outsourcing your call center operations. This comprehensive guide covers cost optimization, quality metrics, performance tracking, and best practices for vendor selection and management.',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      category: 'Strategy',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Data Security and Compliance in Modern BPO Operations',
      excerpt: 'Understanding the critical importance of data security and regulatory compliance in today\'s BPO landscape. Explore GDPR requirements, ISO certifications, security protocols, and how to ensure your outsourcing partner meets industry standards.',
      author: 'Emily Rodriguez',
      date: 'March 5, 2024',
      category: 'Compliance',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Digital Transformation Success Stories: Real-World Case Studies',
      excerpt: 'Dive into real-world examples of successful digital transformation initiatives. See how companies across various industries have leveraged BPO services to modernize their operations, improve efficiency, and achieve significant cost savings.',
      author: 'David Thompson',
      date: 'February 28, 2024',
      category: 'Case Studies',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Building Resilient Customer Support Operations in a Remote World',
      excerpt: 'Discover how to build and maintain effective customer support operations in an increasingly remote business environment. Learn about tools, technologies, and strategies that ensure consistent service delivery regardless of location.',
      author: 'Lisa Wang',
      date: 'February 20, 2024',
      category: 'Customer Support',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'The Economics of Process Automation: Cost vs. Benefit Analysis',
      excerpt: 'A detailed economic analysis of process automation implementation. Learn how to calculate ROI, understand implementation costs, and determine which processes are best suited for automation in your organization.',
      author: 'Robert Kim',
      date: 'February 15, 2024',
      category: 'Economics',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const categories = ['All', 'Technology', 'Strategy', 'Compliance', 'Case Studies', 'Customer Support', 'Economics'];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 hover-glow">
                Blog & Insights
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Industry Insights & Expertise
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest trends, insights, and best practices in business process outsourcing. Expert analysis and actionable strategies to help your business thrive.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in ${
                    index === 0 
                      ? 'bg-primary text-white' 
                      : 'bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in">Featured Article</h2>
            </div>
            <div className="card-floating overflow-hidden hover-lift transition-all duration-500 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${blogPosts[0].image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-variant/20" />
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mr-4">
                      {blogPosts[0].category}
                    </span>
                    <Calendar className="w-4 h-4 mr-2" />
                    {blogPosts[0].date}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-2" />
                      {blogPosts[0].author}
                      <span className="ml-4">{blogPosts[0].readTime}</span>
                    </div>
                    <Button variant="outline" className="group">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground animate-fade-in">Latest Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article
                  key={post.id}
                  className="card-floating overflow-hidden hover-lift transition-all duration-500 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${post.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-variant/20" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                      <span className="ml-auto">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Read
                        <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card-floating p-12 text-center bg-gradient-card hover-glow animate-fade-in">
              <h2 className="text-3xl font-bold text-gradient mb-6">
                Stay Updated with Industry Insights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter and get the latest BPO industry trends, insights, and best practices delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-primary/20 rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Subscribe
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

export default Blog;