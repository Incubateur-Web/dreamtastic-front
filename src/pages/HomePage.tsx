import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { Dream } from "../types/API/DreamType";
import Loader from "../components/Loader";
import { TopicWidget } from "../components/widgets/TopicWidget";
import { useQuery } from "../hooks/useQuery";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import DreamCard from "../components/dreams/DreamCard";

export default function HomePage() {
  const { data, loading, error } = useQuery("/dreams", Axios.get);

  if (error)
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { code: 500, error: error },
        }}
      />
    );

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
              {data?.dreams.map((dream: Dream) => {
                // return <div key={dream.id}>{JSON.stringify(dream)}</div>; //Add dreams when model is not broken
                return <DreamCard key={dream.id} {...dream} />;
              })}
            </>
          )}
        </div>
        <TopicWidget />
      </div>
    </DefaultLayout>
  );
}
