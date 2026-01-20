import React from 'react';
import { motion } from 'framer-motion';
import { Home, Utensils, Users, FileText, Heart, Shield, Plane, Hotel, FileCheck, Globe, Clock, Phone } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Patients = () => {
  const facilities = [
    { icon: Home, title: 'Comfortable Accommodation', description: 'Private rooms with hospital-grade amenities, Wi-Fi, and housekeeping' },
    { icon: Utensils, title: 'Special Diet Kitchen', description: 'Customized meals prepared by nutritionists for your recovery' },
    { icon: Users, title: '24/7 Nursing Care', description: 'Round-the-clock medical attention and assistance' },
    { icon: FileText, title: 'Documentation Help', description: 'Complete assistance with medical and travel paperwork' },
    { icon: Globe, title: 'Language Support', description: 'Multilingual coordinators and translation services' },
    { icon: Shield, title: 'Medical Insurance', description: 'Assistance with insurance claims and billing' }
  ];

  const packages = [
    { 
      name: 'Basic Screening', 
      price: '$1,500', 
      duration: '3 days',
      features: [
        'Full body checkup',
        'Basic blood tests',
        'Doctor consultation',
        'Accommodation (2 nights)',
        'Airport transfer'
      ] 
    },
    { 
      name: 'Comprehensive Care', 
      price: '$5,000', 
      duration: '7 days',
      features: [
        'Advanced diagnostic tests',
        'Specialist consultation',
        'Accommodation (6 nights)',
        'Personal coordinator',
        'Daily meals',
        'Local transportation'
      ],
      popular: true
    },
    { 
      name: 'Premium Treatment', 
      price: '$12,000', 
      duration: '14-21 days',
      features: [
        'Complete treatment package',
        'Luxury accommodation',
        'Personal medical assistant',
        'Visa processing',
        'Flight arrangements',
        '24/7 concierge'
      ] 
    }
  ];

  const visitorInfo = [
    {
      category: 'Travel Arrangements',
      items: [
        { icon: Plane, text: 'Visa invitation letter' },
        { icon: Hotel, text: 'Hotel booking assistance' },
        { icon: FileCheck, text: 'Travel insurance guidance' }
      ]
    },
    {
      category: 'Hospital Policies',
      items: [
        { icon: Clock, text: 'Visiting hours: 10AM - 8PM' },
        { icon: Users, text: 'Max 2 visitors per patient' },
        { icon: Shield, text: 'Health screening required' }
      ]
    },
    {
      category: 'Health Tips',
      items: [
        { icon: Heart, text: 'Stay hydrated' },
        { icon: Utensils, text: 'Follow prescribed diet' },
        { icon: Phone, text: 'Keep emergency contacts handy' }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-blue/10 to-primary-teal/10 py-20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">For Patients & Visitors</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete support for international patients - from arrival to recovery
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Patient Facilities & Services</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div 
                    whileHover={{ y: -5 }} 
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full"
                  >
                    <div className="w-14 h-14 bg-primary-teal/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary-teal" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Packages */}
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Treatment Packages</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.03 }} 
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden border relative ${
                    pkg.popular ? 'ring-2 ring-primary-teal transform scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary-teal text-white px-4 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="bg-gradient-to-r from-primary-blue to-primary-teal p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                    <p className="opacity-90">Duration: {pkg.duration}</p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Heart size={16} className="text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-lg font-bold transition ${
                      pkg.popular 
                        ? 'bg-primary-teal text-white hover:bg-primary-blue' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}>
                      Select Package
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Visitor Information</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {visitorInfo.map((section, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">{section.category}</h3>
                  <div className="space-y-4">
                    {section.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex items-center">
                          <Icon size={18} className="text-primary-teal mr-3" />
                          <span className="text-gray-700">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Important Notice */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex">
                <Shield className="text-yellow-600 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Important Information for Visitors</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>All visitors must undergo health screening at hospital entrance</li>
                    <li>Children under 12 are not permitted in patient rooms</li>
                    <li>Photography is strictly prohibited in treatment areas</li>
                    <li>Maintain quiet environment in hospital premises</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary-blue to-primary-navy rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Need Assistance with Travel Arrangements?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our travel coordination team handles everything from visa processing to accommodation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
                >
                  Request Travel Assistance
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
                >
                  Download Patient Guide
                </motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Patients;