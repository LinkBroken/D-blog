import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-evenly text-white bg-slate-800 p-2">
        <Link className="hover:bg-slate-700 p-2 rounded-xl" href="/posts">Posts</Link>
        <Link className="hover:bg-slate-700 p-2 rounded-xl" href="/profile">Profile</Link>
        <Link className="hover:bg-slate-700 p-2 rounded-xl" href="/favorites">Favorite Posts</Link>
        </div>
    )
}