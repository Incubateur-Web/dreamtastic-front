import Axios from "axios";
import React from "react";
import { useQuery } from "../../../hooks/useQuery";

type Props = { dreamId: string };

export default function CommentList({ dreamId }: Props) {
  const { data } = useQuery(`/dreams/${dreamId}/comments`, Axios.get);

  if (!data) return <></>;
  return <div>{JSON.stringify(data)}</div>;
}
