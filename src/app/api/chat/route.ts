import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  console.log('Received message:', message);

  // Simulate AI response
  const aiResponse = `Echo: ${message}. This is a simulated AI response.`;

  return NextResponse.json({ response: aiResponse });
}