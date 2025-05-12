import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, Zap, Droplet, Settings, Shield } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    { icon: <Droplet size={32} />, text: "Get Started", color: "from-blue-400" },
    { icon: <Activity size={32} />, text: "Real Stats", color: "from-purple-400" },
    { icon: <ShieldAlert size={32} />, text: "Prevent Alerts", color: "from-green-400" },
    { icon: <Settings size={32} />, text: "Maintenance", color: "from-yellow-400" },
    { icon: <Shield size={32} />, text: "Peace of Mind", color: "from-pink-400" }
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden relative"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-100">SEPTIC SHIELD</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Protect and Monitor
              </span>
              <span className="block text-gray-100 mt-2">In Real Time</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg">
              Experience next-generation septic system monitoring with real-time alerts
              and AI-powered maintenance predictions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto group">
                Get Started
                <Zap size={18} className="ml-2 group-hover:animate-pulse" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Demo
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-[4/3] bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800 shadow-glow-blue">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative p-6">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="col-span-2 bg-gray-800/60 rounded-lg p-4 border border-blue-500/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-blue-400 text-lg mb-2">System Status</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Tank Level</span>
                        <motion.div 
                          className="h-2 w-32 bg-gray-700 rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          animate={{ width: "8rem" }}
                          transition={{ duration: 1 }}
                        >
                          <motion.div 
                            className="h-full bg-blue-400"
                            initial={{ width: 0 }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          />
                        </motion.div>
                        <span className="text-blue-400">60%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 grid grid-cols-5 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg bg-gradient-to-b ${feature.color} to-transparent bg-opacity-20 border border-gray-700`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-blue-400 mb-2">{feature.icon}</div>
                      <span className="text-xs text-gray-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;