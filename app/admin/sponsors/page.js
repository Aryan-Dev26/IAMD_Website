'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Heart, Mail, Phone, DollarSign, Check, X, RefreshCw } from 'lucide-react';

export default function SponsorsManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem('iamd_admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      fetchSponsors();
    }
  }, [router]);

  const fetchSponsors = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/sponsors');
      const data = await response.json();
      setSponsors(data.sponsors);
    } catch (error) {
      console.error('Failed to fetch sponsors:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch('/api/sponsors', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      
      if (response.ok) {
        setSponsors(sponsors.map(s => s.id === id ? { ...s, status } : s));
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"><ArrowLeft className="w-5 h-5" /><span>Back</span></Link>
            <h1 className="text-xl font-bold">Sponsorship Requests</h1>
            <button onClick={fetchSponsors} className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"><RefreshCw className="w-4 h-4" /><span>Refresh</span></button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
          </div>
        ) : sponsors.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No sponsorship requests yet</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{sponsor.name}</h3>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                      sponsor.status === 'approved' ? 'bg-green-100 text-green-700' :
                      sponsor.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {sponsor.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {sponsor.status === 'pending' && (
                      <>
                        <button onClick={() => updateStatus(sponsor.id, 'approved')} className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100" title="Approve"><Check className="w-5 h-5" /></button>
                        <button onClick={() => updateStatus(sponsor.id, 'rejected')} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100" title="Reject"><X className="w-5 h-5" /></button>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-3 text-gray-600"><Mail className="w-4 h-4" /><span className="text-sm">{sponsor.email}</span></div>
                  <div className="flex items-center space-x-3 text-gray-600"><Phone className="w-4 h-4" /><span className="text-sm">{sponsor.phone}</span></div>
                  <div className="flex items-center space-x-3 text-gray-600"><Heart className="w-4 h-4" /><span className="text-sm">{sponsor.sponsorshipType}</span></div>
                  {sponsor.amount && (
                    <div className="flex items-center space-x-3 text-gray-600"><DollarSign className="w-4 h-4" /><span className="text-sm">₹{sponsor.amount}</span></div>
                  )}
                </div>

                {sponsor.message && (
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Message:</strong> {sponsor.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
