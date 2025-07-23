import React from 'react';
import { Citrus } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-limca-green flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <Citrus size={80} className="text-limca-yellow spin-citrus mx-auto" />
          <div className="absolute inset-0 bg-limca-yellow rounded-full blur-xl opacity-30 animate-pulse"></div>
        </div>
        <h2 className="text-white text-2xl font-poppins font-bold mb-2">AD Limca</h2>
        <p className="text-white/80 font-inter">Preparing your zesty experience...</p>
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-limca-yellow rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-limca-yellow rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-limca-yellow rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;