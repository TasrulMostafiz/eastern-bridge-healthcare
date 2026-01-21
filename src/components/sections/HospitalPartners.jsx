import React from 'react';
import { motion } from 'framer-motion';
import { Building, Award, Users, CheckCircle, MapPin, Phone, Star } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const HospitalPartners = () => {
  const hospitals = [
    {
      name: 'Beijing Cancer Hospital',
      location: 'Beijing',
      specialty: 'Oncology Center',
      accreditation: 'JCI Certified',
      rating: 4.9,
      features: ['Advanced Radiotherapy', 'Immunotherapy', 'Stem Cell Transplant'],
    },
    {
      name: 'Shanghai United Hospital',
      location: 'Shanghai',
      specialty: 'Comprehensive Care',
      accreditation: 'ISO Certified',
      rating: 4.8,
      features: ['Multi-specialty', 'International Ward', '24/7 Emergency'],
    },
    {
      name: 'Guangzhou Medical Center',
      location: 'Guangzhou',
      specialty: 'Surgical Excellence',
      accreditation: 'International Standards',
      rating: 4.7,
      features: ['Robotic Surgery', 'Transplant Center', 'Rehabilitation'],
    },
    {
      name: 'Chengdu Health Institute',
      location: 'Chengdu',
      specialty: 'Traditional Medicine',
      accreditation: 'Government Accredited',
      rating: 4.6,
      features: ['TCM Integration', 'Wellness Programs', 'Holistic Care'],
    }
  ];

  const features = [
    { icon: Award, title: 'International Accreditation', description: 'JCI, ISO, and other global certifications' },
    { icon: Building, title: 'Modern Infrastructure', description: 'State-of-the-art medical facilities' },
    { icon: Users, title: 'Multilingual Staff', description: 'English, Arabic, Russian speaking teams' },
    { icon: CheckCircle, title: 'Advanced Technology', description: 'Latest medical equipment and techniques' }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Hospitals in China</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with China's leading medical institutions to provide world-class healthcare
            </p>
          </div>
        </AnimatedSection> */}

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-14 h-14 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-teal" size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Hospital Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {hospitals.map((hospital, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                {/* Hospital Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{hospital.name}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-1" />
                        <span>{hospital.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      <Star size={16} className="mr-1" />
                      <span className="font-bold">{hospital.rating}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-2">
                      {hospital.specialty}
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {hospital.accreditation}
                    </span>
                  </div>
                </div>

                {/* Hospital Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {hospital.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 border-t border-gray-100">
                  <div className="flex justify-between">
                    <button className="btn-primary px-6">
                      View Details
                    </button>
                    <button className="flex items-center text-primary-blue hover:text-primary-teal transition-colors">
                      <Phone size={18} className="mr-2" />
                      Contact
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalPartners;