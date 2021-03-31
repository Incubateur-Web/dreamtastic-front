import React, { useCallback, useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useLocation, useParams } from "react-router";
import { User } from "../types/API/UserType";
import Loader from "../components/Loader";
import axios from "axios";
import UserMainInformations from "../components/user/UserMainInformations";
import { DreamPreviewCard } from "../components/dreams/DreamPreviewCard";
import Button from "../components/button/Button";

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const [profileUser, setProfileUser] = useState<User | undefined>(
    state as User
  );
  const [error, setError] = useState(null);

  const fetchUser = useCallback(() => {
    setError(null);
    axios
      .get(`/users/${id}`)
      .then(({ data }) => {
        console.log(data.user);
        setProfileUser(data.user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, [id]);

  useEffect(() => {
    if (!profileUser) {
      fetchUser();
    }
  }, [profileUser, fetchUser]);

  if (error) {
    return (
      <DefaultLayout>
        <div className="flex flex-col text-center justify-center">
          <div>Une erreur est survenue : {error}</div>
          <div className="mt-2">
            <Button onClick={fetchUser} uppercase extraClasses="px-4 py-1">
              Réessayer
            </Button>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  if (profileUser === undefined) {
    return (
      <DefaultLayout>
        <Loader />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <UserMainInformations profileUser={profileUser} />
      <div className="container mx-auto space-y-4 px-3 md:px-0">
        <div className="flex mt-12 flex-nowrap overflow-x-auto md:flex-wrap md:overflow-hidden pb-3 md:pb-0">
          <DreamPreviewCard />
          <DreamPreviewCard />
          <DreamPreviewCard />
          <DreamPreviewCard />
          <DreamPreviewCard />
          <DreamPreviewCard />
        </div>
      </div>
    </DefaultLayout>
  );
}
