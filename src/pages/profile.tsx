import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useLocation, useRouteMatch } from "react-router";
import { User } from "../types/API/UserType";
import Loader from "../components/Loader";
import axios from "axios";
import UserMainInformations from "../components/user/UserMainInformations";

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
      <div>{/* liste de ses rêves */}</div>
    </DefaultLayout>
  );
}
