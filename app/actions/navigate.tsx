"use server"
import { redirect } from "next/navigation"

export default async function navigate(route,id){
    redirect(`/${route}/${id}`)
}

