'use client';
import { Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Contact Numbers */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a 
              href="tel:01792292037" 
              className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">01792 292037</span>
            </a>
            <a 
              href="tel:+919218098999" 
              className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+92180 98999</span>
            </a>
            <a 
              href="tel:+919218088880" 
              className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+92180 88880</span>
            </a>
          </div>

          {/* Email */}
          <a 
            href="mailto:info@iamd.in" 
            className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>info@iamd.in</span>
          </a>
        </div>
      </div>
    </div>
  );
}
