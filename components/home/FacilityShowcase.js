'use client';
import Image from 'next/image';
import { Building2, Users, Heart, Sparkles } from 'lucide-react';
import { placeholderImages } from '@/lib/utils/imageHelpers';

export default function FacilityShowcase() {
  const facilities = [
    {
      title: 'Modern Therapy Rooms',
      description: 'State-of-the-art equipment for physiotherapy and rehabilitation',
      image: placeholderImages.facility.therapy_room,
    },
    {
      title: 'Comfortable Accommodation',
      description: 'Home-like residential facilities for long-term care',
      image: placeholderImages.facility.accommodation,
    },
    {
      title: 'Peaceful Gardens',
      description: 'Outdoor spaces for relaxation and recreation',
      image: placeholderImages.facility.garden,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
            <Building2 className="w-4 h-4 text-blue-500" />
            <span className="text-blue-500 text-sm font-semibold">Our Facility</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Manav Mandir
            <span className="block text-orange-500">Rehabilitation Center</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's first integrated facility for muscular dystrophy care in Solan, Himachal Pradesh
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-sm text-gray-200">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
