import React from 'react';
import { motion } from 'framer-motion';
import { Video, Plane, Stethoscope, ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { Link } from 'react-router-dom';

const TreatmentProcess = () => {
  const steps = [
    {
      number: '01',
      icon: Video,
      title: 'Free Consultation',
      description: 'Online consultation with our medical experts',
      color: 'from-blue-500 to-teal-400'
    },
    {
      number: '02',
      icon: Plane,
      title: 'We Handle Everything',
      description: 'Visa, travel, accommodation - all arranged for you',
      color: 'from-teal-400 to-green-500'
    },
    {
      number: '03',
      icon: Stethoscope,
      title: 'Treatment in China',
      description: 'Receive care at top Chinese hospitals',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey to better health made easy
            </p>
          </div>
        </AnimatedSection>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-600 -translate-y-1/2"></div>
          
          {/* Mobile Connecting Line */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-teal-400 to-emerald-600 -translate-x-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        className={`bg-gradient-to-br ${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg z-10`}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Step Card */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mt-8 lg:mt-0 h-full flex flex-col"
                    >
                      {/* Icon */}
                      <div className={`bg-gradient-to-br ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <Icon className="text-white" size={28} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-center flex-grow">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        {/* <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <Link to="/patients/process">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
};

export default TreatmentProcess;