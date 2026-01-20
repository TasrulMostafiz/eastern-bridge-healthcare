import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const PatientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Robert Chen',
      country: 'Singapore',
      treatment: 'Liver Cancer',
      quote: 'The treatment I received in China was exceptional. The doctors were highly skilled and compassionate.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert'
    },
    {
      name: 'Sarah Johnson',
      country: 'Australia',
      treatment: 'Breast Cancer',
      quote: 'Eastern Bridge made the entire process seamless. From visa to treatment, everything was perfectly organized.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'Ahmed Hassan',
      country: 'UAE',
      treatment: 'Prostate Cancer',
      quote: 'The combination of traditional Chinese medicine and modern treatment gave me excellent results.',
      rating: 4,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Stories</h2>
            <p className="text-xl text-gray-600">Hear from our international patients</p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <Quote className="w-12 h-12 text-primary-teal/30 mb-6" />
              
              <div className="flex flex-col md:flex-row items-center mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <span>{testimonials[currentIndex].country}</span>
                    <span className="mx-2">•</span>
                    <span>{testimonials[currentIndex].treatment}</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < testimonials[currentIndex].rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 italic">
                "{testimonials[currentIndex].quote}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-teal' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;