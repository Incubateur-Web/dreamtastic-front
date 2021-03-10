import DefaultLayout from "../layouts/DefaultLayout";
import { TopDreamsBanner } from "../components/TopDreamsBanner";
import { WelcomeCard } from "../components/WelcomeCard";
import { TopUsers } from "../components/TopUsers";

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
  return <div></div>;
};
