"use server"
import postData from "./postData";
import { PrismaClient } from "@prisma/client";

export default async function userData(route:string){
    const prisma = new PrismaClient();
    const data = prisma.user.findMany(
        {
            where: {
                id: parseInt(route)
            },
            include:{
                posts:true
        }}
    )
    return await data
}

