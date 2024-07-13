import { revalidatePath } from "next/cache";
import Form from "../components/Form";
import primsa from "../api/_base";

export default function AddPost() {
    async function addInfo(formData) {
        "use server";

        const username = formData.get("username");
        const age = parseInt(formData.get("age"));
        const email = formData.get("email");
        const content = formData.get("posts");
        const image = formData.get("image");
        const header = formData.get("header");


       try{ await primsa.user.create({
            data: {
                username,
                age,
                image,
                email,
                posts: {
                    create: {
                        content,
                        header,
                    },
                },
            },
            include: {
                posts: true,
            },
        });
        
        revalidatePath("/add")
      }
      catch(error){
        console.log(error)
      }
    
      }

    return (
            <Form action={addInfo} />
    );
}
