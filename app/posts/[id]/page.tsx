
"use client"
import { useParams, usePathname } from "next/navigation";
import postData from "@/app/actions/postData";
import { useEffect, useState } from "react";
import userData from "@/app/actions/userData";

export default function Page() {
  const [userName, setUserName] = useState("");
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
      post ? console.log("") : null
      user.id == post.userId ?
        (() => {
          setData(post[0]);
          setUserName(user[0].username);
          // console.log(post)
        })()
        : null
    }
    fetchData()
    // console.log(fetchData())
  }

    , [path.id])
  return (
    <>
            <h1 className="text-xl"> Author: {userName}</h1>

      <section className="flex w-screen mt-4  gap-8 flex-col items-center rounded-2xl">
        <h1 className="text-2xl"> {data.header} </h1>
        <h1 className="text-2xl self-start">Prerequsites</h1>
        <ul className=" list-disc flex flex-col gap-2">
          <li>{data.content.substring(0, 11)}</li>
          <li>{data.content.substring(0, 11)}</li>

        </ul>
      </section>

      <div className="flex flex-col rounded-2xl mt-10 p-4 gap-4 items-center mb-6">

        <h1 className="text-2xl"> Post ID: {data.id}</h1>
        {/* <h1 className="text-2xl"> Posted by: </h1> */}
        <h1 className="text-xl w-1/3">Content: {data.content}</h1>

      </div>
    </>
  )
}