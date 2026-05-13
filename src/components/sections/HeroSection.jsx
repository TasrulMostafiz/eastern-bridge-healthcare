import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Phone, 
  MessageSquare, 
  Clock, 
  Shield,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Heart,
  Stethoscope
} from 'lucide-react';

const HeroSection = () => {
  const [patientCount, setPatientCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);

  // Animated counters
  useEffect(() => {
    const timer1 = setTimeout(() => {
      const interval1 = setInterval(() => {
        setPatientCount(prev => {
          if (prev >= 5000) {
            clearInterval(interval1);
            return 5000;
          }
          return prev + 100;
        });
      }, 20);

      return () => clearInterval(interval1);
    }, 500);

    const timer2 = setTimeout(() => {
      const interval2 = setInterval(() => {
        setSuccessRate(prev => {
          if (prev >= 98) {
            clearInterval(interval2);
            return 98;
          }
          return prev + 1;
        });
      }, 40);

      return () => clearInterval(interval2);
    }, 1000);

    const timer3 = setTimeout(() => {
      const interval3 = setInterval(() => {
        setDoctorCount(prev => {
          if (prev >= 200) {
            clearInterval(interval3);
            return 200;
          }
          return prev + 4;
        });
      }, 30);

      return () => clearInterval(interval3);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const shineAnimation = {
    x: ["-100%", "200%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-full blur-3xl"
      />

      {/* Floating Medical Icons */}
      <motion.div
        animate={floatAnimation}
        className="absolute top-1/4 left-10"
      >
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center shadow-xl">
          <Stethoscope className="text-blue-500" size={32} />
        </div>
      </motion.div>

      <motion.div
        animate={{
          ...floatAnimation,
          y: [0, -30, 0],
        }}
        transition={{
          ...floatAnimation.transition,
          delay: 0.5
        }}
        className="absolute top-1/3 right-16"
      >
        <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center shadow-xl">
          <Heart className="text-red-400" size={40} />
        </div>
      </motion.div>

      <motion.div
        animate={{
          ...floatAnimation,
          y: [0, -15, 0],
        }}
        transition={{
          ...floatAnimation.transition,
          delay: 1
        }}
        className="absolute bottom-1/4 left-1/3"
      >
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center shadow-xl">
          <Award className="text-yellow-500" size={28} />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <motion.div variants={textVariants} className="space-y-6">
              {/* Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full shadow-lg"
              >
                <Shield size={20} className="mr-2" />
                <span className="font-bold">Trusted Medical Bridge Since 2010</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <motion.span
                  animate={{ color: ['#1e40af', '#0d9488', '#1e40af'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 bg-clip-text text-transparent"
                >
                  World-Class
                </motion.span>
                <br />
                <motion.span
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-gray-900"
                >
                  Healthcare in
                </motion.span>
                <br />
                <motion.span
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(20, 184, 166, 0)",
                      "0 0 20px rgba(20, 184, 166, 0.5)",
                      "0 0 20px rgba(20, 184, 166, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent"
                >
                  China
                </motion.span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Bridging international patients with leading Chinese medical expertise 
                and cutting-edge treatment technologies.
              </p>
            </motion.div>

            {/* Stats Counter */}
            <motion.div 
              variants={textVariants}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: patientCount, label: 'Patients Treated', icon: Users, suffix: '+' },
                { value: successRate, label: 'Success Rate', icon: CheckCircle, suffix: '%' },
                { value: doctorCount, label: 'Expert Doctors', icon: Stethoscope, suffix: '+' }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mr-3">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">
                          {stat.value}
                          <span className="text-teal-600">{stat.suffix}</span>
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={pulseAnimation}
                className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl overflow-hidden group"
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={shineAnimation}
                />
                <span className="relative z-10 flex items-center justify-center">
                  Free Medical Consultation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-3"
                  >
                    <ArrowRight size={24} />
                  </motion.span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-white text-blue-700 px-8 py-5 rounded-2xl font-bold text-lg border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-200 transition">
                  <Play className="text-blue-600" size={24} />
                </div>
                <div className="text-left">
                  <div className="font-bold">Watch Success Story</div>
                  <div className="text-sm text-gray-600">3 min video</div>
                </div>
              </motion.button>
            </motion.div>

            
          </div>

          {/* Right Column - Consultation Form */}
          <motion.div
            variants={textVariants}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 p-8 lg:p-10"
            >
              {/* Form Header */}
              <div className="text-center mb-8">
                <motion.div
                  animate={pulseAnimation}
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <MessageSquare className="text-white" size={36} />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Free Medical Assessment
                </h3>
                <p className="text-gray-600">
                  Get personalized treatment advice from our experts
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {[
                  { placeholder: 'Full Name', type: 'text' },
                  { placeholder: 'Email Address', type: 'email' },
                  { placeholder: 'Phone Number', type: 'tel' },
                  { placeholder: 'Medical Condition', type: 'text' }
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    />
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(20, 184, 166, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  Get Free Assessment
                </motion.button>
              </form>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-center space-x-6"
              >
                <div className="flex items-center">
                  <Shield className="text-green-500 mr-2" size={20} />
                  <span className="text-sm text-gray-600">HIPAA Compliant</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-blue-500 mr-2" size={20} />
                  <span className="text-sm text-gray-600">24h Response</span>
                </div>
              </motion.div>
            </motion.div>

            
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-12 h-20 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-blue-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;