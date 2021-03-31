import { DreamPreviewCard } from "../components/dreams/DreamPreviewCard";
import DefaultLayout from "../layouts/DefaultLayout";
import { ShuffleIcon } from "../components/icons/ShuffleIcon";
import { SearchDreams } from "../components/search/SearchDreams";
import { TopBg } from "../components/background/TopBg";

function Dreams() {
  return (
    <div className="flex flex-nowrap overflow-x-auto md:overflow-hidden pb-3 md:pb-0">
      <DreamPreviewCard />
      <DreamPreviewCard />
      <DreamPreviewCard />
      <DreamPreviewCard />
    </div>
  );
}

export default function DreamsPage() {
  return (
    <DefaultLayout>
      <TopBg />
      <div className="container mx-auto space-y-11 md:space-y-20 px-3 md:px-0 z-10">
        <div className="flex flex-col md:flex-row items-center w-full space-y-4 space-x-0 md:space-x-4 md:space-y-0">
          <SearchDreams />
          <div
            className="flex space-x-2 border-b-2 p-1 border-main z-10 font-semibold"
            role="button"
          >
            <ShuffleIcon fill="#6bdabe" />
            <span>Surprenez-moi</span>
          </div>
        </div>
        <Dreams />
      </div>
    </DefaultLayout>
  );
}
