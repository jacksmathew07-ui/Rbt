import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1590644365607-1c5a38fc6fb9?q=80&w=1920&auto=format&fit=crop"
          alt="RMC BTP Heavy Machinery at Work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-rmc-blue/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm rounded-full tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-rmc-orange animate-pulse"></span>
            Premier BTP Company in Cameroon
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Construction, Equipment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rmc-orange">
              & Material Supply
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed font-light"
          >
            RMC BTP SARL is your trusted partner for Civil Engineering, Heavy Equipment Rental, and Quality Construction Materials in Yaoundé, Douala, and across the CEMAC region.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-rmc-orange hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 ring-4 ring-transparent hover:ring-orange-500/20"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 backdrop-blur-sm text-base font-bold rounded-full text-white hover:bg-white hover:text-rmc-blue transition-all"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Hero;