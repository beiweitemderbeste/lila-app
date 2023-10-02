"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import LoginFormInput from "../interfaces/LoginFormInput";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="username"
        {...register("username", { required: true })}
      />
      {errors.username && <span>This field is required</span>}

      <input
        placeholder="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
