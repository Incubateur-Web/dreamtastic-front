import React, { ReactNode } from "react";
import { User } from "../../types/API/UserType";

type Props = {
  user: User;
  actions: ReactNode;
  processing?: boolean;
};

export default function UserItem({ user, actions, processing }: Props) {
  return (
    <tr
      className={`hover:bg-gray-200 bg-opacity-50 transition duration-150 ${
        processing ? "opacity-50" : ""
      }`}
    >
      <td className="py-2 pl-2">{user.id}</td>
      <td className="py-2">{user.username}</td>
      <td className="py-2">{user.lastConnection.toDateString()}</td>
      <td className="py-2">{actions}</td>
    </tr>
  );
}
