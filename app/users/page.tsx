import { PrismaClient } from "@prisma/client";
import Userdata from "../components/usersData";
import { revalidatePath } from "next/cache";
export default async function users(id) {
  const prisma = new PrismaClient()
  const usersInfo = await prisma.user.findMany()
  revalidatePath("/users")

  
  
  return (
    <div className="flex flex-col items-center">
      <Userdata usersInfo={usersInfo} />
    </div>
  );
}
