"use client"

import Image from "next/image"
import navigate from "../actions/navigate"
import removeUser from "../actions/userRemoval"
import Button from "./Button"
import navigateUser from "../actions/navigateUsers"

type Prop =
    { usersInfo: { username: string, email: string,image:string, id: string,posts:[] }[] }

function Userdata({ usersInfo }: Prop) {

    return (
        <div className=" grid grid-cols-2 gap-6  w-full text-wrap justify-around place-items-center pt-3 mt-8   text-slate-700 ">
            {usersInfo ? usersInfo.map((user, index) => (
                <div className="flex flex-col  gap-4 justify-evenly items-center p-8 w-1/3 bg-slate-100 hover:bg-slate-200 rounded-2xl" key={index}>

                    <h1 className=" text-xl ">{user.username}</h1>
                    <Image src={user.image} alt="userimage" className=" rounded-lg" width={600} height={500} />
                    <Button className=" p-2 rounded-xl border border-black" onClick={() => navigateUser(user.id)}>User Info</Button>


                </div>
                )
            ) : <h1>No Posts Yet</h1>}

        </div>
    )

}

export default Userdata