import React, { useContext, useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useLocation, useRouteMatch } from "react-router";
import { User } from "../types/API/UserType";
import Loader from "../components/Loader";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { displayLocaleDate } from "../utils/dates";

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
  const { user } = useContext(UserContext);

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

  const isConnectedUserProfile = () => {
    return user && profileUser ? profileUser.id === user.id : false;
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
      <div className="mx-0 sm:mx-8 md:mx-24 lg:mx-56 xl:mx-80 2xl:mx-96 flex flex-col">
        <div className="flex">
          <div className="w-20 h-20 rounded-full bg-gray-800 bg-opacity-40" />
          <div className="flex ml-2 mr-4">
            <div className="my-auto font-bold text-4xl">{profileUser.name}</div>
          </div>
          {isConnectedUserProfile() ? (
            <div className="flex">
              <button className="my-auto uppercase bg-dark-violet hover:bg-light-violet transition duration-200 text-white rounded-full px-2 md:px-3 py-1 focus:outline-none">
                <FontAwesomeIcon icon={faPen} />{" "}
                <span className="hidden md:inline-block">
                  Editer mon profil
                </span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          Dernière connexion : {displayLocaleDate(profileUser.lastConnection)}
        </div>
      </div>
      <div>{/* liste de ses rêves */}</div>
    </DefaultLayout>
  );
}
