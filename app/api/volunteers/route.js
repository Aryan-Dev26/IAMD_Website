import { NextResponse } from 'next/server';

// In-memory storage
let volunteers = [];

// GET - Fetch all volunteers
export async function GET() {
  return NextResponse.json({ volunteers });
}

// POST - Create new volunteer application
export async function POST(request) {
  try {
    const data = await request.json();
    
    const newVolunteer = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      location: data.location,
      availability: data.availability,
      skills: data.skills,
      message: data.message,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    volunteers.unshift(newVolunteer);

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      volunteer: newVolunteer 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit application' 
    }, { status: 500 });
  }
}

// PUT - Update volunteer status
export async function PUT(request) {
  try {
    const { id, status } = await request.json();
    
    const volunteerIndex = volunteers.findIndex(v => v.id === id);
    if (volunteerIndex === -1) {
      return NextResponse.json({ 
        success: false, 
        message: 'Volunteer not found' 
      }, { status: 404 });
    }

    volunteers[volunteerIndex].status = status;

    return NextResponse.json({ 
      success: true, 
      message: 'Status updated successfully',
      volunteer: volunteers[volunteerIndex]
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update status' 
    }, { status: 500 });
  }
}

// DELETE - Delete volunteer
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));
    
    volunteers = volunteers.filter(v => v.id !== id);

    return NextResponse.json({ 
      success: true, 
      message: 'Volunteer deleted successfully'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to delete volunteer' 
    }, { status: 500 });
  }
}
