import { Suspense } from "react";
import userData from "@/app/actions/userData";
import Image from "next/image";
import navigate from "@/app/actions/navigate";
import { Button } from "@/components/ui/button";

export type ParamsType = { id: string };

export default async function Page(params: { params: ParamsType }) {
  const userId = params.params.id[0];
  const user = await userData(userId);

  const { age, email, image, posts, username } = user.map((data) => ({
    username: data.username,
    age: data.age,
    image: data.image,
    posts: data.posts,
    email: data.email,
  }))[0];

  return (
      <div className="flex w-screen ">
        <div className="flex flex-col justify-center items-center w-1/5 pl-8">
          <div className="flex flex-col  rounded-2xl mt-10 p-4 gap-4  border border-black shadow-md shadow-black text-slate-900 font-sans hover:scale-105 items-center mb-6">
            <h1 className=" text-2xl">{username}</h1>
            <Image
              height="300"
              className=" rounded-2xl w-44 h-48"
              width="400"
              src={image}
              alt={`${username} image`}
            />
            <h1 className="self-start text-xl">Age: {age}</h1>
            <h1 className=" self-start text-xl">Email: {email}</h1>
            <h1 className="text-xl self-start">Posts: {posts.length}</h1>
          </div>
        </div>
        <div className=" flex flex-col items-center pt-4 gap-4 w-4/5 ">
          <h1 className="text-2xl p-4 text-center border border-black shadow-md shadow-black w-fit self-center">
            Posts by {username.split(" ")[0]}
          </h1>

          <div className=" flex pl-6">
            {posts.map((post, index) => (
              <div
                className="flex border border-solid flex-col gap-4 items-center p-7 w-1/4 hover:rotate-2 hover:bg-slate-100 rounded-2xl bg-white shadow-lg shadow-black mb-4"
                key={index}
              >
                <h1>{post?.content?.substring(0, 200)} .....</h1>
                <form
                  action={async () => {
                    "use server";

                    await navigate({ route: "posts", id: String(post.id) });
                  }}
                >
                  <Button
                    variant="link"
                    className=" self-end p-2 rounded-xl border border-black"
                  >
                    Read More
                  </Button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
