import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { displayLocaleDate } from "../../utils/dates";
import React from "react";
import { User } from "../../types/API/UserType";

type Props = {
  profileUser: User;
  onButtonClick: () => void;
  isSameUser: boolean;
};

export default function ViewUserMainInformations(props: Props) {
  return (
    <>
      <div className="flex">
        <div className="w-16 h-16 rounded-full bg-gray-600 bg-opacity-40" />
        <div className="flex ml-2 mr-4">
          <div className="my-auto font-bold text-4xl">
            {props.profileUser.name}
          </div>
        </div>
        {props.isSameUser ? (
          <div className="flex">
            <Button
              uppercase
              onClick={props.onButtonClick}
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
        Dernière connexion le{" "}
        {displayLocaleDate(props.profileUser.lastConnection)}
      </small>
      <div className="mt-2">
        {props.profileUser.description
          ? props.profileUser.description
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      </div>
    </>
  );
}
