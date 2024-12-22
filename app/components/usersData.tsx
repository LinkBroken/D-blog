import Image from "next/image";
import navigate from "../actions/navigate";
import { Button } from "@/components/ui/button";

type Prop = {
  usersInfo: {
    username: string;
    email: string;
    image: string;
    id: number;
    age: number;
  }[];
};

function Usersdata({ usersInfo }: Prop) {
  return (
    <div className=" grid grid-cols-3 gap-6  w-full text-wrap justify-around place-items-center pt-3 mt-8 ml-32 md:ml-42  text-slate-700 ">
      {usersInfo ? (
        usersInfo.map((user, index) => (
          <div
            className=" flex flex-col  gap-4 justify-evenly items-center p-8 w-1/2 border border-black shadow-md shadow-black  hover:bg-zinc-50   hover:scale-z-125 rounded-2xl  hover:border-green-400"
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
            <form
              action={async () => {
                "use server";
                await navigate({ route: "users", id: String(user.id)! });
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
        ))
      ) : (
        <h1>No Posts Yet</h1>
      )}
    </div>
  );
}

export default Usersdata;
