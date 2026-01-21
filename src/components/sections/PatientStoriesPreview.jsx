import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin, Calendar, Stethoscope, Heart, ChevronRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { Link } from 'react-router-dom';

const PatientStoriesPreview = () => {
  const stories = [
    {
      name: 'Robert Chen',
      age: 52,
      country: 'Singapore',
      flag: '🇸🇬',
      treatment: 'Liver Cancer',
      duration: '3 months',
      outcome: 'Successful Treatment',
      quote: 'The advanced treatment in China gave me hope when options were limited back home.',
      color: 'from-blue-500 to-teal-400'
    },
    {
      name: 'Sarah Johnson',
      age: 45,
      country: 'Australia',
      flag: '🇦🇺',
      treatment: 'Breast Cancer',
      duration: '4 weeks',
      outcome: 'Complete Remission',
      quote: 'From diagnosis to recovery, the entire journey was seamless and professionally managed.',
      color: 'from-pink-500 to-rose-400'
    },
    {
      name: 'Ahmed Hassan',
      age: 58,
      country: 'UAE',
      flag: '🇦🇪',
      treatment: 'Prostate Cancer',
      duration: '6 weeks',
      outcome: 'Excellent Results',
      quote: 'The combination of traditional and modern medicine gave me the best outcome possible.',
      color: 'from-purple-500 to-indigo-400'
    },
    {
      name: 'Maria Rodriguez',
      age: 49,
      country: 'Spain',
      flag: '🇪🇸',
      treatment: 'Lung Cancer',
      duration: '2 months',
      outcome: 'Treatment Success',
      quote: 'The medical team was incredibly supportive throughout my entire treatment journey.',
      color: 'from-orange-500 to-yellow-400'
    },
    {
      name: 'David Wilson',
      age: 61,
      country: 'UK',
      flag: '🇬🇧',
      treatment: 'Pancreatic Cancer',
      duration: '3.5 months',
      outcome: 'Significant Improvement',
      quote: 'The expertise and technology available in China made all the difference in my recovery.',
      color: 'from-green-500 to-emerald-400'
    }
  ];

  // Display first 3 stories in grid
  const displayedStories = stories.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Patient Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of hope and recovery from our international patients
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {displayedStories.map((story, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
              >
                {/* Story Header */}
                <div className={`bg-gradient-to-r ${story.color} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{story.name}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-lg mr-2">{story.flag}</span>
                        <span className="opacity-90">{story.country}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart size={20} />
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6 flex-grow">
                  {/* Treatment Info */}
                  <div className="mb-6">
                    <div className="flex items-center text-gray-600 mb-2">
                      <Stethoscope size={18} className="mr-2" />
                      <span className="font-medium">{story.treatment}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-2" />
                      <span>{story.duration} treatment</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-primary-teal/30 mb-3" />
                    <p className="text-gray-700 italic line-clamp-3">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mt-auto">
                    <div className="flex items-center bg-green-50 text-green-700 px-3 py-2 rounded-lg">
                      <CheckCircle size={16} className="mr-2" />
                      <span className="font-semibold text-sm">{story.outcome}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Bar */}
        <AnimatedSection delay={0.3}>
          <div className="bg-gradient-to-r from-primary-blue to-primary-teal rounded-2xl p-8 text-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">{stories.length}+</div>
                <div className="text-white/80">Patient Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-white/80">Countries Served</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* View All Button */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Link to="/patients/stories">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center"
              >
                View All {stories.length} Patient Stories
                <ChevronRight className="ml-2" size={20} />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PatientStoriesPreview;