import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, HardHat, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-rmc-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="h-8 w-8 text-rmc-orange" />
              <span className="font-bold text-2xl tracking-tighter">
                RMC <span className="text-rmc-orange">BTP</span> SARL
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the way in construction and civil engineering across Cameroon. Quality, Safety, and Integrity in every structure we build.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-rmc-orange transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-rmc-orange transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-rmc-orange transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-rmc-orange transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-rmc-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-rmc-orange transition-colors">Road Construction</a></li>
              <li><a href="#" className="hover:text-rmc-orange transition-colors">Civil Engineering</a></li>
              <li><a href="#" className="hover:text-rmc-orange transition-colors">Building Construction</a></li>
              <li><a href="#" className="hover:text-rmc-orange transition-colors">Public Infrastructure</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for latest project updates.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-rmc-orange"
              />
              <button className="bg-rmc-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors font-semibold text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RMC BTP SARL. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-rmc-orange text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all z-40 opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;