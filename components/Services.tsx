import React from 'react';
import { Truck, Building2, Wrench, Ruler, HardHat, Shovel } from 'lucide-react';
import { Service } from '../types';

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

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-rmc-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-rmc-orange font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-rmc-blue mb-4">Complete Construction Solutions</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            From heavy machinery rental to delivering the finest aggregates, RMC BTP SARL supports your project from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-rmc-orange group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-rmc-orange group-hover:text-white transition-colors text-rmc-blue">
                <service.icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rmc-orange transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;