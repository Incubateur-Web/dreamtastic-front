import { User } from "../types/API/UserType";
import Button from "./button/Button";
import format from "date-fns/format";
import locale from "date-fns/locale/fr";
import { useQuery } from "../hooks/useQuery";
import axios from "axios";
import { Dream } from "../types/API/DreamType";

const CREATED_AT_FORMAT = "d MMMM yyyy";

export const UserCard = (user: Partial<User>) => {
  const { data } = useQuery<{ dreams: Dream[] }>(
    `/dreams?author=${user.id}`,
    axios.get
  );

  return (
    <div className="w-3/4 md:w-1/4 px-2 pb-4 flex-none">
      <div className="rounded-xl overflow-hidden relative bg-gray-300  user-card">
        <img
          src="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          alt=""
          className="object-cover w-full h-user-card transform scale-100 transition duration-300"
        />

        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-white bg-opacity-80 px-5 py-3">
          <div className="relative h-full">
            <div className="flex flex-col justify-around">
              <span className="font-bold text-lg leading-7">{user.name}</span>
              <p className="text-xs italic">
                Membre depuis le{" "}
                {format(
                  new Date(user.createdAt ? user.createdAt : Date.now()),
                  CREATED_AT_FORMAT,
                  { locale }
                )}
              </p>
              <p className="uppercase text-violet text-xs italic">
                {data?.dreams.length} rêves postés
              </p>
              <p className="text-sm mt-1 line-clamp-1">{user.description}</p>
            </div>
            <Button
              link={`/profile/${user.id}`}
              extraClasses="absolute bottom-0 left-0 px-8 py-2 font-semibold text-sm"
              uppercase
            >
              Voir le profil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
