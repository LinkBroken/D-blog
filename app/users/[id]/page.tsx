
"use client"
import { useParams, usePathname } from "next/navigation";
import postData from "@/app/actions/postData";
import { useEffect, useState } from "react";
import userData from "@/app/actions/userData";
import Image from "next/image";
import Button from "@/app/components/Button";

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
    <>
    <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col  rounded-2xl mt-10 p-4 gap-4 w-1/6 border border-black shadow-md shadow-black text-slate-900 font-sans hover:scale-105 items-center mb-6">


      <h1 className=" text-2xl">{data.username}</h1>
      <Image height="300" className=" rounded-2xl"  width="400" src={data.image} alt={`${data.username} image`}/>
      <h1 className="self-start text-xl" >Age: {data.age}</h1>
      <h1 className=" self-start text-xl">Email: {data.email}</h1>
      <h1 className="text-xl self-start">Posts: {data.posts.length}</h1>
    </div>

    </div>
    {data.posts.map((post, index) =>
         (
          <div
            className="flex border border-solid flex-col gap-4 items-center p-7 w-1/4 hover:scale-105 hover:bg-slate-100 rounded-2xl bg-white shadow-lg shadow-black"
            key={index}
          >
            <h1>{post.content.substring(0, 200)} .....</h1>
            <Button
              className=" self-end p-2 rounded-xl border border-black"
              onClick={() => navigate(post.id)}
            >
              Read More
            </Button>
            {/* <Button className="self-center rounded-md hover:bg-red-500 p-3 bg-red-600 text-white" onClick={() => removeUser(post.content)}>Remove</Button> */}
          </div>
        ))}
    </>
  )
}