import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  ChevronDown,
  MapPin,
  Globe,
  Stethoscope,
  Zap
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'Cancer Treatment', path: '/services/cancer', icon: Stethoscope },
        { name: 'Full Body Screening', path: '/services/screening', icon: Zap },
        { name: 'Weight Management', path: '/services/weight', icon: Stethoscope },
        { name: 'Clinical Trials', path: '/services/trials', icon: Zap }
      ]
    },
    { name: 'Hospitals', path: '/hospitals' },
    { name: 'Consultants', path: '/consultants' },
    { name: 'For Patients', path: '/patients' },
    { name: 'Contact', path: '/contact' }
  ];

  // Animation variants
  const emergencyBarVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: -10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      {/* Emergency Top Bar with floating animation */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={emergencyBarVariants}
        className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-3 px-4 relative overflow-hidden"
      >
        {/* Animated background pulse */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
        />
        
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center relative z-10">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-bold text-sm sm:text-base">Emergency: +86 138 0013 8000</span>
            </motion.div>
            <div className="hidden md:flex items-center">
              <MapPin size={18} className="mr-2" />
              <span className="text-sm font-medium">Beijing, China</span>
            </div>
          </div>
          <motion.div 
            className="flex items-center space-x-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <button className="flex items-center text-sm font-medium hover:text-yellow-200 transition">
              <MessageSquare size={18} className="mr-2" />
              <span>24/7 Live Support</span>
            </button>
            <div className="flex items-center">
              <Globe size={18} className="mr-2" />
              <select className="bg-transparent border-none outline-none text-sm font-medium">
                <option value="en">EN</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Animated Logo */}           
            <Link to="/" className="flex items-center flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name} 
                  className="relative group"
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {item.submenu ? (
                    <>
                      <motion.button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center font-bold text-gray-800 hover:text-blue-700 transition-colors px-3 py-2 rounded-lg ${
                          location.pathname.startsWith(item.path) ? 'bg-blue-50 text-blue-700' : ''
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                        <motion.span
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <ChevronDown size={18} className="ml-2" />
                        </motion.span>
                      </motion.button>
                      
                      {/* Services Dropdown with bounce animation */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border py-2 z-50"
                          >
                            {item.submenu.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <motion.div
                                  key={subItem.name}
                                  whileHover={{ 
                                    x: 10,
                                    transition: { type: "spring", stiffness: 300 }
                                  }}
                                >
                                  <Link
                                    to={subItem.path}
                                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-blue-700 transition group"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    <Icon size={18} className="mr-3 text-blue-500" />
                                    <span className="font-medium">{subItem.name}</span>
                                    <motion.span
                                      initial={{ opacity: 0, x: -10 }}
                                      whileHover={{ opacity: 1, x: 0 }}
                                      className="ml-auto text-blue-500"
                                    >
                                      →
                                    </motion.span>
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Link
                        to={item.path}
                        className={`relative font-bold px-3 py-2 rounded-lg transition-colors ${
                          location.pathname === item.path
                            ? 'text-blue-700 bg-blue-50'
                            : 'text-gray-800 hover:text-blue-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="underline"
                            className="absolute -bottom-1 left-3 right-3 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
              
              {/* Consultation Button with pulse animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(37, 99, 235, 0.3)",
                      "0 6px 20px rgba(37, 99, 235, 0.5)",
                      "0 4px 15px rgba(37, 99, 235, 0.3)"
                    ]
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-7 py-3 rounded-xl font-bold shadow-xl relative overflow-hidden"
                >
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10">Free Consultation</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 shadow-md"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={28} className="text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={28} className="text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu with slide animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden bg-white/95 backdrop-blur-lg border-t shadow-xl"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {item.submenu ? (
                      <div className="py-3">
                        <div className="font-bold text-lg text-gray-900 mb-3 px-2">{item.name}</div>
                        <div className="pl-6 space-y-3 border-l-2 border-blue-200">
                          {item.submenu.map((subItem, idx) => {
                            const Icon = subItem.icon;
                            return (
                              <motion.div
                                key={subItem.name}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="flex items-center py-3 text-gray-700 hover:text-blue-700 transition"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <Icon size={18} className="mr-3 text-blue-500" />
                                  <span className="font-medium">{subItem.name}</span>
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          to={item.path}
                          className="block py-3 text-lg font-bold text-gray-900 hover:text-blue-700 px-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg mt-6"
                >
                  Free Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating WhatsApp Button with bounce */}
      <motion.a
        href="https://wa.me/8613800138000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          y: [0, -10, 0]
        }}
        transition={{
          rotate: { type: "spring", stiffness: 200 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ 
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageSquare size={28} />
        <motion.div
          className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-xs font-bold">!</span>
        </motion.div>
      </motion.a>
    </>
  );
};

export default Header;