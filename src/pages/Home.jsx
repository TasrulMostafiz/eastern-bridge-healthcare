import React from 'react';
import { motion } from 'framer-motion';
import { Play, Shield, Users, Award, Clock, Globe } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import ServiceCard from '../components/ui/ServiceCard';
import HospitalPartners from '../components/sections/HospitalPartners';
import PatientTestimonials from '../components/sections/PatientTestimonials';
import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />

      {/* We'll add more sections here later */}
    </div>
  );
};
  // const stats = [
  //   { number: '5000+', label: 'Patients Treated', icon: Users },
  //   { number: '98%', label: 'Success Rate', icon: Award },
  //   { number: '24/7', label: 'Support', icon: Clock },
  //   { number: '15+', label: 'Partner Hospitals', icon: Globe },
  // ];

  // const services = [
  //   {
  //     title: 'Advanced Cancer Treatment',
  //     description: 'Comprehensive treatment for various cancers with cutting-edge technology.',
  //     icon: 'cancer',
  //     features: ['Personalized Treatment', 'Latest Technology', 'Expert Oncologists'],
  //   },
  //   {
  //     title: 'Full Body Screening',
  //     description: 'Early detection through comprehensive health checkups.',
  //     icon: 'screening',
  //     features: ['Advanced Imaging', 'Blood Tests', 'Health Assessment'],
  //   },
  //   {
  //     title: 'Weight Management',
  //     description: 'Medical programs for sustainable weight loss and health improvement.',
  //     icon: 'heart',
  //     features: ['Custom Diet Plans', 'Exercise Guidance', 'Medical Monitoring'],
  //   },
  // ];

//   return (
//     <div>
//       Hero Section
//       <section className="relative min-h-screen flex items-center bg-gradient-to-r from-primary-blue to-primary-teal overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
//         </div>

//         <div className="container-custom relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <AnimatedSection delay={0.2}>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//                   World-Class Healthcare
//                   <span className="block text-accent-gold">in China</span>
//                 </h1>
//                 <p className="text-xl text-white/90 mb-8">
//                   Bridging international patients with leading Chinese medical expertise 
//                   and cutting-edge treatment technologies.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
//                   >
//                     Book Free Consultation
//                   </motion.button>
//                   <button className="flex items-center justify-center text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition">
//                     <Play className="mr-2" size={20} />
//                     Watch Video
//                   </button>
//                 </div>
//               </motion.div>
//             </AnimatedSection>

//             <AnimatedSection delay={0.4}>
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative"
//               >
//                 <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
//                   <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
//                     <h3 className="text-2xl font-bold text-primary-blue mb-4">
//                       Quick Inquiry
//                     </h3>
//                     <form className="space-y-4">
//                       <input
//                         type="text"
//                         placeholder="Full Name"
//                         className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
//                       />
//                       <input
//                         type="email"
//                         placeholder="Email Address"
//                         className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
//                       />
//                       <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent">
//                         <option>Select Service</option>
//                         <option>Cancer Treatment</option>
//                         <option>Health Screening</option>
//                         <option>Weight Management</option>
//                       </select>
//                       <button className="w-full btn-primary py-3">
//                         Get Free Assessment
//                       </button>
//                     </form>
//                   </div>
//                   <div className="flex items-center text-white">
//                     <Shield className="mr-3" size={24} />
//                     <span className="text-sm">HIPAA Compliant & Secure</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container-custom">
//           <AnimatedSection>
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Trusted by Thousands
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Our track record speaks for our commitment to excellence in healthcare.
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <AnimatedSection key={index} delay={index * 0.1}>
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     className="bg-white p-8 rounded-2xl shadow-lg text-center"
//                   >
//                     <div className="w-16 h-16 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <Icon className="text-primary-teal" size={28} />
//                     </div>
//                     <div className="text-3xl font-bold text-primary-blue mb-2">
//                       {stat.number}
//                     </div>
//                     <div className="text-gray-600">{stat.label}</div>
//                   </motion.div>
//                 </AnimatedSection>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="section-padding">
//         <div className="container-custom">
//           <AnimatedSection>
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Our Medical Services
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Comprehensive healthcare solutions with international standards.
//               </p>
//             </div>
//           </AnimatedSection>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <ServiceCard
//                 key={index}
//                 {...service}
//                 delay={index * 0.1}
//               />
//             ))}
//           </div>

//           <AnimatedSection delay={0.3}>
//             <div className="text-center mt-12">
//               <Link to="/services">
//                 <button className="btn-secondary px-8 py-3">
//                   View All Services
//                 </button>
//               </Link>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>

//       {/* Hospital Partners Section */}
//       <HospitalPartners />

//       {/* Patient Testimonials Section */}
//       <PatientTestimonials />

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-primary-blue to-primary-navy text-white section-padding">
//         <div className="container-custom">
//           <div className="max-w-4xl mx-auto text-center">
//             <AnimatedSection>
//               <h2 className="text-4xl font-bold mb-6">
//                 Ready to Start Your Healing Journey?
//               </h2>
//               <p className="text-xl mb-8 opacity-90">
//                 Contact us today for a personalized treatment plan and free consultation.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
//                 >
//                   Book Appointment
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
//                 >
//                   Call Now: +86 138 0013 8000
//                 </motion.button>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

export default Home;