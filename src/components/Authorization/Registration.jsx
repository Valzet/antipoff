import { useForm } from "react-hook-form";
import "./Auth.sass";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

export const Registration = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange"
  })
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
        <h2 className="auth__title">Регистрация</h2>

        <div className="form-group">
          <label htmlFor="name" className="form-group__lable">
            Имя
          </label>
          <input
            {...register("name", {
              required: "Обязательное поле",
              minLength: {
                value: 2,
                message: "This input must exceed 2 characters",
              },
            })}
            className="input"
            name="name"
            id="name"
            type="text"
            placeholder="Имя"
            autoComplete="off"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p role="alert">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-group__lable">
            Электронная почта
          </label>
          <input
            {...register("email", {
              required: "Обязательное поле",
              pattern: {
                value: regex,
                message: 'This input must exceed correct email adress',
              },
              
             
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
              <p role="alert">{errors.email.message}</p>
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
                minLength: {
                  value: 8,
                  message: "This input must exceed 8 characters",
                },
              })}
              className="input"
              name="password"
              id="password"
              type={showPass ? "text" : "password"}
              placeholder="******"
              autoComplete="off"
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p role="alert">{errors.password.message}</p>}
            <button
              type="button"
              className="showPassword"
              onClick={handleShowPass}
            ></button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-group__lable">
            Подтвердите пароль
          </label>
          <div className="form__passwordField">
            <input
              {...register("passwordCheck", {
                required: "Обязательное поле",
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              className="input"
              // name="passwordCheck"
              id="passwordCheck"
              type={showPass ? "text" : "password"}
              placeholder="******"
              autoComplete="off"
              aria-invalid={errors.passwordCheck ? "true" : "false"}
            />
            {errors.passwordCheck && (
              <p role="alert">{errors.passwordCheck.message}</p>
            )}
            <button
              type="button"
              className="showPassword"
              onClick={handleShowPass}
            ></button>
          </div>
        </div>

        <button className="formSubmit">Зарегистрироваться</button>
      </form>
    </section>
  );
};
