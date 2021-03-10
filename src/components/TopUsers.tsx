import React from "react";
import { UserCard } from "./UserCard";

export function TopUsers() {
  return (
    <div className="container mx-auto space-y-4 px-3 md:px-0">
      <span className="text-violet text-lg font-bold">LE TOP UTILISATEURS</span>
      <div className="flex space-x-4 flex-nowrap overflow-x-auto md:overflow-hidden pb-3 md:pb-0">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
