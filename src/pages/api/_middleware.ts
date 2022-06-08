import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
  
  if (req.nextUrl.pathname.startsWith("/api/get-url")) {
    console.log('return early')
    return;
  }

  const slug = req.nextUrl.pathname.split('/').pop();

  const data = await (
    await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)
  ).json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
};

export default middleware;
