'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Heart, Users, Award, MapPin } from 'lucide-react';
import { placeholderImages } from '@/lib/utils/imageHelpers';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block">
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-semibold border border-orange-500/30">
                Transforming Lives Since 1992
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Where Hope
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Meets Healing
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Life is all about consequences. At IAMD, we help Muscular Dystrophy warriors transform those consequences into opportunities for growth, strength, and dignity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">30+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">5000+</div>
                <div className="text-sm text-gray-400">Warriors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">95%</div>
                <div className="text-sm text-gray-400">Success</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-3">
              {/* Main Image */}
              <div className="col-span-2 relative group overflow-hidden rounded-xl">
                <div className="aspect-video relative">
                  <Image
                    src={placeholderImages.hero.therapy}
                    alt="Rehabilitation Therapy Session at IAMD"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-base mb-1">Comprehensive Care</h3>
                    <p className="text-xs text-gray-300">Personalized therapy programs</p>
                  </div>
                </div>
              </div>

              {/* Small Images */}
              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-square relative">
                  <Image
                    src={placeholderImages.team.therapist}
                    alt="Expert Medical Team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-xs font-semibold px-4 text-center">Expert Team</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <div className="aspect-square relative">
                  <Image
                    src={placeholderImages.facility.exterior}
                    alt="IAMD Facility in Solan, HP"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-xs font-semibold px-4 text-center">Solan, HP</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 hover:scale-105 transition-transform hidden md:block z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">IMDRC</div>
                  <div className="text-xs text-gray-600">Integrated MD Rehabilitation Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;