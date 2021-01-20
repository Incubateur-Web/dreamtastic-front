import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

type LoginSchema = {
  email: string;
  password: string;
  repeat_password: string;
};

const schema = Joi.object<LoginSchema>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  repeat_password: Joi.ref("password"),
});

export default function SignUpForm() {
  const { errors, register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: joiResolver(schema),
    mode: "all",
  });

  const onSubmit = ({ email, password, repeat_password }: LoginSchema) => {
    //fetch user form database
    console.log(email, password, repeat_password);
  };

  return (
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
          <span className="text-red-500 text-sm">{errors.email.message}</span>
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
      <div className="flex flex-col">
        <label htmlFor="repeat_password" className="px-1 text-lg">
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          id="repeat_password"
          name="repeat_password"
          className="bg-white placeholder-gray-500 border rounded-md overflow-hidden text-xl p-2"
          placeholder="Mot de passe"
          ref={register}
        />
        {errors.repeat_password && (
          <span className="text-red-500 text-sm">
            {errors.repeat_password.message}
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
          Valider
        </button>
        <div className="w-full mt-2 flex flex-row-reverse justify-between px-1 text-sm">
          <div>
            Déjà enregistré ?{" "}
            <Link to="/auth/signin" className="hover:underline text-blue-700">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
