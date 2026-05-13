import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Shield, 
  Heart, 
  Globe, 
  Clock, 
  DollarSign,
  Users,
  Stethoscope,
  Microscope,
  Star,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChina = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const reasons = [
    {
      icon: Award,
      title: "World-Class Medical Facilities",
      description: "China's top hospitals are equipped with cutting-edge technology and internationally accredited facilities, meeting global healthcare standards."
    },
    {
      icon: Users,
      title: "Expert Medical Professionals",
      description: "Access to highly skilled doctors and specialists who have trained at prestigious institutions worldwide and have extensive experience."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Treatment",
      description: "Receive high-quality medical care at a fraction of the cost compared to Western countries, without compromising on quality."
    },
    {
      icon: Clock,
      title: "Minimal Wait Times",
      description: "Get prompt appointments and treatments without the long waiting lists commonly experienced in other countries."
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      description: "Access to the latest medical technologies and innovative treatment options, including robotic surgery and precision medicine."
    },
    {
      icon: Globe,
      title: "International Patient Support",
      description: "Dedicated international patient departments offering language interpretation, visa assistance, and personalized care coordination."
    }
  ];

  const advantages = [
    "JCI-accredited hospitals with international standards",
    "English-speaking medical staff and interpreters",
    "Comprehensive medical visa support",
    "Integrated Traditional Chinese Medicine options",
    "Advanced cancer treatment centers",
    "State-of-the-art diagnostic facilities",
    "Affordable treatment packages",
    "Post-treatment follow-up care"
  ];

  const stats = [
    { value: "200+", label: "JCI-Accredited Hospitals" },
    { value: "50,000+", label: "International Patients Yearly" },
    { value: "70%", label: "Lower Costs vs. Western Countries" },
    { value: "24/7", label: "Patient Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        className="relative bg-gradient-to-r from-primary-navy to-primary-blue text-white py-20 overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair"
          >
            Why Choose China for Your Medical Treatment?
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Discover world-class healthcare at affordable costs with cutting-edge technology and expert medical professionals
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-primary-blue mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Reasons Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Top Reasons to Choose China
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              China has emerged as a leading destination for medical tourism, offering exceptional healthcare services
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Advantages List Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern hospital in China"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 font-playfair">
                Key Advantages
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start"
                  >
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{advantage}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                variants={fadeInUp}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl"
              >
                <div className="flex items-start">
                  <Shield className="text-primary-blue mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-primary-navy mb-2">Quality Assurance</h4>
                    <p className="text-gray-600">
                      All partner hospitals are carefully vetted and meet international healthcare standards, ensuring you receive the best possible care.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Patient Experiences
            </h2>
            <p className="text-xl text-gray-600">
              Hear from international patients who chose China for their treatment
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[1, 2].map((_, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The medical care I received in China was exceptional. The doctors were highly knowledgeable, 
                  the facilities were world-class, and the cost was significantly lower than in my home country."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                    {index === 0 ? 'JS' : 'MR'}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-primary-navy">
                      {index === 0 ? 'John Smith' : 'Maria Rodriguez'}
                    </div>
                    <div className="text-sm text-gray-500">
                      {index === 0 ? 'United States' : 'Mexico'}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-primary-navy to-primary-blue text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 font-playfair"
          >
            Ready to Start Your Medical Journey?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 mb-10"
          >
            Let us help you access world-class healthcare in China
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Contact Us
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/treatment"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-blue transition-all"
            >
              Explore Treatments
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default WhyChina;