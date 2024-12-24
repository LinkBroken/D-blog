import Image from "next/image";
import navigate from "../actions/navigate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Prop = {
  usersInfo: {
    username: string;
    email: string;
    image: string;
    id: number;
    age: number;
  }[];
};

function UsersData({ usersInfo }: Prop) {
  return (
    <div className=" grid grid-cols-2 gap-6 grow text-wrap justify-around place-items-center pt-3 mt-8  text-slate-700 ">
      {usersInfo ? (
        usersInfo.map((user, index) => (
          <Card
            className="flex border p-8 border-solid flex-col gap-4 items-center lg:p-7 hover:-rotate-1  rounded-2xl bg-white shadow-lg shadow-black hover:border-green-400 w-4/5"
            key={index}
          >
            <CardTitle className=" text-center">{user.username}</CardTitle>
            <CardContent className="p-2">
              <Image
                src={user.image}
                alt="userimage"
                className=" rounded-lg w-2/3 h-32"
                width={600}
                height={500}
              />{" "}
            </CardContent>
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
          </Card>
        ))
      ) : (
        <h1>No Posts Yet</h1>
      )}
    </div>
  );
}

export default UsersData;
