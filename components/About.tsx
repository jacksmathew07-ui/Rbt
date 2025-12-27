import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                alt="RMC BTP Engineers on site"
                className="w-full h-full object-cover"
              />
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-rmc-orange hidden md:block">
                <p className="text-4xl font-bold text-rmc-blue mb-1">15+</p>
                <p className="text-gray-600 font-medium">Years of building excellence in Cameroon.</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-rmc-orange rounded-2xl"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-rmc-orange font-bold tracking-wide uppercase text-sm mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-rmc-blue mb-6">
              More Than Just Builders — We Are Developers
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              RMC BTP SARL is a premier Cameroonian construction firm. We specialize not only in civil engineering and building construction but also in the logistics that power them. From heavy machinery rental to the supply of premium aggregates (sand, gravel, laterite), we control the supply chain to ensure your projects are never delayed.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team understands the local terrain of Cameroon, ensuring that every road, bridge, and building we construct stands the test of time and climate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Large Fleet of Heavy Equipment",
                "Premium Material Supply",
                "Certified Civil Engineers",
                "Respect for Deadlines"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-rmc-orange flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="text-rmc-blue font-bold border-b-2 border-rmc-orange hover:text-rmc-orange transition-colors pb-1">
                Contact us for equipment availability &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;