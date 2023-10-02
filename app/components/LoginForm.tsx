import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        defaultValue="username"
        {...register("username", { required: true })}
      />
      {errors.password && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        defaultValue="password"
        {...register("password", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default LoginForm;
