import React from "react";
import { User } from "../../types/API/UserType";

type Props = {
  user: User;
};

export default function UserProfile({ user }: Props) {
  return (
    <table className="mt-4 text-left">
      <tbody>
        <tr>
          <th className="py-2">Création</th>
          <td className="px-4">{user.createdAt.toDateString()}</td>
        </tr>
        <tr>
          <th className="py-2">Dernière modifications</th>
          <td className="px-4">{user.updatedAt.toDateString()}</td>
        </tr>
        <tr>
          <th className="py-2">Dernière connexion</th>
          <td className="px-4">{user.lastConnection.toDateString()}</td>
        </tr>
        <tr>
          <th className="py-2">Nom d'utilisateur</th>
          <td className="px-4">{user.username}</td>
        </tr>
        <tr>
          <th className="py-2">Description</th>
          <td className="px-4 text-justify">{user.description}</td>
        </tr>
        <tr>
          <th className="py-2">Nombre de parutions</th>
          <td className="px-4">{user.dreams.length}</td>
        </tr>
      </tbody>
    </table>
  );
}
