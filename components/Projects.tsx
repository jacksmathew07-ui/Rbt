import React, { useState } from 'react';
import { Project } from '../types';
import { MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: 'Akwa Palace Extension',
    category: 'Buildings',
    imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ad66aa1e8?q=80&w=600&auto=format&fit=crop', // Concrete structure
    location: 'Akwa, Douala'
  },
  {
    id: 2,
    title: 'Odza-Nsimbock Road',
    category: 'Roads',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b95d630b9f?q=80&w=600&auto=format&fit=crop', // Road roller paving
    location: 'Yaoundé, Centre'
  },
  {
    id: 3,
    title: 'Bonapriso Residential',
    category: 'Buildings',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop', // Construction facade
    location: 'Bonapriso, Douala'
  },
  {
    id: 4,
    title: 'Kribi Logistics Hub',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1581093458791-9f302e6d8359?q=80&w=600&auto=format&fit=crop', // Industrial/Containers
    location: 'Kribi, South'
  },
  {
    id: 5,
    title: 'Urban Drainage System',
    category: 'Public Works',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-58197bd4773d?q=80&w=600&auto=format&fit=crop', // Excavator digging trench
    location: 'Maroua, Far North'
  },
  {
    id: 6,
    title: 'Soa University Campus',
    category: 'Civil Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=600&auto=format&fit=crop', // Surveyors/Site
    location: 'Soa, Centre'
  },
];

const categories = ['All', 'Roads', 'Buildings', 'Industrial', 'Public Works'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory || (activeCategory === 'Civil Engineering' && p.category === 'Civil Engineering'));

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-rmc-orange font-bold tracking-wide uppercase text-sm mb-2">Our Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h3>
            <p className="text-gray-400 text-lg">
              Authentic views from our jobsites across Cameroon.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-rmc-orange text-white shadow-lg shadow-orange-500/20' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id} 
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-800 shadow-xl"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider bg-rmc-orange/90 text-white rounded-md backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h4>
                  <div className="flex items-center text-gray-300 text-sm font-medium">
                    <MapPin className="h-4 w-4 mr-2 text-rmc-orange" />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-gray-600 rounded-full hover:bg-white hover:text-gray-900 transition-all text-sm font-bold tracking-wide uppercase">
               View Full Gallery
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;