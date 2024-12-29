import { NextRequest, NextResponse } from "next/server";
import primsa from "../_base";
import { NextApiResponse } from "next";

export async function GET(req: NextRequest) {
  if (req.method == "GET") {
    const posts = await primsa.post.findMany({
      where: {
        OR: [
          {
            id: 1,
          },
          { id: 2 },
          { id: 3 },
          { id: 4 },
        ],
      },
    });

    return NextResponse.json(posts);
  }
}

export async function POST(req: NextRequest) {
  if (req.method == "POST") {
    // const { username, age, email, content, image } = await req.json();

    // const user = await primsa.user.create({
    //   data: {
    //     username,
    //     age,
    //     image,
    //     email,
    //     posts: {
    //       create: {
    //         content,
    //         header: "New Post",
    //       },
    //     },
    //   },
    //   include: {
    //     posts: true,
    //   },
    // });

    NextResponse.json({});
  }
}
