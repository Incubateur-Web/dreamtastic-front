import { Link } from "react-router-dom";
import { DreamsList } from "../pages/dreams";

export const AllDreams = () => {
  return (
    <div className="container mx-auto space-y-4 px-3 md:px-0">
      <div className="flex space-x-2 items-center">
        <span className="text-violet text-lg font-bold">TOUS LES RÊVES </span>
        <Link to="/dreams">
          <span className="font-bold underline">voir tout</span>
        </Link>
      </div>
      <DreamsList />
    </div>
  );
};
