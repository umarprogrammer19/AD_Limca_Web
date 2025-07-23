import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToFlavors = () => {
    const flavorsSection = document.querySelector('#flavors');
    if (flavorsSection) {
      flavorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-limca-green/20 to-limca-yellow/20 pt-20">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Citrus Elements */}
        <div 
          className="absolute top-20 left-10 w-16 h-16 bg-limca-yellow rounded-full opacity-60 floating"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-12 h-12 bg-limca-green rounded-full opacity-40 floating"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-20 h-20 bg-limca-yellow/30 rounded-full floating"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px)`,
            animationDelay: '0.5s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-14 h-14 bg-limca-green/50 rounded-full floating"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px)`,
            animationDelay: '1.5s'
          }}
        ></div>

        {/* Animated Sparkles */}
        <div className="absolute top-1/4 left-1/4 text-limca-yellow animate-pulse">
          <Sparkles size={24} />
        </div>
        <div className="absolute top-3/4 right-1/4 text-limca-green animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Sparkles size={20} />
        </div>
        <div className="absolute top-1/2 left-3/4 text-limca-yellow animate-pulse" style={{ animationDelay: '1s' }}>
          <Sparkles size={28} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-gray-800 mb-6 leading-tight">
          <span className="block">Sip the</span>
          <span className="text-limca-green text-5xl md:text-7xl lg:text-8xl">Zest!</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-inter leading-relaxed">
          Experience the ultimate citrus refreshment with AD Limca's premium blend of natural flavors. 
          Crafted to energize your day and awaken your senses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={handleScrollToFlavors}
            className="btn-primary text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Find Your Flavor
          </button>
          <button className="border-2 border-limca-green text-limca-green px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-limca-green hover:text-white transition-all duration-300">
            Watch Our Story
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-limca-green mb-2">1M+</div>
            <div className="text-sm text-gray-600 font-inter">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-limca-green mb-2">12</div>
            <div className="text-sm text-gray-600 font-inter">Zesty Flavors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-limca-green mb-2">39</div>
            <div className="text-sm text-gray-600 font-inter">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-poppins font-bold text-limca-green mb-2">100%</div>
            <div className="text-sm text-gray-600 font-inter">Natural Ingredients</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-limca-green" />
      </div>
    </section>
  );
};

export default Hero;