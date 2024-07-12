"use client";

import Image from "next/image";
import Button from "./Button";
import navigateUser from "../actions/navigateUsers";

type Prop = {
  usersInfo: {
    username: string;
    email: string;
    image: string;
    id: string;
    posts: [];
  }[];
};

function Userdata({ usersInfo }: Prop) {
  return (
    <div className=" grid grid-cols-2 gap-6  w-full text-wrap justify-around place-items-center pt-3 mt-8   text-slate-700 ">
      {usersInfo ? (
        usersInfo.map((user, index) => (
          <div
            className=" flex flex-col  gap-4 justify-evenly items-center p-8 w-1/3 border border-black shadow-md shadow-black  hover:bg-zinc-50   hover:scale-x-105 rounded-2xl hover:-rotate-3 hover:scale-105"
            key={index}
          >
            <h1 className=" text-xl ">{user.username}</h1>
            <Image
              src={user.image}
              alt="userimage"
              className=" rounded-lg w-2/3 h-32"
              width={600}
              height={500}
            />
            <Button
              className=" rounded-xl border border-black p-3 text-xl self-start shadow-md shadow-black"
              onClick={() => navigateUser(user.id)}
            >
              About
            </Button>
          </div>
        ))
      ) : (
        <h1>No Posts Yet</h1>
      )}
    </div>
  );
}

export default Userdata;
