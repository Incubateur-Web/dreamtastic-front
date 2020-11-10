import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="bg-blue-night  flex-1 flex">
        <div className="w-1/3 flex bg-white rounded-3xl m-6">
          <div className="w-full flex flex-col bg-white rounded-3xl relative">
            <div className="text-6xl font-bold w-full text-center font-pacifico absolute text-blue-night">
              Dreamtastic
            </div>
            <div className="w-2/3 m-auto">
              <form noValidate className="p-4 space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="email" className="px-1 text-lg">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-white placeholder-gray-500 border rounded-md overflow-hidden text-xl p-2"
                    placeholder="Email"
                    autoFocus
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="px-1 text-lg">
                    Mot de passe
                  </label>
                  <input
                    type="text"
                    id="password"
                    className="bg-white placeholder-gray-500 border rounded-md overflow-hidden text-xl p-2"
                    placeholder="Mot de passe"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-night rounded-full py-2 text-white font-bold focus:outline-none focus:shadow-outline"
                  >
                    Se connecter
                  </button>
                  <div className="w-full flex flex-row-reverse justify-between px-1 text-blue-700 text-sm">
                    <Link
                      to="/auth/forgot-password"
                      className="hover:underline"
                    >
                      Mot de passe oublié ?
                    </Link>
                    <Link to="/auth/signup" className="hover:underline">
                      Créer un compte
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex">
          <img
            src={`${process.env.PUBLIC_URL}/images/dream.svg`}
            alt=""
            className="w-3/4 m-auto"
            style={{ filter: "drop-shadow(0 0 0.75rem white)" }}
          />
        </div>
      </div>
    </div>
  );
}
