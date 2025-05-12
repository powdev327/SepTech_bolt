import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Stats', href: '#stats' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-blue-400 font-bold text-xl mr-2 flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">SepTech</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 ml-10">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">Demo</Button>
          <Button size="sm">Login</Button>
        </div>
        
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-gray-300 hover:text-blue-400 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex space-x-3 mt-4">
              <Button variant="outline" size="sm" className="flex-1">Demo</Button>
              <Button size="sm" className="flex-1">Login</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;