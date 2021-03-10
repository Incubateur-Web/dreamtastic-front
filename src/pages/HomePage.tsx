import DefaultLayout from "../layouts/DefaultLayout";
import { TopDreamsBanner } from "../components/TopDreamsBanner";
import { WelcomeCard } from "../components/WelcomeCard";
import { TopUsers } from "../components/TopUsers";
import { DreamPreviewCard } from "../components/dreams/DreamPreviewCard";

export default function HomePage() {
  return (
    <DefaultLayout>
      <TopDreamsBanner />
      <WelcomeCard />
      <div className="space-y-20">
        <TopUsers />
        <AllDreams />
      </div>
    </DefaultLayout>
  );
}

const AllDreams = () => {
  return (
    <div className="container mx-auto space-y-4 px-3 md:px-0">
      <div className="flex space-x-2 items-center">
        <span className="text-violet text-lg font-bold">TOUS LES RÊVES </span>
        <span className="font-bold underline">voir tout</span>
      </div>
      <div className="flex space-x-4 flex-nowrap overflow-x-auto md:overflow-hidden pb-3 md:pb-0">
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
      </div>
    </div>
  );
};
