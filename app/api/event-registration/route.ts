import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phoneNumber, date, eventType, dietaryRequirements, accommodationNeeded, transportationNeeded, specialRequests } = body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !phoneNumber || !date || !eventType || !dietaryRequirements || !accommodationNeeded || !transportationNeeded || !specialRequests) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

        const validEventTypes = ['CONFERENCE', 'WORKSHOP', 'SEMINAR', 'NETWORKING_EVENT'];
    if (!validEventTypes.includes(eventType.toUpperCase())) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    // Validate date is in the future
    const eventDate = new Date(date);
    if (isNaN(eventDate.getTime()) || eventDate < new Date()) {
      return NextResponse.json({ error: 'Invalid or past date' }, { status: 400 });
    }

    const registration = await prisma.eventRegistration.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        date: eventDate,
        eventType: eventType.toUpperCase(),
        dietaryRequirements,
        accommodationNeeded,
        transportationNeeded,
        specialRequests,
      }
    });

    return NextResponse.json({ success: true, registration }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
