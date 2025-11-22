'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, Edit, Trash2, Save, X, Star } from 'lucide-react';

export default function TestimonialsManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Mother of MD Warrior',
      text: 'IAMD has been a blessing for our family. The care and support we received is beyond words.',
      rating: 5,
      image: '/images/testimonials/person1.jpg'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Father of MD Warrior',
      text: 'The physiotherapy sessions have made a remarkable difference in my son\'s mobility and confidence.',
      rating: 5,
      image: '/images/testimonials/person2.jpg'
    },
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const auth = sessionStorage.getItem('iamd_admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const deleteTestimonial = (id) => {
    if (confirm('Delete this testimonial?')) {
      setTestimonials(testimonials.filter(t => t.id !== id));
      setSaveMessage('Testimonial deleted!');
      setTimeout(() => setSaveMessage(''), 3000);
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
            <Link href="/admin/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Testimonials</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {saveMessage && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            {saveMessage}
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Customer Testimonials</h2>
          <button onClick={() => setShowAddForm(true)} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Add Testimonial</span>
          </button>
        </div>

        {(showAddForm || editingItem) && (
          <div className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{editingItem ? 'Edit' : 'Add'} Testimonial</h3>
              <button onClick={() => { setShowAddForm(false); setEditingItem(null); }}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newItem = {
                id: editingItem?.id || Date.now(),
                name: formData.get('name'),
                role: formData.get('role'),
                text: formData.get('text'),
                rating: parseInt(formData.get('rating')),
                image: editingItem?.image || '/images/testimonials/default.jpg',
              };
              
              if (editingItem) {
                setTestimonials(testimonials.map(t => t.id === editingItem.id ? newItem : t));
              } else {
                setTestimonials([...testimonials, newItem]);
              }
              
              setSaveMessage('Saved!');
              setTimeout(() => setSaveMessage(''), 3000);
              setShowAddForm(false);
              setEditingItem(null);
            }} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" name="name" defaultValue={editingItem?.name || ''} required className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Role</label>
                  <input type="text" name="role" defaultValue={editingItem?.role || ''} required className="w-full px-4 py-2 border rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Testimonial Text</label>
                <textarea name="text" defaultValue={editingItem?.text || ''} required rows={4} className="w-full px-4 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Rating (1-5)</label>
                <select name="rating" defaultValue={editingItem?.rating || 5} className="w-full px-4 py-2 border rounded-lg">
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              <div className="flex space-x-3">
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Save className="w-4 h-4 inline mr-1" />Save
                </button>
                <button type="button" onClick={() => { setShowAddForm(false); setEditingItem(null); }} className="px-6 py-2 bg-gray-200 rounded-lg">Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                  <div className="flex mt-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">"{item.text}"</p>
              <div className="flex space-x-2">
                <button onClick={() => setEditingItem(item)} className="flex-1 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">Edit</button>
                <button onClick={() => deleteTestimonial(item.id)} className="flex-1 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
