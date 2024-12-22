"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser as icon,
  faNavicon as burgerMenu,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [menuClick, setMenuClick] = useState<boolean | null>(false);

  return (
    <nav className="flex fixed top-0 left-0 z-40 w-32 h-screen transition-transform  sm:translate-x-0 flex-col justify-between text-white bg-teal-700 p-0 md:p-4 lg:justify-evenly">
      <FontAwesomeIcon
        onClick={() => setMenuClick(!menuClick)}
        className="w-32 md:hidden"
        icon={burgerMenu}
        size="3x"
      />
      <div
        className={`${
          menuClick
            ? "grid absolute grid-cols-1 place-items-start pl-6 items-center justify-between bg-inherit h-1/2 w-2/3 top-12 left-0 text-2xl duration:300 transition-all duration-2000 ease-in-out md:flex md:static md:justify-between md:flex-col md:p-0 "
            : "hidden relative md:gap-4  md:p-0 md:flex md:flex-col md:justify-between md:w-2/3 md:text-xl"
        }`}
      >
        <Link className="hover:bg-teal-800 p-2 rounded-xl lg:inline" href="/">
          Home
        </Link>
        <Link
          className="hover:bg-teal-800 p-2 rounded-xl lg:inline "
          href="/posts"
        >
          Posts
        </Link>
        <Link
          className=" hover:bg-teal-800 p-2 rounded-xl lg:inline "
          href="/users"
        >
          Authors
        </Link>
      </div>
      <Button
        className=" mb-10 shadow-md shadow-black bg-inherit text-white hover:text-black"
        variant={"secondary"}
      >
        <Link href="/add">Add a post</Link>
      </Button>
    </nav>
  );
}
