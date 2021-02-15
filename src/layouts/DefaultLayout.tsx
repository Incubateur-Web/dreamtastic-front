import React, { PropsWithChildren } from "react";
import Header from "../components/header/Header";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="bg-layout-color bg-fixed bg-cover min-h-screen text-white overflow-x-hidden flex flex-col">
      <Header />
      <div className="flex flex-1">{children}</div>
    </div>
  );
}
