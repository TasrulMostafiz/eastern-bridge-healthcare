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
  Cpu,
  Sparkles,
  Target,
  TrendingUp,
  Scissors,
  Dna,
  Syringe,
  Radio,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Parkinsons = () => {
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

  const pharmacotherapy = [
    {
      category: "Early Stage",
      items: [
        "Monoamine oxidase B inhibitors (Rasagiline, Selegiline)",
        "Dopamine agonists (Pramipexole, Ropinirole)",
        "Anticholinergic drugs (Trihexyphenidyl)"
      ],
      goal: "Symptom control, potential disease-modifying effects",
      icon: Pill,
      color: "from-green-500 to-teal-400"
    },
    {
      category: "Mid Stage",
      items: [
        "Levodopa preparations",
        "Catechol-O-methyltransferase inhibitors (Entacapone)",
        "Dopamine agonists combination therapy"
      ],
      goal: "Smooth motor function, reduce off-time",
      icon: Activity,
      color: "from-blue-500 to-cyan-400"
    },
    {
      category: "Advanced Stage",
      items: [
        "Continuous levodopa intestinal gel infusion",
        "Subcutaneous apomorphine injection",
        "Combination with surgical therapy"
      ],
      goal: "Manage motor fluctuations, improve quality of life",
      icon: Gauge,
      color: "from-purple-500 to-pink-400"
    }
  ];

  const neuromodulation = [
    {
      title: "Closed-loop DBS and Brain-Computer Interface",
      description: "World's first rechargeable, perceptible closed-loop brain pacemaker with real-time EEG sensing and AI intelligent parameter adjustment",
      achievement: "Shifts from 'continuous stimulation' to 'on-demand regulation'. Compatible with 3.0T MRI. Complication rate reduced to 1.2%",
      icon: Cpu,
      color: "from-blue-500 to-teal-400",
      hospital: "Peking University International Hospital"
    },
    {
      title: "MRI-guided Focused Ultrasound (MRgFUS)",
      description: "Non-invasively ablates the ventral intermediate nucleus (VIM) of the thalamus for drug-refractory tremor",
      achievement: "Clinical application expanded in 2025. Suitable for patients who cannot tolerate craniotomy",
      icon: Radio,
      color: "from-purple-500 to-indigo-400"
    },
    {
      title: "AI-assisted Surgery",
      description: "Robotics combined with intraoperative electrophysiological monitoring",
      achievement: "Electrode implantation error < 0.1mm. Operation time reduced by 40%. Motor symptom improvement rate: 78%",
      icon: Sparkles,
      color: "from-orange-500 to-red-400"
    }
  ];

  const diseaseModifying = [
    {
      title: "Stem Cell Therapy",
      therapies: [
        {
          name: "iPSC-derived Dopaminergic Neurons",
          progress: "Kyoto University phase I/II trial: 6/7 patients improved, 4 reduced/discontinued drugs after 2 years. BlueRock Therapeutics high-dose group: 35% MDS-UPDRS improvement"
        },
        {
          name: "Autologous Stem Cell Transplantation",
          progress: "Second Affiliated Hospital of Zhejiang University completed first autologous iPSC transplant in Zhejiang (2025). Patient regained walking ability"
        },
        {
          name: "Bemdaneprocel (Bayer)",
          progress: "Embryonic stem cell-derived neurons entered phase 3 clinical trials in early 2026"
        }
      ],
      icon: Dna,
      color: "from-green-500 to-teal-400"
    },
    {
      title: "Gene Therapy",
      therapies: [
        {
          name: "AADC/TH Gene Delivery",
          description: "Enhance dopamine synthesis"
        },
        {
          name: "GDNF Neurotrophic Factor",
          description: "Protect neurons"
        },
        {
          name: "α-synuclein Gene Editing",
          description: "Reduce protein aggregation"
        }
      ],
      progress: "Multiple phase I/II trials demonstrate good safety. Phase 3 trials needed for long-term efficacy",
      icon: Dna,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Immune and Protein Targeting",
      therapies: [
        {
          name: "Prasinezumab (Roche)",
          description: "α-synuclein antibody",
          progress: "Advanced to phase 3 clinical trials in June 2025. 104-week follow-up shows trend of delaying motor progression"
        },
        {
          name: "Isradipine",
          description: "Calcium channel modulator for neuroprotection in early-stage PD",
          progress: "Multicenter phase 3 trial sponsored by NINDS underway"
        }
      ],
      icon: Syringe,
      color: "from-purple-500 to-pink-400"
    }
  ];

  const hospitals = [
    {
      name: "Ruijin Hospital",
      affiliation: "Shanghai Jiao Tong University School of Medicine",
      description: "One of China's earliest PD specialized clinics (nearly 40 years)",
      features: [
        "First one-stop PD diagnosis and treatment center in China (2025)",
        "Multidisciplinary integration: Neurology, Neurosurgery, Rehabilitation, Imaging, Psychology, Nutrition",
        "Full-process individualized treatment plans",
        "Precision assessment: olfactory testing, transcranial ultrasound, gait evaluation, dopamine transmitter imaging",
        "Robot-assisted DBS with <0.1mm electrode error",
        "78% motor symptom improvement rate",
        "Innovative Transcranial Current Interference (TIS) for non-invasive deep brain modulation",
        "EMG-guided botulinum toxin injection for dystonia",
        "Autologous iPSC stem cell transplantation - patients regain walking ability in 1 month",
        "250+ SCI papers, 30+ awards including National Science and Technology Progress Award"
      ],
      image: "🏥",
      color: "from-blue-500 to-teal-400"
    },
    {
      name: "Beijing Gobroad Boren Hospital",
      description: "Specialized in innovative DBS technology",
      features: [
        "STN+SNr dual-target DBS for tremor, rigidity, and freezing of gait",
        "World's first perceptible brain pacemaker Percept™ PC and directional electrode SenSight™ (August 2025)",
        "Real-time EEG sensing and AI intelligent programming",
        "Aaxon 8-contact rechargeable brain pacemaker with flexible electrode configuration",
        "MRgFUS for non-invasive VIM ablation (first case 2024, discharge within 24 hours)",
        "Full-cycle management model: preoperative assessment → intraoperative monitoring → postoperative programming → rehabilitation",
        "Gait and balance testing, olfactory examination, transcranial magnetic stimulation",
        "40+ SCI papers"
      ],
      image: "🏥",
      color: "from-purple-500 to-indigo-400"
    },
    {
      name: "Donglei Hospital",
      description: "Supported by authoritative expert team",
      features: [
        "Professor Hu Xiaowu: 26 years clinical experience, 3,000+ DBS procedures",
        "DBS under general anesthesia: <1.5 hours operation time, <0.5mm electrode accuracy",
        "500+ cases in 4 years with zero complications (intracranial hemorrhage/infection)",
        "Shanghai's first 8-contact DBS implantation",
        "One-stop Parkinson's disease center with neurology, neurosurgery, rehabilitation",
        "Scale assessments, substantia nigra ultrasound, gait analysis",
        "Lifelong remote programming after surgery",
        "Early-stage: medication + rehabilitation",
        "Mid-to-late-stage: DBS to extend on-time, reduce medication"
      ],
      image: "🏥",
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
            Advances in the Treatment of Parkinson's Disease
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 max-w-4xl mx-auto"
          >
            From "symptom control" to "disease course modification" — 
            breakthrough therapies entering late-stage clinical trials (2025-2026)
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
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              A New Era in Parkinson's Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While symptomatic drug therapy remains the foundation, disease-modifying therapies 
              such as neuromodulation, stem cell therapy, gene therapy, immunotherapy, and precision 
              surgery are advancing rapidly.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pharmacotherapy Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Pharmacotherapy: Optimizing Dopamine Pathways and Symptom Management
            </h2>
            <p className="text-lg text-gray-600">
              Drugs remain the fundamental treatment for PD at all stages, with core goals of 
              stabilizing dopamine levels, reducing motor fluctuations, and expanding intervention 
              of non-motor symptoms.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pharmacotherapy.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`bg-gradient-to-br ${stage.color} rounded-2xl p-8 text-white`}
                >
                  <Icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{stage.category}</h3>
                  <ul className="space-y-3 mb-6">
                    {stage.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4">
                    <p className="text-sm font-bold">Goal: {stage.goal}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Neuromodulation Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Neuromodulation Surgery: Precision and Intelligent Upgrading
            </h2>
            <p className="text-lg text-gray-600">
              Deep Brain Stimulation (DBS) remains the core surgical treatment for drug-refractory PD. 
              In 2025-2026, closed-loop technology integrated with AI has achieved key breakthroughs.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {neuromodulation.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className={`bg-gradient-to-r ${tech.color} p-6 text-white`}>
                    <Icon size={48} className="mb-2" />
                    <h3 className="text-xl font-bold">{tech.title}</h3>
                    {tech.hospital && (
                      <p className="text-sm opacity-90 mt-2">{tech.hospital}</p>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{tech.description}</p>
                    <div className="bg-white p-4 rounded-lg">
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
        </div>
      </motion.section>

      {/* Disease-Modifying Therapies Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4 font-playfair">
              Disease-modifying Therapies
            </h2>
            <p className="text-xl text-green-600 font-bold mb-2">
              From Symptom Control to Disease Progression Inhibition
            </p>
            <p className="text-lg text-gray-600">
              The core of current research and development — protecting/repairing dopaminergic neurons 
              and delaying disease progression. Multiple therapies entered key clinical phases in 2025-2026.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="space-y-8"
          >
            {diseaseModifying.map((therapy, index) => {
              const Icon = therapy.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${therapy.color} p-6 text-white`}>
                    <div className="flex items-center">
                      <Icon size={48} className="mr-4" />
                      <h3 className="text-2xl font-bold">{therapy.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {therapy.therapies.map((item, i) => (
                        <div key={i} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl">
                          <h4 className="font-bold text-primary-navy mb-2">{item.name}</h4>
                          {item.description && (
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          )}
                          {item.progress && (
                            <p className="text-sm text-gray-700">
                              <span className="font-bold text-blue-600">Progress: </span>
                              {item.progress}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                    {therapy.progress && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-gray-700">
                          <span className="font-bold text-blue-600">Overall Progress: </span>
                          {therapy.progress}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
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
              Leading Hospitals for Parkinson's Treatment in China
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="space-y-8"
          >
            {hospitals.map((hospital, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`bg-gradient-to-br ${hospital.color} rounded-2xl p-8 text-white`}
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{hospital.image}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{hospital.name}</h3>
                    {hospital.affiliation && (
                      <p className="text-white/90">{hospital.affiliation}</p>
                    )}
                  </div>
                </div>
                <p className="text-lg mb-6 text-white/90">{hospital.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hospital.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Breakthrough Summary */}
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
            A Transformative Era in Parkinson's Treatment
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 mb-8"
          >
            From closed-loop DBS with AI to stem cell therapies and gene editing — 
            China's leading hospitals are at the forefront of these breakthroughs.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="text-3xl font-bold">78%</div>
              <div className="text-sm">Motor Symptom Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="text-3xl font-bold">0.1mm</div>
              <div className="text-sm">Electrode Precision</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="text-3xl font-bold">1.2%</div>
              <div className="text-sm">Complication Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <div className="text-3xl font-bold">40%</div>
              <div className="text-sm">Reduced Surgery Time</div>
            </div>
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
            Explore Advanced Parkinson's Treatment Options
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-10"
          >
            Connect with leading experts and discover the latest breakthroughs in disease-modifying therapies
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

export default Parkinsons;