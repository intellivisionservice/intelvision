import ServicePageLayout from '@/components/ServicePageLayout';
import { Rocket, Cloud, Smartphone, AlertTriangle, BarChart3, TrendingUp, Shield, Zap } from 'lucide-react';
import digitalTransformationBg from '@/assets/digital-transformation-bg.jpg';

const DigitalTransformation = () => {
  const problems = [
    {
      title: 'Legacy System Constraints',
      description: 'Outdated technology infrastructure limiting business growth and operational efficiency.',
      icon: AlertTriangle,
    },
    {
      title: 'Digital Skill Gaps',
      description: 'Lack of internal expertise to implement and manage modern digital solutions effectively.',
      icon: BarChart3,
    },
    {
      title: 'Competitive Disadvantage',
      description: 'Falling behind competitors who have successfully embraced digital technologies and automation.',
      icon: Smartphone,
    },
  ];

  const solutions = [
    {
      title: 'Cloud Migration & Modernization',
      description: 'Seamlessly migrate your infrastructure to the cloud and modernize applications for enhanced performance.',
      features: [
        'Cloud strategy and architecture design',
        'Application modernization and refactoring',
        'Data migration and integration',
        'Multi-cloud and hybrid cloud solutions',
        'DevOps and CI/CD implementation'
      ],
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // Cloud migration
    },
    {
      title: 'Digital Innovation Platform',
      description: 'Implement cutting-edge technologies to transform your business operations and customer experiences.',
      features: [
        'AI and machine learning integration',
        'IoT solutions and connectivity',
        'Mobile application development',
        'API development and integration',
        'Advanced analytics and insights'
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // Digital innovation
    },
  ];

  const results = [
    {
      metric: '65%',
      description: 'Improvement in operational efficiency',
      icon: Zap,
    },
    {
      metric: '50%',
      description: 'Reduction in IT costs',
      icon: TrendingUp,
    },
    {
      metric: '99.9%',
      description: 'Cloud uptime guarantee',
      icon: Cloud,
    },
    {
      metric: '80%',
      description: 'Faster time to market',
      icon: Rocket,
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Strategy',
      description: 'Develop comprehensive digital transformation roadmap',
    },
    {
      step: '2',
      title: 'Migration',
      description: 'Execute phased migration and modernization plan',
    },
    {
      step: '3',
      title: 'Integration',
      description: 'Integrate new systems with existing infrastructure',
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Continuously optimize and enhance digital capabilities',
    },
  ];

  return (
    <ServicePageLayout
      title="Digital Transformation Services"
      subtitle="Accelerate your digital journey with comprehensive transformation services including cloud migration, application modernization, and cutting-edge technology integration."
      heroImage={digitalTransformationBg}
      icon={Rocket}
      problems={problems}
      solutions={solutions}
      results={results}
      process={process}
      ctaText="Future-proof your business with our comprehensive digital transformation services. Partner with us to unlock new opportunities and drive sustainable growth."
    />
  );
};

export default DigitalTransformation;