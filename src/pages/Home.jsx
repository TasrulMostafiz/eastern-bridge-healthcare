import React from 'react';
import { motion } from 'framer-motion';
import { Play, Shield, Users, Award, Clock, Globe } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import ServiceCard from '../components/ui/ServiceCard';
import HospitalPartners from '../components/sections/HospitalPartners';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import ProblemSolution from '../components/sections/ProblemSolution';
import ServicesPreview from '../components/sections/ServicesPreview';
import WhyChina from '../components/sections/WhyChina';
import TreatmentProcess from '../components/sections/TreatmentProcess';
import HospitalPreview from '../components/sections/HospitalPreview';
import PatientStoriesPreview from '../components/sections/PatientStoriesPreview';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ProblemSolution />
      <ServicesPreview />
      <WhyChina />
      <TreatmentProcess />
      <HospitalPreview />
      <PatientStoriesPreview />

      {/* We'll add more sections here later */}
    </div>
  );
};

export default Home;