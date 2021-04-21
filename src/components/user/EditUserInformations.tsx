import { User } from "../../types/API/UserType";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { displayLocaleDate } from "../../utils/dates";
import React, { FormEvent, useState } from "react";
import axios from "axios";

type Props = {
  profileUser: User;
  onSubmit: () => void;
};

export default function EditUserInformations(props: Props) {
  const [name, setName] = useState(props.profileUser.name);
  const [description, setDescription] = useState(
    props.profileUser.description ? props.profileUser.description : ""
  );

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await axios.patch(`/users/${props.profileUser.id}`, {
        name,
        description,
      });
    } catch (error) {
      console.error(error);
    }
    props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="relative w-16 h-16 rounded-full bg-gray-600 bg-opacity-40">
          <div className="absolute rounded-full bg-white shadow-lg bottom-0 -left-2 px-2 py-1 cursor-pointer transition duration-150 hover:bg-gray-200">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </div>
        <div className="flex ml-2 mr-4">
          <div className="my-auto font-bold text-4xl">
            <input
              type="text"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              className="outline-none transition duration-150 border-b-2 border-dark-violet focus:border-violet"
              defaultValue={name}
            />
          </div>
        </div>
        <div className="flex">
          <Button
            uppercase
            icon={<FontAwesomeIcon icon={faPen} />}
            extraClasses="my-auto px-2 md:px-3 py-1"
          >
            Enregistrer
          </Button>
        </div>
      </div>
      <small className="block italic mt-2 text-xs">
        Dernière connexion le{" "}
        {displayLocaleDate(props.profileUser.lastConnection)}
      </small>
      <div className="mt-2">
        <textarea
          rows={3}
          defaultValue={description}
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
          className="w-full p-2 border border-gray-300 transition duration-150 rounded outline-none focus:border-violet"
        />
      </div>
    </form>
  );
}
