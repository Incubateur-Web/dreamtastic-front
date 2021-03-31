import { DreamPreviewCard } from "./dreams/DreamPreviewCard";
import { Link } from "react-router-dom";

export const AllDreams = () => {
  return (
    <div className="container mx-auto space-y-4 px-3 md:px-0">
      <div className="flex space-x-2 items-center">
        <span className="text-violet text-lg font-bold">TOUS LES RÊVES </span>
        <Link to="/dreams">
          <span className="font-bold underline">voir tout</span>
        </Link>
      </div>
      <div className="flex flex-nowrap overflow-x-auto md:overflow-hidden pb-3 md:pb-0">
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
      </div>
    </div>
  );
};
