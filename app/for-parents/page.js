'use client';
import { useState } from 'react';
import { Heart, BookOpen, Users, Phone, Mail, Calendar, FileText, Download, ExternalLink, ChevronDown, ChevronUp, Home } from 'lucide-react';
import Link from 'next/link';

export default function ForParents() {
  const [expandedResource, setExpandedResource] = useState(null);
  const [downloads, setDownloads] = useState([]);

  // Fetch downloads from API
  useState(() => {
    fetch('/api/downloads')
      .then(res => res.json())
      .then(data => setDownloads(data.downloads))
      .catch(err => console.error('Failed to fetch downloads:', err));
  }, []);

  const resources = [
    {
      title: 'Understanding Muscular Dystrophy',
      description: 'Comprehensive guide about MD types, symptoms, and progression',
      icon: BookOpen,
      color: 'bg-blue-500',
      details: 'Muscular Dystrophy is a group of genetic diseases characterized by progressive muscle weakness. The most common types include Duchenne MD (DMD), Becker MD (BMD), and Limb-Girdle MD. Early diagnosis and intervention can significantly improve quality of life. Our team provides comprehensive assessments and personalized care plans.',
    },
    {
      title: 'Care & Support Guide',
      description: 'Daily care tips, exercises, and support strategies',
      icon: Heart,
      color: 'bg-pink-500',
      details: 'Daily care includes proper positioning, range-of-motion exercises, respiratory care, and nutritional support. Our physiotherapists work with families to develop home exercise programs. We also provide training on assistive devices and adaptive equipment to maintain independence.',
    },
    {
      title: 'Therapy Programs',
      description: 'Information about physiotherapy and rehabilitation',
      icon: Users,
      color: 'bg-green-500',
      details: 'Our therapy programs include physiotherapy, occupational therapy, speech therapy, and counselling. We offer both individual and group sessions. Our residential camps provide intensive therapy in a supportive environment with other MD warriors and their families.',
    },
    {
      title: 'Financial Assistance',
      description: 'Government schemes and funding opportunities',
      icon: FileText,
      color: 'bg-purple-500',
      details: 'Various government schemes provide financial support including disability pensions, medical reimbursements, and educational assistance. We help families navigate these programs and connect with NGOs offering additional support. Contact us for personalized guidance on available resources.',
    },
  ];

  const faqs = [
    {
      question: 'What is Muscular Dystrophy?',
      answer: 'Muscular Dystrophy (MD) is a group of genetic diseases that cause progressive weakness and loss of muscle mass. There are several types, with Duchenne being the most common.',
    },
    {
      question: 'What services does IAMD provide?',
      answer: 'IAMD offers comprehensive rehabilitation, physiotherapy, counselling, educational support, and residential camp programs for MD warriors and their families.',
    },
    {
      question: 'How can I register my child?',
      answer: 'You can register by clicking the "Book Visit" button on our homepage, calling us directly, or visiting our facility at Manav Mandir, Solan.',
    },
    {
      question: 'Are the services free?',
      answer: 'IAMD operates on a donation basis and strives to make services accessible to all families regardless of financial situation. Contact us to discuss your specific needs.',
    },
    {
      question: 'What should I bring for the first visit?',
      answer: 'Please bring any medical records, previous test results, current medications list, and any assistive devices your child uses.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources for Parents
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Supporting you on your journey with comprehensive information, guidance, and community support
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-3 gap-6">
          <a
            href="tel:+911792230860"
            className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Call Us</p>
              <p className="font-semibold text-gray-900">+91-1792-230860</p>
            </div>
          </a>

          <a
            href="mailto:info@iamd.in"
            className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Email Us</p>
              <p className="font-semibold text-gray-900">info@iamd.in</p>
            </div>
          </a>

          <Link
            href="/#contact"
            className="flex items-center space-x-4 p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group"
          >
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Book Visit</p>
              <p className="font-semibold text-gray-900">Schedule Now</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Helpful Resources
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to support your child's journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 ${resource.color} rounded-xl flex items-center justify-center mb-4`}>
                <resource.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {resource.description}
              </p>
              
              {/* Expandable Details */}
              {expandedResource === index && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-700 animate-fadeIn">
                  {resource.details}
                </div>
              )}
              
              <button 
                onClick={() => setExpandedResource(expandedResource === index ? null : index)}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1 transition-colors"
              >
                <span>{expandedResource === index ? 'Show Less' : 'Learn More'}</span>
                {expandedResource === index ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                  <span className="text-blue-600 mr-2">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-6">
                  <span className="text-green-600 font-semibold mr-2">A:</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need More Support?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you every step of the way. Reach out for personalized guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="tel:+911792230860"
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 border-2 border-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Download className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Downloadable Resources
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Access our comprehensive guides and information sheets
          </p>
          {downloads.length === 0 ? (
            <p className="text-gray-500">No downloads available yet</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {downloads.map((download) => (
                <a
                  key={download.id}
                  href={download.fileUrl}
                  download
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-left group"
                >
                  <FileText className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-gray-900 mb-2">{download.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{download.description}</p>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {download.category}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
