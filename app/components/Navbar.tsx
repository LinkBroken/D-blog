"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser as icon,
  faNavicon as burgerMenu,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Navbar() {
  const [menuClick, setMenuClick] = useState<boolean | null>(false);

  return (
    <nav className="flex justify-between text-white bg-teal-700 p-4 lg:justify-evenly">
      <FontAwesomeIcon
        onClick={() => setMenuClick(!menuClick)}
        className="w-8 md:hidden"
        icon={burgerMenu}
      />
      <div
        className={`${
          menuClick
            ? "grid absolute grid-cols-1 place-items-start pl-6 items-center justify-between bg-inherit h-1/2 w-2/3 top-12 left-0 text-2xl duration:300 transition-all duration-2000 ease-in-out md:flex md:static md:justify-between md:flex-row md:p-0 "
            : "hidden relative md:flex-row md:p-0 md:flex md:justify-between md:w-2/3 md:text-xl"
        }`}
      >
        <h1 className="self-center text-2xl text-white md:inline ">D-blog</h1>
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
          Users
        </Link>

        <Link
          className="hidden bg-teal-700 hover:bg-teal-800  p-2 rounded-xl lg:inline "
          href="/login"
        >
          Login
        </Link>
      </div>
      <Link className="flex items-center gap-4" href="/account">
        <span className="hidden md:inline"> Account</span>
        <FontAwesomeIcon icon={icon} size="lg" className="w-8 md:hidden" />
      </Link>
    </nav>
  );
}
