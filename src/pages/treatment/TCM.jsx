import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Shield, 
  Heart, 
  Clock, 
  DollarSign,
  Users,
  Stethoscope,
  Microscope,
  Star,
  CheckCircle,
  ChevronRight,
  FlaskConical,
  Activity,
  Pill,
  Hospital,
  FileText,
  Brain,
  Zap,
  Sparkles,
  Leaf,
  Wind,
  Droplets,
  Thermometer,
  Scissors,
  Baby,
  Sun,
  Moon,
  Coffee,
  Feather,
  Flower2,
  Phone  // Added missing Phone import
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TCM = () => {
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

  const acupunctureTherapies = [
    {
      title: "Needling",
      icon: Scissors,
      color: "from-green-500 to-teal-400",
      indications: [
        "Painful conditions: headache, back pain, joint pain",
        "Neurological diseases: post-stroke sequelae, facial paralysis",
        "Digestive system diseases: stomach pain, constipation",
        "Gynecological diseases: dysmenorrhea, infertility"
      ],
      efficacy: "By needling specific acupoints, it regulates Qi and blood, unblocks meridians, and relieves symptoms"
    },
    {
      title: "Electroacupuncture",
      icon: Zap,
      color: "from-blue-500 to-cyan-400",
      indications: [
        "Muscle spasms",
        "Neuralgia",
        "Sports injuries"
      ],
      efficacy: "After needling, electric current is applied to enhance the stimulation effect and promote recovery"
    },
    {
      title: "Fire Needle",
      icon: Thermometer,
      color: "from-orange-500 to-red-400",
      indications: [
        "Stubborn pain",
        "Rheumatoid arthritis",
        "Scar repair"
      ],
      efficacy: "Through thermal stimulation, it improves blood circulation and relieves pain"
    }
  ];

  const cuppingGuasha = [
    {
      title: "Cupping Therapy",
      icon: Wind,
      color: "from-purple-500 to-pink-400",
      indications: [
        "Cold",
        "Joint pain",
        "Muscle pain",
        "Fatigue"
      ],
      efficacy: "By creating negative pressure inside the cup, it adheres to the skin, promotes blood circulation, and unblocks meridians"
    },
    {
      title: "Guasha Therapy",
      icon: Feather,
      color: "from-amber-500 to-orange-400",
      indications: [
        "Cold, fever, heatstroke",
        "Muscle soreness",
        "Fatigue"
      ],
      efficacy: "By scraping the skin, it stimulates acupoints and meridians, promotes blood circulation, and eliminates toxins from the body"
    }
  ];

  const moxibustionTherapies = [
    {
      title: "Moxa Stick Moxibustion",
      icon: Sun,
      color: "from-yellow-500 to-amber-400",
      indications: [
        "Cold-induced diseases: arthritis, cold-induced stomach pain",
        "Cold constitution",
        "Gynecological diseases"
      ],
      efficacy: "By burning moxa sticks, it warms and unblocks meridians, dispels cold and dampness, and tonifies Yang Qi"
    },
    {
      title: "Moxa Box Moxibustion",
      icon: Moon,
      color: "from-teal-500 to-green-400",
      indications: [
        "Suitable for large area treatments: abdomen, waist, back"
      ],
      efficacy: "Warms the entire area, harmonizes Qi and blood, and improves overall health"
    }
  ];

  const massageTherapies = [
    {
      title: "Adult Traditional Chinese Massage",
      icon: Users,
      color: "from-blue-500 to-indigo-400",
      indications: [
        "Cervical spondylosis",
        "Lumbar disc herniation",
        "Periarthritis of shoulder",
        "Insomnia",
        "Indigestion"
      ],
      efficacy: "By manual massage, it relaxes muscles, unblocks meridians, and improves functions"
    },
    {
      title: "Pediatric Traditional Chinese Massage",
      icon: Baby,
      color: "from-pink-500 to-rose-400",
      indications: [
        "Anorexia",
        "Indigestion",
        "Cold",
        "Cough",
        "Night crying"
      ],
      efficacy: "Through gentle massage, it regulates children's spleen and stomach functions, enhances immunity"
    }
  ];

  const herbalTherapies = [
    {
      title: "Decoction",
      icon: Coffee,
      color: "from-amber-700 to-amber-500",
      indications: [
        "Internal medicine diseases",
        "Gynecology diseases",
        "Pediatric diseases",
        "Dermatology related diseases"
      ],
      efficacy: "By taking decoctions internally, it adjusts the internal balance of the body"
    },
    {
      title: "Traditional Patent Medicines",
      icon: Pill,
      color: "from-green-600 to-emerald-400",
      indications: [
        "Auxiliary treatment for various common and frequently occurring diseases"
      ],
      efficacy: "Convenient to take with stable therapeutic effects"
    },
    {
      title: "External Application of TCM",
      icon: Flower2,
      color: "from-purple-600 to-violet-400",
      indications: [
        "Skin diseases",
        "External injuries",
        "Arthritis"
      ],
      efficacy: "Through external application, rubbing, or soaking, it directly reaches the affected area and relieves symptoms"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        className="relative bg-gradient-to-r from-primary-navy to-primary-blue text-white py-20 overflow-hidden"
      >
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
          className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair"
          >
            Traditional Chinese Medicine (TCM)
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-2xl text-amber-100 max-w-3xl mx-auto font-light"
          >
            Ancient Wisdom for Modern Healing
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-amber-100 max-w-3xl mx-auto mt-4"
          >
            Holistic approaches to restore balance, unblock meridians, and promote natural healing
          </motion.p>
        </div>
      </motion.section>

      {/* Acupuncture Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Acupuncture Treatment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stimulating specific acupoints to regulate Qi and blood, unblock meridians, and restore balance
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {acupunctureTherapies.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                  <div className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}>
                    <Icon size={48} />
                    <h3 className="text-2xl font-bold mt-2">{therapy.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-primary-navy mb-2 flex items-center">
                        <Activity size={18} className="mr-2" />
                        Indications:
                      </h4>
                      <ul className="space-y-2">
                        {therapy.indications.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-700 mb-1 flex items-center">
                        <Sparkles size={16} className="mr-2" />
                        Efficacy:
                      </h4>
                      <p className="text-sm text-gray-700">{therapy.efficacy}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Cupping & Guasha Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Cupping & Guasha Therapy
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {cuppingGuasha.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}>
                    <Icon size={48} />
                    <h3 className="text-2xl font-bold mt-2">{therapy.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-primary-navy mb-2 flex items-center">
                        <Activity size={18} className="mr-2" />
                        Indications:
                      </h4>
                      <ul className="space-y-2">
                        {therapy.indications.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-700 mb-1 flex items-center">
                        <Sparkles size={16} className="mr-2" />
                        Efficacy:
                      </h4>
                      <p className="text-sm text-gray-700">{therapy.efficacy}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Moxibustion Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Moxibustion Treatment
            </h2>
            <p className="text-lg text-gray-600">
              Warming and unblocking meridians, dispelling cold and dampness, tonifying Yang Qi
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {moxibustionTherapies.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}>
                    <Icon size={48} />
                    <h3 className="text-2xl font-bold mt-2">{therapy.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-primary-navy mb-2 flex items-center">
                        <Activity size={18} className="mr-2" />
                        Indications:
                      </h4>
                      <ul className="space-y-2">
                        {therapy.indications.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-amber-100 p-4 rounded-lg">
                      <h4 className="font-bold text-amber-700 mb-1 flex items-center">
                        <Sparkles size={16} className="mr-2" />
                        Efficacy:
                      </h4>
                      <p className="text-sm text-gray-700">{therapy.efficacy}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Massage Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Traditional Chinese Massage Treatment
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {massageTherapies.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}>
                    <Icon size={48} />
                    <h3 className="text-2xl font-bold mt-2">{therapy.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-primary-navy mb-2 flex items-center">
                        <Activity size={18} className="mr-2" />
                        Indications:
                      </h4>
                      <ul className="space-y-2">
                        {therapy.indications.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-700 mb-1 flex items-center">
                        <Sparkles size={16} className="mr-2" />
                        Efficacy:
                      </h4>
                      <p className="text-sm text-gray-700">{therapy.efficacy}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Herbal Medicine Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Traditional Chinese Medicine
            </h2>
            <p className="text-lg text-gray-600">
              Herbal formulations that adjust the internal balance of the body
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {herbalTherapies.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}>
                    <Icon size={48} />
                    <h3 className="text-2xl font-bold mt-2">{therapy.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold text-primary-navy mb-2 flex items-center">
                        <Activity size={18} className="mr-2" />
                        Indications:
                      </h4>
                      <ul className="space-y-2">
                        {therapy.indications.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <h4 className="font-bold text-green-700 mb-1 flex items-center">
                        <Sparkles size={16} className="mr-2" />
                        Efficacy:
                      </h4>
                      <p className="text-sm text-gray-700">{therapy.efficacy}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 bg-amber-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-flex items-center bg-amber-100 rounded-full px-6 py-3">
              <Phone size={20} className="text-amber-700 mr-2" />
              <span className="text-amber-800 font-bold text-xl">(+86) 400-780-7678</span>
            </div>
            <p className="text-gray-600 mt-4">Contact us for more information or to schedule a consultation</p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-amber-700 to-amber-500 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 font-playfair"
          >
            Experience the Healing Power of Traditional Chinese Medicine
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-amber-100 mb-10"
          >
            Discover how ancient wisdom can complement modern healthcare for holistic wellness
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-amber-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Contact Us
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/treatment"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-amber-700 transition-all"
            >
              Explore Other Treatments
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TCM;