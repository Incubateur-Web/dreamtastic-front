import React, { PropsWithChildren } from "react";
import LeftSideMenu from "../components/side-bar";

export default function LeftMenuTemplate({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div className="flex h-full bg-blue-night">
      <LeftSideMenu />
      <div className="py-4 pr-12 container m-auto">{children}</div>
    </div>
  );
}
