
import imageMobile from "../../images/registration/person_order_1x_mob.png";
import imageMobile2x from "../../images/registration/person_order_2x_mob.png";
import imageTablet from "../../images/registration/person_order_1x_tab.png";
import imageTablet2x from "../../images/registration/person_order_2x_tab.png";
import imageDesktop from "../../images/registration/person_order_1x_desk.png";
import imageDesktop2x from "../../images/registration/person_order_2x_desk.png";
import css from "../SigninPage/SigninPage.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Importuj funkcję useSelector

import LogInForm from "../../components/LogInForm/LogInForm";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Importuj funkcję useSelector

import { LogInForm } from "../../components/LogInForm";


export const SigninPage = () => {
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  // Użyj selektora, aby pobrać wartość userIsLogged ze sklepu Redux
  const userIsLogged = useSelector((state) => state.auth.isUserLogged); // Załóżmy, że wartość jest przechowywana w state.auth.isUserLogged

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

    <section className={css.signinPage}>
      <div className={css.container}>
        <img
          src={imageMobile}
          srcSet={`${imageMobile} 285w, ${imageMobile2x} 570w, ${imageTablet} 409w, ${imageTablet2x} 818w, ${imageDesktop} 532w, ${imageDesktop2x} 1064w`}
          sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
          alt="Register hero"
        />
        <LogInForm />
      </div>
    </section>

    <div>
      <h1>Login user:</h1>
      <LogInForm />
    </div>

  );
};

export default SigninPage;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { LogInForm } from "../../components/LogInForm";

// export const SigninPage = () => {
//   const navigate = useNavigate();
//   const [hasRedirected, setHasRedirected] = useState(false);

//   useEffect(() => {
//     if (userIsLogged && !hasRedirected) {
//       navigate("/main");
//       setHasRedirected(true);
//     }
//     if (!userIsLogged) {
//       setHasRedirected(false);
//     }
//   }, [userIsLogged, navigate, hasRedirected]);

//   return (
//     <div>
//       <h1>Login user:</h1>
//       <LogInForm />
//     </div>
//   );
// };

// export default SigninPage;
