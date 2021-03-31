import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useLocation, useRouteMatch } from "react-router";
import { User } from "../types/API/UserType";
import Loader from "../components/Loader";
import axios from "axios";
import UserMainInformations from "../components/user/UserMainInformations";
import { DreamPreviewCard } from "../components/dreams/DreamPreviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button/Button";

type Props = {
  editing?: boolean;
};

export default function ProfilePage({ editing }: Props) {
  const { params } = useRouteMatch<{ id: string }>();
  const { state } = useLocation();
  const [profileUser, setProfileUser] = useState<User | undefined>(
    state as User
  );
  const [error, setError] = useState(null);

  const fetchUser = () => {
    setError(null);
    axios
      .get(`/users/${params.id}`)
      .then(({ data }) => {
        console.log(data.user);
        setProfileUser(data.user);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  useEffect(() => {
    if (!profileUser) {
      fetchUser();
    }
  }, [params, profileUser]);

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
      <div className="flex flex-wrap justify-around mx-2 md:mx-6 lg:mx-12 xl:mx-20 2xl:mx-24 mt-4">
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
      </div>
    </DefaultLayout>
  );
}
