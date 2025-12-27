import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import { NavItem } from '../types';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-rmc-orange p-2 rounded-lg">
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
                className={`font-medium text-sm hover:text-rmc-orange transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-rmc-orange text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-orange-600 transition-colors shadow-lg"
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
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-rmc-orange hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2">
                <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-rmc-orange text-white px-5 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors"
                >
                Request a Quote
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;