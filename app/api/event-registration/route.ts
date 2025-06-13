import { NextResponse } from 'next/server';
import  prisma  from '../../../lib/prisma';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phoneNumber, date, eventType } = body;

    if (!firstName || !lastName || !email || !phoneNumber || !date || !eventType) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const validEventTypes = ['CONFERENCE', 'WORKSHOP', 'SEMINAR', 'NETWORK'];
    if (!validEventTypes.includes(eventType.toUpperCase())) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    const registration = await prisma.eventRegistration.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        date: new Date(date),
        eventType: eventType.toUpperCase(),
        dietaryRequirements: body.dietaryRequirements,
        accommodationNeeded: body.accommodationNeeded,
        transportationNeeded: body.transportationNeeded,
        specialRequests: body.specialRequests,
      }
    });

    return NextResponse.json({ success: true, registration }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
