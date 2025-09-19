import ServicePageLayout from '@/components/ServicePageLayout';
import { Database, FileText, Target, AlertTriangle, BarChart3, TrendingUp, Shield, CheckCircle2 } from 'lucide-react';
import dataProcessingBg from '@/assets/data-processing-bg.jpg';

const DataProcessing = () => {
  const problems = [
    {
      title: 'Manual Data Entry Errors',
      description: 'Human errors in data entry leading to inaccurate records and compromised business intelligence.',
      icon: AlertTriangle,
    },
    {
      title: 'Time-Consuming Processes',
      description: 'Manual data processing consuming valuable resources that could be allocated to core business activities.',
      icon: BarChart3,
    },
    {
      title: 'Data Quality Issues',
      description: 'Inconsistent data formats, duplicate records, and incomplete information affecting decision-making.',
      icon: Target,
    },
  ];

  const solutions = [
    {
      title: 'Automated Data Processing',
      description: 'Advanced automation tools and AI-powered systems for accurate, fast, and reliable data processing.',
      features: [
        'OCR and document digitization',
        'Automated data validation and cleansing',
        'Real-time data processing capabilities',
        'Integration with existing databases',
        'Quality assurance protocols'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // Data processing
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with comprehensive analytics and reporting solutions.',
      features: [
        'Business intelligence dashboards',
        'Predictive analytics modeling',
        'Custom reporting solutions',
        'Data visualization tools',
        'Performance metrics tracking'
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // Analytics dashboard
    },
  ];

  const results = [
    {
      metric: '99.8%',
      description: 'Data accuracy rate',
      icon: CheckCircle2,
    },
    {
      metric: '60%',
      description: 'Faster processing time',
      icon: TrendingUp,
    },
    {
      metric: '24/7',
      description: 'Processing availability',
      icon: Database,
    },
    {
      metric: '100%',
      description: 'Data security compliance',
      icon: Shield,
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Analyze your data sources and processing requirements',
    },
    {
      step: '2',
      title: 'Setup',
      description: 'Configure automated systems and validation rules',
    },
    {
      step: '3',
      title: 'Processing',
      description: 'Execute data processing with quality controls',
    },
    {
      step: '4',
      title: 'Delivery',
      description: 'Provide clean, organized data and insights',
    },
  ];

  return (
    <ServicePageLayout
      title="Data Processing Services"
      subtitle="Transform your raw data into valuable business assets with our comprehensive data processing, cleansing, and analytics solutions powered by advanced automation."
      heroImage={dataProcessingBg}
      icon={Database}
      problems={problems}
      solutions={solutions}
      results={results}
      process={process}
      ctaText="Turn your data into a competitive advantage. Our expert team ensures accuracy, security, and actionable insights from your data assets."
    />
  );
};

export default DataProcessing;