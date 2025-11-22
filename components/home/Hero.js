'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { placeholderImages } from '@/lib/utils/imageHelpers';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  // Carousel images - Using Unsplash placeholders
  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop',
      title: 'Comprehensive Care',
      subtitle: 'Personalized therapy programs',
    },
    {
      src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop',
      title: 'Physiotherapy',
      subtitle: 'Advanced rehabilitation techniques',
    },
    {
      src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop',
      title: 'Counselling Services',
      subtitle: 'Mental health support',
    },
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
      title: 'Modern Facilities',
      subtitle: 'State-of-the-art equipment',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -10; // Inverted for natural feel
    const tiltY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block">
              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-xs font-semibold border border-orange-500/30">
                Transforming Lives Since 1992
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Where Hope
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Meets Healing
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Life is all about consequences. At IAMD, we help Muscular Dystrophy warriors transform those consequences into opportunities for growth, strength, and dignity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">30+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">5000+</div>
                <div className="text-sm text-gray-400">Warriors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">95%</div>
                <div className="text-sm text-gray-400">Success</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-3">
              {/* Main Image with Carousel and 3D Tilt */}
              <div 
                className="col-span-2 relative group rounded-xl overflow-hidden"
                style={{ perspective: '1000px' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Image Container with Tilt - ONLY THIS TILTS */}
                <div 
                  ref={imageRef}
                  className="aspect-video relative transition-transform duration-300 ease-out"
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Carousel Images */}
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Overlay with info - STAYS STABLE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                  <div className="text-white">
                    <h3 className="font-bold text-base mb-1">
                      {carouselImages[currentImageIndex].title}
                    </h3>
                    <p className="text-xs text-gray-300">
                      {carouselImages[currentImageIndex].subtitle}
                    </p>
                  </div>
                </div>

                {/* Navigation Arrows - STAYS STABLE */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/30 hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/30 hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                {/* Carousel Indicators - STAYS STABLE */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-6'
                          : 'bg-white/50 w-1.5 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Small Images with Hover Tilt */}
              <SmallImageCard
                src={placeholderImages.team.therapist}
                alt="Expert Medical Team"
                label="Expert Team"
                href="/team"
                clickable={true}
              />

              <SmallImageCard
                src={placeholderImages.facility.exterior}
                alt="IAMD Facility in Solan, HP"
                label="Solan, HP"
                href="#facility"
                clickable={true}
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 hover:scale-105 transition-transform hidden md:block z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">IMDRC</div>
                  <div className="text-xs text-gray-600">Integrated MD Rehabilitation Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

// Small Image Card Component with Tilt Effect
const SmallImageCard = ({ src, alt, label, href, clickable = false }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleClick = () => {
    if (clickable && href) {
      if (href.startsWith('#')) {
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Navigate to page
        window.location.href = href;
      }
    }
  };

  const CardContent = (
    <>
      <div
        ref={cardRef}
        className="aspect-square relative transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className={`absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center ${clickable ? 'cursor-pointer' : ''}`}>
        <div className="text-center">
          <p className="text-white text-xs font-semibold px-4">{label}</p>
          {clickable && (
            <p className="text-white/80 text-[10px] mt-1">Click to view</p>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div 
      className={`relative group overflow-hidden rounded-xl ${clickable ? 'cursor-pointer' : ''}`}
      style={{ perspective: '1000px' }}
      onClick={handleClick}
    >
      {CardContent}
    </div>
  );
};

export default Hero;