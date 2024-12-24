import Usersdata from "../components/usersData";
import { revalidatePath } from "next/cache";
import prisma from "../api/_base";

export default async function users() {
  const usersInfo = await prisma?.user.findMany();
  revalidatePath("/users");

  return (
    <div className="flex flex-col grow items-center">
      <Usersdata usersInfo={usersInfo} />
    </div>
  );
}
