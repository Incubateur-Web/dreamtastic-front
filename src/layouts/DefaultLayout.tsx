import React, { PropsWithChildren } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen overflow-x-hidden py-10">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
