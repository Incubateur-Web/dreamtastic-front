import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useLocation, useRouteMatch } from "react-router";
import { generateUser } from "../mocks/User";
import { User } from "../types/API/UserType";
import Loader from "../components/Loader";

export default function ProfilePage() {
  const { params } = useRouteMatch<{ id: string }>();
  const { state } = useLocation();
  const [user, setUser] = useState<User | undefined>(state as User);

  useEffect(() => {
    //TODO: Fetch from api
    if (!user) {
      setUser(generateUser());
    }
  }, [params, user]);

  if (user === undefined) {
    return (
      <DefaultLayout>
        <Loader />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div>{user.username}</div>
    </DefaultLayout>
  );
}
