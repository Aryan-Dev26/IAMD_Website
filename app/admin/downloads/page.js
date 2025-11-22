'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, Edit, Trash2, Save, X, Upload, FileText, Download } from 'lucide-react';

export default function DownloadsManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [downloads, setDownloads] = useState([
    { id: 1, title: "Parent's Guide to MD", description: 'Comprehensive information booklet', category: 'Guide', fileUrl: '/documents/parents-guide.pdf' },
    { id: 2, title: 'Exercise & Care Tips', description: 'Daily care and therapy guide', category: 'Care', fileUrl: '/documents/care-tips.pdf' },
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

  const deleteDownload = (id) => {
    if (confirm('Delete this download?')) {
      setDownloads(downloads.filter(d => d.id !== id));
      setSaveMessage('Download deleted successfully!');
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
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to Dashboard</span>
              </Link>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Downloads Management</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {saveMessage && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 text-green-700">
            <Download className="w-5 h-5" />
            <span>{saveMessage}</span>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Downloadable Resources</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Download</span>
          </button>
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingItem) && (
          <div className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingItem ? 'Edit Download' : 'Add New Download'}
              </h3>
              <button onClick={() => { setShowAddForm(false); setEditingItem(null); }} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const newDownload = {
                id: editingItem?.id || Date.now(),
                title: formData.get('title'),
                description: formData.get('description'),
                category: formData.get('category'),
                fileUrl: editingItem?.fileUrl || '/documents/sample.pdf',
              };
              
              if (editingItem) {
                setDownloads(downloads.map(d => d.id === editingItem.id ? newDownload : d));
              } else {
                setDownloads([...downloads, newDownload]);
              }
              
              setSaveMessage('Download saved successfully!');
              setTimeout(() => setSaveMessage(''), 3000);
              setShowAddForm(false);
              setEditingItem(null);
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input type="text" name="title" defaultValue={editingItem?.title || ''} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Document title" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea name="description" defaultValue={editingItem?.description || ''} required rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Brief description" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select name="category" defaultValue={editingItem?.category || 'Guide'} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="Guide">Guide</option>
                  <option value="Care">Care</option>
                  <option value="Therapy">Therapy</option>
                  <option value="Financial">Financial</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Upload File</label>
                <div className="flex items-center space-x-3">
                  <label className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>Choose File</span>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </label>
                  <span className="text-sm text-gray-500">PDF, DOC, DOCX (Max 10MB)</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button type="submit" className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button type="button" onClick={() => { setShowAddForm(false); setEditingItem(null); }} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Downloads List */}
        <div className="grid md:grid-cols-2 gap-6">
          {downloads.map((download) => (
            <div key={download.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{download.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{download.description}</p>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {download.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => setEditingItem(download)} className="flex-1 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                  <Edit className="w-4 h-4 inline mr-1" />
                  Edit
                </button>
                <button onClick={() => deleteDownload(download.id)} className="flex-1 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium">
                  <Trash2 className="w-4 h-4 inline mr-1" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
