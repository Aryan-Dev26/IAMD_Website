'use client';
import { Award, Trophy, Star, Medal, Crown, Sparkles } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      id: 1,
      icon: Trophy,
      year: '2024',
      title: 'Best Rehabilitation Center',
      organization: 'National Healthcare Awards',
      description: 'Recognized for excellence in MD care and rehabilitation services',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 2,
      icon: Medal,
      year: '2023',
      title: 'Social Impact Award',
      organization: 'Ministry of Social Justice',
      description: 'Honored for transforming lives of 5000+ MD warriors',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      icon: Star,
      year: '2022',
      title: 'Excellence in Healthcare',
      organization: 'Himachal Pradesh Government',
      description: 'State recognition for outstanding medical services',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      icon: Crown,
      year: '2021',
      title: 'Best NGO Award',
      organization: 'India NGO Forum',
      description: 'Awarded for exceptional work in disability care',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const achievements = [
    {
      number: '30+',
      label: 'Years of Service',
      icon: '🎯',
    },
    {
      number: '5000+',
      label: 'Warriors Helped',
      icon: '💪',
    },
    {
      number: '50K+',
      label: 'Therapy Sessions',
      icon: '🏥',
    },
    {
      number: '95%',
      label: 'Success Rate',
      icon: '⭐',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Awards &
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognized nationally for our commitment to excellence in MD care and rehabilitation
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={award.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">{award.organization}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Stats */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="text-center mb-8">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">Our Milestones</h3>
            <p className="text-gray-300">Numbers that reflect our commitment and impact</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            "Excellence is not a destination, it's a continuous journey. Every award motivates us to serve better."
          </p>
          <p className="text-yellow-400 font-semibold mt-2">- IAMD Team</p>
        </div>
      </div>
    </section>
  );
}
