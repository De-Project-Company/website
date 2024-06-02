import { NextResponse } from 'next/server';
import { prisma } from '@/utils/prisma';

export async function GET() {
  try {
    const stacks = await prisma.stack.findMany();
    return NextResponse.json({
      status: 200,
      stacks
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
  const { stack }: { stack: string } = await request.json();

  try {
    const newlang = await prisma.stack.create({
      data: {
        stack
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
