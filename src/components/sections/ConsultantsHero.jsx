import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Users, Award, Globe, Shield, Clock } from 'lucide-react';

const ConsultantsHero = () => {
  const benefits = [
    { icon: Award, text: 'Board Certified Specialists' },
    { icon: Globe, text: 'International Experience' },
    { icon: Shield, text: 'Verified Credentials' },
    { icon: Clock, text: '24/7 Availability' }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-blue via-primary-navy to-primary-teal overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <Award size={16} className="mr-2" />
            <span className="text-sm font-semibold">China's Leading Medical Network</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Connect with China's
            <span className="block text-accent-gold">Top Medical Experts</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Access premier specialists from China's top hospitals. Personalized consultations with world-class doctors across multiple specialties.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-accent-gold" />
                  <div className="text-sm text-white/80">{benefit.text}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-accent-gold text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition"
            >
              <Users className="inline mr-2" size={20} />
              Find Your Specialist
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
            >
              Book Free Consultation
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            {[
              { number: '50+', label: 'Expert Consultants' },
              { number: '15+', label: 'Hospitals' },
              { number: '10k+', label: 'Patients Treated' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-1">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div 
            onClick={() => {
              document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer text-white/70 text-sm flex flex-col items-center"
          >
            <span>Find Your Doctor</span>
            <ArrowDown className="mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultantsHero;