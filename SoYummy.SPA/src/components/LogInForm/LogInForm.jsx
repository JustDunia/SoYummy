import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/auth.operations";
import { selectIsUserLoged } from "../../redux/auth/auth.selectors";
import css from "./LogInForm.module.css";
import { Link } from "react-router-dom";
import icons from "../../images/commonSvgImg/icons.svg";

const LogInForm = () => {

  const dispatch = useDispatch();
  const logged = useSelector(selectIsUserLoged);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    console.log("IS USER LOGGED IN?:", logged);
    form.reset();
  };

  return (

    <div>
      <form
        className={css.signinForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
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
          Log In
        </button>
      </form>
      <Link to="/register" className={css.link}>
        Registration
      </Link>
    </div>
  );
};

export default LogInForm;