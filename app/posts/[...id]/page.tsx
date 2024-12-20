import Image from "next/image";
import { Metadata } from "next";

import postData from "@/app/actions/postData";
import { ParamsType } from "@/app/users/[id]/page";

export const generateMetadata = async (params: {
  params: ParamsType;
}): Promise<Metadata> => {
  const id = params.params.id[0];
  const post = await postData(id);
  const header = post?.map((data) => data.header)[0];

  if (!header.length) {
    return { title: "post with no header" };
  }
  return { title: header };
};

export default async function Page(params: { params: { id: string } }) {
  const postId = params.params.id[0];
  const post = await postData(postId);

  const { userImage, content, header, userName } = post.map((data) => ({
    content: data.content,
    userImage: data.user.image,
    userName: data.user.username,
    header: data.header,
  }))[0];

  return (
    <section className="flex flex-col overflow-x-hidden ">
      <div className="flex flex-col ml-12 ">
        <h1 className="text-xl self-center p-1 mt-4 text-center">Author</h1>
        <div className="flex flex-col self-center items-center p-1 mt-4 mr-6 rounded-full border border-black w-1/12">
          <Image
            className="rounded-full"
            width={300}
            height={300}
            src={userImage}
            alt="alt text"
          ></Image>
        </div>

        <h1 className="text-xl self-center p-1 mt-4 text-center">{userName}</h1>
      </div>
      <section className="flex w-screen mt-4  gap-8 flex-col items-center rounded-2xl">
        <h1 className="text-2xl p-4 border border-black shadow-lg shadow-black">
          Topic : {header}
        </h1>
      </section>

      <div className="flex flex-col rounded-2xl mt-10 p-4 gap-4 items-center mb-6">
        <p className="text-xl w-2/3 tracking-widest break-words ">
          Content: {content}
        </p>
      </div>
    </section>
  );
}
