import React from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import HospitalPartners from '../components/sections/HospitalPartners';
import { Building } from 'lucide-react';

const Hospitals = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue to-primary-navy text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-48 -translate-x-48"></div>
        </div>

        {/* Hospital Building Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <div className="h-full bg-gradient-to-t from-white/10 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <div className="mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Partner Hospitals</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Network of China's premier JCI-accredited medical institutions
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hospital Partners Section */}
      <HospitalPartners />

      
    </div>
  );
};

export default Hospitals;