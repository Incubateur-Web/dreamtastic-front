import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { displayLocaleDate } from "../../utils/dates";
import React, { useContext } from "react";
import { User } from "../../types/API/UserType";
import { UserContext } from "../../contexts/UserContext";
import Button from "../button/Button";

type Props = {
  profileUser: User;
};

export default function UserMainInformations({ profileUser }: Props) {
  const { user } = useContext(UserContext);

  const isConnectedUserProfile = () => {
    return user && profileUser ? profileUser.id === user.id : false;
  };
  return (
    <div className="mx-2 sm:mx-8 md:mx-24 lg:mx-56 xl:mx-80 2xl:mx-profile flex flex-col">
      <div className="flex">
        <div className="w-16 h-16 rounded-full bg-gray-600 bg-opacity-40" />
        <div className="flex ml-2 mr-4">
          <div className="my-auto font-bold text-4xl">{profileUser.name}</div>
        </div>
        {isConnectedUserProfile() ? (
          <div className="flex">
            <Button
              uppercase
              icon={<FontAwesomeIcon icon={faPen} />}
              extraClasses="my-auto px-2 md:px-3 py-1"
            >
              Editer mon profil
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
      <small className="block italic mt-2 text-xs">
        Dernière connexion le {displayLocaleDate(profileUser.lastConnection)}
      </small>
      <div className="mt-2">
        {profileUser.description
          ? profileUser.description
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </div>
      <div className="flex font-bold mt-4">
        <div>
          <span className="text-profile-cyan text-6xl">
            {profileUser.dreams
              ? profileUser.dreams.length
              : Math.floor(Math.random() * 30)}
          </span>
          <span className="ml-2 text-xl">Rêves</span>
        </div>
        <div className="ml-4 sm:ml-8 md:ml-20">
          <span className="text-dark-violet text-6xl">0</span>
          <span className="ml-2 text-xl">Rêves anonymes</span>
        </div>
      </div>
    </div>
  );
}
