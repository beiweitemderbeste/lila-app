"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import RegisterFormInput from "../interfaces/RegisterFormInput";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="email"
        {...register("email", { required: true })}
      />
      {errors.email && <span>This field is required</span>}

      <input
        placeholder="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <input
        placeholder="confirm password"
        {...register("confirmPassword", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      <button type="submit">login</button>
    </form>
  );
};

export default RegisterForm;
