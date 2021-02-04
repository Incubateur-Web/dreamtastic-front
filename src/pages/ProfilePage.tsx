import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useLocation, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { generateUser } from "../mocks/User";
import { User } from "../types/API/UserType";
import Loader from "../components/Loader";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProfile from "../components/user/UserProfile";
import EditUser from "../components/user/EditUser";

type Props = {
  editing?: boolean;
};

export default function ProfilePage({ editing }: Props) {
  const { params } = useRouteMatch<{ id: string }>();
  const { state } = useLocation();
  const [user, setUser] = useState<User | undefined>(state as User);

  useEffect(() => {
    //TODO: Fetch from api
    if (!user) {
      setUser(generateUser());
    }
    console.log(user);
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
      <div className="bg-gray-100 rounded text-black w-full py-4 px-8">
        <div className="text-2xl w-full border-b-1 border-gray-400 pb-2">
          {user.firstName} {user.lastName}
          {editing ? (
            ""
          ) : (
            <Link to={{ pathname: `/profile/1564465/edit`, state: user }}>
              <FontAwesomeIcon
                className="ml-2 cursor-pointer"
                icon={faUserEdit}
              />
            </Link>
          )}
        </div>
        {editing ? <EditUser user={user} /> : <UserProfile user={user} />}
      </div>
    </DefaultLayout>
  );
}
