"use server"
// import { revalidatePath } from "next/cache";
// import postData from "./postData";
import prisma from "../api/_base"

export default async function userData(route:string){
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


// Checkout for the whole cart, for the total price
// Ability to adjust quantity on the cart page
// Reciept for the cart page


