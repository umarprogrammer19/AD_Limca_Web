// Contact.tsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ca06216d-822a-423c-bfc0-51330bdcf7c8",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("There was an error sending your message.");
      console.error("Form submission error:", error);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Headquarters',
      details: '123 Citrus Avenue, Freshville, CA 90210',
      color: 'text-limca-green',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-ZEST',
      color: 'text-limca-yellow',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'hello@adlimca.com',
      color: 'text-limca-green',
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: <Youtube className="w-6 h-6" />, name: 'YouTube', color: 'hover:text-red-600' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Get in <span className="text-limca-green">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Have a question, suggestion, or just want to share your AD Limca experience? 
            We'd love to hear from you! Reach out and let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-limca-light-gray rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-limca-green/10 border border-limca-green/20 rounded-lg">
                <p className="text-limca-green font-inter font-semibold">
                  Thank you! Your message has been sent successfully. We'll get back to you soon!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-lemon w-full px-4 py-3 border transition-colors duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 font-inter">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-lemon w-full px-4 py-3 border transition-colors duration-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 font-inter">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-lemon w-full px-4 py-3 border transition-colors duration-300 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-600 font-inter">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-lemon w-full px-4 py-3 border transition-colors duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600 font-inter">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary text-white py-4 rounded-full font-poppins font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info + Social Links + Map */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-12 h-12 bg-limca-light-gray rounded-full flex items-center justify-center ${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-poppins font-semibold text-gray-800 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 font-inter">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-lg font-poppins font-semibold text-gray-800 mb-4">Follow Us on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    className={`w-12 h-12 bg-limca-light-gray rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:scale-110`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-lg font-poppins font-semibold text-gray-800 mb-4">Find Us Here</h4>
              <div className="h-64 bg-limca-light-gray rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-limca-green mx-auto mb-4" />
                  <p className="text-gray-600 font-inter">Interactive map coming soon!</p>
                  <p className="text-sm text-gray-500 font-inter mt-2">
                    123 Citrus Avenue, Freshville, CA 90210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
