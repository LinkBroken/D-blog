"use client";

import navigate from "../actions/navigate";
import removeUser from "../actions/removeUser";
import Button from "./Button";

type Prop = {
  usersInfo: { content: string; id: string }[];
};

function Userdata({ usersInfo }: Prop) {
  return (
    <div className="flex flex-wrap text-wrap gap-x-7 gap-y-40 mb-10   pt-8 mt-8 w-10/12 text-slate-800">
      {usersInfo.map((post, index) =>
        post.id ? (
          <div
            className="flex border border-solid flex-col gap-4 items-center p-7 w-1/4 hover:scale-105 hover:bg-slate-100 rounded-2xl bg-white shadow-lg shadow-black"
            key={index}
          >
            <h1>{post.content.substring(0, 200)} .....</h1>
            <Button
              className=" self-end p-2 rounded-xl border border-black"
              onClick={() => navigate(post.id)}
            >
              Read More
            </Button>
            {/* <Button className="self-center rounded-md hover:bg-red-500 p-3 bg-red-600 text-white" onClick={() => removeUser(post.content)}>Remove</Button> */}
          </div>
        ) : (
          <h1 key={index}>No data available</h1>
        )
      )}
    </div>
  );
}

export default Userdata;
