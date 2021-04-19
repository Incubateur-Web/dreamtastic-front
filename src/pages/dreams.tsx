import { DreamPreviewCard } from "../components/dreams/DreamPreviewCard";
import DefaultLayout from "../layouts/DefaultLayout";
import { ShuffleIcon } from "../components/icons/ShuffleIcon";
import { SearchDreams } from "../components/search/SearchDreams";
import { TopBg } from "../components/background/TopBg";
import { useQuery } from "../hooks/useQuery";
import axios from "axios";
import { Dream } from "../types/API/DreamType";

type DreamListProps = {
  query?: { [k: string]: string };
};

export function DreamsList({ query = {} }: DreamListProps) {
  const url = new URL(window.location.origin + "/dreams?limit=20&offset=0");

  Object.entries(query).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const { data, loading, error } = useQuery<{ dreams: Dream[] }>(
    url.toString(),
    axios.get
  );
  if (error) return <DefaultLayout>{error}</DefaultLayout>;
  if (loading) return <DefaultLayout></DefaultLayout>;
  if (!data) return <DefaultLayout>Failed</DefaultLayout>;

  return (
    <div className="flex flex-wrap overflow-x-auto md:overflow-hidden pb-3 md:pb-0 -mx-2">
      {data.dreams.map((dream) => (
        <DreamPreviewCard key={dream.id} {...dream} />
      ))}
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
        <DreamsList />
      </div>
    </DefaultLayout>
  );
}
