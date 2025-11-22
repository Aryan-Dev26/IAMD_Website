import { NextResponse } from 'next/server';

// In-memory storage (replace with database in production)
let blogPosts = [
  {
    id: 1,
    title: 'Annual Summer Camp 2024 - A Huge Success!',
    slug: 'annual-summer-camp-2024',
    excerpt: 'Our annual summer camp brought together 50+ MD warriors for a week of therapy, fun, and friendship.',
    category: 'Events',
    author: 'IAMD Team',
    date: 'November 15, 2024',
    icon: '🏕️',
    published: true,
    createdAt: new Date().toISOString()
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
    published: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Understanding Duchenne Muscular Dystrophy',
    slug: 'understanding-duchenne-md',
    excerpt: 'A comprehensive guide for parents and caregivers about Duchenne MD, its symptoms, and management.',
    category: 'Education',
    author: 'Dr. Rajesh Kumar',
    date: 'November 5, 2024',
    icon: '📚',
    published: true,
    createdAt: new Date().toISOString()
  },
];

// GET - Fetch all blog posts (or only published ones)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const publishedOnly = searchParams.get('published') === 'true';
  
  const posts = publishedOnly 
    ? blogPosts.filter(post => post.published)
    : blogPosts;
  
  return NextResponse.json({ posts });
}

// POST - Create new blog post
export async function POST(request) {
  try {
    const data = await request.json();
    
    const newPost = {
      id: Date.now(),
      title: data.title,
      slug: data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      excerpt: data.excerpt,
      category: data.category,
      author: data.author,
      date: data.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      icon: data.icon || '📰',
      published: data.published || false,
      createdAt: new Date().toISOString()
    };

    blogPosts.unshift(newPost);

    return NextResponse.json({ 
      success: true, 
      message: 'Post created successfully',
      post: newPost 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to create post' 
    }, { status: 500 });
  }
}

// PUT - Update blog post
export async function PUT(request) {
  try {
    const data = await request.json();
    
    const postIndex = blogPosts.findIndex(p => p.id === data.id);
    if (postIndex === -1) {
      return NextResponse.json({ 
        success: false, 
        message: 'Post not found' 
      }, { status: 404 });
    }

    blogPosts[postIndex] = {
      ...blogPosts[postIndex],
      ...data,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json({ 
      success: true, 
      message: 'Post updated successfully',
      post: blogPosts[postIndex]
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update post' 
    }, { status: 500 });
  }
}

// DELETE - Delete blog post
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));
    
    blogPosts = blogPosts.filter(p => p.id !== id);

    return NextResponse.json({ 
      success: true, 
      message: 'Post deleted successfully'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to delete post' 
    }, { status: 500 });
  }
}
