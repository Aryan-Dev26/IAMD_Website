import { NextResponse } from 'next/server';

// In-memory storage (replace with database in production)
let downloads = [
  {
    id: 1,
    title: "Parent's Guide to MD",
    description: 'Comprehensive information booklet',
    category: 'Guide',
    fileUrl: '/documents/parents-guide.pdf',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Exercise & Care Tips',
    description: 'Daily care and therapy guide',
    category: 'Care',
    fileUrl: '/documents/care-tips.pdf',
    createdAt: new Date().toISOString()
  },
];

// GET - Fetch all downloads
export async function GET() {
  return NextResponse.json({ downloads });
}

// POST - Create new download
export async function POST(request) {
  try {
    const data = await request.json();
    
    const newDownload = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      category: data.category,
      fileUrl: data.fileUrl || '/documents/sample.pdf',
      createdAt: new Date().toISOString()
    };

    downloads.unshift(newDownload);

    return NextResponse.json({ 
      success: true, 
      message: 'Download created successfully',
      download: newDownload 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to create download' 
    }, { status: 500 });
  }
}

// PUT - Update download
export async function PUT(request) {
  try {
    const data = await request.json();
    
    const downloadIndex = downloads.findIndex(d => d.id === data.id);
    if (downloadIndex === -1) {
      return NextResponse.json({ 
        success: false, 
        message: 'Download not found' 
      }, { status: 404 });
    }

    downloads[downloadIndex] = {
      ...downloads[downloadIndex],
      ...data,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json({ 
      success: true, 
      message: 'Download updated successfully',
      download: downloads[downloadIndex]
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update download' 
    }, { status: 500 });
  }
}

// DELETE - Delete download
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));
    
    downloads = downloads.filter(d => d.id !== id);

    return NextResponse.json({ 
      success: true, 
      message: 'Download deleted successfully'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to delete download' 
    }, { status: 500 });
  }
}
