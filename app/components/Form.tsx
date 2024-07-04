"use client"
function Form({ action }) {

  
  return (
    <>
      <div className="flex flex-col items-center">
        <form
          action={action}
          className="flex flex-col mt-20 gap-4 w-1/5 ml-5 items-center  bg-slate-100 hover:bg-slate-200  rounded-xl "
        >

          <div className="flex flex-col items-center gap-2">

            <div className="flex flex-col gap-3 items-center w-3/4">
              <label htmlFor="username">User Name</label>
              <input className="text-black border border-solid border-black rounded-2xl text-center" type="text" name="username" required />
            </div>
            <div className="flex flex-col gap-3 items-center w-3/4">
              <label htmlFor="age">Age</label>
              <input className="text-black border border-solid border-black rounded-2xl text-center" type="text" name="age" required />
            </div>
            <div className="flex flex-col gap-3 items-center w-3/4">
              <label htmlFor="image">Insert Image Link</label>
              <input className="text-black border border-solid border-black rounded-2xl text-center" type="text" name="image" required />
            </div>
            <div className="flex flex-col gap-3 items-center w-3/4">
              <label htmlFor="email">Email</label>
              <input className="text-black border border-solid border-black rounded-2xl text-center" type="text" name="email" required />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center w-3/4 mb-4">
            <label htmlFor="header">Header</label>
            <input className="text-black border border-solid border-black rounded-2xl text-center" name="header" required />
          </div>
          <div className="flex flex-col gap-3 items-center w-3/4 mb-4">
            <label htmlFor="post">Post</label>
            <textarea className="text-black border border-solid border-black rounded-2xl text-center" name="posts" required />
          </div>
          <button type="submit" className="p-2 mb-3 w-44 rounded-2xl text-white bg-slate-500">
            Add Post
          </button>
          {/* {action.success ? <h1 className=" text-green-300 p-4 rounded-2xl">Post Added successfully!</h1> : <><h1 className=" text-red-300 p-4 rounded-2xl">User or email already exists</h1></>} */}
        </form>
      </div>
    </>
  )
}

export default Form