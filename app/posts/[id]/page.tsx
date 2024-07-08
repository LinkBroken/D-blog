
"use client"
import { useParams, usePathname } from "next/navigation";
import postData from "@/app/actions/postData";
import { useEffect, useState } from "react";
import userData from "@/app/actions/userData";
import Image from "next/image";
export default function Page() {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  const [data, setData] = useState({
    id: 0,
    header: "",
    content: "loading ...",
    userId: 0,
    username: ""

  });
  const path = useParams();
  useEffect(() => {

    async function fetchData() {
      const post = await postData(path.id)
      const user = await userData(path.id)
      console.log(post[0])
      // post ? console.log("") : null
      user.id == post.userId ?
        (() => {
          setData(post[0]);
          // console.log(post[0].user)
          setUserName(post[0].user.username);
          setUserImage(post[0].user.image)
          // console.log(post)
        })()
        : null
    }
    fetchData()
    // console.log(fetchData())
  }

    , [path.id])
  return (
    <div className="flex flex-col overflow-x-hidden ">
    <div className="flex flex-col ml-12 ">
    <h1 className="text-xl self-center p-1 mt-4 text-center">Author</h1>
    <div className="flex flex-col self-center items-center p-1 mt-4 mr-6 rounded-full border border-black w-1/12">
      <Image className="rounded-full" width={300} height={300} src={userImage} alt="alt text"/>
      </div>
      <h1 className="text-xl self-center p-1 mt-4 text-center">{userName}</h1>

    </div>
      <section className="flex w-screen mt-4  gap-8 flex-col items-center rounded-2xl">
        <h1 className="text-2xl p-4 border border-black shadow-lg shadow-black">Topic : {data.header} </h1>
        
        <ul className=" list-disc flex flex-col items-center gap-2">
        <h1 className="text-2xl ">Prerequsites:</h1>
          <li>{data.content.substring(0, 11)}</li>
          <li>{data.content.substring(0, 11)}</li>

        </ul>
      </section>

      <div className="flex flex-col rounded-2xl mt-10 p-4 gap-4 items-center mb-6">

        {/* <h1 className="text-2xl"> Post ID: {data.id}</h1> */}
        <h1 className="text-xl w-2/3 tracking-wider">Content: {data.content}</h1>

      </div>
    </div>
  )
}