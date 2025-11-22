'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Home } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Go to Home Button */}
      <div className="fixed top-24 right-6 z-50">
        <Link
          href="/"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:scale-105"
        >
          <Home className="w-4 h-4" />
          <span className="font-medium">Home</span>
        </Link>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Header */}
        <header className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl h-96 flex items-center justify-center mb-8">
          <span className="text-9xl">{post.icon || '📰'}</span>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          <div className="space-y-4 text-gray-700">
            <p>
              {post.content || 'Full article content would go here. This is a placeholder for the detailed blog post content.'}
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Highlights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive information about the topic</li>
              <li>Expert insights and recommendations</li>
              <li>Practical tips and guidance</li>
              <li>Community support and resources</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p>
              We hope this information helps you better understand and support MD warriors. 
              For more information or personalized guidance, please don't hesitate to contact us.
            </p>
          </div>
        </div>

        {/* Share & Contact */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
          <p className="text-blue-100 mb-6">
            Our team is here to help. Reach out for more information or support.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </div>
  );
}
