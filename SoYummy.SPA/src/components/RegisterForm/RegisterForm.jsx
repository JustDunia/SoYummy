import { Link } from "react-router-dom";
import css from "../RegisterForm/RegisterForm.module.css";
import { register } from "../../redux/auth/actions";
import { useDispatch } from "react-redux";
import icons from "../../images/commonSvgImg/icons.svg";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <div>
      <form className={css.registerForm} onSubmit={handleSubmit}>
        <h2 className={css.registerTitle}>Registration</h2>
        <div className={css.inputContainer}>
          <label className={css.label}>
            <svg className={css.icon}>
              <use href={`${icons}#icon-input-user`} />
            </svg>
            <input
              className={css.input}
              type="text"
              name="name"
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
          Sign up
        </button>
        <Link to="/signin" className={css.link}>
          Sign in
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
