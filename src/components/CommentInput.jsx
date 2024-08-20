import { useRef } from "react";

export const CommentInput = (props) => {
  //Reference
  const inputRef = useRef();
  //Function
  const handleClick = () => {
    props.addComment(inputRef.current.value);
  };

  return (
    <div className="border border-black w-80 m-5 flex justify-center">
      <div className="m-5">
        <h1 className="text-center text-xl font-bold">Comment Input</h1>
        <input
          type=""
          className="border border-black w-52 m-3 px-3 py-1"
          ref={inputRef}
        />
        <br />
        <button
          type="button"
          className="border border-black ml-14 p-1 hover:bg-black hover:text-white active:scale-90 rounded-xl"
          onClick={handleClick}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};
