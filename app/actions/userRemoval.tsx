"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

const removeUser = async (username:string) => {
    await prisma.user.delete({
      where: {
        username:username
      }
    })
  
  revalidatePath("favorites")
}

export default removeUser