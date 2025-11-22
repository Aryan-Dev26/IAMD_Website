'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export default function LatestNews() {
  const news = [
    {
      id: 1,
      title: 'Vivek Ranjan Agnihotri Joins IMDRC as Brand Ambassador',
      excerpt: 'Renowned filmmaker Vivek Ranjan Agnihotri joins hands with IAMD to spread awareness about Muscular Dystrophy and support our warriors...',
      image: '/images/blog/2024-02-24-Vivek-Ranjan-Agnihotri-joins-IMDRC-as-Brand-Ambassador-768x414.jpg.jpeg',
      date: 'February 24, 2024',
      category: 'News',
    },
    {
      id: 2,
      title: 'Anjali Devi Wins Gold Medal in Boccia',
      excerpt: 'IAMD warrior Anjali Devi brings glory by winning gold medal in Boccia championship, showcasing incredible determination and skill...',
      image: '/images/blog/2024-08-04-Anjali-Devi-Boccia-Gold-Medal-768x414.jpg.jpeg',
      date: 'August 4, 2024',
      category: 'Achievement',
    },
    {
      id: 3,
      title: 'Vedant\'s Inspiring Journey',
      excerpt: 'Meet Vedant, whose remarkable progress through our therapy programs inspires everyone at IAMD. His story of courage and determination...',
      image: '/images/blog/Vedant222-768x403.jpg.jpeg',
      date: 'March 10, 2024',
      category: 'Stories',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 mb-6">
            <Newspaper className="w-4 h-4 text-purple-500" />
            <span className="text-purple-500 text-sm font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News & Stories
            <span className="block text-purple-600">From IAMD</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, success stories, and announcements
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <Link
                  href={`/blog/${item.id}`}
                  className="inline-flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            <Newspaper className="w-5 h-5" />
            <span>View All News & Stories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
