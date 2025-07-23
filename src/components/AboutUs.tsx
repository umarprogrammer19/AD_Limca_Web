import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Users, Leaf } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
}

const AboutUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems: TimelineItem[] = [
    {
      year: '1985',
      title: 'The Zesty Beginning',
      description: 'AD Limca was founded with a simple vision: to create the most refreshing citrus beverage using only natural ingredients.',
      icon: <Calendar className="w-6 h-6" />,
      side: 'left',
    },
    {
      year: '1992',
      title: 'First Million Sold',
      description: 'Reached our first million bottles sold, establishing AD Limca as a household name in citrus refreshment.',
      icon: <Award className="w-6 h-6" />,
      side: 'right',
    },
    {
      year: '2001',
      title: 'International Expansion',
      description: 'Expanded to international markets, bringing our zesty flavors to customers worldwide.',
      icon: <Users className="w-6 h-6" />,
      side: 'left',
    },
    {
      year: '2015',
      title: '100% Natural Commitment',
      description: 'Made the commitment to use only 100% natural ingredients, setting new industry standards.',
      icon: <Leaf className="w-6 h-6" />,
      side: 'right',
    },
    {
      year: '2024',
      title: 'Innovation Continues',
      description: 'Launching new sustainable packaging and introducing revolutionary flavor combinations.',
      icon: <Award className="w-6 h-6" />,
      side: 'left',
    },
  ];

  return (
    <section id="about" className="py-20 bg-limca-light-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Our <span className="text-limca-green">Zesty</span> Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            From humble beginnings to becoming the world's most beloved citrus beverage brand, 
            our story is one of passion, innovation, and an unwavering commitment to quality.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-limca-green/30 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-center ${
                  item.side === 'right' ? 'md:flex-row-reverse' : ''
                } ${inView ? (item.side === 'left' ? 'slide-in-left' : 'slide-in-right') : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${item.side === 'right' ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 card-3d">
                    <div className="card-inner">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-limca-green rounded-full flex items-center justify-center text-white mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-poppins font-bold text-limca-green">{item.year}</div>
                          <h3 className="text-xl font-poppins font-semibold text-gray-800">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 font-inter leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-limca-green rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-limca-yellow/20 rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-limca-green/20 rounded-full translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-6">
                Our Vision for the Future
              </h3>
              <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
                "To continue being the world's leading citrus beverage brand while maintaining our commitment 
                to sustainability, innovation, and the pure joy that comes with every sip of AD Limca."
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2 text-limca-green">
                  <Leaf className="w-5 h-5" />
                  <span className="font-inter font-semibold">Sustainable</span>
                </div>
                <div className="flex items-center space-x-2 text-limca-green">
                  <Award className="w-5 h-5" />
                  <span className="font-inter font-semibold">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-2 text-limca-green">
                  <Users className="w-5 h-5" />
                  <span className="font-inter font-semibold">Community Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;