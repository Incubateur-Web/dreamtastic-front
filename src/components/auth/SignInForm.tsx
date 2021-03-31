import React, { useContext, useState } from "react";
import clsx from "clsx";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { ButtonLoaderIcon } from "../icons/ButtonLoaderIcon";
import axios from "axios";
import { TokensType, UserContext } from "../../contexts/UserContext";
import { addMinutes } from "date-fns/esm";
import DefaultLayout from "../../layouts/DefaultLayout";
import Button from "../button/Button";

type LoginSchema = {
  email: string;
  password: string;
};

const schema = Joi.object<LoginSchema>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required().min(8),
});

export default function SignInForm() {
  const { errors, register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: joiResolver(schema),
    mode: "all",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { push } = useHistory();
  const { setTokens } = useContext(UserContext);

  const onSubmit = async ({ email, password }: LoginSchema) => {
    //fetch user form database
    setIsLoading(true);
    try {
      const { data } = await axios.post<TokensType>("/auth/refreshToken", {
        email,
        password,
      });

      setTokens({ ...data, expires: addMinutes(new Date(), 58) });
      push("/");
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
          <div className="text-center font-bold text-2xl">Connexion</div>
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
          <div className="pt-4">
            <Button
              disabled={!formState.isValid}
              onClick={() => {
                console.log("tg");
              }}
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
                <span className="mx-auto">Se connecter</span>
              )}
            </Button>
            <div className="w-full mt-4 flex-col space-y-2 px-1 text-sm">
              <Link
                to="/auth/signup"
                className="hover:underline block text-violet hover:text-light-violet"
              >
                Créer un compte
              </Link>
              <Link
                to="/auth/forgot-password"
                className="hover:underline block text-violet hover:text-light-violet"
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
}
