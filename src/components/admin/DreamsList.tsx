import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Dream } from "../../types/API/DreamType";
import DreamItem from "./DreamItem";

export default function DreamList() {
  const [dreamsList, setDreamsList] = useState<Array<Dream>>([]);
  const [processingDreams, setProcessingDreams] = useState<Array<Dream>>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [displayedDreams, setDisplayedDreams] = useState<Array<Dream>>([]);

  const handleDeleteDream = (dream: Dream) => {
    setProcessingDreams((prevState) => [...prevState, dream]);
    setTimeout(() => {
      setDreamsList((prevState) =>
        prevState.filter((oneDream) => oneDream.id !== dream.id)
      );
      setProcessingDreams((prevState) =>
        prevState.filter((oneDream) => oneDream.id !== dream.id)
      );
      setDisplayedDreams((prevState) =>
        prevState.filter((oneDream) => oneDream.id !== dream.id)
      );
    }, 1500);
  };

  useEffect(() => {
    if (!searchValue) {
      setDisplayedDreams(dreamsList);
    } else {
      const newDreamList = dreamsList.filter((dream) => {
        return (
          dream.id.includes(searchValue) ||
          dream.title.includes(searchValue) ||
          dream.topic.name.includes(searchValue) ||
          dream.author.firstName.includes(searchValue) ||
          dream.author.username.includes(searchValue) ||
          dream.author.lastName.includes(searchValue)
        );
      });
      setDisplayedDreams(newDreamList);
    }
  }, [searchValue, dreamsList]);

  useEffect(() => {
    //TODO : fetch from API
    setDisplayedDreams(dreamsList);
  }, [dreamsList]);

  return (
    <div className="w-full md:w-1/2 py-2 px-4 md:mx-2 my-2 md:my-0 bg-gray-300 rounded text-black">
      <div className="flex justify-between mb-2">
        <div className="my-auto text-lg">
          <FontAwesomeIcon className="mr-2" icon={faCloud} />
          Dreams
        </div>
        <div className="flex">
          <input
            type="text"
            defaultValue={searchValue}
            onChange={(e) => {
              setSearchValue(e.currentTarget.value);
            }}
            className="px-2 rounded"
            placeholder="Rechercher"
          />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pl-2">ID</th>
            <th>Auteur</th>
            <th>Créé le</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {displayedDreams.map((dream) => {
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
