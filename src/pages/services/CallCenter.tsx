import ServicePageLayout from '@/components/ServicePageLayout';
import { Headphones, Phone, Clock, AlertTriangle, BarChart3, TrendingUp, Users, Shield } from 'lucide-react';
import callCenterBg from '@/assets/call-center-bg.jpg';

const CallCenter = () => {
  const problems = [
    {
      title: 'High Operational Costs',
      description: 'Managing in-house call centers requires significant investment in infrastructure, technology, and staffing.',
      icon: AlertTriangle,
    },
    {
      title: 'Scaling Challenges',
      description: 'Difficulty in quickly scaling operations up or down based on demand fluctuations and business growth.',
      icon: BarChart3,
    },
    {
      title: 'Quality Inconsistency',
      description: 'Maintaining consistent service quality across all customer interactions and communication channels.',
      icon: Clock,
    },
  ];

  const solutions = [
    {
      title: 'Professional Call Management',
      description: 'Our expert agents handle all your inbound and outbound calls with advanced CRM integration and real-time analytics.',
      features: [
        'Multilingual support agents',
        'Advanced call routing and IVR systems',
        'Real-time performance monitoring',
        'CRM integration and data management',
        '24/7 availability across time zones'
      ],
      image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80', // Call center agents
    },
    {
      title: 'Technology-Driven Solutions',
      description: 'Leverage cutting-edge technology for superior call handling and customer experience management.',
      features: [
        'Cloud-based infrastructure',
        'AI-powered call analytics',
        'Predictive dialing systems',
        'Quality assurance tools',
        'Comprehensive reporting dashboards'
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // Tech dashboard
    },
  ];

  const results = [
    {
      metric: '40%',
      description: 'Reduction in operational costs',
      icon: TrendingUp,
    },
    {
      metric: '95%',
      description: 'First call resolution rate',
      icon: Phone,
    },
    {
      metric: '24/7',
      description: 'Global availability',
      icon: Clock,
    },
    {
      metric: '99.9%',
      description: 'Service uptime guarantee',
      icon: Shield,
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Analyze your current call center needs and requirements',
    },
    {
      step: '2',
      title: 'Setup',
      description: 'Configure systems, train agents, and integrate with your CRM',
    },
    {
      step: '3',
      title: 'Launch',
      description: 'Go live with comprehensive monitoring and support',
    },
    {
      step: '4',
      title: 'Optimize',
      description: 'Continuous improvement based on performance metrics',
    },
  ];

  return (
    <ServicePageLayout
      title="Call Center Solutions"
      subtitle="Professional inbound and outbound call services with advanced CRM integration, real-time analytics, and 24/7 multilingual support delivered by expert agents."
      heroImage={callCenterBg}
      icon={Headphones}
      problems={problems}
      solutions={solutions}
      results={results}
      process={process}
      ctaText="Let our experienced team handle your call center operations while you focus on growing your business. Contact us today for a free consultation."
    />
  );
};

export default CallCenter;