import { Comment } from "../../../types/API/CommentType";
import format from "date-fns/format";
import fr from "date-fns/locale/fr";
import { DATE_FORMAT, TIME_FORMAT } from "../../../utils/date-utils";
import { useQuery } from "../../../hooks/useQuery";
import axios from "axios";

type CommentCardProps = {
  comment: Comment;
};

export default function CommentCard({ comment }: CommentCardProps) {
  const { data } = useQuery(
    `/users/${(comment.author as unknown) as string}`,
    axios.get
  );

  const createdAt = new Date(comment.createdAt);

  return (
    <div className="space-y-2 mb-8" key={comment.id}>
      <div className="flex justify-between items-center text-sm">
        <div className="flex justify-between items-center space-x-3">
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          <div className="">{data?.user?.name}</div>
        </div>
        <span>
          Publié le {format(createdAt, DATE_FORMAT, { locale: fr })} à{" "}
          {format(createdAt, TIME_FORMAT, { locale: fr })}
        </span>
      </div>
      <div className="bg-white shadow-comment-card p-4 rounded-lg text-sm md:text-base">
        {comment.content}
      </div>
    </div>
  );
}
