import React from 'react';
import Button from './ui/Button';
import { Activity, ShieldAlert, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-100">SEPTIC SHIELD</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Protect and Monitor
              </span>
              <span className="block text-gray-100 mt-2">In Real Time</span>
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Real-time tank level detection, proactive alerts, and preventative maintenance to keep your septic system running smoothly and avoid costly repairs.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
                <Zap size={18} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden shadow-glow-blue relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <div className="px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">Monitor.exe</div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-4 mb-4">
                    <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
                      <h3 className="text-blue-400 text-lg mb-2 font-medium">Tank System Status</h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Tank Level:</span>
                        <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                            style={{ width: '60%' }}
                          ></div>
                        </div>
                        <span className="text-white font-mono ml-2">60%</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Signal Strength:</span>
                        <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-green-400"
                            style={{ width: '80%' }}
                          ></div>
                        </div>
                        <span className="text-white font-mono ml-2">80%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Battery:</span>
                        <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                            style={{ width: '45%' }}
                          ></div>
                        </div>
                        <span className="text-white font-mono ml-2">45%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700 h-full">
                      <h3 className="text-blue-400 text-sm mb-2">System Alerts</h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <ShieldAlert size={16} className="text-yellow-400 mr-2 mt-0.5" />
                          <div>
                            <div className="text-yellow-400 text-xs">Maintenance Due</div>
                            <div className="text-gray-400 text-xs">In 14 days</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700 h-full">
                      <h3 className="text-blue-400 text-sm mb-2">Activity</h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <Activity size={16} className="text-green-400 mr-2 mt-0.5" />
                          <div>
                            <div className="text-green-400 text-xs">System Normal</div>
                            <div className="text-gray-400 text-xs">Last check: 10m ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;