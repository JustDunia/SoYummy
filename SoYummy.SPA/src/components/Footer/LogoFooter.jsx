import c from "./LogoFooter.module.css";
import { ReactComponent as SvgLogo } from "../../images/footer/logo.svg";

export const LogoFooter = () => {
  return (
    <>
      <LogoBox className={c.logo_box}>
        <Logo className={c.logo } to="/main">
          <SvgLogo />
        </Logo>
        <FooterTitle className={c.footer_title}>So Yummy</FooterTitle>
      </LogoBox>
    </>
  );
};
