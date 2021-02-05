import React, { useState } from "react";
import clsx from "clsx";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { ButtonLoaderIcon } from "../icons/ButtonLoaderIcon";

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
    <form
      noValidate
      className="p-4 space-y-6 text-white w-full"
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
          className="bg-white bg-opacity-20 placeholder-white rounded-md overflow-hidden text-xl p-2 focus:outline-none"
          placeholder="Email"
          autoFocus
          ref={register}
        />
        {errors.email && (
          <span className="text-gray-200 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="px-1 text-lg">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-white bg-opacity-20 placeholder-white rounded-md overflow-hidden text-xl p-2 focus:outline-none"
          placeholder="Nom"
          ref={register}
        />
        {errors.name && (
          <span className="text-gray-200 text-sm">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="px-1 text-lg">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-white bg-opacity-20 placeholder-white rounded-md overflow-hidden text-xl p-2 focus:outline-none"
          placeholder="Mot de passe"
          ref={register}
        />
        {errors.password && (
          <span className="text-gray-200 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="repeat_password" className="px-1 text-lg">
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          id="repeat_password"
          name="repeat_password"
          className="bg-white bg-opacity-20 placeholder-white rounded-md overflow-hidden text-xl p-2 focus:outline-none"
          placeholder="Mot de passe"
          ref={register}
        />
        {errors.repeat_password && (
          <span className="text-gray-200 text-sm">
            {errors.repeat_password.message}
          </span>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={!formState.isValid}
          className={clsx(
            [!formState.isValid ? "bg-opacity-10" : "bg-opacity-20"],
            "w-full bg-white text-3xl rounded-lg py-2 text-white font-bold focus:outline-none focus:shadow-outline flex space-x-2 justify-center items-center"
          )}
        >
          {isLoading && <ButtonLoaderIcon />}
          <span>S'inscrire</span>
        </button>
        <div className="w-full mt-2 flex flex-row-reverse justify-between px-1 text-sm">
          <div>
            Déjà enregistré ?{" "}
            <Link to="/auth/signin" className="text-white underline">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
