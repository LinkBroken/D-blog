"use server";
import { revalidatePath } from "next/cache";
import prisma from "../api/_base";

const removeUser = async (content: string) => {
  if (prisma) {
    await prisma.post.delete({
      where: {
        content: content,
      },
    });
  }
  revalidatePath("favorites");
};

export default removeUser;
