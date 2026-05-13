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
  Target,
  Zap,
  Droplets,
  Thermometer,
  Snowflake,
  Radio,
  Cpu,
  Gauge,
  TrendingUp,
  Globe,
  MapPin,
  Syringe,
  Scissors,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MinimallyInvasive = () => {
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

  const vascularTherapies = [
    {
      title: "Hepatic Arterial Infusion Chemotherapy (HAIC)",
      description: "High-concentration chemotherapeutic drugs directly infused into feeding arteries of liver tumors",
      advantages: [
        "Higher local drug concentration",
        "Less damage to normal tissues",
        "Precise targeting"
      ],
      icon: Droplets,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Transarterial Chemoembolization (TACE)",
      description: "Delivers chemotherapeutic drugs while blocking tumor-feeding arteries with embolic agents",
      advantages: [
        "Dual effect: chemotherapy + embolization",
        "Cuts off nutritional supply",
        "Commonly used for liver cancer"
      ],
      icon: Syringe,
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Transarterial Embolization (TAE)",
      description: "Uses embolic agents alone to block tumor-feeding arteries",
      advantages: [
        "For chemotherapy-insensitive tumors",
        "\"Starving the tumor\" approach",
        "Minimal systemic effects"
      ],
      icon: Target,
      color: "from-green-500 to-teal-400"
    }
  ];

  const nonVascularTherapies = [
    {
      title: "Percutaneous Tumor Ablation",
      types: [
        {
          name: "Radiofrequency Ablation (RFA)",
          description: "High-frequency electrical current to \"burn\" tumor cells"
        },
        {
          name: "Microwave Ablation (MWA)",
          description: "Microwave energy for rapid heating and destruction"
        },
        {
          name: "Cryoablation (Argon-Helium Knife)",
          description: "Extreme cold to \"freeze\" and destroy tumors"
        },
        {
          name: "High-Intensity Focused Ultrasound (HIFU)",
          description: "Non-invasive focusing technology for deep tumors"
        }
      ],
      icon: Thermometer,
      color: "from-orange-500 to-red-400"
    },
    {
      title: "Non-Vascular Luminal Stenosis Dilation",
      description: "Balloon dilation or stent implantation for luminal stenosis (esophagus, biliary tract, airway)",
      advantages: [
        "Restores patency quickly",
        "Solves eating difficulties",
        "Relieves jaundice and dyspnea"
      ],
      icon: Radio,
      color: "from-blue-500 to-indigo-400"
    },
    {
      title: "Percutaneous Catheter Drainage",
      types: [
        {
          name: "PTCD (Percutaneous Transhepatic Cholangial Drainage)",
          description: "Relieves biliary obstruction"
        },
        {
          name: "PCN (Percutaneous Nephrostomy)",
          description: "Relieves hydronephrosis"
        }
      ],
      advantages: [
        "Prevents infections",
        "Improves patient condition",
        "Quick symptom relief"
      ],
      icon: Droplets,
      color: "from-teal-500 to-green-400"
    }
  ];

  const vascularIndications = [
    "Primary liver cancer",
    "Metastatic liver cancer",
    "Inoperable renal cancer",
    "Locally advanced lung cancer",
    "Hemorrhagic lung cancer",
    "Bone and soft tissue sarcomas",
    "Pancreatic cancer"
  ];

  const nonVascularIndications = [
    "Primary and metastatic liver cancer",
    "Lung cancer and pulmonary metastases",
    "Renal cancer",
    "Thyroid nodules",
    "Benign and malignant breast tumors",
    "Bone and soft tissue sarcomas",
    "Pancreatic cancer",
    "Obstruction from pelvic tumors"
  ];

  const chinaAdvantages = [
    {
      category: "Technological Innovation",
      items: [
        "Independently developed ablation equipment with flexible frequency adjustment",
        "Drug-eluting embolic microspheres for controlled drug release",
        "AI-assisted imaging navigation for surgical planning",
        "5G remote interventional surgery for nationwide access"
      ],
      icon: Cpu,
      color: "from-blue-500 to-teal-400"
    },
    {
      category: "Clinical Application",
      items: [
        "Mature 'Chinese plan' for liver and lung cancer treatment",
        "TACE + ablation + immunotherapy combination therapy",
        "Expertise in complex cases with tumor invasion",
        "Leading complication control with extremely low rates"
      ],
      icon: TrendingUp,
      color: "from-purple-500 to-pink-400"
    },
    {
      category: "Popularization & Accessibility",
      items: [
        "Core projects included in national medical insurance",
        "Patient out-of-pocket costs reduced to ~1/3 of original",
        "Technology extended to grassroots hospitals",
        "County-level hospitals now perform routine minimally invasive treatments"
      ],
      icon: Globe,
      color: "from-green-500 to-teal-400"
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
            Minimally Invasive Targeted Precision Therapy for Tumors
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-2xl text-blue-100 max-w-4xl mx-auto font-light"
          >
            Minimally Invasive • Precise • Personalized
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 max-w-3xl mx-auto mt-4"
          >
            China's technological innovation leading the global shift in tumor treatment
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 font-playfair">
              The New Era of Tumor Treatment
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In the field of tumor treatment, <span className="font-bold text-blue-600">"minimally invasive, precise, and personalized"</span> has become the mainstream development trend. 
              Minimally invasive targeted precision therapy, with its core advantages of minimal trauma, definite efficacy, and rapid recovery, 
              has brought new treatment options to countless tumor patients — especially offering hope for those unable to tolerate traditional 
              open surgery, advanced recurrent cases, or elderly patients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              China's technological innovation and clinical application in this field have further amplified the advantages of minimally invasive therapy, 
              making it a crucial force in global minimally invasive tumor treatment.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vascular Interventional Therapy Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Vascular Interventional Therapy
            </h2>
            <p className="text-xl text-gray-600">
              "Precise Drug Delivery and Embolization" via Blood Vessels
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Utilizing catheter technology to access the body through peripheral blood vessels, directly delivering drugs or embolic agents 
              to tumor-feeding arteries for a "targeted strike."
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {vascularTherapies.map((therapy, index) => {
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
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-navy mb-3">{therapy.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{therapy.description}</p>
                    <ul className="space-y-2">
                      {therapy.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-navy mb-4">Indications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {vascularIndications.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-primary-navy mb-2">Key Advantages</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <CheckCircle size={14} className="text-green-500 mr-2 mt-1" />
                  <span>Strong local targeting, avoids systemic spread</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle size={14} className="text-green-500 mr-2 mt-1" />
                  <span>Minimal trauma: puncture points just millimeters, local anesthesia</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle size={14} className="text-green-500 mr-2 mt-1" />
                  <span>Ambulatory within 24 hours, short hospital stay</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-primary-navy mb-2">Additional Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <CheckCircle size={14} className="text-green-500 mr-2 mt-1" />
                  <span>Repeatable treatment for recurrent or residual tumors</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle size={14} className="text-green-500 mr-2 mt-1" />
                  <span>Combines with systemic chemo, immunotherapy, ablation</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle size={14} className="text-green-500 mr-2 mt-1" />
                  <span>Rapid symptom relief: controls bleeding, pain, compression</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Non-Vascular Interventional Therapy Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Non-Vascular Interventional Therapy
            </h2>
            <p className="text-xl text-gray-600">
              "Direct Targeted Operation" Under Imaging Guidance
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Under real-time imaging guidance (CT, ultrasound, MRI), a thin needle is percutaneously inserted directly into 
              the tumor for ablation, biopsy, or drainage — "millimeter-level strike" precision.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            {nonVascularTherapies.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}>
                    <Icon size={48} />
                    <h3 className="text-xl font-bold mt-2">{therapy.title}</h3>
                  </div>
                  <div className="p-6">
                    {therapy.types ? (
                      <div className="space-y-4">
                        {therapy.types.map((type, i) => (
                          <div key={i}>
                            <h4 className="font-bold text-primary-navy">{type.name}</h4>
                            <p className="text-sm text-gray-600">{type.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 mb-4">{therapy.description}</p>
                    )}
                    {therapy.advantages && (
                      <ul className="space-y-2 mt-4">
                        {therapy.advantages.map((adv, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary-navy mb-4">Indications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nonVascularIndications.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={16} className="text-purple-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h4 className="font-bold text-primary-navy mb-2">Precision Advantages</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <Target size={14} className="text-blue-500 mr-2 mt-1" />
                  <span>High precision: real-time guidance to tumor core</span>
                </li>
                <li className="flex items-start text-sm">
                  <Shield size={14} className="text-blue-500 mr-2 mt-1" />
                  <span>Minimal damage to surrounding healthy tissues</span>
                </li>
                <li className="flex items-start text-sm">
                  <Sparkles size={14} className="text-blue-500 mr-2 mt-1" />
                  <span>Known as "minimally invasive within minimally invasive"</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h4 className="font-bold text-primary-navy mb-2">Patient Benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-start text-sm">
                  <Heart size={14} className="text-blue-500 mr-2 mt-1" />
                  <span>Safe for elderly and weak patients</span>
                </li>
                <li className="flex items-start text-sm">
                  <Clock size={14} className="text-blue-500 mr-2 mt-1" />
                  <span>Rapid recovery, quick return to normal life</span>
                </li>
                <li className="flex items-start text-sm">
                  <Activity size={14} className="text-blue-500 mr-2 mt-1" />
                  <span>Synergistic effect with immunotherapy</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* China Advantages Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Unique Advantages of Minimally Invasive Tumor Therapy in China
            </h2>
            <p className="text-xl text-gray-600">
              Triple Breakthroughs in Technology, Clinical Application, and Popularization
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {chinaAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${advantage.color} p-6 text-white`}>
                    <Icon size={48} />
                    <h3 className="text-2xl font-bold mt-2">{advantage.category}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {advantage.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-primary-navy to-primary-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">China's Breakthrough Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">1/3</div>
                <p className="text-sm text-blue-100">Out-of-pocket costs after insurance</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-sm text-blue-100">County-level access to TACE</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50%+</div>
                <p className="text-sm text-blue-100">Efficiency improvement with AI navigation</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">#1</div>
                <p className="text-sm text-blue-100">Global leader in ablation tech</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
            <p className="text-gray-700 italic">
              <span className="font-bold text-green-600">"Chinese Sample" for Global Tumor Treatment: </span>
              From independently developed precision equipment to personalized plans tailored to Chinese patients, 
              from medical insurance coverage to grassroots popularization — China's minimally invasive tumor therapy 
              provides the world with a model of "advanced technology, definite efficacy, and affordable price."
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Conclusion Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 font-playfair"
          >
            A New Hope for Tumor Patients
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-700 leading-relaxed mb-6"
          >
            With its core advantages of <span className="font-bold text-blue-600">"minimally invasive, precise, efficient, and safe,"</span> 
            minimally invasive tumor therapy has become an important means of tumor treatment. China's breakthroughs in technological 
            innovation, clinical application, and popularization have fully exerted the value of this technology.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-700 leading-relaxed"
          >
            For tumor patients, minimally invasive therapy is no longer a "niche choice" but an{" "}
            <span className="font-bold text-green-600">"preferred option"</span> in more and more cases. 
            With continuous progress and popularization, more patients will obtain longer survival periods and higher 
            quality of life — truly realizing the vision of <span className="font-bold">"living with tumor."</span>
          </motion.p>
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
            Explore Minimally Invasive Treatment Options
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 mb-10"
          >
            Connect with leading specialists and discover how China's advanced minimally invasive therapies can help
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

export default MinimallyInvasive;