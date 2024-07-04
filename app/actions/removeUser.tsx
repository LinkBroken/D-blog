"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

const removeUser = async (content:string) => {
  if (prisma) {
    await prisma.post.delete({
      where: {
        content:content
      }
    })
  }
  revalidatePath("favorites")
}

export default removeUser