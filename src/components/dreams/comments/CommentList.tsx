import Axios from "axios";
import { useQuery } from "../../../hooks/useQuery";
import { Comment } from "../../../types/API/CommentType";
import CommentCard from "./CommentCard";

type Props = { dreamId: string };

export default function CommentList({ dreamId }: Props) {
  const { data } = useQuery(`/dreams/${dreamId}/comments`, Axios.get);

  if (!data) return <></>;
  return (
    <>
      {data.comments.map((comment: Comment) => {
        return <CommentCard comment={comment} key={comment.id} />;
      })}
    </>
  );
}
