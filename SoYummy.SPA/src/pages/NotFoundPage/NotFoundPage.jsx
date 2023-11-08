import css from "./NotFoundPage.module.css";
import not_found_people_mob_1x from "../../images/notFound/not_found_people_mob_1x.png";
import not_found_people_mob_2x from "../../images/notFound/not_found_people_mob_2x.png";

import not_found_people_tab_1x from "../../images/notFound/not_found_people_tab_1x.png";
import not_found_people_tab_2x from "../../images/notFound/not_found_people_tab_2x.png";

import not_found_people_desk_1x from "../../images/notFound/not_found_people_desk_1x.png";
import not_found_people_desk_2x from "../../images/notFound/not_found_people_desk_2x.png";

const NotFoundPage = () => {
  return (
    <div className={css.Container}>
      <div className={css.ContainerSecound}>
        <img
          src={not_found_people_mob_1x}
          srcSet={`${not_found_people_mob_1x} 285w, ${not_found_people_mob_2x} 570w, ${not_found_people_tab_1x} 409w, ${not_found_people_tab_2x} 818w, ${not_found_people_desk_1x} 532w, ${not_found_people_desk_2x} 1064w`}
          sizes="(min-width: 1280px) 498px, (min-width: 768px) 498px, (min-width: 320px) 259px, 100vw"
          alt="People with socket"
        />

        <h3 className={css.HeaderText}>We are sorry,</h3>
        <p className={css.Text}>
          but the page you were looking for can’t be found..
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
