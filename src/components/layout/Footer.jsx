import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Youtube, 
  Instagram, 
  Twitter,
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Heart,
  Shield,
  Award,
  Stethoscope,
  ArrowRight,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: i * 0.1
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Hospitals', path: '/hospitals' },
    { name: 'Consultants', path: '/consultants' },
    { name: 'For Patients', path: '/patients' },
  ];

  const services = [
    'Cancer Treatment',
    'Full Body Screening',
    'Weight Management',
    'Clinical Trials',
    'Telemedicine',
    'Medical Visa'
  ];

  const contactInfo = [
    { icon: MapPin, text: '123 Medical Center, Beijing, China 100000' },
    { icon: Phone, text: '+86 10 1234 5678 (Office)' },
    { icon: Phone, text: '+86 138 0013 8000 (Emergency)' },
    { icon: Mail, text: 'contact@easternbridgehealth.com' },
    { icon: Clock, text: '24/7 Emergency Support' }
  ];

  const certifications = [
    { icon: Shield, text: 'HIPAA Compliant' },
    { icon: Award, text: 'JCI Certified Partners' },
    { icon: Heart, text: 'Patient Safety First' },
    { icon: Stethoscope, text: 'Medical Excellence' }
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl mx-4 lg:mx-auto lg:max-w-5xl -translate-y-1/2 p-8 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <motion.h3 
                className="text-2xl font-bold mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Stay Updated with Medical Advances
              </motion.h3>
              <p className="text-blue-100">Subscribe to our health newsletter</p>
            </div>
            <motion.form 
              className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.input
                whileFocus={{ scale: 1.05 }}
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Subscribe
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-400 to-teal-300 rounded-xl flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-xl">EB</span>
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-blue-800"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Eastern Bridge</h3>
                  <p className="text-blue-200 text-sm">Medical Care China</p>
                </div>
              </motion.div>
              
              <p className="text-blue-100 leading-relaxed">
                Bridging international patients with China's premier medical expertise and cutting-edge healthcare.
              </p>
              
              <div className="flex space-x-4">
                {[Facebook, Youtube, Instagram, Twitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    custom={index}
                    variants={socialIconVariants}
                    whileHover="hover"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 flex items-center">
                <motion.span
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mr-2"
                >
                  →
                </motion.span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center text-blue-100 hover:text-white transition-colors group"
                    >
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    <span className="text-blue-100">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white/10 p-2 rounded-lg mr-3"
                      >
                        <Icon size={18} />
                      </motion.div>
                      <span className="text-blue-100 text-sm">{info.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1
                    }}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center"
                  >
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-300 rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                    <span className="text-sm font-medium">{cert.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/20 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-200">
                © {currentYear} Eastern Bridge Health Care. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Medical Disclaimer', 'Sitemap'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.1
                    }}
                  >
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Emergency Notice */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 4px 20px rgba(239, 68, 68, 0.3)",
                  "0 6px 25px rgba(239, 68, 68, 0.5)",
                  "0 4px 20px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mt-6 inline-flex items-center bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3"
            >
              <Heart size={18} className="mr-2 text-red-300" />
              <span className="font-semibold text-red-100">24/7 Emergency Support Available</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;