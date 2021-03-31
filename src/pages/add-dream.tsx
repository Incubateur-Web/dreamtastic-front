import { useContext } from "react";
import { TopBg } from "../components/background/TopBg";
import { CategoryPicker } from "../components/category-picker";
import { PlusIcon } from "../components/icons/PlusIcon";
import { TopicsContext } from "../contexts/TopicsContext";
import { TypeContext } from "../contexts/TypeContext";
import { useRequireUser } from "../hooks/useRequireUser";
import DefaultLayout from "../layouts/DefaultLayout";

export default function AddDreamPage() {
  useRequireUser();
  const { types } = useContext(TypeContext);
  const { topics } = useContext(TopicsContext);

  const handleTypeChange = (keys: string[]) => {
    //TODO
    console.log(keys);
  };
  const handleTopicsChange = (keys: string[]) => {
    //TODO
    console.log(keys);
  };

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
            <div className="flex flex-col md:w-2/3">
              <span>Photo</span>
              <div className="border-dark-violet border w-52 h-24 ">
                <label
                  role="button"
                  htmlFor="photo"
                  className="h-full w-full uppercase text-dark-violet flex flex-col items-center justify-center"
                >
                  <div className="bg-dark-violet p-1.5 rounded-full">
                    <PlusIcon width={13} height={13} />
                  </div>
                  <span>Ajouter</span>
                </label>
              </div>
              <input type="file" name="photo" id="photo" className="hidden" />
            </div>

            <div className="flex flex-col md:w-2/3 space-y-2">
              <label htmlFor="">Type du rêve</label>
              <CategoryPicker options={types} onChange={handleTypeChange} />
            </div>

            <div className="flex flex-col md:w-2/3 space-y-2">
              <label htmlFor="">Thèmes</label>
              <CategoryPicker options={topics} onChange={handleTopicsChange} />
            </div>

            <div className="flex md:w-2/3 items-center space-x-2">
              <input type="checkbox" name="anonym" id="anonym" />
              <label htmlFor="anonym" className="leading-none select-none">
                Poster en anonyme
              </label>
            </div>

            <button
              type="submit"
              className="rounded-full bg-dark-violet hover:bg-light-violet transition-colors duration-200 px-8 py-1.5 text-white font-semibold focus:outline-none"
            >
              PUBLIER
            </button>
          </form>
        </div>

        <img
          src="./images/threeCircles.png"
          alt=""
          className="absolute -bottom-12 right-0 hidden md:block w-96"
        />
      </div>
    </DefaultLayout>
  );
}
