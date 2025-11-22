'use client';
import Image from 'next/image';
import { Heart, Users, Award, Target, Building2, Sparkles, TrendingUp, Shield } from 'lucide-react';
import { placeholderImages } from '@/lib/utils/imageHelpers';
import { stats, achievements } from '@/lib/data/stats';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Every patient is treated with dignity, respect, and genuine care',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Highest standards of medical care and rehabilitation services',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly improving our methods and adopting new technologies',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent, ethical practices in all our operations',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold">About IAMD</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transforming Lives
            <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Since 1992
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            India's leading organization dedicated to empowering individuals with Muscular Dystrophy
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Story */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Indian Association of Muscular Dystrophy (IAMD) is committed to providing comprehensive care, 
                rehabilitation, and support to individuals living with Muscular Dystrophy and related neuromuscular disorders.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe every person deserves dignity, independence, and the opportunity to live their best life, 
                regardless of physical challenges.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "Life is all about consequences. At IAMD, we help warriors transform those consequences into 
                  opportunities for growth, strength, and dignity."
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
                <Image
                  src={placeholderImages.facility.exterior}
                  alt="IAMD Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl font-bold text-orange-500 mb-2">{achievement.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {Object.values(stats).map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're a patient, family member, or supporter, there are many ways to get involved
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all hover:scale-105"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
