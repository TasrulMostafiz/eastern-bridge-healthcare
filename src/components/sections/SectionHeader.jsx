import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SectionHeader = ({ 
  badgeIcon: BadgeIcon = Star, 
  badgeText = 'Trust & Excellence',
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-teal-400',
  titleGradientFrom = 'from-blue-600',
  titleGradientTo = 'to-teal-600',
  titleFirstLine = 'Numbers That Speak',
  titleSecondLine = 'For Our Excellence',
  description = 'Our track record of success and commitment to medical excellence has made us the most trusted medical bridge to China.',
  className = '',
  children
}) => {
  
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`text-center mb-16 lg:mb-24 ${className}`}
    >
      {/* Badge */}
      <motion.div
        animate={pulseAnimation}
        className={`inline-flex items-center bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white px-8 py-3 rounded-full shadow-lg mb-6`}
      >
        <BadgeIcon size={20} className="mr-2" />
        <span className="font-bold">{badgeText}</span>
      </motion.div>
      
      {/* Title */}
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        <span className={`bg-gradient-to-r ${titleGradientFrom} ${titleGradientTo} bg-clip-text text-transparent`}>
          {titleFirstLine}
        </span>
        <br />
        <span className="text-gray-800">{titleSecondLine}</span>
      </h2>
      
      {/* Description */}
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>

      {/* Optional Children - For adding stats or other content below */}
      {children && (
        <div className="mt-12">
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeader;