import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, Zap, Shield, Droplets, Calculator, TrendingUp } from 'lucide-react';

const Health: React.FC = () => {
  const [glassesSold, setGlassesSold] = useState(0);
  const [calorieInput, setCalorieInput] = useState('');
  const [dailyIntake, setDailyIntake] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const target = 15734892;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setGlassesSold(target);
          clearInterval(timer);
        } else {
          setGlassesSold(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const healthBenefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Heart Healthy',
      description: 'Rich in natural antioxidants that support cardiovascular health and reduce inflammation.',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Natural Energy',
      description: 'Natural sugars and vitamins provide sustained energy without the crash of artificial stimulants.',
      color: 'text-limca-yellow',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Immune Support',
      description: 'High vitamin C content boosts immune system function and helps fight off infections.',
      color: 'text-limca-green',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Hydration Plus',
      description: 'Superior hydration with essential electrolytes to keep you refreshed and energized.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
  ];

  const nutritionalFacts = [
    { nutrient: 'Vitamin C', amount: '120%', dailyValue: true },
    { nutrient: 'Natural Sugars', amount: '12g', dailyValue: false },
    { nutrient: 'Calories', amount: '45', dailyValue: false },
    { nutrient: 'Sodium', amount: '5mg', dailyValue: false },
    { nutrient: 'Potassium', amount: '150mg', dailyValue: false },
    { nutrient: 'Folate', amount: '8%', dailyValue: true },
  ];

  const handleCalorieCalculation = () => {
    const glasses = parseInt(calorieInput) || 0;
    setDailyIntake(glasses * 45);
  };

  return (
    <section id="health" className="py-20 bg-limca-light-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Health & <span className="text-limca-green">Refreshment</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            AD Limca isn't just delicious – it's packed with natural goodness that supports your healthy lifestyle. 
            Discover the science behind every refreshing sip.
          </p>
        </div>

        {/* Animated Counter */}
        <div ref={ref} className="text-center mb-16">
          <div className="inline-block bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="count-up">
              <div className="text-4xl md:text-6xl font-poppins font-bold text-limca-green mb-4">
                {glassesSold.toLocaleString()}+
              </div>
              <p className="text-lg text-gray-600 font-inter">
                Glasses of refreshing AD Limca enjoyed worldwide this year!
              </p>
            </div>
          </div>
        </div>

        {/* Health Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {healthBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 ${
                inView ? 'slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <div className={benefit.color}>
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-inter text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scientific Facts & Calorie Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Nutritional Facts */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-limca-green mr-3" />
              Nutritional Facts (per 250ml)
            </h3>
            <div className="space-y-4">
              {nutritionalFacts.map((fact, index) => (
                <div key={fact.nutrient} className="flex justify-between items-center p-3 bg-limca-light-gray rounded-lg">
                  <span className="font-inter font-medium text-gray-700">{fact.nutrient}</span>
                  <span className="font-poppins font-bold text-limca-green">
                    {fact.amount}
                    {fact.dailyValue && <span className="text-sm text-gray-500 ml-1">DV</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calorie Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6 flex items-center">
              <Calculator className="w-6 h-6 text-limca-green mr-3" />
              Daily Intake Calculator
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  How many glasses do you drink per day?
                </label>
                <input
                  type="number"
                  value={calorieInput}
                  onChange={(e) => setCalorieInput(e.target.value)}
                  className="form-lemon w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-limca-green focus:border-transparent"
                  placeholder="Enter number of glasses"
                  min="0"
                  max="10"
                />
              </div>
              <button
                onClick={handleCalorieCalculation}
                className="w-full btn-primary text-white py-3 rounded-full font-poppins font-semibold"
              >
                Calculate Daily Intake
              </button>
              {dailyIntake > 0 && (
                <div className="bg-limca-green/10 rounded-lg p-4 text-center">
                  <p className="text-lg font-poppins font-bold text-limca-green">
                    Daily Calorie Intake: {dailyIntake} calories
                  </p>
                  <p className="text-sm text-gray-600 font-inter mt-2">
                    That's approximately {Math.round((dailyIntake / 2000) * 100)}% of recommended daily calories
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Vitamin Content Visualization */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-poppins font-bold text-gray-800 mb-8 text-center">
            Vitamin Content Comparison
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { vitamin: 'Vitamin C', percentage: 120, color: 'bg-limca-green' },
              { vitamin: 'Folate', percentage: 8, color: 'bg-limca-yellow' },
              { vitamin: 'Potassium', percentage: 15, color: 'bg-blue-500' },
            ].map((vitamin, index) => (
              <div key={vitamin.vitamin} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${vitamin.percentage * 3.51} 351`}
                      className={vitamin.color.replace('bg-', 'text-')}
                      style={{
                        transition: 'stroke-dasharray 2s ease-in-out',
                        strokeLinecap: 'round',
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-poppins font-bold text-gray-800">
                      {vitamin.percentage}%
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-poppins font-semibold text-gray-800">{vitamin.vitamin}</h4>
                <p className="text-sm text-gray-600 font-inter">Daily Value</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Health;