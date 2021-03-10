import React from "react";
import { UserCard } from "./UserCard";

export function TopUsers() {
  return (
    <div className="container mx-auto space-y-4">
      <span className="text-violet text-lg font-bold">LE TOP UTILISATEURS</span>
      <div className="flex space-x-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
