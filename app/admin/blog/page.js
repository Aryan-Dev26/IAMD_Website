'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, Edit, Trash2, Save, X, Calendar, Eye } from 'lucide-react';

export default function BlogManagement() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Annual Summer Camp 2024 - A Huge Success!',
      slug: 'annual-summer-camp-2024',
      excerpt: 'Our annual summer camp brought together 50+ MD warriors for a week of therapy, fun, and friendship.',
      category: 'Events',
      author: 'IAMD Team',
      date: 'November 15, 2024',
      icon: '🏕️',
      published: true
    },
    {
      id: 2,
      title: 'New Physiotherapy Equipment Installed',
      slug: 'new-physiotherapy-equipment',
      excerpt: 'State-of-the-art physiotherapy equipment has been installed to enhance our rehabilitation services.',
      category: 'Updates',
      author: 'Dr. Sharma',
      date: 'November 10, 2024',
      icon: '🏥',
      published: true
    },
  ]);
  const [editingPost, setEditingPost] = useState(null);
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

  const deletePost = (id) => {
    if (confirm('Delete this blog post?')) {
      setPosts(posts.filter(p => p.id !== id));
      setSaveMessage('Post deleted successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  const togglePublish = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, published: !p.published } : p));
    setSaveMessage('Post status updated!');
    setTimeout(() => setSaveMessage(''), 3000);
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
            <h1 className="text-xl font-bold text-gray-900">Blog Management</h1>
            <Link
              href="/blog"
              target="_blank"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">View Blog</span>
            </Link>
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

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Blog Posts</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Post</span>
          </button>
        </div>

        {/* Add/Edit Form */}
        {(showAddForm || editingPost) && (
          <div className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h3>
              <button onClick={() => { setShowAddForm(false); setEditingPost(null); }} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const title = formData.get('title');
              const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              
              const newPost = {
                id: editingPost?.id || Date.now(),
                title,
                slug,
                excerpt: formData.get('excerpt'),
                category: formData.get('category'),
                author: formData.get('author'),
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                icon: formData.get('icon') || '📰',
                published: editingPost?.published || false,
              };
              
              if (editingPost) {
                setPosts(posts.map(p => p.id === editingPost.id ? newPost : p));
              } else {
                setPosts([newPost, ...posts]);
              }
              
              setSaveMessage('Post saved successfully!');
              setTimeout(() => setSaveMessage(''), 3000);
              setShowAddForm(false);
              setEditingPost(null);
            }} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                  <input type="text" name="title" defaultValue={editingPost?.title || ''} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Post title" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                  <select name="category" defaultValue={editingPost?.category || 'Updates'} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="Updates">Updates</option>
                    <option value="Events">Events</option>
                    <option value="Success Stories">Success Stories</option>
                    <option value="News">News</option>
                    <option value="Announcements">Announcements</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Excerpt</label>
                <textarea name="excerpt" defaultValue={editingPost?.excerpt || ''} required rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Brief summary (1-2 sentences)" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Author</label>
                  <input type="text" name="author" defaultValue={editingPost?.author || 'IAMD Team'} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Author name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Icon (Emoji)</label>
                  <input type="text" name="icon" defaultValue={editingPost?.icon || '📰'} maxLength={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="📰" />
                </div>
              </div>
              <div className="flex space-x-3">
                <button type="submit" className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Save className="w-4 h-4" />
                  <span>Save Post</span>
                </button>
                <button type="button" onClick={() => { setShowAddForm(false); setEditingPost(null); }} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="text-4xl">{post.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{post.title}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{post.category}</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <span>By {post.author}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <button
                    onClick={() => togglePublish(post.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      post.published
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    {post.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button onClick={() => setEditingPost(post)} className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                    <Edit className="w-4 h-4 inline mr-1" />
                    Edit
                  </button>
                  <button onClick={() => deletePost(post.id)} className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium">
                    <Trash2 className="w-4 h-4 inline mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
