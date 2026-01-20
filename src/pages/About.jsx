import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Heart, Award } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import HospitalPartners from '../components/sections/HospitalPartners';
import PatientTestimonials from '../components/sections/PatientTestimonials';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every treatment plan is customized for individual needs.'
    },
    {
      icon: Target,
      title: 'Medical Excellence',
      description: 'Combining expertise with cutting-edge technology.'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International protocols and quality benchmarks.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful treatments.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-blue/10 to-primary-teal/10 py-20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Eastern Bridge</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting international patients with China's premier medical expertise since 2010.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To provide accessible, world-class healthcare to international patients 
                  by bridging them with China's leading medical institutions and specialists.
                </p>
                <div className="space-y-4">
                  {[
                    'Facilitating access to advanced treatments',
                    'Ensuring cultural and linguistic support',
                    'Providing comprehensive care coordination',
                    'Maintaining highest ethical standards'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-teal rounded-full mr-3"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary-blue to-primary-teal rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg opacity-90">
                  To become the most trusted bridge for international healthcare, 
                  revolutionizing how patients access world-class medical treatment 
                  through innovation, compassion, and excellence.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <div className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-primary-teal" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hospital Partners Section */}
      <HospitalPartners />

      {/* Why China */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose China?</h2>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                {
                  title: 'Advanced Technology',
                  description: 'Access to state-of-the-art medical equipment and innovative treatments unavailable elsewhere.'
                },
                {
                  title: 'Cost-Effective Care',
                  description: 'High-quality treatment at significantly lower costs compared to Western countries.'
                },
                {
                  title: 'Expert Specialists',
                  description: 'World-renowned doctors with extensive experience in treating international patients.'
                },
                {
                  title: 'Traditional & Modern',
                  description: 'Integration of traditional Chinese medicine with modern Western medical practices.'
                }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-teal"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <PatientTestimonials />
    </div>
  );
};

export default About;