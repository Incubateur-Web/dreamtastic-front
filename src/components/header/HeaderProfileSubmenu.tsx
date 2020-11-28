import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  visible: boolean;
  onDisconnection(): any;
};

export default function HeaderProfileSubmenu({
  visible,
  onDisconnection,
}: Props) {
  return (
    <div
      className={
        "absolute bg-gray-800 w-48 right-0 " + (visible ? "block" : "hidden")
      }
    >
      <div className="profile-submenu-link px-5 w-full py-2 hover:bg-white transition duration-150 hover:text-gray-800">
        <FontAwesomeIcon className="mr-1" icon={faUser} /> Mon compte
      </div>
      <div className="profile-submenu-link px-5 w-full py-2 hover:bg-white transition duration-150 text-orange-500">
        <FontAwesomeIcon className="mr-1" icon={faUserTie} /> Administration
      </div>
      <div className="profile-submenu-link px-5 py-2 hover:bg-white transition duration-150 hover:text-gray-800">
        <FontAwesomeIcon className="mr-1" icon={faCog} /> Paramètres
      </div>
      <div
        onClick={onDisconnection}
        className="profile-submenu-link px-5 py-2 hover:bg-white transition duration-150 hover:text-gray-800"
      >
        <FontAwesomeIcon className="mr-1" icon={faSignOutAlt} /> Déconnexion
      </div>
    </div>
  );
}
