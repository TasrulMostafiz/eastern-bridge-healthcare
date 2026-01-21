import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Stethoscope, Heart, ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: Activity,
      title: 'Cancer Treatment',
      description: 'Advanced oncology care for various cancer types using latest technology',
      color: 'bg-red-100 text-red-600',
      path: '/services/cancer-treatment'
    },
    {
      icon: Stethoscope,
      title: 'Full Body Screening',
      description: 'Comprehensive health checkups and early detection diagnostics',
      color: 'bg-blue-100 text-blue-600',
      path: '/services/screening'
    },
    {
      icon: Heart,
      title: 'Weight Management',
      description: 'Medical programs for sustainable weight loss and health improvement',
      color: 'bg-green-100 text-green-600',
      path: '/services/weight-management'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized healthcare solutions with international standards
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-primary-teal transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-primary-teal font-semibold hover:text-primary-blue transition-colors"
                  >
                    Learn More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-2"
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </Link>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* View All Services Button */}
        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center"
              >
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesPreview;