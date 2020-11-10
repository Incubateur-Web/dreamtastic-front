import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import HeaderProfile from "./HeaderProfile";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  //TODO : manage the page active state
  const [activeLink, setActiveLink] = useState(0);
  const [collapsedHeader, setCollapsedHeader] = useState(false);

  const Links = (
    <div className="flex flex-col md:flex-row w-full text-center justify-between md:justify-start">
      <HeaderLink
        path={"/"}
        text={"First link"}
        active={activeLink === 1}
        onClick={() => setActiveLink(1)}
      />
      <HeaderLink
        path={"/"}
        text={"Second link"}
        active={activeLink === 2}
        onClick={() => setActiveLink(2)}
      />
      <HeaderLink
        path={"/"}
        text={"Third link"}
        active={activeLink === 3}
        onClick={() => setActiveLink(3)}
      />
    </div>
  );

  const Profile = (
    <div className="mx-2 px-2 flex-initial w-full flex md:w-auto">
      <HeaderProfile />
    </div>
  );

  return (
    <div className="header-container block md:flex px-4 text-lg sticky top-0">
      <div className="flex md:flex-row flex-col flex-1">
        <div className="text-2xl mx-2 my-auto flex justify-between">
          <div className="my-2">Dreamtastic</div>
          <div className="flex md:hidden mx-2 px-2 flex-initial">
            <FontAwesomeIcon
              className="cursor-pointer my-auto"
              icon={faBars}
              onClick={() => setCollapsedHeader((prevState) => !prevState)}
            />
          </div>
        </div>
        <div className="hidden md:flex">{Links}</div>
        {collapsedHeader ? (
          <div className="flex flex-col md:hidden"> {Links} </div>
        ) : (
          ""
        )}
      </div>
      <div className="hidden md:flex">{Profile}</div>
      {collapsedHeader ? (
        <div className="flex flex-col md:hidden"> {Profile} </div>
      ) : (
        ""
      )}
    </div>
  );
}
