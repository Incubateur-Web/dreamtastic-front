import React from "react";
import { Link } from "react-router-dom";

export const UserCard = () => (
  <div className="w-1/4 rounded-xl overflow-hidden relative bg-gray-300">
    <img
      src="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
      alt=""
      className="object-cover w-full h-user-card"
    />

    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-white bg-opacity-80 px-5 py-3">
      <div className="relative h-full">
        <div className="flex flex-col justify-around">
          <span className="font-bold text-lg leading-7">Eva55</span>
          <p className="text-xs italic">Membre depuis le 13 octobre 2019</p>
          <p className="uppercase text-violet text-xs italic">
            240 rêves postés
          </p>
          <p className="text-sm mt-1 line-clamp-1">
            Grande rêveuse depuis que je sais dormir.
          </p>
        </div>
        <button className="absolute bottom-0 left-0 bg-violet rounded-full px-8 py-3 text-lg font-bold uppercase text-white">
          <Link to="/">Voir le profil</Link>
        </button>
      </div>
    </div>
  </div>
);
