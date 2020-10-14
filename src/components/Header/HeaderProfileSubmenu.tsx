import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

export default function HeaderProfileSubmenu() {
  return (
    <div className="absolute bg-gray-800">
      <div className="px-5 w-full py-2">
        <FontAwesomeIcon className="mr-1" icon={faUser} /> Mon compte
      </div>
      <div className="px-5 py-2">
        <FontAwesomeIcon className="mr-1" icon={faCog} /> Paramètres
      </div>
      <div className="px-5 py-2">
        <FontAwesomeIcon className="mr-1" icon={faSignOutAlt} /> Déconnexion
      </div>
    </div>
  );
}
