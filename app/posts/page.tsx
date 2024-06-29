import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import Form from "../components/Form";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default function Favorites() {
    async function addInfo(formData) {
        "use server";

        const username = formData.get("username");
        const age = parseInt(formData.get("age"));
        const email = formData.get("email");
        const content = formData.get("posts");

       try{ await prisma.user.create({
            data: {
                username,
                age,
                email,
                posts: {
                    create: {
                        content,
                    },
                },
            },
            include: {
                posts: true,
            },
        });
        revalidatePath("/favorites");
        // redirect("/favorites")
      }
      catch(error){
        console.log(error)
      }
    
      }

    return (
        <>
            <Form action={addInfo} />
        </>
    );
}
