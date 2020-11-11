import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

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
      className={clsx(
        [visible ? "block" : "hidden"],
        "absolute bg-gray-800 w-48 right-0 "
      )}
    >
      <div className="profile-submenu-link px-5 w-full py-2 hover:bg-white transition duration-150 hover:text-gray-800">
        <FontAwesomeIcon className="mr-1" icon={faUser} /> Mon compte
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
