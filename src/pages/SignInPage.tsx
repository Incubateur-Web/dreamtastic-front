import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import clsx from "clsx";

type LoginSchema = {
  email: string;
  password: string;
};

const schema = Joi.object<LoginSchema>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
});

export default function LoginPage() {
  const { errors, register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: joiResolver(schema),
    mode: "all",
  });

  const onSubmit = ({ email, password }: LoginSchema) => {
    //fetch user form database
    console.log(email, password);
  };

  return (
    <div className="min-h-screen flex">
      <div className="bg-blue-night flex-1 flex">
        <div className="w-full lg:w-1/3 flex bg-white rounded-xl lg:rounded-3xl m-2 lg:m-6">
          <div className="w-full flex flex-col bg-white rounded-3xl relative">
            <div className="text-6xl font-bold w-full text-center font-pacifico absolute text-blue-night top-0">
              Dreamtastic
            </div>
            <div className="w-full m-auto">
              <form
                noValidate
                className="p-4 space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col">
                  <label htmlFor="email" className="px-1 text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-white placeholder-gray-500 border rounded-md overflow-hidden text-xl p-2"
                    placeholder="Email"
                    autoFocus
                    ref={register}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="px-1 text-lg">
                    Mot de passe
                  </label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="bg-white placeholder-gray-500 border rounded-md overflow-hidden text-xl p-2"
                    placeholder="Mot de passe"
                    ref={register}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={!formState.isValid}
                    className={clsx(
                      [!formState.isValid && "bg-opacity-50"],
                      "w-full bg-blue-night rounded-full py-2 text-white font-bold focus:outline-none focus:shadow-outline"
                    )}
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
            <img
              src={`${process.env.PUBLIC_URL}/images/dream.svg`}
              alt=""
              className="w-64 h-64 mx-auto lg:hidden"
              style={{ filter: "drop-shadow(0 0 0.75rem white)" }}
            />
          </div>
        </div>
        <div className="w-2/3 hidden lg:flex">
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
