import { NextResponse } from 'next/server';

// In-memory storage
let sponsors = [];

// GET - Fetch all sponsors
export async function GET() {
  return NextResponse.json({ sponsors });
}

// POST - Create new sponsorship request
export async function POST(request) {
  try {
    const data = await request.json();
    
    const newSponsor = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      sponsorshipType: data.sponsorshipType,
      amount: data.amount,
      message: data.message,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    sponsors.unshift(newSponsor);

    return NextResponse.json({ 
      success: true, 
      message: 'Sponsorship request submitted successfully',
      sponsor: newSponsor 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit request' 
    }, { status: 500 });
  }
}

// PUT - Update sponsor status
export async function PUT(request) {
  try {
    const { id, status } = await request.json();
    
    const sponsorIndex = sponsors.findIndex(s => s.id === id);
    if (sponsorIndex === -1) {
      return NextResponse.json({ 
        success: false, 
        message: 'Sponsor not found' 
      }, { status: 404 });
    }

    sponsors[sponsorIndex].status = status;

    return NextResponse.json({ 
      success: true, 
      message: 'Status updated successfully',
      sponsor: sponsors[sponsorIndex]
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update status' 
    }, { status: 500 });
  }
}

// DELETE - Delete sponsor
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));
    
    sponsors = sponsors.filter(s => s.id !== id);

    return NextResponse.json({ 
      success: true, 
      message: 'Sponsor deleted successfully'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to delete sponsor' 
    }, { status: 500 });
  }
}
