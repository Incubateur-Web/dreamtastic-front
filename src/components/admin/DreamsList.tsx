import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSpinner,
  faTimes,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import UserItem from "./UserItem";
import { Dream } from "../../types/API/DreamType";
import DreamItem from "./DreamItem";

export default function DreamList() {
  const [dreamsList, setDreamsList] = useState<Array<Dream>>([]);
  const [processingDreams, setProcessingDreams] = useState<Array<Dream>>([]);

  const handleDeleteDream = (dream: Dream) => {
    setProcessingDreams((prevState) => [...prevState, dream]);
    setTimeout(() => {
      setDreamsList((prevState) =>
        prevState.filter((oneDream) => oneDream.id !== dream.id)
      );
      setProcessingDreams((prevState) =>
        prevState.filter((oneDream) => oneDream.id !== dream.id)
      );
    }, 1500);
  };

  return (
    <div className="w-full md:w-1/2 py-2 px-4 md:mx-2 my-2 md:my-0 bg-gray-300 rounded text-black">
      <div className="mb-2">
        <FontAwesomeIcon className="mr-2" icon={faCloud} />
        Dreams
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pl-2">ID</th>
            <th>Author</th>
            <th>Created at</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {dreamsList.map((dream) => {
            const processing = processingDreams.includes(dream);
            const actions = processing ? (
              <>
                <FontAwesomeIcon
                  className="animate-spin mr-1 cursor-pointer text-red-500 hover:text-red-300"
                  icon={faSpinner}
                />
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  onClick={() => handleDeleteDream(dream)}
                  className="mr-1 cursor-pointer text-red-500 hover:text-red-300"
                  icon={faTimes}
                />
              </>
            );

            return (
              <DreamItem
                key={dream.id}
                dream={dream}
                actions={actions}
                processing={processing}
              />
            );
          })}
        </tbody>
      </table>
      {dreamsList.length === 0 && (
        <div className="text-center w-full">No dreams</div>
      )}
    </div>
  );
}
