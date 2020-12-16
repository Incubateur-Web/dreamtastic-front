import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useLocation, useRouteMatch } from "react-router";
import { Dream } from "../types/API/DreamType";
import { generateDream } from "../mocks/Dream";

export default function ProfilePage() {
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
      <div>Mon Profil</div>
    </DefaultLayout>
  );
}
