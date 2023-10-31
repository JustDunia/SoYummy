import { Link } from "react-router-dom";
import css from "../SigninForm/SigninForm.module.css";
import { logIn } from "../../redux/auth/actions";
import { useDispatch } from "react-redux";
import icons from "../../images/commonSvgImg/icons.svg";

const SigninForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  return (
    <div>
      <form className={css.signinForm} onSubmit={handleSubmit}>
        <h2 className={css.signinTitle}>Sign in</h2>
        <div className={css.inputContainer}>
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
        <Link to="/register" className={css.link}>
          Registration
        </Link>
      </form>
    </div>
  );
};

export default SigninForm;
