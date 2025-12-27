import React from 'react';
import { Truck, Building2, Wrench, Ruler, HardHat, Shovel } from 'lucide-react';
import { Service } from '../types';
import { motion } from 'framer-motion';

const services: Service[] = [
  {
    id: 1,
    title: 'Civil Engineering',
    description: 'Expert execution of roads, bridges, and hydraulic structures adhering to international standards.',
    icon: Ruler,
  },
  {
    id: 2,
    title: 'Heavy Equipment Rental',
    description: 'Rental of bulldozers, excavators, graders, and dump trucks for all your site needs.',
    icon: Truck,
  },
  {
    id: 3,
    title: 'Building Construction',
    description: 'Turnkey solutions for residential complexes, commercial towers, and industrial warehouses.',
    icon: Building2,
  },
  {
    id: 4,
    title: 'Material Supply',
    description: 'Supply and delivery of high-quality sand, gravel, laterite, and cement for construction.',
    icon: Shovel,
  },
  {
    id: 5,
    title: 'Infrastructure Maintenance',
    description: 'Regular maintenance and renovation of public works to ensure longevity and safety.',
    icon: Wrench,
  },
  {
    id: 6,
    title: 'Public Works (BTP)',
    description: 'Partnering with the state for urban development, drainage, and rural accessibility projects.',
    icon: HardHat,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-rmc-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-rmc-orange font-bold tracking-wide uppercase text-sm mb-2"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-rmc-blue mb-4"
          >
            Complete Construction Solutions
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            From heavy machinery rental to delivering the finest aggregates, RMC BTP SARL supports your project from the ground up.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-rmc-orange/30"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rmc-orange group-hover:text-white transition-all duration-300 text-rmc-blue transform group-hover:rotate-6 shadow-sm">
                <service.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rmc-orange transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="w-8 h-1 bg-gray-100 group-hover:bg-rmc-orange group-hover:w-full transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;