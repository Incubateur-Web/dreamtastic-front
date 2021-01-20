import React, { useState } from "react";
import { User } from "../../types/API/UserType";
import UserItem from "./UserItem";
import { faSpinner, faTimes, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generateUser } from "../../mocks/User";

const fakeUsers: Array<User> = [
  generateUser(),
  generateUser(),
  generateUser(),
  generateUser(),
];

export default function UserList() {
  const [userList, setUserList] = useState<Array<User>>(fakeUsers); // initial state
  const [processingUsers, setProcessingUser] = useState<Array<User>>([]);

  const handleDeleteUser = (user: User) => {
    setProcessingUser((prevState) => [...prevState, user]);
    setTimeout(() => {
      setUserList((prevState) =>
        prevState.filter((oneUser) => oneUser.id !== user.id)
      );
      setProcessingUser((prevState) =>
        prevState.filter((oneUser) => oneUser.id !== user.id)
      );
    }, 1500);
  };

  return (
    <div className="w-full md:w-1/2 py-2 px-4 md:mx-2 my-2 md:my-0 bg-gray-300 rounded text-black">
      <div className="mb-2 text-lg">
        <FontAwesomeIcon className="mr-2" icon={faUsers} />
        Utilisateurs
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pl-2">ID</th>
            <th>Nom d'utilisateur</th>
            <th>Dernière connexion</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            const processing = processingUsers.includes(user);
            const actions = processing ? (
              <>
                <FontAwesomeIcon
                  className="animate-spin mr-1 cursor-pointer text-red-500 hover:text-red-300"
                  icon={faSpinner}
                />
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  onClick={() => handleDeleteUser(user)}
                  className="mr-1 cursor-pointer text-red-500 hover:text-red-300"
                  icon={faTimes}
                />
              </>
            );

            return (
              <UserItem
                key={user.id}
                user={user}
                actions={actions}
                processing={processing}
              />
            );
          })}
        </tbody>
      </table>
      {userList.length === 0 && (
        <div className="text-center w-full">No users</div>
      )}
    </div>
  );
}
