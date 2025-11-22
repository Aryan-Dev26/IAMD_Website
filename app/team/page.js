'use client';
import OurTeam from '@/components/home/OurTeam';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="pt-20">
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
      
      <OurTeam />
    </div>
  );
}
