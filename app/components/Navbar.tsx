import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-evenly text-white bg-teal-700 p-2">
        <h1 className="self-center text-2xl text-white ">D-blog</h1>
        <Link className="hover:bg-teal-800 p-2 rounded-xl" href="/">Home</Link>
        <Link className="hover:bg-teal-800 p-2 rounded-xl " href="/posts">Posts</Link>
        <Link className="hover:bg-teal-800 p-2 rounded-xl " href="/users">Users</Link>
        <Link className="bg-teal-700 hover:bg-teal-800  p-2 rounded-xl " href="/login">Login</Link>

        </div>
    )
}