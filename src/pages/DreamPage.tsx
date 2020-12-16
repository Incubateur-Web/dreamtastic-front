import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useLocation, useRouteMatch } from "react-router";
import CommentCard from "../components/CommentCard";
import DreamCard from "../components/dreams/DreamCard";
import DreamCardSkeleton from "../components/skeleton/DreamCardSkeleton";
import { useQueryLazy } from "../hooks/useQueryLazy";
import DefaultLayout from "../layouts/DefaultLayout";
import { Dream } from "../types/API/DreamType";

/**
 * display a single dream
 */
export default function DreamPage() {
  const { params } = useRouteMatch<{ id: string }>();
  const { state } = useLocation();
  const [dream] = useState<Dream | undefined>(state as Dream);
  const { query, data, error } = useQueryLazy(
    "http://localhost/dream/".concat(params.id),
    Axios.get
  );

  console.log(data);

  useEffect(() => {
    //TODO: Fetch from api
    if (!dream) {
      query();
    }
  }, [dream, query]);

  if (error)
    return (
      <Redirect to={{ pathname: "/error", state: { code: 500, error } }} />
    );

  if (!dream) {
    return (
      <DefaultLayout>
        <DreamCardSkeleton />
      </DefaultLayout>
    );
  }
  return (
    <DefaultLayout>
      <div className="space-y-6">
        <DreamCard {...dream} />
        <div className="text-black bg-gray-200 rounded-lg divide-y-2 divide-gray-400">
          {dream.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
