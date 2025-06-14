import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received registration data:', body); // Log the incoming data
    
    const { firstName, lastName, email, phoneNumber, date, eventType, dietaryRequirements, accommodationNeeded, transportationNeeded, specialRequests } = body;

    // Check if all required fields are provided
    const missingFields = [];
    if (!firstName) missingFields.push('firstName');
    if (!lastName) missingFields.push('lastName');
    if (!email) missingFields.push('email');
    if (!phoneNumber) missingFields.push('phoneNumber');
    if (!date) missingFields.push('date');
    if (!eventType) missingFields.push('eventType');
    if (dietaryRequirements === undefined) missingFields.push('dietaryRequirements');
    if (accommodationNeeded === undefined) missingFields.push('accommodationNeeded');
    if (transportationNeeded === undefined) missingFields.push('transportationNeeded');
    if (!specialRequests) missingFields.push('specialRequests');
    
    if (missingFields.length > 0) {
      console.error('Missing fields:', missingFields);
      return NextResponse.json({ error: `Missing required fields: ${missingFields.join(', ')}` }, { status: 400 });
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
        date,
        eventType: eventType.toUpperCase(),
        dietaryRequirements,
        accommodationNeeded,
        transportationNeeded,
        specialRequests,
        user: {
          connect: {
            email: email // assuming the user exists with this email
            // alternatively, you can use { id: userId } if you have the user ID
          }
        }
      }
    });

    return NextResponse.json({ success: true, registration }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
