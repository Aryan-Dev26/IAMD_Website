'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Check, X, RefreshCw } from 'lucide-react';

export default function VolunteersManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = sessionStorage.getItem('iamd_admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      fetchVolunteers();
    }
  }, [router]);

  const fetchVolunteers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/volunteers');
      const data = await response.json();
      setVolunteers(data.volunteers);
    } catch (error) {
      console.error('Failed to fetch volunteers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch('/api/volunteers', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      
      if (response.ok) {
        setVolunteers(volunteers.map(v => v.id === id ? { ...v, status } : v));
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const deleteVolunteer = async (id) => {
    if (confirm('Delete this application?')) {
      try {
        const response = await fetch(`/api/volunteers?id=${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setVolunteers(volunteers.filter(v => v.id !== id));
        }
      } catch (error) {
        console.error('Failed to delete:', error);
      }
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
            <h1 className="text-xl font-bold">Volunteer Applications</h1>
            <button onClick={fetchVolunteers} className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"><RefreshCw className="w-4 h-4" /><span>Refresh</span></button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
          </div>
        ) : volunteers.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No volunteer applications yet</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {volunteers.map((volunteer) => (
              <div key={volunteer.id} className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{volunteer.name}</h3>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                      volunteer.status === 'approved' ? 'bg-green-100 text-green-700' :
                      volunteer.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {volunteer.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {volunteer.status === 'pending' && (
                      <>
                        <button onClick={() => updateStatus(volunteer.id, 'approved')} className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100" title="Approve"><Check className="w-5 h-5" /></button>
                        <button onClick={() => updateStatus(volunteer.id, 'rejected')} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100" title="Reject"><X className="w-5 h-5" /></button>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-3 text-gray-600"><Mail className="w-4 h-4" /><span className="text-sm">{volunteer.email}</span></div>
                  <div className="flex items-center space-x-3 text-gray-600"><Phone className="w-4 h-4" /><span className="text-sm">{volunteer.phone}</span></div>
                  <div className="flex items-center space-x-3 text-gray-600"><MapPin className="w-4 h-4" /><span className="text-sm">{volunteer.location}</span></div>
                  <div className="flex items-center space-x-3 text-gray-600"><Calendar className="w-4 h-4" /><span className="text-sm">{volunteer.availability}</span></div>
                </div>

                {volunteer.skills && (
                  <div className="p-4 bg-gray-50 rounded-lg mb-4">
                    <p className="text-sm text-gray-700"><strong>Skills:</strong> {volunteer.skills}</p>
                  </div>
                )}

                {volunteer.message && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700"><strong>Message:</strong> {volunteer.message}</p>
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
