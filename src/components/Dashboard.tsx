import React, { useState } from 'react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import { AlertTriangle, Activity, Battery, Signal, Droplet, Calendar, Shield } from 'lucide-react';
import { AlertItem, StatItem } from '../types';

const alerts: AlertItem[] = [
  {
    id: '1',
    title: 'Maintenance Due',
    description: 'Scheduled maintenance in 14 days',
    severity: 'low',
    timestamp: '2025-03-10T10:30:00Z'
  },
  {
    id: '2',
    title: 'Battery Low',
    description: 'Sensor battery below 20%',
    severity: 'medium',
    timestamp: '2025-03-09T14:45:00Z'
  }
];

const stats: StatItem[] = [
  {
    icon: 'tank',
    title: 'Tank Level',
    value: 60,
    unit: '%'
  },
  {
    icon: 'signal',
    title: 'Signal Strength',
    value: 85,
    unit: '%'
  },
  {
    icon: 'battery',
    title: 'Battery',
    value: 45,
    unit: '%'
  },
  {
    icon: 'activity',
    title: 'System Status',
    value: 'Normal',
  }
];

const Dashboard: React.FC = () => {
  const [tankLevel] = useState(60);
  
  const getIconForStat = (iconName: string) => {
    switch (iconName) {
      case 'tank': return <Droplet size={24} />;
      case 'signal': return <Signal size={24} />;
      case 'battery': return <Battery size={24} />;
      case 'activity': return <Activity size={24} />;
      default: return <Shield size={24} />;
    }
  };
  
  const getSeverityVariant = (severity: string) => {
    switch (severity) {
      case 'low': return 'warning';
      case 'medium': return 'warning';
      case 'high': return 'danger';
      default: return 'default';
    }
  };
  
  return (
    <section className="py-16 md:py-24" id="dashboard">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Live Monitoring Dashboard
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            View your septic system's real-time data and status at a glance
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main dashboard panel */}
          <div className="lg:col-span-2">
            <Card title="System Overview" glowing={true}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/60 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-xs">{stat.title}</span>
                      <span className={`
                        ${stat.title === 'Tank Level' && Number(stat.value) > 80 ? 'text-red-400' : ''}
                        ${stat.title === 'Tank Level' && Number(stat.value) > 60 && Number(stat.value) <= 80 ? 'text-yellow-400' : ''}
                        ${stat.title === 'Tank Level' && Number(stat.value) <= 60 ? 'text-green-400' : ''}
                        ${stat.title === 'Battery' && Number(stat.value) < 20 ? 'text-red-400' : ''}
                        ${stat.title === 'Signal Strength' && Number(stat.value) < 50 ? 'text-red-400' : ''}
                      `}>
                        {getIconForStat(stat.icon)}
                      </span>
                    </div>
                    <div className="flex items-end">
                      <span className="text-white text-xl font-semibold">{stat.value}</span>
                      {stat.unit && <span className="text-gray-400 ml-1">{stat.unit}</span>}
                    </div>
                    {(stat.title === 'Tank Level' || stat.title === 'Signal Strength' || stat.title === 'Battery') && (
                      <div className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            stat.title === 'Tank Level' ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                            stat.title === 'Signal Strength' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${stat.value}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700">
                <h3 className="text-blue-400 text-lg mb-4">Tank Level Visualization</h3>
                <div className="flex items-center justify-center h-60 relative border border-gray-700 rounded-lg bg-gray-900/80 overflow-hidden">
                  {/* Septic tank visualization */}
                  <div className="w-40 h-56 relative border-2 border-gray-600 rounded-xl overflow-hidden">
                    {/* Water level animation */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400 transition-all duration-1000"
                      style={{ height: `${tankLevel}%` }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-2 bg-blue-300/30 animate-wave"></div>
                    </div>
                    
                    {/* Level indicators */}
                    <div className="absolute top-1/4 right-0 w-2 h-0.5 bg-red-400"></div>
                    <div className="absolute top-1/2 right-0 w-2 h-0.5 bg-yellow-400"></div>
                    <div className="absolute top-3/4 right-0 w-2 h-0.5 bg-green-400"></div>
                    
                    {/* Level labels */}
                    <div className="absolute top-1/4 right-3 text-xs text-red-400 transform translate-y-[-50%]">75%</div>
                    <div className="absolute top-1/2 right-3 text-xs text-yellow-400 transform translate-y-[-50%]">50%</div>
                    <div className="absolute top-3/4 right-3 text-xs text-green-400 transform translate-y-[-50%]">25%</div>
                  </div>
                  
                  {/* Current level indicator */}
                  <div className="absolute right-8 top-1/2 transform translate-y-[-50%]">
                    <div className="text-center mb-2">
                      <div className="text-2xl font-mono text-blue-400">{tankLevel}%</div>
                      <div className="text-xs text-gray-400">Current Level</div>
                    </div>
                    <div className="text-xs text-gray-400 mt-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
                        <span>0-60%: Normal</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                        <span>61-80%: Monitor</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                        <span>81-100%: Alert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Side panels */}
          <div className="space-y-6">
            <Card title="System Alerts" glowing={true}>
              {alerts.length > 0 ? (
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div 
                      key={alert.id}
                      className="bg-gray-800/60 p-3 rounded-lg border border-gray-700"
                    >
                      <div className="flex items-start">
                        <div className="mr-3 mt-0.5">
                          <AlertTriangle size={16} className={`
                            ${alert.severity === 'high' ? 'text-red-400' : ''}
                            ${alert.severity === 'medium' ? 'text-yellow-400' : ''}
                            ${alert.severity === 'low' ? 'text-blue-400' : ''}
                          `} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-white text-sm font-medium">{alert.title}</h4>
                            <Badge variant={getSeverityVariant(alert.severity)}>
                              {alert.severity}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-xs mt-1">{alert.description}</p>
                          <div className="text-gray-500 text-xs mt-2">
                            {new Date(alert.timestamp).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-400 text-sm">No alerts at this time</p>
                </div>
              )}
            </Card>
            
            <Card title="Maintenance Schedule" glowing={true}>
              <div className="bg-gray-800/60 p-3 rounded-lg border border-gray-700">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <Calendar size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Next Scheduled Maintenance</h4>
                    <p className="text-gray-400 text-xs mt-1">March 24, 2025</p>
                    <div className="mt-2">
                      <Badge variant="default">14 days</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="w-full bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded py-2 text-sm hover:bg-blue-500/30 transition-colors">
                  Schedule Service
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;