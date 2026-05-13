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
  Phone,
  Mail,
  Calendar,
  FileText,
  Plane,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CarTTherapy = () => {
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

  const diseases = [
    {
      category: "Hematological Malignancies",
      items: ["Leukemia", "Lymphoma", "Multiple Myeloma"],
      successRate: "65-95%",
      icon: Activity
    },
    {
      category: "Digestive System Tumors",
      items: ["Gastric cancer", "Gastroesophageal junction adenocarcinoma", "Pancreatic cancer"],
      status: "Clinical Trials",
      icon: Pill
    },
    {
      category: "Autoimmune Diseases",
      items: ["Systemic lupus erythematosus (SLE)"],
      status: "Early Stage Trials",
      icon: Heart
    }
  ];

  const treatmentOptions = [
    {
      title: "Commercial CAR-T Cell Therapies",
      description: "Six commercial CAR-T cell therapies (CD19/BCMA) for hematologic malignancies with optimal technology and extensive safety evidence.",
      price: "$170,000 - $250,000",
      features: [
        "Approved in both US and China",
        "1/3 of US price",
        "Money-back guarantee: 50% refund if no remission in 3 months (Yescarta)"
      ],
      icon: Award,
      color: "from-blue-500 to-teal-400"
    },
    {
      title: "Academic CAR-T Cell Therapies",
      description: "Dozens of academic CAR-T therapies available with more affordable pricing, often targeting unmet medical needs.",
      price: "$70,000 - $130,000",
      features: [
        "More affordable options",
        "Research-driven institutions",
        "Hope for rare diseases"
      ],
      icon: FlaskConical,
      color: "from-purple-500 to-pink-400"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Send Your Reports",
      description: "Share your medical history, including recent blood reports, biopsy results, and PET scans with us.",
      icon: FileText
    },
    {
      step: "2",
      title: "Evaluation & Opinion",
      description: "Our experts review your reports to provide thorough evaluation and recommend suitable hospitals.",
      icon: Stethoscope
    },
    {
      step: "3",
      title: "Online Communication",
      description: "Engage in online discussions with experts to gain insights and personalized advice.",
      icon: MessageSquare
    },
    {
      step: "4",
      title: "Medical Visa & Travel",
      description: "Hospital or our team helps with medical visa and travel arrangements.",
      icon: Plane
    },
    {
      step: "5",
      title: "Treatment & Follow Up",
      description: "Dedicated team supports you throughout treatment and ensures seamless communication.",
      icon: Heart
    }
  ];

  const hospitals = [
    {
      name: "Jiahui International Hospital (Shanghai)",
      description: "First government-authorized international hospital in Shanghai. Strategic cooperative partner with Massachusetts General Hospital.",
      features: [
        "Dedicated CAR-T Therapy Center",
        "Foreign lymphoma patient successfully treated in 2023",
        "New Zealand patient with multiple myeloma treated successfully"
      ],
      image: "🏥"
    },
    {
      name: "SinoUnited Health International Hospital (Shanghai)",
      description: "Leading high-quality medical service chain with mature CAR-T cell therapy platform.",
      features: [
        "Led by Director Zhou Lili with international experience",
        "Multidisciplinary approach with cardiology and neurology",
        "Standardized clinical service process"
      ],
      image: "🏥"
    },
    {
      name: "Shanghai Ruijin Hospital",
      description: "Comprehensive third-grade A hospital affiliated with Shanghai Jiao Tong University School of Medicine.",
      features: [
        "Team led by Professor Zhao Weili",
        "First multi-center registration clinical study in China",
        "Pioneered stratified CAR-T treatment"
      ],
      image: "🏥"
    },
    {
      name: "Shanghai Children's Medical Center (SCMC)",
      description: "Grade-A tertiary children's hospital with strong technical strength in pediatric CAR-T therapy.",
      features: [
        "99% complete remission rate at 28 days",
        "73.5% disease-free survival at 1 year",
        "CD19 and CD22 dual-target CAR-T research"
      ],
      image: "👶"
    },
    {
      name: "Beijing Gobroad Boren Hospital",
      description: "Three decades of extensive clinical experience in hematology.",
      features: [
        "100+ international patients from 10+ countries",
        "Individualized treatment plans",
        "Comprehensive diagnostic services"
      ],
      image: "🏥"
    },
    {
      name: "Lu Daopei Hospital (Beijing/Shanghai)",
      description: "At the forefront of CAR-T cell therapy for hematological malignancies.",
      features: [
        "2000+ CAR-T cell therapy infusions performed",
        "Dedicated cancer treatment and research",
        "Encouraging patient outcomes"
      ],
      image: "🏥"
    }
  ];

  const patientStories = [
    {
      name: "Ethan",
      country: "Singapore",
      condition: "Cancer for nearly a decade",
      outcome: "Cancer cells decreased significantly, weight recovered",
      quote: "The treatment in China is not only effective, but also much cheaper than in Singapore!",
      image: "🇸🇬"
    },
    {
      name: "Bolshinkov",
      country: "Russia",
      age: "Nearly 70",
      condition: "High-risk advanced multiple myeloma",
      outcome: "Successfully discharged 13 days after infusion",
      image: "🇷🇺"
    },
    {
      name: "Max",
      country: "Australia",
      age: "14",
      condition: "Acute lymphoblastic leukemia for a decade",
      outcome: "Bone marrow, bones, and kidneys recovered, normal for 7+ months",
      image: "🇦🇺"
    },
    {
      name: "Mr. T",
      country: "New Zealand",
      profession: "Actuary",
      condition: "High-risk double-hit multiple myeloma",
      outcome: "Chose China after cost comparison (US 5x, Australia 2x more expensive)",
      image: "🇳🇿"
    },
    {
      name: "Paul",
      country: "Russia",
      age: "42",
      condition: "Follicular lymphoma relapse",
      outcome: "Recovering well, running 5km daily",
      image: "🇷🇺"
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
            CAR-T Cell Therapy in China
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Revolutionary cancer treatment at affordable costs with world-class expertise
          </motion.p>
        </div>
      </motion.section>

      {/* What is CAR-T Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 font-playfair">
                What is CAR-T Cell Therapy?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Chimeric antigen receptor (CAR) T-cell therapy is a way to get immune cells called T cells 
                (a type of white blood cell) to fight cancer by changing them in the lab so they can find 
                and destroy cancer cells. CAR T-cell therapy is also sometimes talked about as a type of 
                cell-based gene therapy, because it involves altering the genes inside T cells to help them 
                attack the cancer.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This type of treatment can be very helpful in treating some types of cancer, even when 
                other treatments are no longer working.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-primary-navy mb-4">History of CAR-T Therapy</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">1987</div>
                  <p className="text-gray-700">Israeli scientist Zelig Eshhar, PhD, developed the first "chimeric antigen receptor" (CAR)</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">2012</div>
                  <p className="text-gray-700">First clinical trial in the US with Emily Whitehead, now cancer-free as of 2025</p>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">Now</div>
                  <p className="text-gray-700">6 FDA-approved CAR-T treatments available worldwide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why China Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Why Choose China for CAR-T Therapy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              China is now a pioneer in CAR-T therapy with remarkable progress and global recognition
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={cardVariants} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <DollarSign size={40} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-navy mb-2">Affordable Cost</h3>
              <p className="text-gray-600">1/3 of US prices. Academic options from $40,000 USD</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <TrendingUp size={40} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-navy mb-2">Global Leader</h3>
              <p className="text-gray-600">700+ clinical trials, surpassing the US (Nature, 2021)</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Users size={40} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-navy mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Seasoned oncologists with rich clinical experience</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Clock size={40} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-navy mb-2">Minimal Wait Times</h3>
              <p className="text-gray-600">Fast-track treatment without long delays</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Diseases Treated Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Diseases Treated with CAR-T Therapy
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {diseases.map((disease, index) => {
              const Icon = disease.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8"
                >
                  <Icon size={40} className="text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{disease.category}</h3>
                  <ul className="space-y-2 mb-4">
                    {disease.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {disease.successRate && (
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <span className="font-bold text-green-600">Success Rate: {disease.successRate}</span>
                    </div>
                  )}
                  {disease.status && (
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <span className="font-bold text-orange-600">Status: {disease.status}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Options Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Treatment Options
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {treatmentOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${option.color} p-6 text-white`}>
                    <Icon size={48} />
                    <h3 className="text-2xl font-bold mt-4">{option.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 mb-4">{option.description}</p>
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                      <span className="text-2xl font-bold text-primary-blue">{option.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Timeline Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Process of Getting CAR-T Therapy in China
            </h2>
            <p className="text-xl text-gray-600">Complete treatment takes 4-6 weeks</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-400 hidden lg:block" />
            
            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} items-center gap-8`}
                  >
                    <div className="lg:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex items-center mb-3">
                        <Icon size={24} className="text-blue-500 mr-3" />
                        <h3 className="text-xl font-bold text-primary-navy">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Hospitals Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Top Hospitals for CAR-T Treatment in China
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {hospitals.map((hospital, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 text-white text-4xl text-center">
                  {hospital.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-navy mb-3">{hospital.name}</h3>
                  <p className="text-gray-600 mb-4">{hospital.description}</p>
                  <ul className="space-y-2">
                    {hospital.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Patient Stories Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Patient Success Stories
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {patientStories.map((story, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{story.image}</div>
                <h3 className="text-xl font-bold text-primary-navy mb-1">{story.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{story.country} {story.age && `• Age ${story.age}`}</p>
                <p className="text-gray-700 mb-3"><span className="font-bold">Condition:</span> {story.condition}</p>
                <p className="text-gray-700 mb-3"><span className="font-bold">Outcome:</span> {story.outcome}</p>
                {story.quote && (
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                )}
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
            Ready to Explore CAR-T Therapy?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 mb-10"
          >
            Our team in China can help you match with the best medical team for your condition
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
              Explore Other Treatments
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CarTTherapy;