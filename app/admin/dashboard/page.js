'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  Calendar,
  Award,
  LogOut,
  TrendingUp,
  MessageSquare,
  Download,
  Settings as SettingsIcon,
  HelpCircle,
  HandHeart,
  Heart
} from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('iamd_admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('iamd_admin_auth');
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  const stats = [
    { label: 'Total Visitors', value: '2,547', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { label: 'Booking Requests', value: '23', icon: Calendar, color: 'from-green-500 to-teal-500' },
    { label: 'Success Stories', value: '5', icon: Award, color: 'from-purple-500 to-pink-500' },
    { label: 'Testimonials', value: '6', icon: MessageSquare, color: 'from-orange-500 to-red-500' },
  ];

  const quickActions = [
    { title: 'Website Settings', description: 'Hero, contact, about, stats', icon: SettingsIcon, href: '/admin/settings', color: 'bg-gray-700' },
    { title: 'Manage Content', description: 'Edit services and content', icon: FileText, href: '/admin/content', color: 'bg-blue-500' },
    { title: 'View Bookings', description: 'See all booking requests', icon: Calendar, href: '/admin/bookings', color: 'bg-green-500' },
    { title: 'Volunteers', description: 'Volunteer applications', icon: HandHeart, href: '/admin/volunteers', color: 'bg-blue-600' },
    { title: 'Sponsors', description: 'Sponsorship requests', icon: Heart, href: '/admin/sponsors', color: 'bg-pink-600' },
    { title: 'Blog Posts', description: 'Create and manage blog posts', icon: FileText, href: '/admin/blog', color: 'bg-pink-500' },
    { title: 'Testimonials', description: 'Customer reviews and feedback', icon: MessageSquare, href: '/admin/testimonials', color: 'bg-yellow-500' },
    { title: 'Success Stories', description: 'Warrior success stories', icon: Award, href: '/admin/stories', color: 'bg-teal-500' },
    { title: 'Awards', description: 'Achievements and recognition', icon: Award, href: '/admin/awards', color: 'bg-amber-500' },
    { title: 'FAQs', description: 'Frequently asked questions', icon: HelpCircle, href: '/admin/faqs', color: 'bg-cyan-500' },
    { title: 'Manage Gallery', description: 'Upload and organize images', icon: ImageIcon, href: '/admin/gallery', color: 'bg-purple-500' },
    { title: 'Team Management', description: 'Update team members', icon: Users, href: '/admin/team', color: 'bg-orange-500' },
    { title: 'Downloads', description: 'Manage downloadable resources', icon: Download, href: '/admin/downloads', color: 'bg-indigo-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">IAMD Admin Panel</h1>
                <p className="text-xs text-gray-500">Content Management System</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/"
                target="_blank"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                View Website →
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back! 👋</h2>
          <p className="text-blue-100">Manage your IAMD website content from here</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link
                  key={index}
                  href={action.href}
                  className="group bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">New booking request</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Content updated</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
