"use server"
import prisma from "../api/_base"

export default async function postData(route:string){    
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

