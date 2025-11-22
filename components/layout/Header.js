'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Menu, X } from 'lucide-react';
import BookingModal from '@/components/shared/BookingModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [clickTimer, setClickTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Secret admin access: Press Ctrl+Shift+A
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        window.location.href = '/admin';
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Secret admin access: Click logo 5 times within 2 seconds
  const handleLogoClick = (e) => {
    e.preventDefault();
    
    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);

    // Clear existing timer
    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    // Check if 5 clicks reached
    if (newClicks >= 5) {
      window.location.href = '/admin';
      setLogoClicks(0);
      return;
    }

    // Reset clicks after 2 seconds
    const timer = setTimeout(() => {
      setLogoClicks(0);
    }, 2000);
    setClickTimer(timer);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    // If it's a page link (starts with /), let it navigate normally
    if (href.startsWith('/')) {
      setIsMobileMenuOpen(false);
      return;
    }
    
    // If it's an anchor link but we're not on homepage, go to homepage first
    if (href.startsWith('#') && window.location.pathname !== '/') {
      setIsMobileMenuOpen(false);
      window.location.href = '/' + href;
      return;
    }
    
    // Otherwise, handle as anchor link on current page
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slideDown ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Secret admin access: click 5 times */}
          <div 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative w-16 h-16 group-hover:scale-105 transition-transform">
              <img
                src="/images/IAMD_LOGO.jpg"
                alt="IAMD Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-600">IAMD</h1>
              <p className="text-xs text-gray-500">Since 1992</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              data-booking-trigger
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 cursor-pointer"
            >
              Start Your Journey
            </button>
            <a
              href="https://pages.razorpay.com/pl_Khn50cJnC1of3R/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer"
            >
              Donate
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-slideDown">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors py-3 px-4 rounded-lg cursor-pointer active:bg-orange-100"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                data-booking-trigger
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all cursor-pointer mt-4 active:scale-95"
              >
                Start Your Journey
              </button>
              <a
                href="https://pages.razorpay.com/pl_Khn50cJnC1of3R/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                Donate Now
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
