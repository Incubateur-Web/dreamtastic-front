import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useQuery } from "../hooks/useQuery";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { TopDreamsBanner } from "../components/TopDreamsBanner";
import { WelcomeCard } from "../components/WelcomeCard";
import { UserCard } from "../components/UserCard";

export default function HomePage() {
  const { data, loading, error } = useQuery("/dreams", Axios.get);

  if (error)
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { code: 500, error: { message: "Failed to fetch dreams" } },
        }}
      />
    );

  return (
    <DefaultLayout>
      <TopDreamsBanner />
      <WelcomeCard />

      <div className="container mx-auto space-y-4">
        <span className="text-violet text-lg font-bold">
          LE TOP UTILISATEURS
        </span>
        <div className="flex space-x-4">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </DefaultLayout>
  );
}
