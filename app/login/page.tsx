
function Login() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl">
    <form className=" w-fit flex flex-col bg-slate-800 mt-4 self-center rounded-lg gap-4 items-center p-14">
        <label className="text-white">UserName</label>
        <input className=" rounded-md text-black text-center p-1" type="text" />
        <label className="text-white">Password</label>
        <input className=" rounded-md text-black text-center p-1" type="password" />
        <button className=" bg-blue-500 p-2 rounded-md text-white">Login</button>
    </form>
    </div>
  )
}

export default Login