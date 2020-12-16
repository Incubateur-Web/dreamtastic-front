import React, { useEffect, useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useLocation, useRouteMatch } from "react-router";
import { generateUser } from "../mocks/User";
import { User } from "../types/API/UserType";
import Loader from "../components/Loader";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfilePage() {
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
      <div className="bg-gray-300 rounded text-black w-full py-4 px-8">
        <div className="text-2xl w-full border-b-1 border-gray-400 pb-2">
          {user.firstName} {user.lastName}
          <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faUserEdit} />
        </div>
        <table className="mt-4 text-left">
          <tr>
            <th className="py-2">Création</th>
            <td className="px-4">{user.createdAt.toDateString()}</td>
          </tr>
          <tr>
            <th className="py-2">Dernière modifications</th>
            <td className="px-4">{user.updatedAt.toDateString()}</td>
          </tr>
          <tr>
            <th className="py-2">Dernière connexion</th>
            <td className="px-4">{user.lastConnection.toDateString()}</td>
          </tr>
          <tr>
            <th className="py-2">Nom d'utilisateur</th>
            <td className="px-4">{user.username}</td>
          </tr>
          <tr>
            <th className="py-2">Description</th>
            <td className="px-4 text-justify">{user.description}</td>
          </tr>
          <tr>
            <th className="py-2">Nombre de parutions</th>
            <td className="px-4">{user.dreams.length}</td>
          </tr>
        </table>
      </div>
    </DefaultLayout>
  );
}
