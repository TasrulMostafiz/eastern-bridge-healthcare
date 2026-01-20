import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import HospitalPartners from '../components/sections/HospitalPartners';

const Hospitals = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue/10 to-primary-teal/10 py-20">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Partner Hospitals</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Network of China's premier medical institutions providing world-class healthcare
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hospital Partners Section */}
      <HospitalPartners />

      {/* Additional CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary-blue to-primary-teal rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Need Help Choosing a Hospital?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our medical coordinators will help you select the best hospital based on your condition and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition">
                  Free Hospital Selection Consultation
                </button>
                <button className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition">
                  Download Hospital Guide
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Hospitals;