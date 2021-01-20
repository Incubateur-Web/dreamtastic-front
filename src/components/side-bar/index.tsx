import React from "react";

export default function LeftSideMenu() {
  return (
    <div className="flex sticky top-0 max-h-screen ml-4 p-4">
      <div className="w-48 flex flex-col bg-white rounded-3xl py-8 px-1">
        <img
          src="https://thispersondoesnotexist.com/image"
          alt="User Avatar"
          className="w-24 h-24 bg-gray-400 rounded-full mx-auto"
        />

        <div className="flex flex-col flex-1 justify-center mx-auto space-y-4">
          <div className="px-2 py-2 bg-teal-300 rounded-md">Reves</div>
          <div className="px-2 py-2 bg-teal-300 rounded-md">Cauchemar</div>
        </div>
      </div>
    </div>
  );
}
