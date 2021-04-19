import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { ChangeEventHandler, useState } from "react";
import axios from "axios";
import { User } from "../../types/API/UserType";
import { useDebounce } from "react-use";

type Props = { onChange: (users: User[]) => void };

export const SearchUsers = ({ onChange }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  useDebounce(
    async () => {
      const params = new URLSearchParams();
      searchValue && params.append("name", searchValue);

      const { data } = await axios.get<{ users: User[] }>(
        `/users?${params.toString()}`
      );
      onChange(data.users);
    },
    2000,
    [searchValue]
  );

  const fetchMatchingUser: ChangeEventHandler<HTMLInputElement> = async (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative w-full md:w-1/2 h-12">
      <div className="absolute top-0 left-0 right-0 shadow-search-bar rounded-2xl z-50 overflow-hidden">
        <div
          role="button"
          className={clsx("flex w-full bg-white px-6 flex-col", "rounded-2xl")}
        >
          <div className="space-x-2 flex items-center">
            <FontAwesomeIcon icon={faSearch} size="lg" />

            <input
              className="text-gray-600 placeholder-gray-600 h-full flex-1 py-3 focus:outline-none"
              placeholder="Rechercher un utilisateur"
              onChange={fetchMatchingUser}
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
