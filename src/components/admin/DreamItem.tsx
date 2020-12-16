import React, { ReactNode } from "react";
import { Dream } from "../../types/API/DreamType";

type Props = {
  dream: Dream;
  actions: ReactNode;
  processing?: boolean;
};

export default function DreamItem({ dream, actions, processing }: Props) {
  return (
    <tr
      className={`hover:bg-gray-200 bg-opacity-50 transition duration-150 ${
        processing ? "opacity-50" : ""
      }`}
    >
      <td className="py-2 pl-2">{dream.id}</td>
      <td className="py-2">{dream.author.username}</td>
      <td className="py-2">{dream.createdAt.toDateString()}</td>
      <td className="py-2 pr-2">{actions}</td>
    </tr>
  );
}
