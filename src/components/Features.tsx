import React from 'react';
import { AlertCircle, BarChart2, Shield, Clock } from 'lucide-react';
import Card from './ui/Card';

const features = [
  {
    icon: <BarChart2 size={40} className="text-blue-400" />,
    title: "Real Stats",
    description: "Monitor tank levels, system performance, and maintenance schedules in real-time with accurate data visualization."
  },
  {
    icon: <AlertCircle size={40} className="text-purple-400" />,
    title: "Prevent Alerts",
    description: "Receive timely notifications about potential issues before they become costly problems requiring emergency service."
  },
  {
    icon: <Shield size={40} className="text-green-400" />,
    title: "Proactive Maintenance",
    description: "Schedule regular maintenance based on actual usage data, extending your system's lifespan and performance."
  },
  {
    icon: <Clock size={40} className="text-yellow-400" />,
    title: "Peace of Mind",
    description: "Rest easy knowing your septic system is continuously monitored 24/7 with our advanced technology."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Smart Septic Monitoring
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our advanced monitoring system provides comprehensive protection and visibility for your septic system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="text-center transition-transform hover:translate-y-[-5px] duration-300"
              glowing={true}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 rounded-full p-3 bg-gray-800/80 inline-flex">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-400 max-w-2xl mx-auto mb-6">
            Join thousands of homeowners who have already protected their investments with SepTech Shield.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-md hover:shadow-glow-blue transition-all duration-300">
            Get Septic Shield Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;