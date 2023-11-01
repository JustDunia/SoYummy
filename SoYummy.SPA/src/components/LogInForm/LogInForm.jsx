import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/auth.operations";
import { selectIsUserLoged } from "../../redux/auth/auth.selectors";
// import css from "./LogInForm.modules";
import css from "./LogInForm.modules.css";

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    const logged = useSelector(selectIsUserLoged);
    console.log("IS USER LOGGED IN?:", logged);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
