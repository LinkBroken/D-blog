import Usersdata from "../components/UsersData";
import { revalidatePath } from "next/cache";
import prisma from "../api/_base";

export default async function users() {
  const usersInfo = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
    {
      cache: "force-cache",
    }
  ).then((res) => res.json());
  revalidatePath("/users");

  return (
    <div className="flex flex-col grow items-center">
      <Usersdata usersInfo={usersInfo} />
    </div>
  );
}
