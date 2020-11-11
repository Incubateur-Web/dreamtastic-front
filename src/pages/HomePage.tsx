import React, { useEffect, useState } from "react";
import DreamCard from "../components/DreamCard";
import DefaultLayout from "../layouts/DefaultLayout";
import { generateDream } from "../mocks/Dream";
import { Dream } from "../types/API/DreamType";
import Loader from "../components/Loader";
import LeftMenuTemplate from "../layouts/LeftMenuTemplate";

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
    <LeftMenuTemplate>
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
        <div className="w-1/4 text-gray-900">
          <div className="bg-white rounded-3xl h-64 overflow-hidden ">
            <div className="text-lg py-2 text-center bg-cover">
              Widget title
            </div>
            <div>other links</div>
          </div>
        </div>
      </div>
    </LeftMenuTemplate>
  );
}
