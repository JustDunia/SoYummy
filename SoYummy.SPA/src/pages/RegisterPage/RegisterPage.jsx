import imageMobile from "../../images/registration/person_order_1x_mob.png";
import imageMobile2x from "../../images/registration/person_order_2x_mob.png";
import imageTablet from "../../images/registration/person_order_1x_tab.png";
import imageTablet2x from "../../images/registration/person_order_2x_tab.png";
import imageDesktop from "../../images/registration/person_order_1x_desk.png";
import imageDesktop2x from "../../images/registration/person_order_2x_desk.png";
import css from "../RegisterPage/RegisterPage.module.css";

import { Register } from "../../components/Register/Register";
// import {} from "../../components/Register";

const RegisterPage = () => {
  return (
    <section className={css.registerPage}>
      <div className={css.container}>
        <img
          src={imageMobile}
          srcSet={`${imageMobile} 285w, ${imageMobile2x} 570w, ${imageTablet} 409w, ${imageTablet2x} 818w, ${imageDesktop} 532w, ${imageDesktop2x} 1064w`}
          sizes="(min-width: 1280px) 532px, (min-width: 768px) 409px, (min-width: 320px) 285px, 100vw"
          alt="Register hero"
        />
        <Register />
      </div>
    </section>
  );
};

export default RegisterPage;
