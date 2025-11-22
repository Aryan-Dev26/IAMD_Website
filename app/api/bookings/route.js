import { NextResponse } from 'next/server';

// In-memory storage (replace with database in production)
let bookings = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    phone: '+91 98765 43210',
    date: '2025-11-25',
    time: '10:00 AM',
    service: 'Physiotherapy',
    message: 'Need consultation for my son',
    status: 'pending',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    phone: '+91 98765 43211',
    date: '2025-11-26',
    time: '2:00 PM',
    service: 'Counselling',
    message: 'Family counselling session',
    status: 'confirmed',
    createdAt: new Date().toISOString()
  },
];

// GET - Fetch all bookings
export async function GET() {
  return NextResponse.json({ bookings });
}

// POST - Create new booking
export async function POST(request) {
  try {
    const data = await request.json();
    
    const newBooking = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      date: data.preferredDate,
      time: data.preferredTime || 'Not specified',
      service: data.service,
      message: data.message,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    bookings.unshift(newBooking); // Add to beginning of array

    return NextResponse.json({ 
      success: true, 
      message: 'Booking created successfully',
      booking: newBooking 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to create booking' 
    }, { status: 500 });
  }
}

// PUT - Update booking status
export async function PUT(request) {
  try {
    const { id, status } = await request.json();
    
    const bookingIndex = bookings.findIndex(b => b.id === id);
    if (bookingIndex === -1) {
      return NextResponse.json({ 
        success: false, 
        message: 'Booking not found' 
      }, { status: 404 });
    }

    bookings[bookingIndex].status = status;

    return NextResponse.json({ 
      success: true, 
      message: 'Booking updated successfully',
      booking: bookings[bookingIndex]
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update booking' 
    }, { status: 500 });
  }
}

// DELETE - Delete booking
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));
    
    bookings = bookings.filter(b => b.id !== id);

    return NextResponse.json({ 
      success: true, 
      message: 'Booking deleted successfully'
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to delete booking' 
    }, { status: 500 });
  }
}
