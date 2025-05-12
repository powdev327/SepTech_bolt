import React from 'react';
import Button from './ui/Button';
import { ShieldCheck } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-xl p-8 shadow-glow-sm max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6">
              <ShieldCheck size={32} className="text-blue-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Protect Your Investment
              </span>
            </h2>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of homeowners who trust SepTech to monitor and protect their septic systems.
              Get started today and enjoy peace of mind knowing your system is constantly monitored.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">
                Get Started Now
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;