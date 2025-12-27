import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Heavy Equipment Rental',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you, ${formData.name}. We have received your request regarding ${formData.projectType}.`);
    setFormData({ name: '', email: '', projectType: 'Heavy Equipment Rental', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-rmc-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info Side */}
          <div className="w-full lg:w-5/12 bg-rmc-blue p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Build Together</h3>
              <p className="text-blue-200 mb-10 leading-relaxed">
                Whether you need to rent an excavator, order truckloads of sand, or start a major construction project, RMC BTP SARL is ready to serve you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-rmc-orange" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Head Office</h5>
                    <p className="text-blue-200 text-sm">Quartier Odza<br />Yaoundé, Cameroon</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-rmc-orange" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Call Us</h5>
                    <p className="text-blue-200 text-sm">(+237) 699 00 00 00<br />(+237) 222 00 00 00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-rmc-orange" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Email Us</h5>
                    <p className="text-blue-200 text-sm">info@rmc-btp.cm<br />projects@rmc-btp.cm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
               <div className="h-40 w-full bg-blue-800 rounded-lg opacity-50 flex items-center justify-center">
                  <span className="text-sm font-mono text-center">Yaoundé / Douala<br/>Coverage</span>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-7/12 p-10 lg:p-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rmc-orange focus:border-transparent outline-none transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rmc-orange focus:border-transparent outline-none transition-all"
                    placeholder="jean@company.cm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select
                  name="projectType"
                  id="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rmc-orange focus:border-transparent outline-none transition-all"
                >
                  <option>Heavy Equipment Rental</option>
                  <option>Material Purchase (Sand/Gravel)</option>
                  <option>Civil Engineering Project</option>
                  <option>Building Construction</option>
                  <option>Road Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Project Details</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rmc-orange focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your project location and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rmc-orange text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Send Request</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;