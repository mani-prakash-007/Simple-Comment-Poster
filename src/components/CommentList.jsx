import React from "react";

export const CommentList = ({ commentList }) => {
  return (
    <div className="border border-black w-80 min-h-60 m-5 px-5">
      <h1 className="font-bold text-center m-3 text-xl">Comment Display</h1>
      <div className="py-3">
        {commentList.map((data, index) => {
          return (
            <li key={index} className="ml-1 break-words break-all py-1">
              {data}
            </li>
          );
        })}
      </div>
    </div>
  );
};
