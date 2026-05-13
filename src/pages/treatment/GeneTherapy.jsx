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
  Calendar,
  Globe,
  TrendingUp,
  Dna,
  Syringe,
  Baby,
  Brain,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GeneTherapy = () => {
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
      category: "Genetic Diseases",
      items: [
        "Hemophilia B",
        "Spinal Muscular Atrophy (SMA)",
        "Retinitis Pigmentosa",
        "Congenital Deafness",
        "Thalassemia"
      ],
      icon: Dna,
      color: "from-blue-500 to-teal-400"
    },
    {
      category: "Cancer",
      items: [
        "Multiple Myeloma",
        "Leukemia",
        "Hematological Malignancies"
      ],
      description: "CAR-T cell therapy based on gene-edited immune cells",
      icon: Activity,
      color: "from-purple-500 to-pink-400"
    },
    {
      category: "Neurodegenerative Diseases",
      items: [
        "Ischemic Stroke",
        "Parkinson's Disease",
        "Metachromatic Leukodystrophy (MLD)"
      ],
      icon: Brain,
      color: "from-green-500 to-teal-400"
    },
    {
      category: "Other Diseases",
      items: [
        "Liver Failure",
        "Crohn's Disease with Anal Fistula"
      ],
      description: "Combined cell and gene therapy regimens",
      icon: Heart,
      color: "from-orange-500 to-red-400"
    }
  ];

  const coreTechnologies = [
    {
      title: "Gene Addition Therapy",
      description: "Independently developed engineered AAV vectors with targeting delivery efficiency of over 90%",
      achievement: "BBM-H901 for hemophilia B rated as 'global gold standard' by Nature Medicine",
      icon: Syringe,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Gene Editing Therapy",
      description: "High-precision base editing technology significantly reduces off-target risks",
      achievement: "Transformed base editor tBE with international patents for thalassemia, congenital deafness",
      icon: Dna,
      color: "from-purple-500 to-indigo-400"
    },
    {
      title: "Cell Therapy",
      description: "Fully automated CAR-T production system enables 'bedside manufacturing'",
      achievement: "Cure rate over 70% for hematological malignancies",
      icon: FlaskConical,
      color: "from-green-500 to-teal-400"
    }
  ];

  const advantages = [
    {
      title: "Advanced & Reliable Technology",
      description: "China leads globally in gene-editing tools and vector design with high targeting efficiency and low immunogenicity",
      icon: Microscope
    },
    {
      title: "Affordable & Accessible Pricing",
      description: "Cost only 1/5–1/10 of international alternatives. Many therapies covered by medical insurance and charity programs",
      icon: DollarSign
    },
    {
      title: "Efficient Diagnosis & Treatment",
      description: "Standardized procedures cut treatment cycle by over 40%. Dedicated green channels for international patients",
      icon: Clock
    },
    {
      title: "Abundant Clinical Resources",
      description: "280+ registered gene therapy trials by 2024. Network of top-tier hospitals enables fast translation to clinical practice",
      icon: TrendingUp
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Preliminary Evaluation",
      duration: "1-2 weeks",
      description: "International diagnosis channel with real-time translation. Gene testing and clinical evaluation to confirm pathogenic genes",
      icon: FileText
    },
    {
      step: "2",
      title: "Program Customization",
      duration: "2-4 weeks",
      description: "Automated production platform prepares personalized therapeutic vectors. 50% more efficient than traditional methods",
      icon: FlaskConical
    },
    {
      step: "3",
      title: "Treatment Implementation",
      duration: "1-3 days",
      description: "Precise administration via intravenous, intrathecal or local minimally invasive injection. Short observation period",
      icon: Syringe
    },
    {
      step: "4",
      title: "Postoperative Follow-up",
      duration: "6 months to 2 years",
      description: "Global remote follow-up system. 'One-time treatment with long-term efficacy'",
      icon: Heart
    }
  ];

  const patientStories = [
    {
      name: "SMA Patient",
      country: "Indonesia",
      age: "2 years",
      condition: "Spinal Muscular Atrophy",
      outcome: "Evaluation completed in 72 hours. Limb muscle tone significantly improved after intrathecal injection",
      image: "🇮🇩"
    },
    {
      name: "Aisha",
      country: "Pakistan",
      age: "4 years",
      condition: "Thalassemia",
      outcome: "Blood transfusion-free in 4+ months. Cost less than 1/10 of international programs",
      quote: "First foreign beneficiary child of China's base editing technology",
      image: "🇵🇰"
    },
    {
      name: "Emma",
      country: "Sweden",
      age: "2 years",
      condition: "MLD (Metachromatic Leukodystrophy)",
      outcome: "Successfully blocked disease progression. Can walk with assistance",
      image: "🇸🇪"
    },
    {
      name: "Mr. Luo",
      country: "New Zealand",
      age: "78",
      condition: "Multiple Myeloma",
      outcome: "Minimal residual disease turned negative in 2 weeks. Cycle nearly half shorter than international average",
      image: "🇳🇿"
    },
    {
      name: "Jinxiu",
      country: "Laos",
      age: "18",
      condition: "Thalassemia",
      outcome: "Blood transfusion-free 5 months after treatment. Regained normal life",
      image: "🇱🇦"
    }
  ];

  const hospitals = [
    {
      name: "Shanghai Children's Medical Center",
      affiliation: "Shanghai Jiao Tong University School of Medicine",
      specialty: "Pediatric rare diseases gene therapy",
      features: [
        "International multi-center trials",
        "Rich cross-border diagnosis and treatment coordination",
        "Efficient treatment for foreign children"
      ],
      image: "👶"
    },
    {
      name: "Children's Hospital of Fudan University",
      specialty: "Hematological rare diseases (thalassemia)",
      features: [
        "First cured foreign thalassemia child",
        "Standardized and efficient diagnosis and treatment processes"
      ],
      image: "🏥"
    },
    {
      name: "Beijing Tiantan Hospital",
      specialty: "Ophthalmic and neurodegenerative diseases",
      features: [
        "World leader in photosensitive protein therapy",
        "Perfect follow-up system for international patients"
      ],
      image: "👁️"
    },
    {
      name: "Institute of Hematology & Blood Diseases Hospital",
      affiliation: "CAMS & PUMC",
      specialty: "Hemophilia B gene therapy",
      features: [
        "Lead clinical trials",
        "International advanced level",
        "Cost control with efficacy guarantee"
      ],
      image: "🩸"
    },
    {
      name: "Shanghai Jiahui International Cancer Center",
      specialty: "Tumor CAR-T therapy",
      features: [
        "Full-process international medical service system",
        "Attracts cancer patients from many countries"
      ],
      image: "🏥"
    },
    {
      name: "SinoUnited Health International Hospital",
      specialty: "CAR-T cell therapy platform",
      features: [
        "Leading high-quality medical service chain",
        "Mature CAR-T platform"
      ],
      image: "🏥"
    },
    {
      name: "Guangzhou Women and Children's Medical Center",
      specialty: "Gene-modified stem cell transplantation for rare brain diseases",
      features: [
        "World leader in technology and service",
        "Efficient treatment for foreign patients"
      ],
      image: "👶"
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
            China's Gene Therapy Solutions
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-2xl text-blue-100 max-w-4xl mx-auto font-light"
          >
            Advanced Technology, Affordable Cost, Efficient Treatment for Global Patients
          </motion.p>
        </div>
      </motion.section>

      {/* What is Gene Therapy Section */}
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
                What is Gene Therapy and How Does It Work?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Gene therapy is a precision medical technology targeting the root causes of diseases. 
                It restores normal cell functions by repairing, replacing or regulating abnormal genes 
                in the human body, achieving a leap from <span className="font-bold">"symptom control"</span> to{' '}
                <span className="font-bold">"root cause elimination"</span>, which is different from 
                traditional symptomatic treatment.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed bg-blue-50 p-6 rounded-xl">
                <span className="font-bold text-primary-blue">Core Principle: </span>
                Healthy target genes are delivered to the patient's target cells through vectors such as 
                adeno-associated virus (AAV) and lentivirus. China's independently developed photosensitive 
                protein gene therapy and high-precision base editing technology are innovative applications 
                of this principle.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl p-8 text-white">
                <Dna size={64} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4">Gene Delivery</h3>
                <p className="text-lg opacity-90">
                  Through gene expression, repair or inhibition of abnormal genes, 
                  normal cell functions are restored—providing a new paradigm for the 
                  treatment of refractory diseases worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Diseases Treated Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Which Diseases Can Be Treated with Gene Therapy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              China's gene therapy solutions cover a variety of globally recognized refractory diseases
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {diseases.map((disease, index) => {
              const Icon = disease.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`bg-gradient-to-br ${disease.color} rounded-2xl p-8 text-white`}
                >
                  <Icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{disease.category}</h3>
                  <ul className="space-y-2 mb-4">
                    {disease.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {disease.description && (
                    <p className="text-sm opacity-90 mt-4 italic">{disease.description}</p>
                  )}
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
              Gene Therapy Process and Time Required
            </h2>
            <p className="text-xl text-green-600 font-bold">
              More than 40% shorter than international average cycle
            </p>
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
                      <p className="text-sm text-blue-600 font-bold mb-2">{step.duration}</p>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-12 p-6 bg-blue-50 rounded-xl"
          >
            <p className="text-gray-700">
              <span className="font-bold">Example: </span>
              A 2-year-old SMA patient from Indonesia completed evaluation and preoperative preparation 
              within <span className="font-bold text-blue-600">72 hours</span>, greatly shortening the 
              waiting and diagnosis cycle for international patients.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Technology Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              China's Gene Therapy: Advanced Technology Leading Global Breakthroughs
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {coreTechnologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${tech.color} p-6 text-white`}>
                    <Icon size={48} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-navy mb-3">{tech.title}</h3>
                    <p className="text-gray-600 mb-4">{tech.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-bold text-blue-600">Achievement: </span>
                        {tech.achievement}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-2">Global Status</h3>
            <p className="text-lg">
              By the end of 2025, China has carried out nearly 150 gene therapy clinical trials, 
              ranking among the top in the world. First hemophilia B gene therapy in Asia approved; 
              photosensitive protein therapy obtained FDA Fast Track designation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Core Advantages: A Global Preferred Option
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6"
                >
                  <Icon size={40} className="text-blue-500 mb-4" />
                  <h3 className="text-lg font-bold text-primary-navy mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Patient Stories Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Successful Practices Benefiting Global Patients
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
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 text-white text-4xl text-center">
                  {story.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-navy mb-1">{story.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{story.country} • Age {story.age}</p>
                  <p className="text-gray-700 mb-2"><span className="font-bold">Condition:</span> {story.condition}</p>
                  <p className="text-gray-700 mb-3"><span className="font-bold">Outcome:</span> {story.outcome}</p>
                  {story.quote && (
                    <p className="text-sm text-gray-600 italic bg-blue-50 p-3 rounded-lg">"{story.quote}"</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Hospitals Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Key Hospitals for Gene Therapy in China
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {hospitals.map((hospital, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{hospital.image}</div>
                <h3 className="text-lg font-bold text-primary-navy mb-1">{hospital.name}</h3>
                {hospital.affiliation && (
                  <p className="text-sm text-gray-500 mb-2">{hospital.affiliation}</p>
                )}
                <p className="text-sm font-bold text-blue-600 mb-2">{hospital.specialty}</p>
                <ul className="space-y-1">
                  {hospital.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Future Outlook Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-primary-navy to-primary-blue text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 font-playfair"
          >
            Future Outlook: Chinese Solutions Benefiting More Global Patients
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 mb-8"
          >
            Estimated market size of China's gene therapy drugs will exceed 100 billion yuan by 2030
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-blue-100"
          >
            From pediatric rare diseases to advanced cancer treatment, from Asia to Europe, America and Oceania, 
            China's gene therapy is breaking medical barriers with the power of science and technology.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="mt-10 p-6 bg-white/10 backdrop-blur-lg rounded-xl"
          >
            <p className="text-xl font-bold">
              Choosing China's gene therapy solutions means choosing the hope of precision cure, affordable cost, 
              and efficient and convenient diagnosis and treatment experience.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-primary-navy mb-6 font-playfair"
          >
            Ready to Explore Gene Therapy Options?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-10"
          >
            Contact our team to learn how China's advanced gene therapy solutions can help you or your loved ones
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              Contact Us
              <ChevronRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/treatment"
              className="inline-flex items-center justify-center border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-blue hover:text-white transition-all"
            >
              Explore Other Treatments
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default GeneTherapy;