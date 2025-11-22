'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center animate-fadeIn">
      <div className="text-center">
        <div className="relative">
          {/* Pulsing circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white/20 rounded-full animate-ping" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/30 rounded-full animate-pulse" />
          </div>
          
          {/* Heart icon */}
          <div className="relative z-10 w-32 h-32 flex items-center justify-center">
            <Heart 
              className="w-16 h-16 text-white animate-pulse" 
              fill="white"
              strokeWidth={2}
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mt-8 mb-2">IAMD</h2>
        <p className="text-white/90 text-lg">Loading your journey...</p>
        
        {/* Loading bar */}
        <div className="w-64 h-1 bg-white/30 rounded-full mt-6 mx-auto overflow-hidden">
          <div className="h-full bg-white rounded-full animate-[slideRight_1.5s_ease-in-out]" 
               style={{ 
                 animation: 'slideRight 1.5s ease-in-out',
                 width: '100%'
               }} 
          />
        </div>
      </div>
    </div>
  );
}
