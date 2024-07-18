import { fetchUser, saveUser } from "@/utils/actions";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: Response) => {
  //   const { searchParams } = new URL(req.url);
  //   const id = searchParams.get("id");
  //   console.log(id);

  console.log(req.url);

  //   new URL("/", req.url); // This creates a new final URl,
  //   first param is the relative path on the base URL i.e. first path will override the base url

  console.log(req.nextUrl.searchParams.get("id"));

  const users = await fetchUser();
  // return NextResponse.redirect(new URL("/", req.url));
  return Response.json({ users });
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);

  return Response.json({ msg: "user created" });
};
