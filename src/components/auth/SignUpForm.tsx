import React, { useState } from "react";
import clsx from "clsx";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { ButtonLoaderIcon } from "../icons/ButtonLoaderIcon";
import DefaultLayout from "../../layouts/DefaultLayout";
import Button from "../button/Button";

type LoginSchema = {
  email: string;
  name: string;
  password: string;
  repeat_password: string;
};

const schema = Joi.object<LoginSchema>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  name: Joi.string().required(),
  password: Joi.string().required().min(8),
  repeat_password: Joi.ref("password"),
});

export default function SignUpForm() {
  const { errors, register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: joiResolver(schema),
    mode: "all",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useHistory();

  const onSubmit = async ({ email, name, password }: LoginSchema) => {
    setIsLoading(true);
    try {
      await axios.post("/users/", { email, password, name });
      push("/auth/signin");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="flex w-full">
        <form
          noValidate
          className="px-6 py-4 space-y-6 text-black mx-auto rounded-md shadow-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-center font-bold text-2xl">Inscription</div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-white bg-opacity-20 placeholder-gray-600 rounded-full border border-gray-300 focus:border-dark-violet overflow-hidden text-lg px-6 py-2 focus:outline-none"
              placeholder="Email"
              autoFocus
              ref={register}
            />
            {errors.email && (
              <span className="text-red-400 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              className="bg-white bg-opacity-20 placeholder-gray-600 rounded-full border border-gray-300 focus:border-dark-violet overflow-hidden text-lg px-6 py-2 focus:outline-none"
              placeholder="Nom d'utilisateur"
              ref={register}
            />
            {errors.name && (
              <span className="text-red-400 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              id="password"
              name="password"
              className="bg-white bg-opacity-20 placeholder-gray-600 rounded-full border border-gray-300 focus:border-dark-violet overflow-hidden text-lg px-6 py-2 focus:outline-none"
              placeholder="Mot de passe"
              ref={register}
            />
            {errors.password && (
              <span className="text-red-400 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              id="repeat_password"
              name="repeat_password"
              className="bg-white bg-opacity-20 placeholder-gray-600 rounded-full border border-gray-300 focus:border-dark-violet overflow-hidden text-lg px-6 py-2 focus:outline-none"
              placeholder="Mot de passe"
              ref={register}
            />
            {errors.repeat_password && (
              <span className="text-red-400 text-sm">
                {errors.repeat_password.message}
              </span>
            )}
          </div>
          <div>
            <Button
              disabled={!formState.isValid}
              extraClasses={clsx(
                [
                  !formState.isValid
                    ? "bg-opacity-10 hover:bg-opacity-10 cursor-default"
                    : "",
                ],
                "w-full text-xl py-2 font-bold flex"
              )}
            >
              {isLoading ? (
                <ButtonLoaderIcon />
              ) : (
                <span className="mx-auto">S'inscrire</span>
              )}
            </Button>
            <div className="w-full mt-2 flex flex-row-reverse justify-between px-1 text-sm">
              <div>
                Déjà enregistré ?{" "}
                <Link
                  to="/auth/signin"
                  className="hover:underline text-violet hover:text-light-violet"
                >
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}
