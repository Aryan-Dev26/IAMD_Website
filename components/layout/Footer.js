'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-14 h-14">
                <img
                  src="/images/IAMD_LOGO.jpg"
                  alt="IAMD Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">IAMD</h3>
                <p className="text-xs text-gray-400">Since 1992</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering Muscular Dystrophy warriors through comprehensive rehabilitation, 
              counselling, and support services at India's premier integrated MD facility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href={isHomePage ? "#about" : "/#about"} className="text-sm text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? "#services" : "/#services"} className="text-sm text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? "#facility" : "/#facility"} className="text-sm text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  Facility
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? "#gallery" : "/#gallery"} className="text-sm text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/for-parents" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  For Parents
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? "#contact" : "/#contact"} className="text-sm text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/for-parents" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Manav Mandir, Solan, Himachal Pradesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  +91 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@iamd.in" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  info@iamd.in
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-110 hover:rotate-12 transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-110 hover:rotate-12 transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-110 hover:rotate-12 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:scale-110 hover:rotate-12 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © {currentYear} Indian Association of Muscular Dystrophy. All rights reserved.
              </p>
              {/* Hidden Admin Link - Desktop Only */}
              <Link
                href="/admin"
                className="hidden md:inline text-xs text-gray-600 hover:text-blue-400 transition-colors opacity-30 hover:opacity-100"
                title="Admin Login"
              >
                •
              </Link>
            </div>
            <p className="text-sm text-gray-400 flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>for MD Warriors</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
