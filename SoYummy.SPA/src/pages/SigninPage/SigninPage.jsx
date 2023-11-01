// const SigninPage = () => {
//   return <h2> SigninPage</h2>;
// };

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectIsUserLoged,
  selectUser,
  selectUserToken,
} from "../../redux/auth/auth.selectors";
import { LogInForm } from "../../components/LogInForm";

import { store } from "../../redux/store";

export const SigninPage = () => {
  const userIsLogged = useSelector(selectIsUserLoged);
  console.log("USER LOGGED", userIsLogged);

  // const token = useSelector(selectUserToken);
  // console.log("TOKEN", token);

  const currentState = store.getState();
  console.log("CURRENT STATE", currentState);

  const user = useSelector(selectUser);
  console.log("USER", user);

  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (userIsLogged && !hasRedirected) {
      navigate("/main");
      setHasRedirected(true);
    }
    if (!userIsLogged) {
      setHasRedirected(false);
    }
  }, [userIsLogged, navigate, hasRedirected]);

  return (
    <div>
      <h1>Login user:</h1>
      <LogInForm />
    </div>
  );
};

export default SigninPage;
