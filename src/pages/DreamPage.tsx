import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import CommentCard from "../components/CommentCard";
import DreamCard from "../components/dreams/DreamCard";
import DreamCardSkeleton from "../components/skeleton/DreamCardSkeleton";
import DefaultLayout from "../layouts/DefaultLayout";
import { generateDream } from "../mocks/Dream";
import { Dream } from "../types/API/DreamType";

/**
 * display a single dream
 */
export default function DreamPage() {
  const { params } = useRouteMatch<{ id: string }>();
  const { state } = useLocation();
  const [dream, setDream] = useState<Dream | undefined>(state as Dream);

  useEffect(() => {
    //TODO: Fetch from api
    if (!dream) {
      setDream(generateDream());
    }
  }, [params, dream]);

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
        <DreamCard dream={dream} />
        <div className="text-black bg-gray-200 rounded-lg divide-y-2 divide-gray-400">
          {dream.comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
