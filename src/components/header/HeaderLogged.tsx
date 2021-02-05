import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const HeaderLogged = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-full cursor-pointer py-1 flex">
      <div className="h-full flex  rounded-lg hover:bg-white hover:bg-opacity-10 justify-center px-5">
        <div className="align-middle flex flex-none space-x-3">
          <div className="w-10 h-10 rounded-full bg-white bg-opacity-40 my-auto" />
          <div className="my-auto">
            <span>{user.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
