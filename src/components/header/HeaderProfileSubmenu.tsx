import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <Link
        to="/profile"
        className="profile-submenu-link px-5 w-full py-2 block hover:bg-white transition duration-150 hover:text-gray-800"
      >
        <FontAwesomeIcon className="mr-1" icon={faUser} /> Mon compte
      </Link>
      <Link
        to="/admin"
        className="profile-submenu-link px-5 py-2 w-full block hover:bg-white transition duration-150 text-yellow-500 hover:text-yellow-700"
      >
        <FontAwesomeIcon className="mr-1" icon={faUserTie} /> Administration
      </Link>
      <Link
        to="/"
        className="profile-submenu-link px-5 py-2 hover:bg-white block transition duration-150 hover:text-gray-800"
      >
        <FontAwesomeIcon className="mr-1" icon={faCog} /> Paramètres
      </Link>
      <div
        onClick={onDisconnection}
        className="profile-submenu-link px-5 py-2 hover:bg-white transition duration-150 hover:text-gray-800"
      >
        <FontAwesomeIcon className="mr-1" icon={faSignOutAlt} /> Déconnexion
      </div>
    </div>
  );
}
