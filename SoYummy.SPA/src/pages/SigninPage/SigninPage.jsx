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
