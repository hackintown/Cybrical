// src/app/api/approach/approach.ts
import { NextResponse } from 'next/server';
import { contentMap } from '@/components/ui/OurApproach/OurApproachData';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pathname = searchParams.get('pathname') || '/web-development';
  const content = contentMap[pathname] || contentMap['/web-development'];

  return NextResponse.json(content);
}
