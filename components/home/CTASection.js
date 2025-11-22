'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import BookingModal from '@/components/shared/BookingModal';

export default function CTASection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to start your journey? We're here to help and answer any questions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="group text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <Phone className="w-12 h-12 mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-white/80 group-hover:text-white transition-colors">+91 XXX XXX XXXX</p>
          </div>

          <div className="group text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <Mail className="w-12 h-12 mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-white/80 group-hover:text-white transition-colors">info@iamd.in</p>
          </div>

          <div className="group text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <MapPin className="w-12 h-12 mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-white/80 group-hover:text-white transition-colors">Solan, Himachal Pradesh</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="group inline-block px-10 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-110 shadow-2xl hover:shadow-white/50 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Visit Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
}
