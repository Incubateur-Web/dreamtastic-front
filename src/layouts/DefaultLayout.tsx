import React, { PropsWithChildren } from "react";
import Header from "../components/header/Header";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="bg-layout-color bg-fixed bg-cover min-h-screen text-white overflow-x-hidden">
      <Header />
      <div>{children}</div>
    </div>
  );
}
