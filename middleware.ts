//MiddleWare acts the same way as there name, acts in the middle before any request is made.
//The Request goes through middleware.
//We have access to Request and Response

export function middleware() {
  // console.log("Commented all the code");
}

// import { NextResponse } from "next/server";

// export function middleware(req: Request) {
//   console.log("Re-directing");

//   return NextResponse.redirect(new URL("/", req.url));
// }

// export const config = {
//   //   matcher: "/about",
//   matcher: ["/about/:path*", "/tours/:path*"],
// };
