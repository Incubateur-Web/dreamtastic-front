import { Comment } from "../types/API/CommentType";

type CommentCardProps = {
  comment: Comment;
};

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <div className="flex relative">
      <div className="h-full mt-2 ml-2">
        <div className="rounded-full w-10 h-10 bg-gray-500"></div>
        <div className="text-xs text-gray-600">{comment.author.username}</div>
      </div>
      <div className="px-6 py-2 text-justify my-auto">{comment.content}</div>
    </div>
  );
}
