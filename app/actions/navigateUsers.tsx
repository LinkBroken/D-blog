"use server"

import { redirect } from "next/navigation"

export default async function navigateUser(content:string){
    redirect(`/users/${content}`)
}