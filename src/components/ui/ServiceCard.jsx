import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Stethoscope,  Heart, Brain,HandHelping} from 'lucide-react';

const iconMap = {
  screening: Stethoscope,
  heart: Heart,
  brain: Brain,
  hands_helping: HandHelping,
};

const ServiceCard = ({ title, description, icon, features, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[icon] || Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-8">
        {/* Icon */}
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 bg-primary-teal/10 rounded-2xl flex items-center justify-center mb-6"
        >
          <Icon className="text-primary-teal" size={28} />
        </motion.div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Features */}
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <ChevronRight size={16} className="text-primary-teal mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full btn-primary flex items-center justify-center"
        >
          Learn More
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={20} className="ml-2" />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;