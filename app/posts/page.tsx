import { PrismaClient } from "@prisma/client";
import Userdata from "../components/postData";
import Image from "next/image";
import { revalidatePath } from "next/cache";
export default async function posts() {
  const prisma = new PrismaClient()
  const usersInfo = await prisma.post.findMany()
  revalidatePath("/posts")

  
  return (
    <div className=" bg-teals-50 overflow-hidden flex justify-around flex-col  items-center pt-8 ">
    <div className=" relative right-1/4  overflow-hidden flex justify-evenly items-center gap-3 ">
      <Image className="rounded-2xl" width={500} height={600} src="https://www.pixibitdesign.com/wp-content/uploads/2018/08/Blog-images-01.png" alt="alt text"></Image>
    </div>
    <div className="flex flex-col w-screen items-center">
      {usersInfo? <Userdata usersInfo={usersInfo} />: <h1>No posts yet</h1>}
    </div>
    </div>
  );
}
