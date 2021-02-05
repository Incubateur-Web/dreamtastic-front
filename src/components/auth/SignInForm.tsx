import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { ButtonLoaderIcon } from "../icons/ButtonLoaderIcon";
import axios from "axios";

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

  const onSubmit = async ({ email, password }: LoginSchema) => {
    //fetch user form database
    setIsLoading(true);
    try {
      const data = await axios.post("/auth/refreshToken", { email, password });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      noValidate
      className="p-4 space-y-6 w-full text-white"
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
          className="bg-white  bg-opacity-20 placeholder-white rounded-md overflow-hidden text-2xl p-2 focus:outline-none"
          placeholder="Email"
          autoFocus
          ref={register}
        />
        {errors.email && (
          <span className="text-gray-200 text-sm">{errors.email.message}</span>
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
          className="bg-white bg-opacity-20 placeholder-white rounded-md overflow-hidden text-2xl p-2 focus:outline-none"
          placeholder="Mot de passe"
          ref={register}
        />
        {errors.password && (
          <span className="text-gray-200 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="pt-8">
        <button
          type="submit"
          disabled={!formState.isValid}
          className={clsx(
            [!formState.isValid ? "bg-opacity-10" : "bg-opacity-20"],
            "w-full bg-white text-3xl rounded-lg py-2 text-white font-bold focus:outline-none focus:shadow-outline flex space-x-2 justify-center items-center"
          )}
        >
          {isLoading && <ButtonLoaderIcon />}
          <span>Se connecter</span>
        </button>
        <div className="w-full mt-2 flex flex-row-reverse justify-between px-1 text-gray-100 text-sm">
          <Link to="/auth/forgot-password" className="hover:underline">
            Mot de passe oublié ?
          </Link>
          <Link to="/auth/signup" className="hover:underline">
            Créer un compte
          </Link>
        </div>
      </div>
    </form>
  );
}
