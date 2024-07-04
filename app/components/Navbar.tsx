import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-evenly text-white bg-slate-800 p-2">
        <h1 className="self-center text-2xl text-slate-400 ">D-blog</h1>
        <Link className="hover:bg-slate-700 p-2 rounded-xl hover:underline" href="/">Home</Link>
        <Link className="hover:bg-slate-700 p-2 rounded-xl hover:underline" href="/posts">Posts</Link>
        <Link className="hover:bg-slate-700 p-2 rounded-xl hover:underline" href="/users">Users</Link>
        <Link className="bg-slate-700 hover:bg-slate-800 hover:underline p-2 rounded-xl " href="/login">Login</Link>

        </div>
    )
}