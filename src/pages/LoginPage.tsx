import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="bg-blue-night p-6 flex-1 flex">
        <div className="w-2/3 flex">
          <div className="w-1/3 m-auto bg-white rounded-3xl">
            <div className="text-3xl text-center border-b py-2">Connexion</div>
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
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-night rounded-full py-2 text-white font-bold"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/3 flex">
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
