
"use client"
import { useParams, usePathname } from "next/navigation";
import postData from "@/app/actions/postData";
import { useEffect, useState } from "react";
import userData from "@/app/actions/userData";
import Image from "next/image";

export default function Page() {
  const [data, setData] = useState({
    id: 0,
    username: "string",
    age: 0,
    image: "",
    email: "string",
    posts:[]

  });
  const path = useParams();
  useEffect(() => {
    async function fetchData() {
      const user = await userData(path.id)

      setData(user[0])
    }
    fetchData()
  }

    , [path.id])
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col rounded-2xl mt-10 p-4 gap-4 w-1/4 bg-slate-50 text-slate-900 font-sans hover:bg-slate-200 items-center mb-6">


      <h1 className=" text-2xl">{data.username}</h1>
      <Image height="300" className=" rounded-2xl"  width="400" src={data.image} alt={`${data.username} image`}/>
      <h1 className="self-start text-2xl" >Age: {data.age}</h1>
      <h1 className=" self-start text-xl">Email: {data.email}</h1>
      <h1 className="text-xl self-start">Posts: {data.posts.length}</h1>
    </div>
    </div>
  )
}