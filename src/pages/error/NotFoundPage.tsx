import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import imageNotFound from "../../assets/images/notFound.svg";

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <div className="w-full flex-1 flex px-10 items-center">
        <div className="w-1/2">
          <img src={imageNotFound} alt="" />
        </div>
        <div className="w-1/2 text-7xl flex items-center justify-center">
          <div>404 Not Found</div>
        </div>
      </div>
    </DefaultLayout>
  );
}
