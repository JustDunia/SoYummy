import { Link } from "react-router-dom";
import css from "../SigninForm/SigninForm.module.css";
import { logIn } from "../../redux/auth/auth.operations";
import { useDispatch } from "react-redux";
import icons from "../../images/commonSvgImg/icons.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email address"),
  password: Yup.string().required("Password is required"),
});

const SigninForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      dispatch(logIn(values));
      formik.resetForm();
    },
  });
  return (
    <div>
      <form className={css.signinForm} onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className={css.error}>{formik.errors.email}</div>
            ) : null}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className={css.error}>{formik.errors.password}</div>
            ) : null}
          </label>
        </div>
        <button className={css.Button} type="submit">
          Sign up
        </button>
      </form>
      <Link to="/register" className={css.link}>
        Registration
      </Link>
    </div>
  );
};

export default SigninForm;
