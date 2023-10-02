"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import LoginFormInput from "../interfaces/LoginFormInput";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="username" {...register("username", { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input defaultValue="password" {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
