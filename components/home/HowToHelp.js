'use client';
import { useState } from 'react';
import { Heart, HandHeart, Gift, Users } from 'lucide-react';
import VolunteerModal from '@/components/shared/VolunteerModal';
import SponsorModal from '@/components/shared/SponsorModal';

export default function HowToHelp() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'IAMD - Indian Association of Muscular Dystrophy',
        text: 'Help support MD warriors! Join IAMD in making a difference.',
        url: window.location.origin,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    }
  };
  const ways = [
    {
      icon: Heart,
      title: 'Donate',
      description: 'Your contribution helps us provide free therapy and care to warriors who cannot afford treatment.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      hoverColor: 'hover:border-red-400',
      action: 'Donate Now',
      href: 'https://pages.razorpay.com/pl_Khn50cJnC1of3R/view',
    },
    {
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Join our team of volunteers and make a direct impact in the lives of MD warriors and their families.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:border-blue-400',
      action: 'Join Us',
      onClick: () => setIsVolunteerModalOpen(true),
    },
    {
      icon: Gift,
      title: 'Sponsor a Warrior',
      description: 'Sponsor a warrior\'s therapy sessions, equipment, or camp participation and change their life forever.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:border-purple-400',
      action: 'Sponsor',
      onClick: () => setIsSponsorModalOpen(true),
    },
    {
      icon: Users,
      title: 'Spread Awareness',
      description: 'Share our mission on social media and help us reach more families who need our support.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      hoverColor: 'hover:border-green-400',
      action: 'Share',
      onClick: handleShare,
    },
  ];

  return (
    <>
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 mb-6">
            <Heart className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-600 text-sm font-semibold">Make a Difference</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How You Can
            <span className="block bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Help Our Warriors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every contribution, big or small, makes a meaningful difference in the lives of MD warriors
          </p>
        </div>

        {/* Ways to Help Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className={`group ${way.bgColor} rounded-2xl p-6 border-2 ${way.borderColor} ${way.hoverColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${way.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {way.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {way.description}
                </p>

                {way.href ? (
                  <a
                    href={way.href}
                    target={way.href.startsWith('http') ? '_blank' : '_self'}
                    rel={way.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center space-x-2 font-semibold bg-gradient-to-r ${way.color} bg-clip-text text-transparent group-hover:underline cursor-pointer`}
                  >
                    <span>{way.action}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                ) : (
                  <button
                    onClick={way.onClick}
                    className={`inline-flex items-center space-x-2 font-semibold bg-gradient-to-r ${way.color} bg-clip-text text-transparent group-hover:underline cursor-pointer`}
                  >
                    <span>{way.action}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Impact Stats */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Your Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                5000+
              </div>
              <div className="text-gray-600 font-medium">Warriors Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-600 font-medium">Therapy Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-gray-600 font-medium">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                30+
              </div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Modals */}
      <VolunteerModal isOpen={isVolunteerModalOpen} onClose={() => setIsVolunteerModalOpen(false)} />
      <SponsorModal isOpen={isSponsorModalOpen} onClose={() => setIsSponsorModalOpen(false)} />
    </>
  );
}
