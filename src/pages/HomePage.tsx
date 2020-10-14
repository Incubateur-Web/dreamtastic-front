import React, { useEffect, useState } from "react";
import DreamCard from "../components/DreamCard";
import DefaultLayout from "../layouts/DefaultLayout";
import { generateDream } from "../mocks/Dream";
import { Dream } from "../types/API/DreamType";
import Loader from "../components/Loader";

export default function HomePage() {
  const [dreams, setDreams] = useState<Array<Dream>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //TODO : fetch dreams
    const dreamList = [];
    for (let i = 0; i < 10; i++) {
      dreamList.push(generateDream());
    }
    setDreams(dreamList);
    setLoading(false);
  }, []);

  return (
    <DefaultLayout>
      <div className="space-y-4">
        {loading ? (
          <Loader />
        ) : (
          <>
            {dreams.map((dream, index) => {
              return <DreamCard key={index} dream={dream} />;
            })}
          </>
        )}
      </div>
    </DefaultLayout>
  );
}
