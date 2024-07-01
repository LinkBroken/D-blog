
"use client"
import { useParams, usePathname } from "next/navigation";
import postData from "@/app/actions/postData";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState({
    id: 0,
    content: '',
    userId: 0
  })
  const path = useParams();
  useEffect(() => {
    async function fetchData() {
      const post = await postData(path.id);
      console.log(post)
      setPosts(post[0]);

    }
    fetchData()
  }

    , [path.id])

  return (
    <div className="flex flex-col items-center">
    <div className="mt-10 flex flex-col p-5 gap-4 rounded-lg w-1/2 bg-slate-500  text-white items-center ">
      <h1>Post Number {posts.id}</h1>
      <h1>Posted by user {posts.userId}</h1>
      <h1 className="text-center ">{posts.content}</h1>
    </div>
  </div>
  )
}