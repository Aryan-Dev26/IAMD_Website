'use client';
import { useState } from 'react';
import { Phone, MessageCircle, Calendar, X, Plus } from 'lucide-react';

export default function MobileQuickActions() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+911792230860',
      color: 'bg-green-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/919876543210',
      color: 'bg-green-600',
    },
    {
      icon: Calendar,
      label: 'Start Journey',
      onClick: () => {
        // Trigger booking modal
        const bookButton = document.querySelector('[data-booking-trigger]');
        if (bookButton) bookButton.click();
      },
      color: 'bg-blue-500',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      {/* Action Buttons */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col space-y-3 animate-fadeIn">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 animate-fadeInRight"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-lg whitespace-nowrap text-gray-900">
                {action.label}
              </span>
              {action.href ? (
                <a
                  href={action.href}
                  className={`${action.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
                >
                  <action.icon className="w-6 h-6" />
                </a>
              ) : (
                <button
                  onClick={action.onClick}
                  className={`${action.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
                >
                  <action.icon className="w-6 h-6" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all ${
          isOpen ? 'bg-red-500 rotate-45' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </button>
    </div>
  );
}
