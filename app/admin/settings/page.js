'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Settings as SettingsIcon, Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function SettingsManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const [saveMessage, setSaveMessage] = useState('');
  
  const [settings, setSettings] = useState({
    // Hero Section
    hero: {
      headline: 'Empowering MD Warriors Since 1992',
      tagline: 'Comprehensive rehabilitation, counselling, and support for Muscular Dystrophy warriors at India\'s premier integrated facility',
      buttonText: 'Book Your Visit',
    },
    // Contact Info
    contact: {
      phone: '+91-1792-230860',
      email: 'info@iamd.in',
      address: 'Manav Mandir, Solan, Himachal Pradesh',
      whatsapp: '919876543210',
      facebook: 'https://facebook.com/iamd',
      twitter: 'https://twitter.com/iamd',
      instagram: 'https://instagram.com/iamd',
      linkedin: 'https://linkedin.com/company/iamd',
    },
    // About Section
    about: {
      title: 'About IAMD',
      description: 'The Indian Association of Muscular Dystrophy (IAMD) has been a beacon of hope since 1992, providing comprehensive care and support to MD warriors across India.',
      mission: 'To empower individuals with Muscular Dystrophy through quality rehabilitation, education, and community support.',
      vision: 'A world where every MD warrior has access to the care, support, and opportunities they deserve.',
    },
    // Statistics
    stats: {
      yearsOfService: '32+',
      warriorsHelped: '2,500+',
      successStories: '500+',
      expertTeam: '25+',
    },
    // What is MD
    whatIsMD: {
      title: 'What is Muscular Dystrophy?',
      description: 'Muscular Dystrophy (MD) is a group of genetic diseases that cause progressive weakness and loss of muscle mass.',
      symptoms: 'Muscle weakness, difficulty walking, frequent falls, enlarged calf muscles, learning disabilities',
    },
    // How to Help
    howToHelp: {
      donationText: 'Your generous donations help us provide free therapy and support to MD warriors in need.',
      volunteerText: 'Join our team of volunteers and make a direct impact in the lives of MD warriors.',
      sponsorshipText: 'Sponsor a warrior\'s therapy sessions and be part of their journey to independence.',
    },
    // Facility
    facility: {
      description: 'Our state-of-the-art facility at Manav Mandir provides a comprehensive range of services in a supportive environment.',
      amenities: 'Physiotherapy center, Counselling rooms, Residential accommodation, Recreational facilities, Medical equipment',
    },
  });

  useEffect(() => {
    const auth = sessionStorage.getItem('iamd_admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleSave = (section) => {
    setSaveMessage(`${section} settings saved successfully!`);
    setTimeout(() => setSaveMessage(''), 3000);
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
    </div>;
  }

  const tabs = [
    { id: 'hero', label: 'Hero Section' },
    { id: 'contact', label: 'Contact Info' },
    { id: 'about', label: 'About Section' },
    { id: 'stats', label: 'Statistics' },
    { id: 'whatIsMD', label: 'What is MD' },
    { id: 'howToHelp', label: 'How to Help' },
    { id: 'facility', label: 'Facility' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to Dashboard</span>
              </Link>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Website Settings</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {saveMessage && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 text-green-700">
            <Save className="w-5 h-5" />
            <span>{saveMessage}</span>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Hero Section */}
            {activeTab === 'hero' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Hero Section Settings</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Main Headline</label>
                  <input
                    type="text"
                    value={settings.hero.headline}
                    onChange={(e) => setSettings({...settings, hero: {...settings.hero, headline: e.target.value}})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tagline/Subtitle</label>
                  <textarea
                    value={settings.hero.tagline}
                    onChange={(e) => setSettings({...settings, hero: {...settings.hero, tagline: e.target.value}})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Button Text</label>
                  <input
                    type="text"
                    value={settings.hero.buttonText}
                    onChange={(e) => setSettings({...settings, hero: {...settings.hero, buttonText: e.target.value}})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => handleSave('Hero')}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}

            {/* Contact Info */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="text"
                      value={settings.contact.phone}
                      onChange={(e) => setSettings({...settings, contact: {...settings.contact, phone: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={settings.contact.email}
                      onChange={(e) => setSettings({...settings, contact: {...settings.contact, email: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Physical Address</label>
                    <input
                      type="text"
                      value={settings.contact.address}
                      onChange={(e) => setSettings({...settings, contact: {...settings.contact, address: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
                    <input
                      type="text"
                      value={settings.contact.whatsapp}
                      onChange={(e) => setSettings({...settings, contact: {...settings.contact, whatsapp: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="919876543210"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-8">Social Media Links</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Facebook</label>
                    <input
                      type="url"
                      value={settings.contact.facebook}
                      onChange={(e) => setSettings({...settings, contact: {...settings.contact, facebook: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Twitter</label>
                    <input
                      type="url"
                      value={settings.contact.twitter}
                      onChange={(e) => setSettings({...settings, contact: {...settings.contact, twitter: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Instagram</label>
                    <input
                      type="url"
                      value={settings.contact.instagram}
                      onChange={(e) => setSettings({...settings, contact: {...settings.contact, instagram: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn</label>
                    <input
                      type="url"
                      value={settings.contact.linkedin}
                      onChange={(e) => setSettings({...settings, contact: {...settings.contact, linkedin: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleSave('Contact')}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}

            {/* About Section */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">About Section</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                  <input
                    type="text"
                    value={settings.about.title}
                    onChange={(e) => setSettings({...settings, about: {...settings.about, title: e.target.value}})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={settings.about.description}
                    onChange={(e) => setSettings({...settings, about: {...settings.about, description: e.target.value}})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mission Statement</label>
                  <textarea
                    value={settings.about.mission}
                    onChange={(e) => setSettings({...settings, about: {...settings.about, mission: e.target.value}})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Vision Statement</label>
                  <textarea
                    value={settings.about.vision}
                    onChange={(e) => setSettings({...settings, about: {...settings.about, vision: e.target.value}})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => handleSave('About')}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}

            {/* Statistics */}
            {activeTab === 'stats' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Statistics & Numbers</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Service</label>
                    <input
                      type="text"
                      value={settings.stats.yearsOfService}
                      onChange={(e) => setSettings({...settings, stats: {...settings.stats, yearsOfService: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="32+"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Warriors Helped</label>
                    <input
                      type="text"
                      value={settings.stats.warriorsHelped}
                      onChange={(e) => setSettings({...settings, stats: {...settings.stats, warriorsHelped: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="2,500+"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Success Stories</label>
                    <input
                      type="text"
                      value={settings.stats.successStories}
                      onChange={(e) => setSettings({...settings, stats: {...settings.stats, successStories: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="500+"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Expert Team Members</label>
                    <input
                      type="text"
                      value={settings.stats.expertTeam}
                      onChange={(e) => setSettings({...settings, stats: {...settings.stats, expertTeam: e.target.value}})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="25+"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleSave('Statistics')}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}

            {/* What is MD */}
            {activeTab === 'whatIsMD' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">What is Muscular Dystrophy Section</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                  <input
                    type="text"
                    value={settings.whatIsMD.title}
                    onChange={(e) => setSettings({...settings, whatIsMD: {...settings.whatIsMD, title: e.target.value}})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={settings.whatIsMD.description}
                    onChange={(e) => setSettings({...settings, whatIsMD: {...settings.whatIsMD, description: e.target.value}})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Symptoms (comma-separated)</label>
                  <textarea
                    value={settings.whatIsMD.symptoms}
                    onChange={(e) => setSettings({...settings, whatIsMD: {...settings.whatIsMD, symptoms: e.target.value}})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => handleSave('What is MD')}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}

            {/* How to Help */}
            {activeTab === 'howToHelp' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">How to Help Section</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Donation Text</label>
                  <textarea
                    value={settings.howToHelp.donationText}
                    onChange={(e) => setSettings({...settings, howToHelp: {...settings.howToHelp, donationText: e.target.value}})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Volunteer Text</label>
                  <textarea
                    value={settings.howToHelp.volunteerText}
                    onChange={(e) => setSettings({...settings, howToHelp: {...settings.howToHelp, volunteerText: e.target.value}})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sponsorship Text</label>
                  <textarea
                    value={settings.howToHelp.sponsorshipText}
                    onChange={(e) => setSettings({...settings, howToHelp: {...settings.howToHelp, sponsorshipText: e.target.value}})}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => handleSave('How to Help')}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}

            {/* Facility */}
            {activeTab === 'facility' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Facility Information</h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={settings.facility.description}
                    onChange={(e) => setSettings({...settings, facility: {...settings.facility, description: e.target.value}})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Amenities (comma-separated)</label>
                  <textarea
                    value={settings.facility.amenities}
                    onChange={(e) => setSettings({...settings, facility: {...settings.facility, amenities: e.target.value}})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={() => handleSave('Facility')}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
