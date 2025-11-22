'use client';
import Image from 'next/image';
import { Users, Award, Heart, Linkedin, Mail } from 'lucide-react';

export default function OurTeam() {
  const team = [
    {
      id: 1,
      name: 'Piyush Bhai Desai',
      role: 'Founder & Director',
      image: '/images/team/piyush-bhai-desai-300x209.jpg.jpeg',
      bio: 'Visionary leader dedicated to transforming lives of MD warriors',
      linkedin: '#',
      email: 'piyush@iamd.in',
    },
    {
      id: 2,
      name: 'Ravi Shankar',
      role: 'Medical Director',
      image: '/images/team/ravishankar.jpg.jpeg',
      bio: 'Expert in neuromuscular disorders with 20+ years experience',
      linkedin: '#',
      email: 'ravi@iamd.in',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-6">
            <Users className="w-4 h-4 text-indigo-500" />
            <span className="text-indigo-500 text-sm font-semibold">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the People
            <span className="block text-indigo-600">Behind IAMD</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals committed to providing exceptional care and support to MD warriors
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Links - Appear on Hover */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Team Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto border border-indigo-100">
            <Heart className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Supported by a Team of Experts
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our dedicated team includes physiotherapists, occupational therapists, counselors, 
              medical professionals, and support staff - all working together to provide 
              comprehensive care to our warriors.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Therapists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">10+</div>
                <div className="text-sm text-gray-600">Medical Staff</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Support Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
