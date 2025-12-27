import React from 'react';
import { CheckCircle2, Trophy, Users, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Trophy, value: "15+", label: "Years Experience" },
  { icon: Truck, value: "50+", label: "Heavy Machines" },
  { icon: Users, value: "120+", label: "Expert Workers" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] group">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
                alt="RMC BTP Engineers on site"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border-l-4 border-rmc-orange">
                <p className="text-lg font-bold text-rmc-blue italic">"Building Cameroon's Future, One Project at a Time."</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-rmc-orange/20 rounded-3xl"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-rmc-orange font-bold tracking-wide uppercase text-sm mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-rmc-blue mb-6">
              More Than Builders. <br/>We Are <span className="text-rmc-orange">Developers.</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              RMC BTP SARL is a premier Cameroonian construction firm. We specialize not only in civil engineering and building construction but also in the logistics that power them. From heavy machinery rental to the supply of premium aggregates, we control the supply chain to ensure your projects are never delayed.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                  <stat.icon className="h-8 w-8 text-rmc-orange mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Large Fleet of Heavy Equipment",
                "Premium Material Supply",
                "Certified Civil Engineers",
                "Respect for Deadlines"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-1 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-rmc-orange flex-shrink-0" />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div>
              <a href="#contact" className="inline-flex items-center text-rmc-blue font-bold border-b-2 border-rmc-orange hover:text-rmc-orange transition-colors pb-1 group">
                Contact us for equipment availability 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;