import c from "./Footer.module.css";

import { Preferences } from "./BenefitsList";
import { LogoFooter } from "./LogoFooter";
import { FooterMenu } from "./FooterMenu";
import { Networks } from "./SocialMedia/Networks";
import SubscribeForm from "./SubscribeForm";
import DownFooter from "./DownFooter/DownFooter";

export const Footer = () => {
  return (
    <>
      <FooterConteiner className={c.footer_cointener}>
        <MainBox className={c.main_box}>
          <DescreptionWrapper>
            <LogoFooter />
            <Preferences />
          </DescreptionWrapper>

          <MenuBox className={c.menu_box}>
            <FooterMenu />
          </MenuBox>

          <FormBox className={c.form_box}>
            <SubscribeForm />
          </FormBox>
        </MainBox>

        <SocialMadia className={c.social_media}>
          <Networks />
        </SocialMadia>
      </FooterConteiner>

      <DownFooter></DownFooter>
    </>
  );
};
