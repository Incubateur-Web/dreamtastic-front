import { type } from "os";
import React from "react";
import { generateComment } from "../mocks/Comment";
import { Comment } from "../types/API/CommentType";

type CommentCardProps = {
  comment: Comment;
};

export default function CommentCard(
  { comment }: CommentCardProps = { comment: generateComment() }
) {
  return (
    <div className="w-full">
      <div>
        <span></span>
      </div>
    </div>
  );
}
