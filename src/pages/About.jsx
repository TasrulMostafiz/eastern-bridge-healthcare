import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, Award, Heart, MessageSquare, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Link } from 'react-router-dom';

const About = () => {
  const leadership = [
    {
      name: 'Dr. Zhang Wei',
      position: 'Medical Director',
      message: 'Our commitment is to provide world-class healthcare with compassion and excellence.',
      color: 'from-blue-500 to-teal-400'
    },
    {
      name: 'Li Ming',
      position: 'CEO',
      message: 'Bridging international patients with China\'s medical expertise is our mission.',
      color: 'from-teal-400 to-green-500'
    },
    {
      name: 'Wang Fang',
      position: 'China Operations Director',
      message: 'We ensure seamless coordination between patients and partner hospitals.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const activities = [
    'International patient coordination',
    'Medical second opinions',
    'Treatment planning',
    'Travel & visa assistance',
    'Hospital partnership management',
    'Post-treatment follow-up'
  ];

  const whyChinaPoints = [
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge medical equipment and innovative treatments',
      icon: Award
    },
    {
      title: 'Cost-Effective',
      description: 'High-quality care at 30-50% lower costs',
      icon: Globe
    },
    {
      title: 'Expert Specialists',
      description: 'World-renowned doctors with international training',
      icon: Users
    },
    {
      title: 'Integrated Approach',
      description: 'Traditional Chinese + Western medicine combination',
      icon: Heart
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - About Page Style */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        {/* Abstract People Shapes */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-teal/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-blue/10 rounded-full"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  About Eastern Bridge
                  <span className="block text-primary-teal text-2xl mt-2">
                    Healthcare Without Borders
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connecting international patients with China's medical excellence since 2010
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-teal rounded-full flex items-center justify-center text-white font-bold">
                    14+
                  </div>
                  <span className="text-gray-700">Years of Medical Excellence</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <Users className="w-16 h-16 text-primary-teal mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
                <p className="text-gray-600 text-center">
                  To provide accessible, world-class healthcare through international medical partnerships
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2010, Eastern Bridge Health Care emerged from a vision to make China's 
                advanced medical expertise accessible to patients worldwide. We recognized the gap 
                between world-class medical facilities in China and international patients seeking 
                specialized treatments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                Today, we serve as the trusted bridge connecting patients from over 15 countries 
                with China's premier hospitals and medical specialists.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from Leadership</h2>
              <p className="text-xl text-gray-600">Our commitment to your health journey</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
                >
                  {/* Leader Header */}
                  <div className={`bg-gradient-to-r ${leader.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{leader.name}</h3>
                        <p className="opacity-90">{leader.position}</p>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 italic">"{leader.message}"</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-blue to-primary-teal rounded-2xl p-8 text-white">
                <Target className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    Provide access to advanced medical treatments
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    Ensure cost-effective healthcare solutions
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    Deliver compassionate patient care
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    Build lasting medical partnerships
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <Globe className="w-12 h-12 text-primary-teal mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To bridge the gap between international patients and China's world-class 
                  medical expertise by providing comprehensive, compassionate, and 
                  cost-effective healthcare solutions.
                </p>
                <div className="flex items-center text-primary-teal font-semibold">
                  <Link to="/contact" className="flex items-center">
                    Join Our Mission
                    <ChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Treatment in China */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Treatment in China?</h2>
              <p className="text-xl text-gray-600">Advantages of China's healthcare system</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChinaPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-md text-center"
                  >
                    <div className="w-16 h-16 bg-primary-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary-teal" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Discover how Eastern Bridge can guide your healthcare journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
                >
                  View Our Services
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;