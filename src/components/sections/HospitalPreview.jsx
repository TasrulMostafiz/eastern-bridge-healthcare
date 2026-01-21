import React from 'react';
import { motion } from 'framer-motion';
import { Building, Award, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { Link } from 'react-router-dom';

const HospitalPreview = () => {
  const hospitals = [
    {
      name: 'Beijing Cancer Hospital',
      specialty: 'Oncology Excellence',
      accreditation: 'JCI Certified'
    },
    {
      name: 'Shanghai United Hospital',
      specialty: 'Comprehensive Care',
      accreditation: 'ISO Certified'
    },
    {
      name: 'Guangzhou Medical Center',
      specialty: 'Surgical Specialists',
      accreditation: 'International Standards'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Hospitals in China
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with China's leading medical institutions
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {hospitals.map((hospital, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-teal transition-all duration-300 h-full flex flex-col items-center text-center"
              >
                {/* Hospital Icon */}
                <div className="w-16 h-16 bg-primary-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <Building className="text-primary-teal" size={28} />
                </div>

                {/* Hospital Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {hospital.name}
                </h3>

                {/* Specialty */}
                <p className="text-gray-600 mb-4">
                  {hospital.specialty}
                </p>

                {/* Accreditation Badge */}
                <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
                  <CheckCircle size={16} className="mr-2" />
                  <span className="text-sm font-semibold">{hospital.accreditation}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <Link to="/hospitals">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center"
              >
                View All Partner Hospitals
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HospitalPreview;