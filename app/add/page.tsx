import { revalidatePath } from "next/cache";
import Form, { Field } from "../components/Form";
import primsa from "../api/_base";

interface Form {
  [key: string]: any;
}

export default function AddPost() {
  let FieldArray;
  async function addInfo(formData: Form) {
    "use server";

    const username = formData.get("username");
    const age = parseInt(formData.get("age"));
    const email = formData.get("email");
    const content = formData.get("posts");
    const image = formData.get("image");
    const header = formData.get("header");

    try {
      await primsa.user.create({
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

      revalidatePath("/add");
    } catch (error) {
      alert(error);
    }
  }

  const inputFields = ["username", "age", "email", "content", "image"];

  FieldArray = inputFields.map(
    (field, index) =>
      ({
        label: { className: "", text: field },
        input: [{ className: "", name: field, type: "text", required: true }],
      } as Field)
  );

  return <Form fields={FieldArray} action={addInfo} />;
}
