import React, { useContext, useState } from "react";
import { User } from "../../types/API/UserType";
import { UserContext } from "../../contexts/UserContext";
import ViewUserMainInformations from "./ViewUserMainInformations";
import EditUserInformations from "./EditUserInformations";

type Props = {
  profileUser: User;
};

export default function UserMainInformations({ profileUser }: Props) {
  const { user } = useContext(UserContext);
  const [editing, setEditing] = useState(false);

  const isConnectedUserProfile = () => {
    return user && profileUser ? profileUser.id === user.id : false;
  };

  return (
    <div className="mx-2 sm:mx-8 md:mx-24 lg:mx-56 xl:mx-80 2xl:mx-profile flex flex-col">
      {editing ? (
        <EditUserInformations
          profileUser={profileUser}
          onSubmit={() => {
            setEditing(false);
          }}
        />
      ) : (
        <ViewUserMainInformations
          profileUser={profileUser}
          isSameUser={isConnectedUserProfile()}
          onButtonClick={() => {
            setEditing(true);
          }}
        />
      )}
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
