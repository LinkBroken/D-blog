"use client"

import navigate from "../actions/navigate"
import removeUser from "../actions/removeUser"
import Button from "./Button"
function Userdata({ usersInfo,direct }) {

  return (

    <div className="flex flex-wrap  text-wrap justify-around  gap-y-40 gap-x-10 items-center pt-8 mt-8 bg-slate-600 w-screen text-white ">
      {usersInfo.map((post, index) => (
        <div className="flex flex-col gap-4 items-center p-10 bg-slate-500 hover:bg-slate-400 rounded-2xl" key={index}>

          <h1>{post.content}</h1>
          <Button className=" p-2 rounded-xl border border-black" onClick={()=> navigate(post.id)}>Read More</Button>
          <Button className=" self-start p-1 rounded-md hover:bg-red-500 bg-red-600" onClick={()=> removeUser(post.content)}>Remove</Button>
          

        </div>)
      )}

    </div>
  )
}

export default Userdata