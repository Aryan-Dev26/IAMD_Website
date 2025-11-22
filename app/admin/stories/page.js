'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, Edit, Trash2, Save, X } from 'lucide-react';

export default function StoriesManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stories, setStories] = useState([
    { id: 1, name: 'Arjun\'s Journey', description: 'From wheelchair to walking with support', image: '/images/stories/story1.jpg', year: '2024' },
    { id: 2, name: 'Priya\'s Achievement', description: 'Completed education despite challenges', image: '/images/stories/story2.jpg', year: '2023' },
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

  if (!isAuthenticated) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" /></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"><ArrowLeft className="w-5 h-5" /><span>Back</span></Link>
            <h1 className="text-xl font-bold">Success Stories</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {saveMessage && <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">{saveMessage}</div>}
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">Warrior Success Stories</h2>
          <button onClick={() => setShowAddForm(true)} className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><Plus className="w-4 h-4" /><span>Add Story</span></button>
        </div>
        {(showAddForm || editingItem) && (
          <div className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{editingItem ? 'Edit' : 'Add'} Story</h3>
              <button onClick={() => { setShowAddForm(false); setEditingItem(null); }}><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newItem = { id: editingItem?.id || Date.now(), name: formData.get('name'), description: formData.get('description'), year: formData.get('year'), image: editingItem?.image || '/images/stories/default.jpg' };
              if (editingItem) { setStories(stories.map(s => s.id === editingItem.id ? newItem : s)); } else { setStories([...stories, newItem]); }
              setSaveMessage('Saved!'); setTimeout(() => setSaveMessage(''), 3000); setShowAddForm(false); setEditingItem(null);
            }} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-semibold mb-2">Story Title</label><input type="text" name="name" defaultValue={editingItem?.name || ''} required className="w-full px-4 py-2 border rounded-lg" /></div>
                <div><label className="block text-sm font-semibold mb-2">Year</label><input type="text" name="year" defaultValue={editingItem?.year || new Date().getFullYear()} required className="w-full px-4 py-2 border rounded-lg" /></div>
              </div>
              <div><label className="block text-sm font-semibold mb-2">Description</label><textarea name="description" defaultValue={editingItem?.description || ''} required rows={3} className="w-full px-4 py-2 border rounded-lg" /></div>
              <div className="flex space-x-3">
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg"><Save className="w-4 h-4 inline mr-1" />Save</button>
                <button type="button" onClick={() => { setShowAddForm(false); setEditingItem(null); }} className="px-6 py-2 bg-gray-200 rounded-lg">Cancel</button>
              </div>
            </form>
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-xs text-gray-500 mb-4">Year: {item.year}</p>
              <div className="flex space-x-2">
                <button onClick={() => setEditingItem(item)} className="flex-1 py-2 text-blue-600 border border-blue-600 rounded-lg text-sm">Edit</button>
                <button onClick={() => { if (confirm('Delete?')) { setStories(stories.filter(s => s.id !== item.id)); setSaveMessage('Deleted!'); setTimeout(() => setSaveMessage(''), 3000); }}} className="flex-1 py-2 text-red-600 border border-red-600 rounded-lg text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
