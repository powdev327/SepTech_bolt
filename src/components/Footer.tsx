import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-blue-400 font-bold text-xl mb-4 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">SepTech</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Advanced septic system monitoring for the modern homeowner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">SepTech Shield</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Monitoring System</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Smart Alerts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Installation Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="text-blue-400 mr-2" />
                <a href="mailto:info@septech.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  info@septech.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-blue-400 mr-2" />
                <a href="tel:+18005557890" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  1-800-555-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SepTech Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;