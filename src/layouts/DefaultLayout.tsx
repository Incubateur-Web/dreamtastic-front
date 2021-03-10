import React, { PropsWithChildren } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function DefaultLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="bg-layout-color bg-fixed bg-cover min-h-screen overflow-x-hidden">
      <Header />
      <div className="py-16">{children}</div>
      <Footer />
    </div>
  );
}
