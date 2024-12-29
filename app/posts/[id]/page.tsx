import Image from "next/image";
import { Metadata } from "next";

import postData from "@/app/actions/postData";
import { ParamsType } from "@/app/users/[id]/page";
import prisma from "@/lib/prisma";

export async function generateStaticParams(): Promise<any> {
  const postsInfo = await prisma?.post.findMany();
  if (!postsInfo?.length) {
    return null;
  }
  return postsInfo?.map((post) => ({ id: String(post.id) }));
}


export const generateMetadata = async (params: {
  params: ParamsType;
}): Promise<Metadata> => {
  const id = params.params.id[0];
  const post = await postData(id);
  const header = post?.map((data) => data.header)[0];

  if (!header?.length) {
    return { title: "post with no header" };
  }
  return { title: header };
};

export default async function Page(params: { params: { id: string } }) {
  const postId = params.params.id[0];
  const post = await postData(postId);

  const { avatar, content, title, userName, image } = post.map((data) => ({
    title: data.header,
    content: data.content,
    image: data.image,
    avatar: data.user.image,
    userName: data.user.username,
  }))[0];

  return (
    <section className="flex flex-col items-center ">
      <div className="flex flex-col items-center ">
        <h1 className="text-xl self-center p-1 mt-4 text-center">Author</h1>
        <div className="flex flex-col self-center items-center p-1 mt-4 mr-6 rounded-full border border-black w-1/12">
          <Image
            className="rounded-full"
            width={300}
            height={300}
            src={avatar}
            alt="alt text"
          ></Image>
        </div>

        <h1 className="text-xl self-center p-1 mt-4 text-center">{userName}</h1>
      </div>
      <section className="flex w-screen mt-4  gap-8 flex-col items-center rounded-2xl">
        <h1 className="text-2xl p-4 border border-black shadow-lg shadow-black">
          Topic : {title}
        </h1>
        <Image width={1216} height={768} src={image} alt={`${userName} blog post with the title ${title}`}/>
      </section>

      <div className="flex flex-col rounded-2xl mt-10 p-4 gap-4 items-center mb-6">
        <p className="text-xl  md:w-2/3 tracking-widest break-words ">
          Content: {content}
        </p>
      </div>
    </section>
  );
}
