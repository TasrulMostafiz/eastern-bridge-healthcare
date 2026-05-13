import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown,
  Stethoscope,
  Zap,
  MessageSquare
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Navigation items - with shortened display names for better fit
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }, // Shortened from 'About Us'
    { 
      name: 'Treatment', 
      path: '/treatment',
      fullName: 'Treatment', // For desktop display
      submenu: [
        { name: 'Why Treatment in CHINA', path: '/treatment/why-china', icon: Stethoscope, shortName: 'Why China' },
        { name: 'CAR-T Immunotherapy', path: '/treatment/car-t', icon: Zap, shortName: 'CAR-T Therapy' },
        { name: 'Gene Therapy', path: '/treatment/gene-therapy', icon: Stethoscope, shortName: 'Gene Therapy' },
        { name: 'Advanced Cancer Treatment', path: '/treatment/cancer', icon: Stethoscope, shortName: 'Cancer Care' },
        { name: "Parkinson's Disease Treatment", path: '/treatment/parkinsons', icon: Stethoscope, shortName: "Parkinson's" },
        { name: 'Minimally Invasive Tumor Therapy', path: '/treatment/minimally-invasive', icon: Zap, shortName: 'Tumor Therapy' },
        { name: 'Spinal Surgery', path: '/treatment/spinal-surgery', icon: Stethoscope, shortName: 'Spinal Surgery' },
        { name: 'Traditional Chinese Medicine (TCM)', path: '/treatment/tcm', icon: Stethoscope, shortName: 'TCM' },
        { name: 'Ophthalmology', path: '/treatment/ophthalmology', icon: Stethoscope, shortName: 'Eye Care' },
        { name: 'Full-Body Cancer Screening', path: '/treatment/screening', icon: Zap, shortName: 'Cancer Screening' },
        { name: 'Weight Loss Program', path: '/treatment/weight-loss', icon: Stethoscope, shortName: 'Weight Loss' },
        { name: 'Clinical Trials', path: '/treatment/clinical-trials', icon: Zap, shortName: 'Clinical Trials' }
      ]
    },
    { 
      name: 'Services', // Shortened from 'Our Services'
      path: '/services',
      fullName: 'Our Services'      
    },
    { name: 'Hospitals', path: '/hospitals' }, // Shortened from 'Hospitals & Doctors'
    { name: 'Visitors and Patients', path: '/patients' }, // Shortened from 'For Patients'
    { 
      name: 'News', // Shortened from 'News & Media'
      path: '/news',
      fullName: 'News & Media',
      submenu: [
        { name: 'News Updates', path: '/news/updates', icon: Stethoscope, shortName: 'Updates' },
        { name: 'Patient Stories', path: '/news/patient-stories', icon: Stethoscope, shortName: 'Stories' },
        { name: 'Publications', path: '/news/publications', icon: Stethoscope, shortName: 'Publications' },
        { name: 'Photo Gallery', path: '/news/gallery', icon: Stethoscope, shortName: 'Gallery' },
        { name: 'Video Clips', path: '/news/videos', icon: Zap, shortName: 'Videos' }
      ]
    }
  ];

  // Animation variants
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
      scale: 1.05, // Reduced from 1.1 to prevent overflow
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

            {/* Desktop Navigation - Reduced spacing */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
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
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className={`flex items-center font-bold text-sm xl:text-base text-gray-800 hover:text-blue-700 transition-colors px-2 xl:px-3 py-2 rounded-lg whitespace-nowrap ${
                          location.pathname.startsWith(item.path) ? 'bg-blue-50 text-blue-700' : ''
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.fullName || item.name}
                        <motion.span
                          animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <ChevronDown size={16} className="ml-1" />
                        </motion.span>
                      </motion.button>
                      
                      {/* Dropdown menu - Adjusted width */}
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border py-2 z-50"
                          >
                            {item.submenu.map((subItem) => {
                              const Icon = subItem.icon;
                              const displayName = subItem.shortName || subItem.name;
                              return (
                                <motion.div
                                  key={subItem.name}
                                  whileHover={{ 
                                    x: 5,
                                    transition: { type: "spring", stiffness: 300 }
                                  }}
                                >
                                  <Link
                                    to={subItem.path}
                                    className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-blue-700 transition group"
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    <Icon size={16} className="mr-2 text-blue-500 flex-shrink-0" />
                                    <span className="font-medium truncate">{displayName}</span>
                                    <motion.span
                                      initial={{ opacity: 0, x: -5 }}
                                      whileHover={{ opacity: 1, x: 0 }}
                                      className="ml-auto text-blue-500 text-xs"
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
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <Link
                        to={item.path}
                        className={`relative font-bold text-sm xl:text-base px-2 xl:px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                          location.pathname === item.path
                            ? 'text-blue-700 bg-blue-50'
                            : 'text-gray-800 hover:text-blue-700 hover:bg-gray-50'
                        }`}
                      >
                        {item.fullName || item.name}
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="underline"
                            className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
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
                      <div className="py-2">
                        <div 
                          className="font-bold text-base text-gray-900 mb-2 px-2 flex items-center justify-between cursor-pointer"
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        >
                          <span>{item.fullName || item.name}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transform transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                          />
                        </div>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-4 space-y-2 border-l-2 border-blue-200 overflow-hidden"
                            >
                              {item.submenu.map((subItem, idx) => {
                                const Icon = subItem.icon;
                                const displayName = subItem.shortName || subItem.name;
                                return (
                                  <motion.div
                                    key={subItem.name}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <Link
                                      to={subItem.path}
                                      className="flex items-center py-2 text-sm text-gray-700 hover:text-blue-700 transition"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setOpenDropdown(null);
                                      }}
                                    >
                                      <Icon size={16} className="mr-2 text-blue-500 flex-shrink-0" />
                                      <span className="font-medium">{displayName}</span>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div whileHover={{ x: 5 }}>
                        <Link
                          to={item.path}
                          className="block py-2 text-base font-bold text-gray-900 hover:text-blue-700 px-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.fullName || item.name}
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
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