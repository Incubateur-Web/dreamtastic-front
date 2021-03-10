import React, { PropsWithChildren } from "react";
import Header from "../components/header/Header";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen overflow-x-hidden py-10">
      <Header />
      <div>{children}</div>
    </div>
  );
}
