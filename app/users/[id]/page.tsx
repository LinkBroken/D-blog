import userData from "@/app/actions/userData";
import Image from "next/image";
import PostData from "@/app/components/postData";
import { Metadata } from "next";
import prisma from "@/lib/prisma";

export type ParamsType = { id: string };

export async function generateMetadata(params: {
  params: ParamsType;
}): Promise<Metadata> {
  const userInfo = await userData(params.params.id);
  const { username } = userInfo[0];
  return {
    title: username,
    description: `Articles written by ${username}`,
  };
}

export async function generateStaticParams(): Promise<any> {
  const usersInfo = await prisma?.user.findMany();
  if (!usersInfo?.length) {
    return null;
  }
  return usersInfo?.map((user) => ({ id: String(user.id) }));
}

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
    <section className=" bg-neutral-100 flex flex-col  ">
      <div className="flex flex-col ">
        <div className="grid grid-cols-8 ml-4 bg-white rounded-2xl mt-10 p-8 gap-4  border border-black shadow-black text-slate-900 font-sans items-center mb-6">
          <Image
            height="300"
            width="400"
            className=" w-auto h-32 rounded-full"
            src={image}
            alt={`${username} image`}
          />
          <div className=" flex flex-col gap-2 col-span-3">
            <h1 className="self-start text-xl text-teal-700">
              <b>{username}</b>
            </h1>
            <h1 className=" self-start text-xl">{email}</h1>
            <h1 className="text-xl self-start">Posts: {posts.length}</h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center pt-4 gap-4 w-4/5 ">
        <h1 className="text-2xl p-4 text-center border border-black shadow-md shadow-black w-fit self-center">
          Posts by {username.split(" ")[0]}
        </h1>

        <div className="ml-32 md:ml-42 w-screen bg-white flex p-8 place-content-center ">
          <PostData
            usersInfo={posts.map((post, index) => ({
              id: post.id,
              content: post?.content?.substring(0, 200),
              header: post.header,
              userId: post.userId,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
