import { NextResponse } from "next/server"
export function middleware(request) {
  const path = request.nextUrl.pathname; 
  const isPublic = path == '/login' || path == '/signup' || path=='/';
  const token = request.cookies.get("token")?.value || "";
  console.log(token);
  if(token && isPublic){
    return NextResponse.redirect(new URL('/profile', request.nextUrl));
  }
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

export const config = {
  matcher: [
      '/', 
      '/profile',
      '/login',
      '/signup',
  ]
}