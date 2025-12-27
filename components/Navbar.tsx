import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-gray-100 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-rmc-orange p-2 rounded-lg transform transition-transform group-hover:rotate-12">
                <HardHat className="h-6 w-6 text-white" />
              </div>
              <span className={`font-bold text-2xl tracking-tighter ${scrolled ? 'text-rmc-blue' : 'text-white'}`}>
                RMC <span className="text-rmc-orange">BTP</span> SARL
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium text-sm relative group transition-colors ${scrolled ? 'text-gray-700 hover:text-rmc-orange' : 'text-gray-200 hover:text-white'}`}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-rmc-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-rmc-orange text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-rmc-orange focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl absolute w-full left-0 top-full border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 rounded-lg text-lg font-medium text-gray-700 hover:text-rmc-orange hover:bg-gray-50 border-b border-gray-50 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                  <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-rmc-orange text-white px-5 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-md"
                  >
                  Request a Quote
                  </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;