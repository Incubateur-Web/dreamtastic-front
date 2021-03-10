import Axios from "axios";
import { useQuery } from "../../../hooks/useQuery";
import CommentCard from "../../CommentCard";
import { Comment } from "../../../types/API/CommentType";

type Props = { dreamId: string };

export default function CommentList({ dreamId }: Props) {
  const { data } = useQuery(`/dreams/${dreamId}/comments`, Axios.get);

  if (!data) return <></>;
  return (
    <div className="p-4 text-white">
      <div className="flex mb-2">
        <div className="w-10 h-10 rounded-full bg-white bg-opacity-40 mr-3" />
        <div className="my-auto w-full rounded-full flex bg-white bg-opacity-25 px-3 py-2">
          <input
            type="text"
            className="placeholder-white bg-transparent focus:outline-none text-white flex-1"
            placeholder="Ecrivez un commentaire..."
          />
        </div>
      </div>
      {data.comments.map((comment: Comment) => {
        return <CommentCard key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
