'use client';
import { useState } from 'react';
import { BookOpen, ChevronDown, Heart, Stethoscope, Users, Lightbulb } from 'lucide-react';

export default function WhatIsMD() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const sections = [
    {
      id: 0,
      icon: BookOpen,
      title: 'What is Muscular Dystrophy?',
      content: 'Muscular Dystrophy (MD) is a group of genetic diseases that cause progressive weakness and loss of muscle mass. In MD, abnormal genes (mutations) interfere with the production of proteins needed to form healthy muscle. There are many different types of muscular dystrophy, with symptoms beginning at different ages and varying in severity.',
    },
    {
      id: 1,
      icon: Stethoscope,
      title: 'Types of Muscular Dystrophy',
      content: 'The main types include Duchenne MD (most common in children), Becker MD, Myotonic MD, Limb-Girdle MD, Facioscapulohumeral MD, and Congenital MD. Each type has different patterns of inheritance, age of onset, and muscles affected. Early diagnosis is crucial for better management and quality of life.',
    },
    {
      id: 2,
      icon: Heart,
      title: 'Symptoms & Diagnosis',
      content: 'Common symptoms include progressive muscle weakness, difficulty walking, frequent falls, muscle pain and stiffness, learning disabilities, and delayed growth. Diagnosis involves physical examination, family history, blood tests (elevated creatine kinase), genetic testing, muscle biopsy, and electromyography (EMG).',
    },
    {
      id: 3,
      icon: Lightbulb,
      title: 'Treatment & Management',
      content: 'While there is no cure for MD, treatment focuses on managing symptoms and improving quality of life. This includes physiotherapy, occupational therapy, respiratory care, medications (corticosteroids), assistive devices, and regular monitoring. At IAMD, we provide comprehensive care tailored to each individual\'s needs.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-blue-500" />
            <span className="text-blue-500 text-sm font-semibold">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Understanding
            <span className="block text-blue-600">Muscular Dystrophy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Knowledge is power. Learn about MD, its types, symptoms, and how we can help
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isOpen = openAccordion === section.id;

            return (
              <div
                key={section.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  isOpen ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-blue-500' : 'bg-blue-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 text-left">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed pl-16">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Need more information or want to get diagnosed?</p>
          <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 inline-flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Talk to Our Experts</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
