"use server"

import { PrismaClient } from "@prisma/client";

export default async function postData(route){
    const prisma = new PrismaClient();
    
    const data = prisma.post.findMany(
        {
            where: {
                id:parseInt(route)
            }
        }
    )
    return await data
}

