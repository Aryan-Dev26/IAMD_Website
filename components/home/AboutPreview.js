'use client';
import React from 'react';
import Image from 'next/image';
import { Heart, Users, Award, Target, Building2, Sparkles } from 'lucide-react';
import { placeholderImages } from '@/lib/utils/imageHelpers';

const AboutPreview = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "30+ years of dedicated service to MD warriors and their families",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Building2,
      title: "Modern Facility",
      description: "State-of-the-art IMDRC in Solan, Himachal Pradesh since 2018",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Specialized therapists and medical professionals",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Holistic Approach",
      description: "Comprehensive treatment addressing physical and emotional needs",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id = "about" className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold">About IAMD</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforming Lives 
            <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Since 1992
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over three decades, the Indian Association of Muscular Dystrophy (IAMD) has been a beacon of hope for families affected by neuromuscular disorders. We don't just treat symptoms—we empower warriors.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Founded in 1992, IAMD began with a simple yet powerful mission: to provide comprehensive care and support to individuals living with Muscular Dystrophy and other neuromuscular disorders.
              </p>
              <p className="leading-relaxed">
                In 2018, we took a giant leap forward by establishing the <span className="text-orange-400 font-semibold">Integrated Muscular Dystrophy Rehabilitation Center (IMDRC)</span> in Solan, Himachal Pradesh—a dedicated facility where patients receive world-class rehabilitation and management.
              </p>
              <p className="leading-relaxed">
                Today, we stand as India's leading treatment center for Muscular Dystrophy, having transformed the lives of thousands of warriors and their families.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-lg p-4 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold text-orange-400 mb-1">30+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg p-4 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold text-blue-400 mb-1">5000+</div>
                <div className="text-sm text-gray-400">Warriors Helped</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg p-4 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold text-green-400 mb-1">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={placeholderImages.facility.exterior}
                alt="IAMD Facility in Solan, Himachal Pradesh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 transform group-hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  #1
                </div>
                <div className="text-sm text-gray-600 font-semibold">MD Treatment Center</div>
                <div className="text-xs text-gray-500">in India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 inline-flex items-center space-x-2">
            <span>Learn More About IAMD</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;