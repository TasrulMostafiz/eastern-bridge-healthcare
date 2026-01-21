import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, DollarSign, ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { Link } from 'react-router-dom';

const WhyChina = () => {
  const advantages = [
    {
      icon: Cpu,
      title: 'Advanced Technology',
      description: 'Access to cutting-edge medical equipment and innovative treatments unavailable elsewhere',
      stat: 'Latest Equipment'
    },
    {
      icon: Users,
      title: 'World-Class Experts',
      description: 'Treatment by internationally trained specialists with extensive experience',
      stat: 'Expert Specialists'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'High-quality medical care at 30-50% lower costs compared to Western countries',
      stat: '30-50% Savings'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Medical Treatment in China?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of China's healthcare system
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full overflow-hidden"
                >
                  {/* Background Decorative Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-teal/5 rounded-full -translate-y-12 translate-x-12"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 bg-primary-teal/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-primary-teal" size={28} />
                  </div>

                  {/* Stat Badge */}
                  <div className="inline-block bg-primary-blue/10 text-primary-blue text-sm font-semibold px-4 py-2 rounded-full mb-4">
                    {advantage.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {advantage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Learn More Button */}
        {/* <AnimatedSection delay={0.3}>
          <div className="text-center">
            <Link to="/about/why-china">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center"
              >
                Learn More About China's Healthcare
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
};

export default WhyChina;