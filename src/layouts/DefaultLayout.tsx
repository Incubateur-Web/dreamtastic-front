import React, { PropsWithChildren } from "react";
import Header from "../components/Header";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="bg-gradient-to-t bg-fixed from-back-light to-back-dark min-h-screen text-white">
      <Header />

      <div className="container mx-auto">{children}</div>
    </div>
  );
}
