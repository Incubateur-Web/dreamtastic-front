import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useLocation, useRouteMatch } from "react-router";
import CommentList from "../components/dreams/comments/CommentList";
import DreamCard from "../components/dreams/DreamCard";
import DreamCardSkeleton from "../components/skeleton/DreamCardSkeleton";
import { useQueryLazy } from "../hooks/useQueryLazy";
import DefaultLayout from "../layouts/DefaultLayout";
import { Dream } from "../types/API/DreamType";
import { TopicWidget } from "../components/widgets/TopicWidget";
import Loader from "../components/Loader";

/**
 * display a single dream
 */
export default function DreamPage() {
  const { params } = useRouteMatch<{ id: string }>();
  const { state } = useLocation();
  const [dream, setDream] = useState<Dream | undefined>(state as Dream);
  const { query, data, error } = useQueryLazy(
    `/dreams/${params.id}`,
    Axios.get
  );

  useEffect(() => {
    if (!dream) {
      query();
    }
  }, [dream, query]);

  useEffect(() => {
    !dream && setDream(data?.dream as Dream);
  }, [dream, data]);

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
      <div className="py-5 flex space-x-5">
        <div className="space-y-4 w-full flex">
          <TopicWidget />
          <div className="flex flex-col w-2/4 px-4 my-0">
            <DreamCard {...dream} />
            <div className="text-black bg-gray-200 rounded-lg divide-y-2 divide-gray-400">
              <CommentList dreamId={params.id} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
