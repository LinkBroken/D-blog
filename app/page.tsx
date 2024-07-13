// "use client"
import Image from "next/image";
import home from "./assets/images/Homepage.png";
import Link from "next/link";
import prisma from "./api/_base";
import Userdata from "./components/postData";
import { Button } from "@/components/ui/button";
export default async function Home() {
  // const [post, setPost] = useState(false)
  const posts = await prisma.post.findMany({
    where: {
      OR: [
        {
          id: 1,
        },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ],
    },
  });
  const json = await fetch('http://localhost:3000/api/hello');
  console.log(json)
  return (
    <>
      <div className="flex flex-col gap-8 p-8">
        <div className="pt-8 flex justify-center gap-4 items-center">
          <div className="flex flex-col gap-4 w-1/2">
            <h1 className=" text-slate-700 text-2xl ">
              Partnering With a Blogging Platform Provider
              {/* <Button>Hello</Button> */}
            </h1>
            <p className="w-3/4">
              Preparing to procure managed services to support or enhance your
              blogging platform? You are not alone: 62% of organizations plan to
              outsource some or all of their IT functions in 2022, according to
              the Foundry. Before going down that route, its wise to gather your
              requirements and consider the services you want from a managed
              blogging services provider (MBSP).
            </p>
            <p className="w-3/4">
              There are several basic considerations when choosing your service
              provider, including: the MBSP’s experience, the types of support
              and services they offer, and how their service level agreements
              are structured. You’ll also want to know the MBSP’s specific
              domains of expertise and how they correlate with your needs. This
              ensures that individuals can efficiently create blog posts and
              engage with different perspectives on D-Blog
            </p>
            <Button className="w-1/6 shadow-md shadow-black" variant={"secondary"}>
              <Link href="/posts">Read More</Link>
            </Button>
          </div>
          <Image src={home} width={400} height={400} alt="description" />
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full items-center p-8">
        <h1 className="text-3xl border-black border p-3 shadow-md shadow-black ">
          Topics
        </h1>
        <div className="flex w-full justify-evenly text-white bg-teal-400 p-6">
          <h1 className="text-3xl ">Tech</h1>
          <h1 className="text-3xl ">Fitness</h1>
          <h1 className="text-3xl ">Business</h1>
          <h1 className="text-3xl ">Mental Health</h1>
        </div>
      </div>
      { posts&&
      <>
      <div className="flex flex-col ml-4">
        <h1 className="text-3xl border-black border p-3 shadow-md shadow-black w-fit self-center ">
          Examples
        </h1>

        {<Userdata usersInfo={posts}></Userdata>}
      </div>
      <div className="flex flex-col items-center">
      <Button className="w-1/8 mb-10 shadow-md shadow-black" variant={"secondary"}>
              <Link href="/add">Add a post</Link>
            </Button>
      </div>
      </>
      }
    </>
  );
}
