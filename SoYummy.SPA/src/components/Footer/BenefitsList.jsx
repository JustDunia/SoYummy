import c from "./BenefitsList.module.css";

export const Preferences = () => {
  return (
    <>
      <BenefitsList className={c.benefits_list}>
        <Benefits className={c.benefits}>
          <BenefitsText className={c.benefits_text}>
            Database of recipes that can be replenished
          </BenefitsText>
        </Benefits>
        <Benefits className={c.benefits}>
          <BenefitsText className={c.benefits_text}>
            Flexible search for desired and unwanted ingredients
          </BenefitsText>
        </Benefits>
        <Benefits className={c.benefits}>
          <BenefitsText className={c.benefits_text}>
            Ability to add your own recipes with photos
          </BenefitsText>
        </Benefits>
        <Benefits className={c.benefits}>
          <BenefitsText className={c.benefits_text}>
            Convenient and easy to use
          </BenefitsText>
        </Benefits>
      </BenefitsList>
    </>
  );
};
