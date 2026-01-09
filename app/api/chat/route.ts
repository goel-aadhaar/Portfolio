import { NextResponse } from 'next/server';
import { askGemini } from '@/lib/gemini';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Call the helper function from lib/gemini.ts
    const responseText = await askGemini(message);

    return NextResponse.json({ text: responseText });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    
    // Return a user-friendly error message if something goes wrong
    return NextResponse.json(
      { text: "I'm having trouble connecting to the AI service right now. Please try again." }, 
      { status: 500 }
    );
  }
}
