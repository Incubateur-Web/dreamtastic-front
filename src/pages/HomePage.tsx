import React, { useEffect, useState } from "react";
import DreamCard from "../components/DreamCard";
import DefaultLayout from "../layouts/DefaultLayout";
import { generateDream } from "../mocks/Dream";
import { Dream } from "../types/API/DreamType";
import Loader from "../components/Loader";
import { TopicWidget } from "../components/widgets/TopicWidget";

export default function HomePage() {
  const [dreams, setDreams] = useState<Array<Dream>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //TODO : fetch dreams use react query or
    // create custom hooke to get loading state of this query
    // to avoid double state on every components querying data from API
    const dreamList = [];
    for (let i = 0; i < 10; i++) {
      dreamList.push(generateDream());
    }
    setDreams(dreamList);
    setLoading(false);
  }, []);

  return (
    <DefaultLayout>
      <img
        src="https://s3-us-east-2.amazonaws.com/orbitz-media/blog/wp-content/uploads/2017/01/15174438/Yi-Peng-Festival-of-Lights.jpg"
        alt=""
        className="hidden md:block h-64 w-full bg-white rounded-3xl overflow-hidden object-cover object-center"
      />
      <div className="py-5 flex space-x-5">
        <div className="space-y-4 w-3/4">
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
        <TopicWidget />
      </div>
    </DefaultLayout>
  );
}
