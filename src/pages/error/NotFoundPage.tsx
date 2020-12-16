import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex">
        <div className="m-auto text-center text-3xl">
          <div>404</div>
          <div>Not Found</div>
        </div>
      </div>
    </DefaultLayout>
  );
}
