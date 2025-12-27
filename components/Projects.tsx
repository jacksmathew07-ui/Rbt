import React from 'react';
import { Project } from '../types';
import { MapPin } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: 'Akwa Palace Extension',
    category: 'Commercial Building',
    imageUrl: 'https://images.unsplash.com/photo-1556912167-f556f7f394f5?auto=format&fit=crop&q=80&w=600',
    location: 'Akwa, Douala'
  },
  {
    id: 2,
    title: 'Odza-Nsimbock Road Paving',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1545459720-aac3e5df085c?auto=format&fit=crop&q=80&w=600',
    location: 'Yaoundé, Centre'
  },
  {
    id: 3,
    title: 'Bonapriso Luxury Apartments',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&q=80&w=600',
    location: 'Bonapriso, Douala'
  },
  {
    id: 4,
    title: 'Kribi Industrial Zone Logistics',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600',
    location: 'Kribi, South'
  },
  {
    id: 5,
    title: 'Urban Drainage System',
    category: 'Public Works',
    imageUrl: 'https://images.unsplash.com/photo-1590986061386-764efd6e32e8?auto=format&fit=crop&q=80&w=600',
    location: 'Maroua, Far North'
  },
  {
    id: 6,
    title: 'University Campus Foundation',
    category: 'Civil Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1590059390299-92c2dfc9c1b4?auto=format&fit=crop&q=80&w=600',
    location: 'Soa, Centre'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-rmc-orange font-bold tracking-wide uppercase text-sm mb-2">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
            <p className="text-gray-400">
              Showcasing our contribution to Cameroon's emergence through quality infrastructure and reliable equipment supply.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-rmc-orange hover:border-rmc-orange transition-all text-sm font-semibold">
               View All Projects
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
              {/* Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-rmc-orange text-white rounded-full">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 mr-1 text-rmc-orange" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;