import joi from "joi";
import { LoginInput } from "../types/Input/Authentication";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

const schema = joi.object<LoginInput>({
  password: joi.string().required(),
  username: joi.string().required(),
});

export default function LoginForm() {
  const { errors, register, handleSubmit } = useForm({
    resolver: joiResolver(schema),
  });
  return <div></div>;
}
