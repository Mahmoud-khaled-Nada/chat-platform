import { SubmitHandler, useForm } from "react-hook-form";
import style from "./index.module.css";
import { UserLoginParams } from "../../utils/types";
import { postLoginUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginParams>();
  const onSubmit: SubmitHandler<UserLoginParams> = (data: UserLoginParams) => {
    postLoginUser(data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: "This field is required",
            })}
          />
          <div className="form-text">
            {errors.email?.message ? errors.email?.message : ""}
          </div>
        </div>
        <div>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: "This field is required",
            })}
          />
        </div>
        <div className="mt-4 text-center">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
