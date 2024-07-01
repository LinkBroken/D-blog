import { PrismaClient } from "@prisma/client";
import Userdata from "../components/Userdata";

export default async function posts(id) {
  const prisma = new PrismaClient()
  const usersInfo = await prisma.post.findMany()

  
  
  return (
    <div className="flex flex-col w-screen items-center">
      <Userdata usersInfo={usersInfo} />
    </div>
  );
}
