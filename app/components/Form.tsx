"use client";
function Form({ action }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <form
          action={action}
          className="flex flex-col mt-10 gap-4 w-1/2 ml-5 items-center bg-teal-800 text-white  rounded-xl "
        >
          <div className="flex flex-col w-full items-center gap-2 ">
            <div className="flex w-full justify-evenly">
              <div className="flex flex-col gap-3 items-center w-3/4">
                <label htmlFor="username">User Name</label>
                <input
                  className="text-black border text-2xl border-solid w-3/4 border-black rounded-md text-center"
                  type="text"
                  name="username"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 items-center w-3/4">
                <label htmlFor="age">Age</label>
                <input
                  className="text-black border text-2xl border-solid w-1/6 border-black rounded-md text-center"
                  type="number"
                  name="age"
                  required
                />
              </div>
            </div>
            <div className="flex w-full justify-evenly">
              <div className="flex flex-col gap-3 items-center  w-3/4">
                <label htmlFor="image">Insert Image Link</label>
                <input
                  className="text-black border border-solid text-2xl w-3/4 border-black rounded-md text-center"
                  type="text"
                  name="image"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 items-center w-3/4">
                <label htmlFor="email">Email</label>
                <input
                  className="text-black border text-2xl border-solid border-black rounded-md text-center w-3/4"
                  type="text"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center w-3/4 mb-4">
            <label htmlFor="header" className="text-xl">
              Title
            </label>
            <input
              className="text-black border border-solid text-2xl border-black rounded-md text-center w-3/4"
              name="header"
              required
            />
          </div>
          <div className="flex flex-col gap-3 items-center w-3/4 mb-4">
            <label htmlFor="post" className="text-xl">
              Post
            </label>
            <textarea
              className="text-black border border-solid text-2xl border-black rounded-2xl text-center w-full h-64"
              name="posts"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2 mb-3 w-44 rounded-2xl text-white bg-teal-900 hover:bg-teal-700"
          >
            Add Post
          </button>
          {/* {action.success ? <h1 className=" text-green-300 p-4 rounded-2xl">Post Added successfully!</h1> : <><h1 className=" text-red-300 p-4 rounded-2xl">User or email already exists</h1></>} */}
        </form>
      </div>
    </>
  );
}

export default Form;
