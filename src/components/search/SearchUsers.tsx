import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ChangeEventHandler, useState } from "react";
import debounce from "debounce";

export const SearchUsers = () => {
  const [searchValue, setSearchValue] = useState("");

  const fetchMatchingUser = () => {
    //TODO
  };

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
    debounce(fetchMatchingUser, 300);
  };

  return (
    <div className="relative w-full md:w-1/2 h-12">
      <div className="absolute top-0 left-0 right-0 shadow-search-bar rounded-2xl z-50 overflow-hidden">
        <div
          role="button"
          className={clsx("flex w-full bg-white px-6  flex-col", "rounded-2xl")}
        >
          <div className="space-x-2 flex items-center">
            <FontAwesomeIcon icon={faSearch} size="lg" />

            <input
              className="text-gray-600 placeholder-gray-600 h-full flex-1 py-3 focus:outline-none"
              placeholder="Rechercher un utilisateur"
              onChange={handleChangeName}
              value={searchValue}
            />
            <FontAwesomeIcon
              icon={faTimes}
              size="sm"
              onClick={() => setSearchValue("")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
