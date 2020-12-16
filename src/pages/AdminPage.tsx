import React, { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import UserList from "../components/user-management/UserList";

export default function AdminPage() {
  return (
    <DefaultLayout>
      <div className="text-center text-3xl mb-8">Admin page</div>
      <div className="flex flex-col md:flex-row">
        <UserList />
        <div className="w-full md:w-1/2">Dreams</div>
      </div>
    </DefaultLayout>
  );
}
