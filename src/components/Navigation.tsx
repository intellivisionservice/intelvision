import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">IV</span>
            </div>
            <span className="text-xl font-bold text-gradient">Intellivision Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent hover:bg-transparent focus:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <div className="row-span-3">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-primary p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Our Services
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Comprehensive BPO solutions tailored to your business needs.
                          </p>
                        </div>
                      </div>
                      <Link to="/services/call-center" className="grid gap-1 p-2 rounded-md hover:bg-accent">
                        <h4 className="text-sm font-medium leading-none">Call Center</h4>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          24/7 inbound and outbound call services
                        </p>
                      </Link>
                      <Link to="/services/customer-support" className="grid gap-1 p-2 rounded-md hover:bg-accent">
                        <h4 className="text-sm font-medium leading-none">Customer Support</h4>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Multi-channel customer service solutions
                        </p>
                      </Link>
                      <Link to="/services/data-processing" className="grid gap-1 p-2 rounded-md hover:bg-accent">
                        <h4 className="text-sm font-medium leading-none">Data Processing</h4>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Accurate data entry and analytics
                        </p>
                      </Link>
                      <Link to="/services/process-automation" className="grid gap-1 p-2 rounded-md hover:bg-accent">
                        <h4 className="text-sm font-medium leading-none">Process Automation</h4>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Intelligent workflow optimization
                        </p>
                      </Link>
                      <Link to="/services/compliance" className="grid gap-1 p-2 rounded-md hover:bg-accent">
                        <h4 className="text-sm font-medium leading-none">Compliance & Security</h4>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          GDPR compliance and data security
                        </p>
                      </Link>
                      <Link to="/services/digital-transformation" className="grid gap-1 p-2 rounded-md hover:bg-accent">
                        <h4 className="text-sm font-medium leading-none">Digital Transformation</h4>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Modernize with cutting-edge technology
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity ml-4">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/50 animate-slide-up">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/services') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Services
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/blog') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Contact
              </Link>
              <Button variant="default" size="sm" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity mt-4">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;