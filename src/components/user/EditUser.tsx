import React from "react";
import { User } from "../../types/API/UserType";

type Props = {
  user: User;
};

export default function EditUser({ user }: Props) {
  return (
    <div>
      <form>
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col m-4">
            <label htmlFor="email" className="px-1 text-lg">
              Nom
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="bg-white placeholder-gray-500 border rounded-md overflow-hidden text-xl p-2"
              placeholder="Remplissez votre nom"
              defaultValue={user.lastName}
            />
          </div>
          <div className="w-1/2 flex flex-col m-4">
            <label htmlFor="email" className="px-1 text-lg">
              Prénom
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="bg-white placeholder-gray-500 border rounded-md overflow-hidden text-xl p-2"
              placeholder="Remplissez votre prénom"
              defaultValue={user.firstName}
            />
          </div>
        </div>
        <div className="flex flex-col m-4">
          <label htmlFor="email" className="px-1 text-lg">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="bg-white placeholder-gray-500 border rounded-md overflow-hidden text-xl p-2"
            placeholder="Remplissez votre description"
            defaultValue={user.description}
          />
        </div>
      </form>
    </div>
  );
}
