import { NextResponse} from "next/server";



export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPubilcPath = path === '/login' || path === '/signup';
    const token = request.cookies.get("token")?.value || "";
    if (isPubilcPath && token) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl));
    }
    if (!isPubilcPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}


export const config = {
    matcher: [
        '/', 
        '/profile/:path*',
        '/login',
        '/signup',
    ]
}