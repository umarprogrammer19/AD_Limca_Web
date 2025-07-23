import React, { useState, useEffect } from 'react';
import { Menu, X, Citrus } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#flavors', label: 'Flavors' },
    { href: '#health', label: 'Health' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Citrus size={32} className="text-limca-green animate-pulse" />
            <h1 className="text-2xl font-poppins font-bold text-limca-green">
              AD Limca
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-limca-green transition-colors duration-300 font-inter font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-limca-green transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <SignedOut>
              <button className="btn-primary text-white px-6 py-2 rounded-full font-poppins font-semibold">
        <SignInButton />
              </button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-limca-green hover:text-limca-dark-green transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-4 p-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-gray-700 hover:text-limca-green transition-colors duration-300 font-inter font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full btn-primary text-white py-3 rounded-full font-poppins font-semibold mt-4">
              Order Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;