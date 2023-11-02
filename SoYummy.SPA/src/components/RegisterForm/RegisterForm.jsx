import { Link } from "react-router-dom";
import css from "../RegisterForm/RegisterForm.module.css";
import { register } from "../../redux/auth/actions";
import { useDispatch } from "react-redux";
import icons from "../../images/commonSvgImg/icons.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const nameRegExp = /^[a-zA-Z -]+$/;

const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const notSecurePasswordRegExp = /^[a-zA-Z0-9]{8,20}$/;

const registerValidationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2)
    .matches(nameRegExp, "Name must contain only letters"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(emailRegExp, "Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8)
    .max(21)
    .matches(notSecurePasswordRegExp, "Your password is little secure"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      dispatch(register(values));
      formik.resetForm();
    },
  });

  return (
    <div>
      <form className={css.registerForm} onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className={css.error}>{formik.errors.name}</div>
            ) : null}
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
      <Link to="/signin" className={css.link}>
        Sign in
      </Link>
    </div>
  );
};

export default RegisterForm;
