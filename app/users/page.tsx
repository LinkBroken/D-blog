import { PrismaClient } from "@prisma/client";
import Userdata from "../components/usersData";
export default async function users(id) {
  const prisma = new PrismaClient()
  const usersInfo = await prisma.user.findMany()

  
  
  return (
    <div className="flex flex-col items-center">
      <Userdata usersInfo={usersInfo} />
    </div>
  );
}
