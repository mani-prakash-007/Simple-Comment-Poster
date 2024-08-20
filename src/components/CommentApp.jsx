import { useState } from "react";
import { CommentInput } from "./CommentInput";
import { CommentList } from "./CommentList";

export const CommentApp = () => {
  //States
  const [comment, setComment] = useState([]);
  //Function 2 way Communication from Parent to Child
  const addComment = (newComment) => {
    setComment([...comment, newComment]);
  };
  return (
    <div>
      <CommentInput addComment={addComment} />
      <CommentList commentList={comment} />
    </div>
  );
};
