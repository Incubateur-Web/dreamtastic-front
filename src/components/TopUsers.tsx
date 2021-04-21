import axios from "axios";
import { useQuery } from "../hooks/useQuery";
import { User } from "../types/API/UserType";
import { UserCard } from "./UserCard";

export function TopUsers() {
  const { data } = useQuery<{ users: User[] }>(`/users?limit=4`, axios.get);

  return (
    <div className="container mx-auto space-y-4 px-3 md:px-0">
      <span className="text-violet text-lg font-bold">LE TOP UTILISATEURS</span>
      <div className="-mx-2 flex flex-nowrap overflow-x-auto md:overflow-hidden pb-3 md:pb-0">
        {data?.users.map((usr) => {
          return <UserCard {...usr} key={usr.id} />;
        })}
      </div>
    </div>
  );
}
