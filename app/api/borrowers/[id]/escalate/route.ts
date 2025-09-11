import { NextResponse } from 'next/server';

export async function POST(res: NextResponse) {
  return NextResponse.json({
    response: {
      success: true,
      message: "Escalated to Credit Committee.",
    },
  });
}