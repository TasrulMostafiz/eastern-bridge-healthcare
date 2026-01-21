import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Stethoscope, Heart, Brain, Eye, Bone, Pill, Users } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import ServiceCard from '../components/ui/ServiceCard';

const Services = () => {
  const cancerTypes = [
    'Hematologic Malignancies',
    'Breast Cancer',
    'Lung Cancer',
    'Gastric Cancer',
    'Colorectal Cancer',
    'Liver Cancer',
    'Pancreatic Cancer',
    'Prostate Cancer',
    'Brain Tumors',
    'Bone and Soft Tissue Tumors',
    'Skin Cancer'
  ];

  const allServices = [
    {
      title: 'Advanced Cancer Treatment',
      description: 'Comprehensive oncology care using latest technology and personalized treatment plans.',
      icon: 'cancer',
      features: ['Chemotherapy', 'Radiation Therapy', 'Immunotherapy', 'Targeted Therapy'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Full Body Screening',
      description: 'Early detection through comprehensive health checkups and advanced diagnostic imaging.',
      icon: 'screening',
      features: ['MRI/CT Scans', 'Blood Tests', 'Cancer Markers', 'Health Assessment'],
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Weight Management',
      description: 'Medical programs for sustainable weight loss and blood glucose reversal.',
      icon: 'heart',
      features: ['Custom Diet Plans', 'Exercise Guidance', 'Medical Monitoring', 'Lifestyle Coaching'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Clinical Trials',
      description: 'Access to cutting-edge experimental treatments and new therapies.',
      icon: 'brain',
      features: ['Latest Treatments', 'Expert Supervision', 'Comprehensive Care', 'Regular Monitoring'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const treatmentProcess = [
    { step: 1, title: 'Consultation', description: 'Free medical consultation with our experts' },
    { step: 2, title: 'Diagnosis', description: 'Comprehensive testing and diagnosis' },
    { step: 3, title: 'Treatment Plan', description: 'Personalized treatment strategy' },
    { step: 4, title: 'Treatment', description: 'Advanced medical procedures' },
    { step: 5, title: 'Recovery', description: 'Post-treatment care and monitoring' },
    { step: 6, title: 'Follow-up', description: 'Regular check-ups and support' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-white py-20 overflow-hidden">
        {/* Floating Medical Icons */}
        <div className="absolute inset-0 opacity-5">
          {[Stethoscope, Heart, Activity, Brain, Eye, Pill].map((Icon, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                transform: `rotate(${i * 60}deg)`,
              }}
            >
              <Icon size={80} className="text-primary-blue" />
            </div>
          ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Medical Services
              <span className="block text-primary-teal text-3xl mt-2">
                Advanced Healthcare Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive treatment programs using cutting-edge medical technology
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cancer Types */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cancer Specializations</h2>
              <p className="text-xl text-gray-600">Expert treatment for various cancer types</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {cancerTypes.map((type, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <Activity size={16} className="text-red-600" />
                    </div>
                    <span className="font-medium text-gray-800">{type}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>

          {/* Treatment Process */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Process</h2>
              <p className="text-xl text-gray-600">Your journey to recovery, step by step</p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-teal to-primary-blue hidden lg:block"></div>

            <div className="space-y-12">
              {treatmentProcess.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-teal to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                            {item.step}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="relative lg:absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-white border-4 border-primary-teal rounded-full z-10"></div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="lg:w-5/12"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-navy text-white section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Start Your Treatment Journey</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a personalized treatment plan from our medical experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                Download Brochure
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;