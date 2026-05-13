import React from 'react';
import { motion } from 'framer-motion';
import { Building, Award, Users, CheckCircle, MapPin, Phone, Star } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const HospitalPartners = () => {
  const hospitals = [
    {
      "name": "Shanghai Gaobo Cancer Hospital",
      "location": "Shanghai, China",
      "specialty": "Oncology Center",
      "accreditation": "Affiliated with China Pharmaceutical University",
      "rating": 4.9,
      "features": [
        "70,000 sqm tertiary specialized cancer hospital",
        "406 beds in Phase 1 (planned total 700 beds by 2026)",
        "Multidisciplinary Care (MDC) model for cancer treatment",
        "Advanced equipment: PET-CT, MRI, 64-slice CT, Tomotherapy, Linear Accelerator",
        "Minimally invasive tumor treatments including ablation and particle implantation",
        "Clinical trials and biomedical research programs",
        "Expert oncology team including Qin Shukui, Li Jin, and Han Baohui"
      ]
    },
    {
      "name": "SinoUnited Health",
      "location": "Shanghai, China",
      "specialty": "International General Practice and Specialty Care",
      "accreditation": "International collaboration with Mayo Clinic",
      "rating": 4.8,
      "features": [
        "High-quality chain medical service provider established in 2016",
        "Network including one comprehensive hospital and multiple outpatient clinics in Shanghai, Hangzhou, and Suzhou",
        "Doctor-led team with senior physicians from China and abroad",
        "General Practice + Specialties model with multidisciplinary collaboration",
        "Cooperation with Mayo Clinic introducing international medical standards",
        "Specialized centers such as Women’s Health Center",
        "Advanced treatments including CAR-T therapy for hematological diseases",
        "Dedicated CAR-T rapid response team in the Hematology Department",
        "Family Health Membership Program with family doctors and 24/7 health support",
        "Comprehensive health management services for international and overseas families"
      ]
    },
    {
      "name": "Shanghai Donglei Brain Hospital",
      "location": "Shanghai, China",
      "specialty": "Neuroscience and Brain Specialty Hospital",
      "accreditation": "Grade III Brain Specialty Hospital approved by Shanghai Municipal Health Commission",
      "rating": 4.8,
      "features": [
        "Founded by Prof. Song Donglei, former Chief Neurosurgeon at Huashan Hospital, Fudan University",
        "20,000 sqm facility with 300 beds located in Shanghai Hongqiao Central Area",
        "Specialized treatment for cerebrovascular disease, brain tumors, brain functional diseases, neurospinal diseases, and other neurological disorders",
        "International Medical Tourism Pilot Institution serving patients from over 30 countries",
        "Over 2,000 neurosurgeries performed annually with 90% high-difficulty Level 3–4 surgeries",
        "Expert neurosurgery team including Song Donglei, Wang Wei, and Gai Yanting",
        "Advanced minimally invasive neurosurgery and microsurgery techniques",
        "Internationally trained physicians and multinational medical staff",
        "Convenient access near Hongqiao Railway Station and Airport"
      ]
    },
    {
      "name": "Lu Daopei Hematology Hospital",
      "location": "Hebei, China",
      "specialty": "Hematology and Stem Cell Transplantation",
      "accreditation": "Lu Daopei Medical Group Specialized Hematology Hospital",
      "rating": 4.9,
      "features": [
        "One of the world's largest hematopoietic stem cell transplantation centers",
        "Part of Lu Daopei Medical Group with multiple specialized hematology hospitals in China",
        "More than 10,000 hematopoietic stem cell transplantations completed as of 2024",
        "Over 1,000 stem cell transplants performed annually since 2019",
        "Leading expertise in haploidentical stem cell transplantation",
        "More than 2,000 CAR-T cell therapy treatments completed",
        "Expert team including Liu Kaiyan, Zhao Wei, Xue Song, and Du Zhicong",
        "Strong international reputation in hematology research and clinical trials",
        "Selected research presentations at the 2025 European Hematology Association Congress"
      ]
    },
    {
      "name": "Beijing Gaobo Boren Hospital",
      "location": "Beijing, China",
      "specialty": "Hematology and Immunotherapy",
      "accreditation": "Designated Beijing Medical Insurance Hospital",
      "rating": 4.8,
      "features": [
        "Distinctive second-level general hospital under Gaobo Medical (Hematology) Beijing Research Center",
        "Located near Jijiamiao Station of Metro Line 10 in Fengtai District",
        "Specialized treatment for hematological tumors, Parkinson's disease, and liver cancer",
        "Strong expertise in hematopoietic stem cell transplantation and CAR-T cell therapy",
        "Experienced expert team including Tong Chunrong, Wu Tong, and Zhang Yonghong",
        "Over 4,000 allogeneic hematopoietic stem cell transplants performed by leading specialists",
        "Advanced inpatient wards including hematology, pediatrics, and general wards",
        "Hundred-level operating rooms and emergency rescue wards",
        "Comprehensive support departments including Clinical Laboratory, Blood Bank, Medical Imaging, Nuclear Medicine, and Pharmacy"
      ]
    },
    {
      "name": "Aier Eye Hospital",
      "location": "China (Multiple Cities including Beijing, Shanghai, Guangzhou)",
      "specialty": "Ophthalmology",
      "accreditation": "Publicly Listed International Ophthalmology Medical Group",
      "rating": 4.8,
      "features": [
        "Founded in 2002 with the first hospital established in Changsha",
        "One of the largest ophthalmology hospital networks in the world",
        "976 eye hospitals, centers, and clinics globally as of 2025",
        "Extensive presence across China, Europe, Southeast Asia, and the United States",
        "More than 50,000 employees including over 7,100 ophthalmologists and optometrists",
        "Integrated platform for research, education, and clinical ophthalmology",
        "Advanced ophthalmology research institutes and AI-assisted medical diagnosis platform",
        "Patient-centered service philosophy with cross-subsidy healthcare model",
        "Specialized treatment for cataract, glaucoma, diabetic retinopathy, macular degeneration, and vitreous opacities",
        "Multiple major hospital locations in Beijing, Shanghai, and Guangzhou"
      ]
    },
    {
      "name": "Foresea Life Guangzhou General Hospital",
      "location": "Guangzhou, China",
      "specialty": "Comprehensive Tertiary General Hospital",
      "accreditation": "Grade III General Hospital approved by Guangzhou Health Commission",
      "rating": 4.8,
      "features": [
        "Large integrated medical complex combining prevention, healthcare, diagnosis, research, education, and geriatric services",
        "Key investment project in Zengcheng District aligned with the Healthy China 2030 strategy",
        "1,800-bed tertiary hospital serving the Guangdong–Hong Kong–Macao Greater Bay Area",
        "Nearly 3 million outpatient visits and over 100,000 inpatient admissions",
        "National Chest Pain Center and National Standardized Atrial Fibrillation Center certification",
        "Advanced cardiovascular procedures including radiofrequency ablation, cryoablation, TAVR, and left atrial appendage closure",
        "Comprehensive oncology center with PET/CT, MRgFUS, Gamma Knife, HIPEC, and PIPAC technologies",
        "Advanced surgical departments including interventional surgery, colorectal surgery, and urology with AI-guided diagnostic technologies",
        "Specialized obstetrics department with ICU and NICU for high-risk pregnancies and neonatal care",
        "Located at No. 703 Xincheng Avenue, Zengcheng District, Guangzhou"
      ]
    },
    {
      "name": "Southern Chunfu (Pediatric) Hematology Research Institute",
      "location": "Dongguan, Guangdong, China",
      "specialty": "Pediatric Hematology and Stem Cell Transplantation",
      "accreditation": "Gaobo Medical (Hematology) Guangdong Research Center",
      "rating": 4.9,
      "features": [
        "Led by Professor Li Chunfu with strategic cooperation with Mayo Clinic",
        "Operates within Dongguan Taixin Hospital integrating treatment, research, and education",
        "150 hospital beds with 36 hematopoietic stem cell transplantation units",
        "One of the largest pediatric hematopoietic stem cell transplantation centers worldwide",
        "Over 1,458 hematopoietic stem cell transplantations performed as of 2025",
        "Advanced TDH T-cell depletion transplantation protocol for complex hematological diseases",
        "97.84% overall survival rate for thalassemia patients",
        "Specialized treatment for diseases such as JMML, leukemia, aplastic anemia, lupus, and immunodeficiency disorders",
        "Multiple award-winning pediatric hematology experts including recipients of the Soong Ching Ling Pediatric Medical Award",
        "Active international research participation with presentations at ASH and EHA conferences"
      ]
    },
    {
      "name": "Guangzhou University of Chinese Medicine Jinshazhou Hospital",
      "location": "Guangzhou, China",
      "specialty": "Tertiary General Hospital with Oncology and Integrative Medicine",
      "accreditation": "Tertiary General Hospital integrating medical treatment, teaching, research, and prevention",
      "rating": 4.8,
      "features": [
        "1,500 beds with 48 intensive care beds; Phase III Kangyang Center under construction adding 1,000 new beds",
        "31 modern laminar flow operating rooms",
        "45 clinical and medical technology departments with expert teams including Luo Rongcheng and Wang Yuandong",
        "International Oncology Medical Center with precision detection, imaging, radiotherapy, and comprehensive tumor treatment platforms",
        "Advanced imaging and treatment equipment including 4th-generation PET-MR, PET-CT, 3.0T MRI, Accuray M6 CyberKnife, TomoTherapy H, da Vinci Surgical System, and NanoKnife (IRE)",
        "Precision therapies such as yttrium-90 microsphere therapy (National Demonstration and Training Base)",
        "Specialized treatment for CNS tumors, spinal tumors, lung cancer, liver cancer, pancreatic cancer, and prostate cancer",
        "High local control and pain relief rates for tumors using advanced stereotactic radiosurgery",
        "Integration of Traditional Chinese Medicine with Western medicine and international clinical practices",
        "Active public health services including epidemic prevention and free consultations"
      ]
    },
    {
      "name": "Foshan Fosun Chancheng Hospital",
      "location": "Foshan, Guangdong, China",
      "specialty": "Grade III Class A General Hospital",
      "accreditation": "JCI-accredited since 2018; Guangdong-Hong Kong-Macao Medicine and Medical Devices Connect Program",
      "rating": 4.8,
      "features": [
        "Established in 1958, part of Fosun Group since 2013",
        "Operates two campuses, five medical buildings, and five community health centers",
        "1,800 beds with annual outpatient volume over 3.17 million and inpatient volume of 58,000",
        "Conveniently located near Metro Hospital Station",
        "Spinal Orthopedics: municipal key specialty with precision minimally invasive surgery using 3D printing, AI, and orthopedic robots",
        "Urology: one of Foshan's largest centers, performing complex surgeries with Da Vinci Surgical Robot",
        "Cardiology: advanced cardiovascular procedures including PDA occlusion, TAVR, and MitraClip",
        "Oncology: CyberKnife radiotherapy, CAR-T therapy, tumor-treating fields (TTF), genetic testing, and international MDT consultations",
        "Led by Professor Wang Enmin, achieving over 16,000 CyberKnife treatments since 2007; 5-year survival rate >98% for early-to-mid-stage breast cancer patients",
        "Stereotactic Central Ablative Radiotherapy (SCART) for advanced tumors with ≥90% 2-year local control",
        "TCM Gynecology: Guangdong Provincial Key Specialty using therapies like Warm Yang Uterus Therapy and Governor Vessel Moxibustion for endometriosis, infertility, and menstrual disorders"
      ]
    },
    {
      "name": "Guangdong Clifford Hospital",
      "location": "Guangzhou, Guangdong, China",
      "specialty": "Integrated Traditional Chinese and Western Medicine",
      "accreditation": "JCI-accredited Grade III Class A Hospital; seven consecutive re-accreditations",
      "rating": 4.8,
      "features": [
        "Founded in 2001 by Professor Peng Linji",
        "300,000㎡ facility with 3,000 open beds and 56 clinical and medical technical departments",
        "Certified Emergency, Stroke, and Chest Pain Centers",
        "Staff includes 1,800 personnel, 200+ senior experts, and 22 postdoctoral researchers",
        "Over 3.4 million outpatients and 92,000 inpatients treated",
        "Introduced Inclisiran via the Guangdong-Hong Kong-Macao Medicine and Medical Devices Connect program",
        "Plastic Surgery & Aesthetic Center offering reconstructive and aesthetic procedures, dermatologic care, and non-invasive therapies",
        "Clifford TCM Center providing acupuncture, tuina, chiropractic, bone setting, moxibustion, guasha, and acupoint application",
        "Anti-Aging Medical Center (10,000㎡) delivering aging assessment, intervention, and chronic disease management using TCM and advanced international assessment systems",
        "Endocrinology Department with provincial recognition, diabetes health education, continuous glucose monitoring, and integration of oral and external TCM therapies"
      ]
    },
    {
      "name": "Guangzhou Concord Cancer Center Hospital (GCCC)",
      "location": "Guangzhou, Guangdong, China",
      "specialty": "Tertiary Cancer Specialty Hospital",
      "accreditation": "Grade III National Standards; member of UICC; PTCOG council seat",
      "rating": 4.9,
      "features": [
        "Established according to Grade III national standards and international top-tier benchmarks",
        "Dedicated to multidisciplinary cancer care including radiotherapy, chemotherapy, surgery, and proton therapy",
        "Approximately 34,000 outpatient visits annually with 400 open beds",
        "Flagship proton therapy center featuring Varian ProBeam and IBA Proteus+ systems across 9 rooms",
        "Equipped with 15 photon-based radiotherapy devices forming a comprehensive radiation oncology platform",
        "Aims to develop a 'five-in-one' international cancer center integrating clinical care, prevention, research, training, and teleconsultation",
        "Clinical departments include Medical Oncology, Surgical Oncology, and Radiation Therapy Center",
        "Total investment exceeding RMB 3 billion; operational since June 2021",
        "Member of the Union for International Cancer Control (UICC) with international collaborations",
        "Focus on advanced medical technology and humanistic patient care"
      ]
    }
  ];

  const features = [
    { icon: Award, title: 'International Accreditation', description: 'JCI, ISO, and other global certifications' },
    { icon: Building, title: 'Modern Infrastructure', description: 'State-of-the-art medical facilities' },
    { icon: Users, title: 'Multilingual Staff', description: 'English, Arabic, Russian speaking teams' },
    { icon: CheckCircle, title: 'Advanced Technology', description: 'Latest medical equipment and techniques' }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Hospitals in China</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with China's leading medical institutions to provide world-class healthcare
            </p>
          </div>
        </AnimatedSection> */}

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-14 h-14 bg-primary-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary-teal" size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Hospital Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {hospitals.map((hospital, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                {/* Hospital Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{hospital.name}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-1" />
                        <span>{hospital.location}</span>
                      </div>
                    </div>
                    {/* <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      <Star size={16} className="mr-1" />
                      <span className="font-bold">{hospital.rating}</span>
                    </div> */}
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-2">
                      {hospital.specialty}
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {hospital.accreditation}
                    </span>
                  </div>
                </div>

                {/* Hospital Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {hospital.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6 border-t border-gray-100">
                  <div className="flex justify-between">
                    <button className="btn-primary px-6">
                      View Details
                    </button>
                    <button className="flex items-center text-primary-blue hover:text-primary-teal transition-colors">
                      <Phone size={18} className="mr-2" />
                      Contact
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalPartners;