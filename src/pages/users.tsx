import { SearchUsers } from "../components/search/SearchUsers";
import { TopUserCard } from "../components/user/TopUserCard";
import DefaultLayout from "../layouts/DefaultLayout";
import { TopBg } from "../components/background/TopBg";
import { UserCard } from "../components/UserCard";

export default function UsersPage() {
  return (
    <DefaultLayout>
      <TopBg />

      <div className="container mx-auto space-y-11 md:space-y-20 px-3 md:px-0 z-10">
        <div className="flex flex-col md:flex-row items-center w-full space-y-4 space-x-0 md:space-x-4 md:space-y-0">
          <SearchUsers />
        </div>

        <div className="-mx-4 px-4 flex space-x-4 z-50 flex-nowrap overflow-x-auto md:overflow-hidden py-3">
          <TopUserCard />
          <TopUserCard />
        </div>

        <div className="container mx-auto space-y-4 px-3 md:px-0">
          <div className="-mx-2 flex flex-nowrap overflow-x-auto md:flex-wrap md:overflow-hidden pb-3 md:pb-0">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
