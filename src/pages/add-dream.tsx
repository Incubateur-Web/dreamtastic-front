import { useContext } from "react";
import { TopBg } from "../components/background/TopBg";
import { CategoryPicker } from "../components/category-picker";
import { TopicsContext } from "../contexts/TopicsContext";
import { TypeContext } from "../contexts/TypeContext";
import { useRequireUser } from "../hooks/useRequireUser";
import DefaultLayout from "../layouts/DefaultLayout";

export default function AddDreamPage() {
  useRequireUser();
  const { types } = useContext(TypeContext);
  const { topics } = useContext(TopicsContext);

  return (
    <DefaultLayout>
      <TopBg />
      <div className="relative container mx-auto px-2 z-20">
        <div className="md:w-7/12 mx-auto space-y-16">
          <div className="flex flex-col">
            <span className="uppercase text-violet font-bold">
              Raconte-nous ton rêve
            </span>
            <span>
              Ici tu peux décrire en détail ton rêve, n'oublie pas que des tags
              précis mettra en avant ton récit !
            </span>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <div className="flex flex-col md:w-2/3">
              <label htmlFor="">Titre de ton rêve</label>
              <input
                type="text"
                className="border-b border-gray-400 focus:outline-none py-1"
                placeholder="Ex: des ananas par milliers"
              />
            </div>

            <div className="flex flex-col md:w-2/3">
              <label htmlFor="">Titre de ton rêve</label>
              <textarea
                className="border border-gray-400 focus:outline-none p-2"
                placeholder="Ex: au milieu d'une jungle..."
              />
            </div>
            {/* //TODO : Photo */}
            <div className="flex flex-col md:w-2/3">
              <label htmlFor="">Photo</label>
            </div>

            <div className="flex flex-col md:w-2/3">
              <label htmlFor="">Type du rêve</label>
              <CategoryPicker options={types} />
            </div>

            <div className="flex flex-col md:w-2/3">
              <label htmlFor="">Thèmes</label>
              <CategoryPicker options={topics} />
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
}
