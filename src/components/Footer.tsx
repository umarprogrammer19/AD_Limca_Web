import React from 'react';
import { Citrus, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Story', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    products: [
      { name: 'All Flavors', href: '#flavors' },
      { name: 'Classic Collection', href: '#flavors' },
      { name: 'Health Benefits', href: '#health' },
      { name: 'Nutrition Facts', href: '#health' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Store Locator', href: '#' },
      { name: 'Customer Service', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Accessibility', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#' },
    { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', href: '#' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Citrus size={32} className="text-limca-green" />
              <h3 className="text-2xl font-poppins font-bold">AD Limca</h3>
            </div>
            <p className="text-gray-400 font-inter leading-relaxed mb-6 max-w-md">
              Sip the Zest! Experience the ultimate citrus refreshment with our premium line of 
              natural beverages. Crafted with love since 1985.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-limca-green" />
                <span className="font-inter text-sm">hello@adlimca.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-limca-green" />
                <span className="font-inter text-sm">+1 (555) 123-ZEST</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-limca-green" />
                <span className="font-inter text-sm">123 Citrus Avenue, Freshville, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-limca-green transition-colors duration-300 font-inter text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-limca-green transition-colors duration-300 font-inter text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-limca-green transition-colors duration-300 font-inter text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-limca-green transition-colors duration-300 font-inter text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-poppins font-semibold mb-4">Stay Zesty!</h4>
            <p className="text-gray-400 font-inter mb-6">
              Subscribe to our newsletter for the latest flavors, health tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:ring-2 focus:ring-limca-green focus:border-transparent"
              />
              <button className="btn-primary text-white px-6 py-3 rounded-full font-poppins font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 font-inter text-sm">
              © {currentYear} AD Limca. All rights reserved. Made with 💚 for citrus lovers worldwide.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-limca-green hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Zesty the Lemon Mascot */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="w-16 h-16 bg-limca-yellow rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
          <Citrus size={24} className="text-white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;