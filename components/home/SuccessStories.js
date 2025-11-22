'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import { successStories } from '@/lib/data/successStories';

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % successStories.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentStory = successStories[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 mb-6">
            <Award className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Warrior Journeys
            <span className="block text-orange-500">That Inspire Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories of courage, determination, and triumph from our MD warriors
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-96 md:h-auto">
                <Image
                  src={currentStory.image}
                  alt={currentStory.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-orange-400 mb-6" />
                
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{currentStory.quote}"
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentStory.story}
                </p>

                {/* Achievement Badge */}
                <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-gray-900">Achievement</span>
                  </div>
                  <p className="text-gray-700">{currentStory.achievement}</p>
                </div>

                {/* Warrior Info */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{currentStory.name}</h3>
                  <p className="text-gray-600 mb-1">{currentStory.age} years old • {currentStory.condition}</p>
                  <p className="text-sm text-orange-500 font-semibold">{currentStory.duration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-pink-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
