import ServicePageLayout from '@/components/ServicePageLayout';
import { Cog, Zap, Timer, AlertTriangle, BarChart3, TrendingUp, Shield, Activity } from 'lucide-react';
import processAutomationBg from '@/assets/process-automation-bg.jpg';

const ProcessAutomation = () => {
  const problems = [
    {
      title: 'Repetitive Manual Tasks',
      description: 'Employees spending valuable time on routine, repetitive tasks that could be automated for better productivity.',
      icon: AlertTriangle,
    },
    {
      title: 'Process Inefficiencies',
      description: 'Bottlenecks and delays in workflows causing operational slowdowns and increased costs.',
      icon: BarChart3,
    },
    {
      title: 'Human Error Risk',
      description: 'Manual processes prone to errors affecting quality, compliance, and customer satisfaction.',
      icon: Timer,
    },
  ];

  const solutions = [
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Deploy intelligent bots to automate repetitive tasks and streamline complex workflows.',
      features: [
        'Custom RPA bot development',
        'Process mapping and optimization',
        'Integration with existing systems',
        'Exception handling and monitoring',
        'Scalable automation architecture'
      ],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // Automation robot
    },
    {
      title: 'Workflow Optimization',
      description: 'Redesign and optimize business processes for maximum efficiency and performance.',
      features: [
        'Business process analysis',
        'Workflow design and modeling',
        'Performance monitoring tools',
        'Continuous improvement cycles',
        'Change management support'
      ],
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // Workflow
    },
  ];

  const results = [
    {
      metric: '70%',
      description: 'Reduction in processing time',
      icon: Zap,
    },
    {
      metric: '90%',
      description: 'Decrease in manual errors',
      icon: Activity,
    },
    {
      metric: '24/7',
      description: 'Automated operations',
      icon: Timer,
    },
    {
      metric: '50%',
      description: 'Cost savings achieved',
      icon: TrendingUp,
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery',
      description: 'Identify automation opportunities and map current processes',
    },
    {
      step: '2',
      title: 'Design',
      description: 'Design optimized workflows and automation logic',
    },
    {
      step: '3',
      title: 'Development',
      description: 'Build and test automation solutions',
    },
    {
      step: '4',
      title: 'Deployment',
      description: 'Launch automation with monitoring and support',
    },
  ];

  return (
    <ServicePageLayout
      title="Process Automation Solutions"
      subtitle="Revolutionize your operations with intelligent automation and RPA technology. Eliminate manual bottlenecks, reduce errors, and boost productivity across all business processes."
      heroImage={processAutomationBg}
      icon={Cog}
      problems={problems}
      solutions={solutions}
      results={results}
      process={process}
      ctaText="Unlock the power of automation to transform your business operations. Let us help you build more efficient, error-free, and scalable processes."
    />
  );
};

export default ProcessAutomation;