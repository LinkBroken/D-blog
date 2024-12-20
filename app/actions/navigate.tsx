"use server";
import { redirect } from "next/navigation";

export default async function navigate({
  route,
  id,
}: {
  route: string;
  id: string;
}) {
  redirect(`/${route}/${id}`);
}
