import ServicePageLayout from '@/components/ServicePageLayout';
import { Shield, Lock, FileCheck, AlertTriangle, BarChart3, TrendingUp, CheckCircle2, Users } from 'lucide-react';
import complianceBg from '@/assets/compliance-bg.jpg';

const Compliance = () => {
  const problems = [
    {
      title: 'Regulatory Complexity',
      description: 'Navigating complex and constantly changing regulatory requirements across different jurisdictions and industries.',
      icon: AlertTriangle,
    },
    {
      title: 'Data Security Risks',
      description: 'Protecting sensitive customer and business data from cyber threats and ensuring privacy compliance.',
      icon: BarChart3,
    },
    {
      title: 'Compliance Costs',
      description: 'High costs associated with maintaining in-house compliance teams and audit-ready documentation.',
      icon: FileCheck,
    },
  ];

  const solutions = [
    {
      title: 'Regulatory Compliance Management',
      description: 'Comprehensive compliance solutions covering GDPR, HIPAA, SOX, and industry-specific regulations.',
      features: [
        'GDPR and privacy compliance frameworks',
        'Industry-specific regulatory adherence',
        'Audit trail management',
        'Risk assessment and mitigation',
        'Compliance monitoring and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80', // Compliance
    },
    {
      title: 'Data Security & Protection',
      description: 'Advanced security measures and protocols to protect your data and ensure compliance with security standards.',
      features: [
        'ISO 27001 certified security protocols',
        'End-to-end data encryption',
        'Access control and monitoring',
        'Regular security audits and assessments',
        'Incident response and recovery plans'
      ],
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80', // Data security
    },
  ];

  const results = [
    {
      metric: '100%',
      description: 'Compliance rate achieved',
      icon: CheckCircle2,
    },
    {
      metric: '40%',
      description: 'Reduction in compliance costs',
      icon: TrendingUp,
    },
    {
      metric: '24/7',
      description: 'Security monitoring',
      icon: Lock,
    },
    {
      metric: '99.9%',
      description: 'Data protection uptime',
      icon: Shield,
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Evaluate current compliance status and identify gaps',
    },
    {
      step: '2',
      title: 'Implementation',
      description: 'Deploy compliance frameworks and security measures',
    },
    {
      step: '3',
      title: 'Monitoring',
      description: 'Continuous monitoring and compliance tracking',
    },
    {
      step: '4',
      title: 'Reporting',
      description: 'Regular compliance reports and audit support',
    },
  ];

  return (
    <ServicePageLayout
      title="Compliance & Security Services"
      subtitle="Ensure regulatory compliance and data security with our certified processes, ISO standards, and comprehensive risk management solutions designed for today's complex regulatory environment."
      heroImage={complianceBg}
      icon={Shield}
      problems={problems}
      solutions={solutions}
      results={results}
      process={process}
      ctaText="Protect your business and maintain compliance with confidence. Our expert team ensures you meet all regulatory requirements while maintaining operational efficiency."
    />
  );
};

export default Compliance;