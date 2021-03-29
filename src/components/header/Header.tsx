import React, { useContext } from "react";
import { HeaderContextProvider } from "../../contexts/HeaderContext";
import { UserContext } from "../../contexts/UserContext";
import { HeaderLogged } from "./HeaderLogged";
import { HeaderSignIn } from "./HeaderSignIn";
import logo from "../../assets/images/dreamtastic.png";
import logoShort from "../../assets/images/logo_short.png";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full sticky top-0 flex z-50 bg-gray-200 text-gray-900">
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
        <Link
          to="/dreams"
          className="my-auto mx-2 md:mx-6 hover:text-main transition duration-200"
        >
          Rêves
        </Link>
        <Link
          to="/"
          className="my-auto mx-2 md:mx-6 hover:text-main transition duration-200"
        >
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
}
