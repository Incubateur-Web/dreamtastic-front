import React from "react";

export const WelcomeCard = () => (
  <div className="my-14 ">
    <div className="container mx-auto">
      <div className="mx-40 rounded-xl shadow-welcome-card pl-36 pr-10 flex items-center relative overflow-hidden">
        <div className="w-4/6 text-xl py-20 space-y-6">
          <span className="text-title-cyan text-5xl font-semibold">
            Prêts à raconter tes rêves?
          </span>
          <div className="tracking-wide space-y-1">
            <p>
              De nombreux contributeurs ont déjà décrit leus plus beaux songes
              et leurs cauchemars les plus étranges.
            </p>
            <p>
              Nous n'attendons plus que toi pour comprendre davantage les
              manifestations de ton imagination !
            </p>
          </div>
          <button className="uppercase bg-violet text-white rounded-full px-8 py-2 font-medium focus:outline-none focus:ring-1">
            Il faut que je te raconte ce rêve...
          </button>
        </div>
        <div className="flex-1">
          <img src="/images/threeCircles.png" alt="three circles" />
        </div>
        <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-welcome-top to-welcome-bot h-4"></div>
      </div>
    </div>
  </div>
);
