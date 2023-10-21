import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    //      `withAuth` augments your `Request` with the user's token.
    function middleware(req) {


        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
            if (req.nextauth.token?.status) {

                return NextResponse.redirect(new URL('/user', req.url))
            } else {
                return NextResponse.redirect(new URL('/profileupdate', req.url))

            }

        }

        if (req.nextUrl.pathname.startsWith("/user") && req.nextauth.token?.status !== true) {

            return NextResponse.redirect(new URL('/profileupdate', req.url))

        }

        if (req.nextUrl.pathname.startsWith("/profileupdate") && req.nextauth.token?.status == true) {

            return NextResponse.redirect(new URL('/user', req.url))

        }



    },
    {
        callbacks: {
            authorized: ({ token }) => {
                return token
            },

        }
    }
)



export const config = { matcher: ['/admin/:path*', '/user/:path*'] }  