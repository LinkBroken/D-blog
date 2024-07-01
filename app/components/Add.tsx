"use client";

import { redirect } from "next/navigation";
import { forwardRef } from "react";

interface PropTypes {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// eslint-disable-next-line react/display-name
export const Add = forwardRef<HTMLInputElement, PropTypes>(
  ({ onClick }, ref) => {
    return (
      <div className="mt-4 flex flex-col gap-4 w-1/3 items-center rounded-xl bg-slate-600">
        <div className="flex flex-col gap-3 items-center w-3/4">
          <h1 className="text-white w-1/5 mt-7 underline">Content</h1>
          <textarea
            ref={ref}
            className="border-stone-900 border-solid mt-4 w-3/4 outline-none text-white bg-slate-700 p-2 rounded-md"
            type="text"
          />
        </div>
        <button
          className="p-2 mb-3 w-44 rounded-2xl text-white bg-blue-500"
          onClick={onClick}
        >
          Add
        </button>
      </div>
    );
  }
);
