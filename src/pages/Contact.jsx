import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle,MessageSquare  } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const Contact = () => {
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
    // Handle form submission here
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

  return (
    <div className="pt-20">
      {/* Hero */}
      {/* Contact Page Hero */}
      <section className="relative bg-gradient-to-r from-primary-blue to-primary-navy text-white py-20 overflow-hidden">
        {/* Map-like Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                        linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>

          {/* Location Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <MapPin className="w-24 h-24 opacity-20" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-12 h-12 mr-4" />
                  <h1 className="text-5xl font-bold">Contact Us</h1>
                </div>
                <p className="text-xl opacity-90 mb-8">
                  Connect with our medical team for personalized healthcare solutions
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-3" />
                    <span className="text-xl">24/7 Emergency: +86 138 0013 8000</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-3" />
                    <span>Immediate response guaranteed</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <button className="w-full bg-white text-primary-blue py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                    Book Free Consultation
                  </button>
                  <button className="w-full border-2 border-white py-3 rounded-lg font-bold hover:bg-white/10 transition">
                    WhatsApp Chat
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
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
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl shadow-xl p-8">
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

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
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
            ].map((faq, index) => (
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
    </div>
  );
};

export default Contact;