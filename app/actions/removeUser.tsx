"use server";
import { revalidatePath } from "next/cache";
import prisma from "../api/_base";

const removeUser = async (id: number) => {
  if (prisma) {
    await prisma.post.delete({
      where: {
        id: id,
      },
    });
  }
  revalidatePath("favorites");
};

export default removeUser;
