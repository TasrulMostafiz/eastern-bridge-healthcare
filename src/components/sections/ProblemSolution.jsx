import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Shield, Heart } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../sections/SectionHeader';

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Delayed Diagnosis',
      description: 'Waiting months for appointments and accurate diagnosis',
      color: 'text-red-500'
    },
    {
      icon: AlertTriangle,
      title: 'High Treatment Costs',
      description: 'Skyrocketing medical bills in Western countries',
      color: 'text-red-500'
    },
    {
      icon: AlertTriangle,
      title: 'Limited Options',
      description: 'Few treatment choices or experimental therapies available',
      color: 'text-red-500'
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: 'Quick Diagnosis',
      description: 'Same-week appointments with advanced diagnostics',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Cost-Effective Care',
      description: 'High-quality treatment at 30-50% lower costs',
      color: 'text-green-500'
    },
    {
      icon: Heart,
      title: 'Advanced Options',
      description: 'Access to cutting-edge treatments and clinical trials',
      color: 'text-green-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom relative">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Problem <span className="text-primary-teal">→</span> Our Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand your challenges and provide clear medical solutions
            </p>
          </div>
        </AnimatedSection>
        

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems Column */}
          <AnimatedSection delay={0.1}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500 h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <AlertTriangle className="text-red-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Common Challenges</h3>
              </div>
              
              <div className="space-y-6">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className={`mt-1 mr-4 ${problem.color}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">
                          {problem.title}
                        </h4>
                        <p className="text-gray-600">{problem.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Solutions Column */}
          <AnimatedSection delay={0.2}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500 h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Solutions</h3>
              </div>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className={`mt-1 mr-4 ${solution.color}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">
                          {solution.title}
                        </h4>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;