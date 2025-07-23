import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, Droplets, Zap, Heart } from 'lucide-react';

interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  nutrition: {
    calories: number;
    vitamin_c: string;
    natural: boolean;
  };
  tags: string[];
  rating: number;
}

const Flavors: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = ['All', 'Classic', 'Low Calorie', 'Vitamin Rich', 'Energy Boost'];

  const flavors: Flavor[] = [
    {
      id: '1',
      name: 'Classic Lemon',
      description: 'Our signature blend of fresh lemons with a perfect balance of sweet and tangy.',
      image: 'https://media.istockphoto.com/id/2205133382/photo/squeezing-limes.webp?a=1&b=1&s=612x612&w=0&k=20&c=7kLUxDpUiRwBPLEI7pZ1TSNgmME5AgoSpzAfjZWVB6k=',
      color: '#F1C40F',
      nutrition: { calories: 45, vitamin_c: '120%', natural: true },
      tags: ['Classic', 'Vitamin Rich'],
      rating: 4.9,
    },
    {
      id: '2',
      name: 'Zesty Lime',
      description: 'Bursting with the bold flavor of freshly squeezed limes and natural mint.',
      image: 'https://media.istockphoto.com/id/1871882689/photo/a-glass-containing-fresh-lemon-slices-and-ice-on-a-green-platform-the-image-is-reflected-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=BgrBguuApzswHXA3soToikaL9VViNky_D4EXHYFhcY8=',
      color: '#2ECC71',
      nutrition: { calories: 40, vitamin_c: '100%', natural: true },
      tags: ['Classic', 'Energy Boost'],
      rating: 4.8,
    },
    {
      id: '3',
      name: 'Orange Burst',
      description: 'Sweet and refreshing orange flavor with a hint of tropical paradise.',
      image: 'https://media.istockphoto.com/id/1400831765/photo/yellow-orange-fruits-and-fresh-orange-juice-squeezing-out-the-fresh-orange.webp?a=1&b=1&s=612x612&w=0&k=20&c=9E1Gu3SKpMiHCTCrifrD38iX5oHVix1lAG0yvGJ3rAc=',
      color: '#E67E22',
      nutrition: { calories: 50, vitamin_c: '150%', natural: true },
      tags: ['Classic', 'Vitamin Rich'],
      rating: 4.7,
    },
    {
      id: '4',
      name: 'Grapefruit Zen',
      description: 'A sophisticated blend with the perfect balance of bitter and sweet grapefruit.',
      image: 'https://media.istockphoto.com/id/2188426412/photo/a-woman-reading-a-book-while-sunbathing-and-her-fruit-cocktail.webp?a=1&b=1&s=612x612&w=0&k=20&c=DXGMXW402jHPMgI4BCX8AKd3WZ-mRwx66fzUD6H6DR4=',
      color: '#E91E63',
      nutrition: { calories: 35, vitamin_c: '110%', natural: true },
      tags: ['Low Calorie', 'Vitamin Rich'],
      rating: 4.6,
    },
    {
      id: '5',
      name: 'Tropical Fusion',
      description: 'Exotic blend of passion fruit, mango, and citrus for an island escape.',
      image: 'https://media.istockphoto.com/id/1303977605/photo/five-cocktails-in-hands-joined-in-celebratory-toast.webp?a=1&b=1&s=612x612&w=0&k=20&c=s-Duj9ZibDzZR5ziNbAYWQYbKUICC9Z4lQSRNBCQz1A=',
      color: '#FF9500',
      nutrition: { calories: 55, vitamin_c: '130%', natural: true },
      tags: ['Energy Boost', 'Vitamin Rich'],
      rating: 4.8,
    },
    {
      id: '6',
      name: 'Cucumber Mint',
      description: 'Refreshing cucumber with a cool mint finish, perfect for hot summer days.',
      image: 'https://media.istockphoto.com/id/485131020/photo/green-vegetable-juice-on-rustic-wood-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=cdAcj93roABaOLpzVAyZ0LQ9Zut0FxjcHL4u3un0Ru4=',
      color: '#27AE60',
      nutrition: { calories: 25, vitamin_c: '80%', natural: true },
      tags: ['Low Calorie', 'Energy Boost'],
      rating: 4.5,
    },
  ];

  const filteredFlavors = selectedFilter === 'All' 
    ? flavors 
    : flavors.filter(flavor => flavor.tags.includes(selectedFilter));

  return (
    <section id="flavors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Discover Your Perfect <span className="text-limca-green">Flavor</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            From classic citrus to exotic tropical blends, each flavor is crafted with premium natural ingredients 
            to deliver an unforgettable taste experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-limca-green text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-limca-green/10 hover:text-limca-green'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Flavors Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFlavors.map((flavor, index) => (
            <div
              key={flavor.id}
              className={`card-3d bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${
                inView ? 'slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-inner">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    style={{ background: `linear-gradient(to top, ${flavor.color}40, transparent)` }}
                  ></div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star size={16} className="text-limca-yellow fill-current" />
                    <span className="text-sm font-poppins font-semibold">{flavor.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">{flavor.name}</h3>
                  <p className="text-gray-600 font-inter mb-4 leading-relaxed">{flavor.description}</p>

                  {/* Nutrition Info */}
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <div className="flex items-center space-x-1 text-limca-green">
                      <Zap size={16} />
                      <span className="font-inter font-semibold">{flavor.nutrition.calories} cal</span>
                    </div>
                    <div className="flex items-center space-x-1 text-limca-green">
                      <Droplets size={16} />
                      <span className="font-inter font-semibold">Vitamin C {flavor.nutrition.vitamin_c}</span>
                    </div>
                    {flavor.nutrition.natural && (
                      <div className="flex items-center space-x-1 text-limca-green">
                        <Heart size={16} />
                        <span className="font-inter font-semibold">100% Natural</span>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {flavor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-limca-green/10 text-limca-green text-xs font-poppins font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full btn-primary text-white py-3 rounded-full font-poppins font-semibold hover:shadow-lg transition-all duration-300">
                    Try This Flavor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block bg-limca-light-gray rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-800 mb-4">
              Can't Decide? Try Our Flavor Mix Pack!
            </h3>
            <p className="text-gray-600 font-inter mb-6 max-w-2xl mx-auto">
              Get a taste of all our amazing flavors with our specially curated mix pack. 
              Perfect for discovering your new favorite or sharing with friends.
            </p>
            <button className="btn-primary text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Order Mix Pack - $24.99
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavors;