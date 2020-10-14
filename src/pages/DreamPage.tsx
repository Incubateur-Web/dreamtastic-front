import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import DreamCard from "../components/DreamCard";
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

  return (
    <DefaultLayout>
      {!dream ? (
        <DreamCardSkeleton />
      ) : (
        <div className="space-y-4">
          <DreamCard dream={dream} />
        </div>
      )}
    </DefaultLayout>
  );
}
