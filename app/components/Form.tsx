"use client"
function Form({action}) {
  return (
    <>
    <div className="flex flex-col items-first">
    <form
    action={action}
    className="flex flex-col mt-4 gap-4 w-1/5 ml-5 items-center rounded-xl bg-slate-600 text-white"
  >
    {/* <div className="flex flex-col gap-3 items-center w-3/4">
      <label htmlFor="id">ID</label>
      <input className="text-black rounded-2xl text-center" type="text" name="id" required />
    </div> */}
    <div className="flex flex-col items-center gap-2">

    <div className="flex flex-col gap-3 items-center w-3/4">
      <label htmlFor="username">User Name</label>
      <input className="text-black rounded-2xl text-center" type="text" name="username" required />
    </div>
    <div className="flex flex-col gap-3 items-center w-3/4">
      <label htmlFor="age">Age</label>
      <input className="text-black rounded-2xl text-center" type="text" name="age" required />
    </div>
    <div className="flex flex-col gap-3 items-center w-3/4">
      <label htmlFor="email">Email</label>
      <input className="text-black rounded-2xl text-center" type="text" name="email" required />
    </div>
    </div>
    <div className="flex flex-col gap-3 items-center w-3/4 mb-4">
      <label htmlFor="post">Post</label>
      <textarea className="text-black rounded-2xl text-center" name="posts" required />
    </div>
    <button type="submit" className="p-2 mb-3 w-44 rounded-2xl text-white bg-blue-500">
      Add Post
    </button>
    {action.success? <h1 className=" text-green-300 p-4 rounded-2xl">Post Added successfully!</h1>:<><h1 className=" text-red-300 p-4 rounded-2xl">User or email already exists</h1></>}
  </form>
  </div>
  </>
  )
}

export default Form