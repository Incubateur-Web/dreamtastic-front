import React from "react";
import HeaderLink from "./HeaderLink";
import HeaderProfile from "./HeaderProfile";

export default function Header() {
  return (
    <div className="header-container block shadow-header md:flex px-4 text-lg bg-blue-800 sticky top-0">
      <div className="flex md:flex-row flex-col flex-1">
        <div className="text-2xl mx-2 my-auto">Dreamtastic</div>
        <div className="flex flex-col md:flex-row w-full text-center justify-between md:justify-start">
          <HeaderLink path={"/"} text={"First link"} />
          <HeaderLink path={"/"} text={"Second link"} />
          <HeaderLink path={"/"} text={"Third link"} />
        </div>
      </div>
      <div className="mx-2 px-2 flex-initial w-full md:w-auto flex">
        <HeaderProfile />
      </div>
    </div>
  );
}
