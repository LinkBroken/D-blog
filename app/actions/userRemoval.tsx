"use server";
import { revalidatePath } from "next/cache";
import prisma from "../api/_base";

const removeUser = async (username: string) => {
  await prisma.user.delete({
    where: {
      username: username,
    },
  });

  revalidatePath("favorites");
};

export default removeUser;
