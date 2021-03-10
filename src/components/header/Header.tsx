import React, { useContext } from "react";
import { HeaderContextProvider } from "../../contexts/HeaderContext";
import { UserContext } from "../../contexts/UserContext";
import { HeaderLogged } from "./HeaderLogged";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderSignIn } from "./HeaderSignIn";
import logo from "../../assets/images/dreamtastic.png";
import logoShort from "../../assets/images/logo_short.png";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full sticky top-0 flex z-50 bg-gray-300 text-gray-900">
      <div className="w-2/3 flex my-auto">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width="150"
            height="75"
            className="hidden md:flex md:ml-32 mr-10"
          />
          <img
            src={logoShort}
            alt="logoShort"
            width="50"
            className="flex md:hidden ml-2 mr-10"
          />
        </Link>
        <Link to="/" className="my-auto mx-2 md:mx-6">
          Rêves
        </Link>
        <Link to="/" className="my-auto mx-2 md:mx-6">
          Utilisateurs
        </Link>
      </div>
      <div className="py-4 w-1/3 my-auto flex justify-center header-connection text-white text-center">
        <div className="flex w-full justify-around">
          <div className="my-auto cursor-pointer border-b-2 border-main border-opacity-75">
            Soumettre un rêve
          </div>
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
  );

  return (
    <div className="bg-white bg-opacity-20 block md:flex text-lg sticky top-0 text-white z-50">
      <div className="relative flex-1">
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
        <div className="flex justify-center flex-1 md:absolute top-0 left-1/2 right-1/2 bottom-0">
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}
