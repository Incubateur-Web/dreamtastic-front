import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import HeaderProfile from "./HeaderProfile";

export default function Header() {
  //TODO : manage the page active state
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="header-container block shadow-header md:flex px-4 text-lg bg-blue-800 sticky top-0">
      <div className="flex md:flex-row flex-col flex-1">
        <div className="text-2xl mx-2 my-auto">Dreamtastic</div>
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
      </div>
      <div className="mx-2 px-2 flex-initial w-full md:w-auto flex">
        <HeaderProfile />
      </div>
    </div>
  );
}
