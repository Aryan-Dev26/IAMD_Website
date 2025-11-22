'use client';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function CTASection() {
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
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-white/80">+91 XXX XXX XXXX</p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-white/80">info@iamd.in</p>
          </div>

          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-white/80">Solan, Himachal Pradesh</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-block px-10 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
          >
            Book Your Visit Today
          </a>
        </div>
      </div>
    </section>
  );
}
