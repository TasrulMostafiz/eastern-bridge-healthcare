import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Globe,
  Heart,
  Shield,
  TrendingUp,
  Star
} from 'lucide-react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    success: 0,
    hospitals: 0,
    doctors: 0,
    countries: 0,
    years: 0
  });

  // Target values
  const targetValues = {
    patients: 5000,
    success: 98,
    hospitals: 25,
    doctors: 200,
    countries: 40,
    years: 14
  };

  // Animated counters
  useEffect(() => {
    const startCounters = () => {
      const interval = setInterval(() => {
        setCounters(prev => {
          const newCounters = { ...prev };
          let allComplete = true;

          Object.keys(targetValues).forEach(key => {
            if (newCounters[key] < targetValues[key]) {
              newCounters[key] += Math.ceil(targetValues[key] / 100);
              if (newCounters[key] > targetValues[key]) {
                newCounters[key] = targetValues[key];
              }
              allComplete = false;
            }
          });

          if (allComplete) {
            clearInterval(interval);
          }

          return newCounters;
        });
      }, 30);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(startCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  // Stats data
  const stats = [
    {
      id: 1,
      icon: Users,
      value: counters.patients,
      suffix: '+',
      label: 'Patients Treated',
      description: 'International patients from 40+ countries',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      delay: 0
    },
    {
      id: 2,
      icon: Award,
      value: counters.success,
      suffix: '%',
      label: 'Success Rate',
      description: 'Treatment success across all specialties',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      delay: 0.1
    },
    {
      id: 3,
      icon: Globe,
      value: counters.hospitals,
      suffix: '+',
      label: 'Partner Hospitals',
      description: 'JCI & ISO certified medical institutions',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      delay: 0.2
    },
    {
      id: 4,
      icon: Shield,
      value: counters.doctors,
      suffix: '+',
      label: 'Expert Doctors',
      description: 'Specialized medical professionals',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      delay: 0.3
    },
    {
      id: 5,
      icon: Heart,
      value: counters.countries,
      suffix: '+',
      label: 'Countries Served',
      description: 'Patients from around the world',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      delay: 0.4
    },
    {
      id: 6,
      icon: TrendingUp,
      value: counters.years,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Trusted medical bridge since 2010',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      delay: 0.5
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: (delay) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: delay
      }
    }),
    hover: {
      y: -15,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-teal-100/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-teal-100/20 to-blue-100/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            animate={pulseAnimation}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-full shadow-lg mb-6"
          >
            <Star size={20} className="mr-2" />
            <span className="font-bold">Trust & Excellence</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Numbers That Speak
            </span>
            <br />
            <span className="text-gray-800">For Our Excellence</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record of success and commitment to medical excellence 
            has made us the most trusted medical bridge to China.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                custom={stat.delay}
                variants={cardVariants}
                whileHover="hover"
                className="relative"
              >
                {/* Floating background effect */}
                <motion.div
                  animate={floatAnimation}
                  transition={{
                    ...floatAnimation.transition,
                    delay: stat.delay * 2
                  }}
                  className={`absolute inset-0 ${stat.bgColor} rounded-3xl blur-xl opacity-50`}
                />
                
                {/* Main Card */}
                <div className={`relative ${stat.bgColor} rounded-3xl p-8 shadow-xl border border-white/50 backdrop-blur-sm`}>
                  {/* Icon Container */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative"
                  >
                    {/* Icon Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-20`} />
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      <Icon size={36} className={stat.iconColor} />
                    </div>
                    
                    {/* Glowing effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.1, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-md`}
                    />
                  </motion.div>

                  {/* Counter */}
                  <div className="mb-4">
                    <motion.div
                      variants={numberVariants}
                      className="flex items-baseline"
                    >
                      <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                        {stat.value}
                      </span>
                      <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent ml-2`}>
                        {stat.suffix}
                      </span>
                    </motion.div>
                    
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: stat.delay + 0.5, duration: 1 }}
                      className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-2`}
                    />
                  </div>

                  {/* Label and Description */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600">
                      {stat.description}
                    </p>
                  </div>

                  {/* Progress Ring (for success rate) */}
                  {stat.id === 2 && (
                    <motion.div
                      initial={{ strokeDasharray: "0 100" }}
                      whileInView={{ strokeDasharray: "98 100" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 1 }}
                      className="absolute top-4 right-4"
                    >
                      <svg width="60" height="60" className="transform -rotate-90">
                        <circle
                          cx="30"
                          cy="30"
                          r="25"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-green-200"
                        />
                        <circle
                          cx="30"
                          cy="30"
                          r="25"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          className="text-green-500"
                          pathLength="100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-green-600 font-bold text-sm">
                        98%
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Corner accent */}
                <motion.div
                  animate={{
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${stat.color} rounded-lg`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-white to-blue-50 rounded-2xl px-8 py-6 shadow-lg border border-blue-100">
            <Shield className="text-blue-500 mr-4" size={32} />
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900">100% Transparent Process</h4>
              <p className="text-gray-600">No hidden costs, clear treatment plans, certified hospitals</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-xl font-bold"
            >
              View Certificates
            </motion.button>
          </div>
        </motion.div>

        {/* Animated connecting dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center mt-16"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                backgroundColor: [
                  "rgb(59 130 246)",
                  "rgb(20 184 166)",
                  "rgb(59 130 246)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-blue-500 rounded-full mx-4"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;