import ServicePageLayout from '@/components/ServicePageLayout';
import { MessageSquare, Users, Clock, AlertTriangle, BarChart3, TrendingUp, Shield, Zap } from 'lucide-react';
import customerSupportBg from '@/assets/customer-support-bg.jpg';

const CustomerSupport = () => {
  const problems = [
    {
      title: 'Inconsistent Support Quality',
      description: 'Varying service levels across different support channels leading to customer frustration and churn.',
      icon: AlertTriangle,
    },
    {
      title: 'High Support Costs',
      description: 'Expensive in-house support operations with limited scalability and 24/7 coverage challenges.',
      icon: BarChart3,
    },
    {
      title: 'Slow Response Times',
      description: 'Delayed customer responses impacting satisfaction scores and brand reputation.',
      icon: Clock,
    },
  ];

  const solutions = [
    {
      title: 'Omnichannel Support Platform',
      description: 'Unified customer service across all channels with AI-powered chatbots and intelligent ticket management.',
      features: [
        'Multi-channel integration (email, chat, phone, social)',
        'AI-powered chatbots for instant responses',
        'Intelligent ticket routing and prioritization',
        'Real-time customer sentiment analysis',
        'Comprehensive knowledge base management'
      ],
      image: 'https://images.unsplash.com/photo-1525186402429-6b5b3b473c84?auto=format&fit=crop&w=600&q=80', // Customer support team
    },
    {
      title: 'Advanced Analytics & Reporting',
      description: 'Data-driven insights to optimize support operations and improve customer satisfaction continuously.',
      features: [
        'Real-time performance dashboards',
        'Customer satisfaction tracking (CSAT, NPS)',
        'Agent performance analytics',
        'Predictive support insights',
        'Custom reporting and alerts'
      ],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', // Analytics dashboard
    },
  ];

  const results = [
    {
      metric: '45%',
      description: 'Faster response times',
      icon: Zap,
    },
    {
      metric: '92%',
      description: 'Customer satisfaction score',
      icon: Users,
    },
    {
      metric: '24/7',
      description: 'Round-the-clock availability',
      icon: Clock,
    },
    {
      metric: '35%',
      description: 'Cost reduction',
      icon: TrendingUp,
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Analysis',
      description: 'Evaluate current support channels and customer touchpoints',
    },
    {
      step: '2',
      title: 'Integration',
      description: 'Implement omnichannel platform and AI tools',
    },
    {
      step: '3',
      title: 'Training',
      description: 'Train support agents on new systems and protocols',
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Monitor performance and continuously improve processes',
    },
  ];

  return (
    <ServicePageLayout
      title="Customer Support Solutions"
      subtitle="Transform your customer service with our comprehensive omnichannel support platform featuring AI chatbots, intelligent ticket management, and 24/7 multilingual support."
      heroImage={customerSupportBg}
      icon={MessageSquare}
      problems={problems}
      solutions={solutions}
      results={results}
      process={process}
      ctaText="Deliver exceptional customer experiences that build loyalty and drive growth. Let us help you create a world-class support operation."
    />
  );
};

export default CustomerSupport;