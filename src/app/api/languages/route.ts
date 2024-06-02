import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
  try {
    const language = await prisma.languages.findMany();
    return NextResponse.json({
      status: 200,
      language
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: 'Something went wrong'
    });
  }
}
export async function POST(request: Request) {
  const { language }: { language: string } = await request.json();

  try {
    const newlang = await prisma.languages.create({
      data: {
        language
      }
    });
    return NextResponse.json({
      status: 201,
      newlang
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: 'Something went wrong'
    });
  }
}
