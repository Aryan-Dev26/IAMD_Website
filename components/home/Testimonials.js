'use client';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { getFeaturedTestimonials } from '@/lib/data/testimonials';

export default function Testimonials() {
  const testimonials = getFeaturedTestimonials(3);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Warrior Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from our MD warriors and their families
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-orange-400 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <p className="text-gray-200 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-400/50 group-hover:ring-orange-400 transition-all duration-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-orange-300 transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex mt-4 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-yellow-400 fill-yellow-400 transform group-hover:scale-125 transition-transform duration-300" 
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
