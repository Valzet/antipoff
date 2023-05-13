import { useForm } from "react-hook-form";
import "./Auth.sass";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
    console.log(showPass);
  };

  return (
    <section className="auth">
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="auth__title">Авторизация</h2>

        <div className="form-group">
          <label htmlFor="email" className="form-group__lable">
            Электронная почта
          </label>
          <input
            {...register("email", {
              required: "Обязательное поле",
            })}
            className="input"
            name="email"
            id="email"
            type="text"
            placeholder="email"
            autoComplete="off"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p role="alert" className="formError">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-group__lable">
            Пароль
          </label>
          <div className="form__passwordField">
            <input
              {...register("password", {
                required: "Обязательное поле",
    
              })}
              className="input"
              name="password"
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="******"
              autoComplete="off"
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p role="alert" className="formError">
                {errors.password.message}
              </p>
            )}
            <button
              type="button"
              className="showPassword"
              onClick={handleShowPass}
            ></button>
          </div>
        </div>

        <button className="formSubmit">Авторизоваться</button>
      </form>
      <button
        className="navigateTo"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          navigate("/signup");
        }}
      >
        Уже авторизованы?
      </button>
    </section>
  );
};
