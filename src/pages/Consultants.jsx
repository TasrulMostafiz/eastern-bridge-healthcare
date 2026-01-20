import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Award, Users, Calendar, MessageSquare, Brain, Heart, Bone, Eye } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Consultants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = [
    { id: 'all', name: 'All Specialties', icon: Users },
    { id: 'oncology', name: 'Oncology', icon: Brain },
    { id: 'cardiology', name: 'Cardiology', icon: Heart },
    { id: 'orthopedics', name: 'Orthopedics', icon: Bone },
    { id: 'ophthalmology', name: 'Ophthalmology', icon: Eye }
  ];

  const consultants = [
    {
      id: 1,
      name: 'Dr. Zhang Wei',
      title: 'Chief Oncologist',
      specialty: 'oncology',
      hospital: 'Beijing Cancer Hospital',
      experience: '15 years',
      rating: 4.9,
      patients: 5000,
      languages: ['English', 'Chinese', 'Japanese'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang',
      available: true
    },
    {
      id: 2,
      name: 'Dr. Li Na',
      title: 'Senior Surgeon',
      specialty: 'oncology',
      hospital: 'Shanghai United Hospital',
      experience: '12 years',
      rating: 4.8,
      patients: 4200,
      languages: ['English', 'Chinese', 'Korean'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Li',
      available: true
    },
    {
      id: 3,
      name: 'Dr. Wang Jun',
      title: 'Cardiothoracic Surgeon',
      specialty: 'cardiology',
      hospital: 'Guangzhou Medical Center',
      experience: '18 years',
      rating: 4.9,
      patients: 6800,
      languages: ['English', 'Chinese'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wang',
      available: false
    },
    {
      id: 4,
      name: 'Dr. Chen Xia',
      title: 'Orthopedic Specialist',
      specialty: 'orthopedics',
      hospital: 'Chengdu Health Institute',
      experience: '10 years',
      rating: 4.7,
      patients: 3500,
      languages: ['English', 'Chinese', 'Arabic'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chen',
      available: true
    },
    {
      id: 5,
      name: 'Dr. Tanaka Hiroshi',
      title: 'International Medical Director',
      specialty: 'oncology',
      hospital: 'Beijing Cancer Hospital',
      experience: '20 years',
      rating: 5.0,
      patients: 8000,
      languages: ['English', 'Chinese', 'Japanese', 'Spanish'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tanaka',
      available: true
    },
    {
      id: 6,
      name: 'Dr. Fatima Ahmed',
      title: 'Ophthalmology Head',
      specialty: 'ophthalmology',
      hospital: 'Shanghai United Hospital',
      experience: '14 years',
      rating: 4.8,
      patients: 4500,
      languages: ['English', 'Chinese', 'Arabic', 'French'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
      available: true
    }
  ];

  const filteredConsultants = consultants.filter(consultant => {
    const matchesSearch = consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consultant.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || consultant.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-blue/10 to-primary-teal/10 py-20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Find Your Consultant</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with leading medical specialists from China's top hospitals
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search by name, specialty, or hospital..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Specialty Filter */}
                <div className="flex items-center space-x-4">
                  <Filter size={20} className="text-gray-600" />
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                  >
                    {specialties.map(spec => (
                      <option key={spec.id} value={spec.id}>{spec.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Specialty Quick Filters */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-8">
              {specialties.map((spec) => {
                const Icon = spec.icon;
                return (
                  <button
                    key={spec.id}
                    onClick={() => setSelectedSpecialty(spec.id)}
                    className={`flex items-center px-4 py-2 rounded-full border transition-colors ${
                      selectedSpecialty === spec.id
                        ? 'bg-primary-teal text-white border-primary-teal'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-teal'
                    }`}
                  >
                    <Icon size={16} className="mr-2" />
                    {spec.name}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Consultants Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConsultants.map((consultant, index) => (
              <AnimatedSection key={consultant.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  {/* Consultant Header */}
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <img
                        src={consultant.image}
                        alt={consultant.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{consultant.name}</h3>
                        <p className="text-primary-teal font-semibold">{consultant.title}</p>
                        <p className="text-gray-600 text-sm">{consultant.hospital}</p>
                      </div>
                    </div>

                    {/* Rating and Experience */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-bold">{consultant.rating}</span>
                        <span className="text-gray-500 text-sm ml-1">({consultant.patients}+ patients)</span>
                      </div>
                      <div className="flex items-center">
                        <Award size={16} className="text-gray-400 mr-1" />
                        <span className="text-gray-600">{consultant.experience}</span>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Languages:</p>
                      <div className="flex flex-wrap gap-1">
                        {consultant.languages.map((lang, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`flex items-center ${consultant.available ? 'text-green-600' : 'text-red-600'}`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${consultant.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-sm">{consultant.available ? 'Available Now' : 'On Leave'}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className={`flex-1 btn-primary ${!consultant.available && 'opacity-50 cursor-not-allowed'}`}>
                        <Calendar size={16} className="inline mr-2" />
                        Book Appointment
                      </button>
                      <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <MessageSquare size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* No Results */}
          {filteredConsultants.length === 0 && (
            <AnimatedSection>
              <div className="text-center py-12">
                <Search size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No consultants found</h3>
                <p className="text-gray-600">Try adjusting your search criteria</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* How to Book */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Book a Consultation</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Select Consultant',
                description: 'Choose from our network of expert doctors',
                icon: Users
              },
              {
                step: '02',
                title: 'Submit Medical Records',
                description: 'Share your medical history for review',
                icon: Award
              },
              {
                step: '03',
                title: 'Schedule Appointment',
                description: 'Book video or in-person consultation',
                icon: Calendar
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary-teal" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultants;