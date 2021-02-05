import React, { useContext } from "react";
import { HeaderContextProvider } from "../../contexts/HeaderContext";
import { UserContext } from "../../contexts/UserContext";
import { HeaderLogged } from "./HeaderLogged";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderSignIn } from "./HeaderSignIn";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white bg-opacity-20 block md:flex text-lg sticky top-0 text-white z-50">
      <div className="relative flex-1">
        <div className="flex justify-center flex-1 md:absolute top-0 left-1/2 right-1/2 bottom-0">
          <HeaderMenu />
        </div>
        <div className="flex justify-between">
          <div className="px-4 py-4">
            <span className="font-pacifico text-3xl">Dreamtastic</span>
          </div>
          <div className="flex pr-4 justify-center items-center space-x-2">
            {user ? (
              <HeaderContextProvider>
                <HeaderLogged />
              </HeaderContextProvider>
            ) : (
              <HeaderSignIn />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
