
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth.operations";
import icons from "../../images/commonSvgImg/icons.svg";
import css from "./Register.module.css";

const Register = () => {

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth.operations";
import css from "./Register.module.css";

export const Register = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (

    <div>
      <form
        className={css.registerForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className={css.registerTitle}>Registration</h2>
        <div className={css.inputContainer}>
          <label className={css.label}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-input-user`} />
            </svg>

            <input
              className={css.input}
              type="text"
              name="username"
              placeholder="Username"
            />
          </label>
          <label className={css.label}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-input-envelope`} />
            </svg>

            <input
              className={css.input}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <label className={css.label}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-input-lock`} />
            </svg>

            <input
              className={css.input}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
        </div>
        <button className={css.Button} type="submit">
          Register
        </button>
      </form>
      <Link to="/signin" className={css.link}>
        Sign in
      </Link>
    </div>
  );
};

export default Register;

    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="username" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

