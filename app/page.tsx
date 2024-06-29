"use client"
import Image from "next/image";
import home from "./assets/images/Homepage.png";
import Link from "next/link";
import { isAuthenticated } from "./pages/api/auth/route";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  useLayoutEffect(() => {
    const isAuth = isAuthenticated;
    if(!isAuth){
      redirect("/posts")
    }
  }, [])
  return (
    <div className="pt-8 flex justify-center gap-4 items-center">
      <div className="flex flex-col gap-4 w-1/2">
        <h1 className=" text-slate-700 text-2xl ">
          Partnering With a Blogging Platform Provider
        </h1>
        <p className="w-3/4">
          Preparing to procure managed services to support or enhance your
          blogging platform? You are not alone: 62% of organizations plan to
          outsource some or all of their IT functions in 2022, according to the
          Foundry. Before going down that route, its wise to gather your
          requirements and consider the services you want from a managed
          blogging services provider (MBSP).
        </p>
        <p className="w-3/4">
          There are several basic considerations when choosing your service
          provider, including: the MBSP’s experience, the types of support and
          services they offer, and how their service level agreements are
          structured. You’ll also want to know the MBSP’s specific domains of
          expertise and how they correlate with your needs. This ensures that
          individuals can efficiently create blog posts and engage with
          different perspectives on D-Blog
        </p>
        <Link
          href="/posts"
          className="p-4 text-lg border-slate-700 border self-start"
        >
          Read More
        </Link>
      </div>
      <Image src={home} width={400} height={400} alt="description" />
    </div>
  );
}
