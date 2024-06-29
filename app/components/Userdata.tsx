"use client"

import Button from "./Button"

function Userdata({usersInfo}) {
  return (
    
    <div className="flex flex-col text-wrap w-1/2 gap-4 items-center">
    {usersInfo.map((post,index)=>(
   <div key={index}>
   
   <h1>{post.content}</h1>
   </div>)
    )}
    
    </div>
  )
}

export default Userdata