import DefaultLayout from "../layouts/DefaultLayout";
import { TopDreamsBanner } from "../components/TopDreamsBanner";
import { WelcomeCard } from "../components/WelcomeCard";
import { TopUsers } from "../components/TopUsers";
import { AllDreams } from "../components/AllDreams";

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
