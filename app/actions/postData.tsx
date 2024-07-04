"use server"

import { PrismaClient } from "@prisma/client";

export default async function postData(route:string){
    const prisma = new PrismaClient();
    
    const data = prisma.post.findMany(
        {
            where: {
                id:parseInt(route)
            },
            include: {
                user:true
        }
        }
    )
    return await data
}

