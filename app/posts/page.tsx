import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";

import prisma from "@/app/api/_base";
import PostData from "../components/PostData";
import { Button } from "@/components/ui/button";

export default async function posts() {
  const usersInfo = await prisma.post.findMany();
  revalidatePath("/posts");

  return (
    <section className=" bg-teals-50 overflow-hidden flex justify-around flex-col  items-center pt-8 ">
      <div className=" relative overflow-hidden flex justify-evenly items-center gap-3 xl:right-1/4  ">
        <Image
          className=" w-4/5 rounded-2xl xl:w-full"
          width={500}
          height={600}
          src="https://www.pixibitdesign.com/wp-content/uploads/2018/08/Blog-images-01.png"
          alt="alt text"
        ></Image>
      </div>
      <div className="flex flex-col w-screen items-center">
        {usersInfo ? <PostData usersInfo={usersInfo} /> : <h1>No posts yet</h1>}
      </div>
      <div className="flex flex-col items-center">
        <Button
          className="w-1/8 mb-10 shadow-md shadow-black"
          variant={"secondary"}
        >
          <Link href="/add">Add a post</Link>
        </Button>
      </div>
    </section>
  );
}
