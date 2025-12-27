import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return Response.redirect('https://adarcher.app/resume');
}
