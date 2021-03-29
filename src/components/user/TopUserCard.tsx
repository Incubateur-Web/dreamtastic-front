import { FlameIcon } from "../icons/FlameIcon";

export const TopUserCard = () => (
  <div className="w-full md:w-1/2 select-none flex-none md:flex-auto">
    <div className="container mx-auto px-4 md:px-0">
      <div className="pb-4 z-10 bg-white rounded-xl shadow-welcome-card relative overflow-hidden border border-gray-100">
        <div className="p-4 flex flex-col md:flex-row space-x-4 space-y-3 md:space-y-0">
          <div className="w-full md:w-auto">
            <img
              src="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              alt=""
              className="rounded-lg w-full h-52 md:h-auto md:w-auto object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between space-y-2 md:space-y-0">
            <div className="text-violet uppercase font-semibold flex space-x-1 items-center">
              <FlameIcon fill="#7f13f6" />
              <span>Top utilisateur du mois</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">MARIEMARIE</span>
              <span className="text-xs italic text-gray-500">
                Membre depuis le 13 octobre 2019
              </span>
              <span className="text-sm italic text-violet">
                543 rêves postés
              </span>
              <span className="font-semibold text-sm italic">
                Grande rêveuse depuis que je sais dormir
              </span>
            </div>

            <div>
              <button className="text-white transition duration-200  bg-dark-violet hover:bg-light-violet rounded-full px-8 py-2 font-semibold text-sm focus:outline-none">
                VOIR SON PROFIL
              </button>
            </div>
          </div>
          <div className="hidden md:block self-end float-right">
            <img
              src="/images/threeCircles.png"
              alt="three circles"
              className="h-24"
            />
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-welcome-top to-welcome-bot h-4"></div>
      </div>
    </div>
  </div>
);
