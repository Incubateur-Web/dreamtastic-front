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
      <TopUsers />
      <AllDreams />
    </DefaultLayout>
  );
}

const AllDreams = () => {
  return (
    <div className="container mx-auto space-y-4 px-3 md:px-0">
      <span className="text-violet text-lg font-bold">TOUS LES RÊVES </span>
      <div className="flex space-x-4 flex-nowrap overflow-x-auto md:overflow-hidden pb-3 md:pb-0">
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
        <DreamPreviewCard />
      </div>
    </div>
  );
};
