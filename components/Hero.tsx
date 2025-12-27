import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920"
          alt="RMC BTP Construction Site Cameroon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rmc-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 bg-rmc-orange/90 text-white font-semibold text-sm rounded-full tracking-wide uppercase">
            Premier BTP Company in Cameroon
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Construction, Equipment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rmc-orange">
              & Material Supply
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            RMC BTP SARL is your trusted partner for Civil Engineering, Heavy Equipment Rental, and Quality Construction Materials in Yaoundé, Douala, and across the CEMAC region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-rmc-orange hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-bold rounded-lg text-white hover:bg-white hover:text-rmc-blue transition-all"
            >
              Our Equipment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;