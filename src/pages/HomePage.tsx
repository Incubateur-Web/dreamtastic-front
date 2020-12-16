import React, { useEffect, useState } from "react";
import DreamCard from "../components/DreamCard";
import DefaultLayout from "../layouts/DefaultLayout";
import { generateDream } from "../mocks/Dream";
import { Dream } from "../types/API/DreamType";
import Loader from "../components/Loader";
import { TopicWidget } from "../components/widgets/TopicWidget";
import { useQuery } from "../hooks/useQuery";
import Axios from "axios";

export default function HomePage() {
  const { data, loading } = useQuery("http://localhost/dreams", Axios.get);
  console.log(data);

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
              {data?.dreams.map((dream: Dream, index: number) => {
                return <div>{JSON.stringify(dream)}</div>; //Add dreams when model is not broken
                // return <DreamCard key={index} dream={dream} />;
              })}
            </>
          )}
        </div>
        <TopicWidget />
      </div>
    </DefaultLayout>
  );
}
