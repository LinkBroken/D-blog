"use server";

import prisma from "../api/_base";

export default async function userData(route: string) {
  const data = prisma.user.findMany({
    where: {
      id: parseInt(route),
    },
    include: {
      posts: true,
    },
  });
  return await data;
}
