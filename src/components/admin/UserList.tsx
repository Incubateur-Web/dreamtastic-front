import React, { useEffect, useState } from "react";
import { User } from "../../types/API/UserType";
import UserItem from "./UserItem";
import { faSpinner, faTimes, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserList() {
  const [userList, setUserList] = useState<Array<User>>([]); // initial state
  const [processingUsers, setProcessingUser] = useState<Array<User>>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [displayedUsers, setDisplayedUsers] = useState<Array<User>>([]);

  const handleDeleteUser = (user: User) => {
    setProcessingUser((prevState) => [...prevState, user]);
    setTimeout(() => {
      setUserList((prevState) =>
        prevState.filter((oneUser) => oneUser.id !== user.id)
      );
      setProcessingUser((prevState) =>
        prevState.filter((oneUser) => oneUser.id !== user.id)
      );
      setDisplayedUsers((prevState) =>
        prevState.filter((oneUser) => oneUser.id !== user.id)
      );
    }, 1500);
  };

  useEffect(() => {
    if (!searchValue) {
      setDisplayedUsers(userList);
    } else {
      const newUserList = userList.filter((user) => {
        return (
          user.id.includes(searchValue) ||
          user.lastName.includes(searchValue) ||
          user.firstName.includes(searchValue) ||
          user.username.includes(searchValue)
        );
      });
      setDisplayedUsers(newUserList);
    }
  }, [searchValue]);

  useEffect(() => {
    //TODO : fetch from API
    setDisplayedUsers(userList);
  }, []);

  return (
    <div className="w-full md:w-1/2 py-2 px-4 md:mx-2 my-2 md:my-0 bg-gray-300 rounded text-black">
      <div className="flex justify-between mb-2">
        <div className="my-auto text-lg">
          <FontAwesomeIcon className="mr-2" icon={faUsers} />
          Utilisateurs
        </div>
        <div className="flex">
          <input
            type="text"
            defaultValue={searchValue}
            onChange={(e) => {
              setSearchValue(e.currentTarget.value);
            }}
            className="px-2 rounded"
            placeholder="Rechercher"
          />
        </div>
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
          {displayedUsers.map((user) => {
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
