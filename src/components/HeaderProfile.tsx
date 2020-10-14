import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export default function HeaderProfile() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div className="mx-auto flex cursor-pointer transition duration-150">
      {isConnected ? (
        <div className="hover:opacity-75 flex">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              alt="profileAvatar"
              src={process.env.PUBLIC_URL + "/logo512.png"}
            />
          </div>
          <div className="my-auto mx-1">
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      ) : (
        <>
          <div
            onClick={(e) => setIsConnected((value) => !value)}
            className="active-bounce-button px-3 py-1 border rounded hover:bg-white transition duration-150 hover:text-blue-800"
          >
            Connexion <FontAwesomeIcon icon={faSignInAlt} />
          </div>
        </>
      )}
    </div>
  );
}
