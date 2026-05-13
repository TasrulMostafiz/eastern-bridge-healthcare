import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, Globe, Award, Heart, MessageSquare, ChevronRight,
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  Facebook, Youtube, Instagram, Twitter
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { Link } from 'react-router-dom';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (EmailJS, Formspree, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const leadership = [
    {
      name: 'Dr. Zhang Wei',
      position: 'Medical Director',
      message: 'Our commitment is to provide world-class healthcare with compassion and excellence.',
      color: 'from-blue-500 to-teal-400'
    },
    {
      name: 'Li Ming',
      position: 'CEO',
      message: 'Bridging international patients with China\'s medical expertise is our mission.',
      color: 'from-teal-400 to-green-500'
    },
    {
      name: 'Wang Fang',
      position: 'China Operations Director',
      message: 'We ensure seamless coordination between patients and partner hospitals.',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const activities = [
    'International patient coordination',
    'Medical second opinions',
    'Treatment planning',
    'Travel & visa assistance',
    'Hospital partnership management',
    'Post-treatment follow-up'
  ];

  const whyChinaPoints = [
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge medical equipment and innovative treatments',
      icon: Award
    },
    {
      title: 'Cost-Effective',
      description: 'High-quality care at 30-50% lower costs',
      icon: Globe
    },
    {
      title: 'Expert Specialists',
      description: 'World-renowned doctors with international training',
      icon: Users
    },
    {
      title: 'Integrated Approach',
      description: 'Traditional Chinese + Western medicine combination',
      icon: Heart
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      details: ['+86 138 0013 8000', '+86 10 1234 5678'],
      color: 'bg-red-500'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['contact@easternbridgehealth.com', 'info@easternbridgehealth.com'],
      color: 'bg-blue-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Medical Center', 'Beijing, China 100000'],
      color: 'bg-green-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['24/7 Emergency Support', 'Mon-Sun: 8:00 AM - 8:00 PM'],
      color: 'bg-purple-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I start the treatment process?',
      answer: 'Begin with a free consultation. Our medical team will assess your condition and recommend appropriate tests.'
    },
    {
      question: 'What documents do I need?',
      answer: 'Medical records, passport copies, recent test results, and a detailed medical history.'
    },
    {
      question: 'How long does visa processing take?',
      answer: 'Typically 7-10 working days for medical visa with our invitation letter.'
    },
    {
      question: 'Is there language support?',
      answer: 'Yes, we provide 24/7 translation services in multiple languages.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Original About Page Style */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        {/* Abstract People Shapes */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-teal/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-blue/10 rounded-full"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  About Eastern Bridge
                  <span className="block text-primary-teal text-2xl mt-2">
                    Healthcare Without Borders
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Eastern Bridge Healthcare is a non-profit medical tourism agency born not from boardrooms or business plans — but from grief. Based in Dhaka, Bangladesh, we exist to stand beside those facing acute and critical illness when they need it most, helping them find the right treatment beyond borders, before it's too late.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-teal rounded-full flex items-center justify-center text-white font-bold">
                    14+
                  </div>
                  <span className="text-gray-700">Years of Medical Excellence</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <Users className="w-16 h-16 text-primary-teal mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
                <p className="text-gray-600 text-center">
                  To provide accessible, world-class healthcare through international medical partnerships
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our story is deeply personal. When someone we loved was diagnosed with pancreatic cancer, we were shattered — not just by the diagnosis, but by the silence that followed it. We didn't know where to turn. We didn't know how to begin. So we waited. Day after day, we held onto the fragile hope that somewhere within our country, an answer would come. But the disease didn't wait with us. The situation worsened faster than we could bear, and before we could find a way forward, we lost them. We lost someone irreplaceable. That loss never left us. But instead of letting grief consume us, we let it change us. We asked ourselves a painful question: How many other families are sitting in that same silence right now — waiting, hoping, not knowing? Eastern Bridge Healthcare is our answer to that question. We are here so that no family has to face that devastating helplessness alone — so that when the clock is ticking, someone is already by your side, helping you find a way.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                We know that a critical diagnosis doesn't just shake a body — it shakes an entire family. It disrupts sleep, fills quiet moments with fear, and leaves loved ones searching desperately for hope. At Eastern Bridge Healthcare, we exist for exactly that moment — because while we cannot take away the pain of the diagnosis, we refuse to let the search for the right care add to it.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                We serve as a trusted bridge between patients facing life's most difficult challenges and the world's leading medical institutions in China. We specialize in medical tourism for individuals and families navigating severe, life-altering conditions — because we believe, with every part of who we are, that borders should never stand between a person and the care that could save their life.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are healthcare facilitators, logistics experts, and patient advocates — but more than anything, we are people who genuinely care. We don't simply book appointments and step aside. We walk the entire journey with you. From transferring clinical records and securing visas to standing beside you in international hospitals and bridging language barriers so your voice is always heard — we carry the weight of the logistics so you and your family can carry each other.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                "Our philosophy is simple: Every patient deserves access to the best medical minds in the world, without the stress of navigating a foreign healthcare system alone."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                We understand that no two patients are the same, and we treat them that way. Every medical record is carefully reviewed — not just processed — to match each person with the hospital and specialist best suited to their unique diagnosis. From the very first conversation to the final follow-up, we are with you at every step.                
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                We believe trust is everything. That's why we make no false promises, charge no hidden fees, and always give you clear, honest information about treatment timelines and costs — because you deserve clarity, not confusion, during the hardest moments of your life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                Our expertise runs deep in cross-border care for critical illness, including Oncology & Cancer Care, Neurological Recovery & Head Injuries, Parkinson's & Degenerative Diseases, and other complex conditions — all at costs that make world-class care genuinely within reach.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Message from Leadership</h2>
              <p className="text-xl text-gray-600">Our commitment to your health journey</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
                >
                  <div className={`bg-gradient-to-r ${leader.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{leader.name}</h3>
                        <p className="opacity-90">{leader.position}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 italic">"{leader.message}"</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-blue to-primary-teal rounded-2xl p-8 text-white">
                <Target className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Goals</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    Provide access to advanced medical treatments
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    Ensure cost-effective healthcare solutions
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    Deliver compassionate patient care
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2" />
                    Build lasting medical partnerships
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-8">
                <Globe className="w-12 h-12 text-primary-teal mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To bridge the gap between international patients and China's world-class 
                  medical expertise by providing comprehensive, compassionate, and 
                  cost-effective healthcare solutions.
                </p>
                <div className="flex items-center text-primary-teal font-semibold">
                  <Link to="/contact" className="flex items-center">
                    Join Our Mission
                    <ChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Treatment in China */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Treatment in China?</h2>
              <p className="text-xl text-gray-600">Advantages of China's healthcare system</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChinaPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-md text-center"
                  >
                    <div className="w-16 h-16 bg-primary-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary-teal" size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get in Touch Section - Merged from Contact */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Connect with our medical team for personalized healthcare solutions</p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-start"
                      >
                        <div className={`${info.color} p-3 rounded-lg mr-4`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Map Preview */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-900 mb-4">Our Location</h3>
                  <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                    <p className="text-gray-600">Google Maps Integration Here</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" target="_blank" className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition hover:scale-110 transform">
                      <Facebook size={20} />
                    </a>
                    <a href="#" target="_blank" className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition hover:scale-110 transform">
                      <Youtube size={20} />
                    </a>
                    <a href="#" target="_blank" className="bg-pink-600 p-3 rounded-full text-white hover:bg-pink-700 transition hover:scale-110 transform">
                      <Instagram size={20} />
                    </a>
                    <a href="#" target="_blank" className="bg-sky-500 p-3 rounded-full text-white hover:bg-sky-600 transition hover:scale-110 transform">
                      <Twitter size={20} />
                    </a>
                    <a href="https://wa.me/8613800138000" target="_blank" className="bg-green-600 p-3 rounded-full text-white hover:bg-green-700 transition hover:scale-110 transform">
                      <MessageSquare size={20} />
                    </a>
                    <a href="mailto:contact@easternbridgehealth.com" className="bg-gray-600 p-3 rounded-full text-white hover:bg-gray-700 transition hover:scale-110 transform">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600">Our medical team will contact you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                            placeholder="+86 123 4567 8900"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Service Interested</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                          >
                            <option value="">Select a service</option>
                            <option value="cancer">Cancer Treatment</option>
                            <option value="screening">Full Body Screening</option>
                            <option value="weight">Weight Management</option>
                            <option value="trials">Clinical Trials</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Your Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent"
                          placeholder="Please describe your medical condition or inquiry..."
                        ></textarea>
                      </div>

                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          className="mr-2"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          I consent to sharing my medical information for consultation purposes
                        </label>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full btn-primary py-4 text-lg flex items-center justify-center"
                      >
                        <Send className="mr-2" size={20} />
                        Send Message
                      </motion.button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Merged from Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Healthcare Journey?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Let Eastern Bridge guide you to the best medical care in China
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
                >
                  View Our Services
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;