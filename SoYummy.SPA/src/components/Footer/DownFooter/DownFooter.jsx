import c from "../DownFooter/DownFooter.module.css";

const FooterCopyright = () => {
  return (
    <WrapperCopytight className={c.wrapper_copytight}>
      <TextCopyright className={c.text_copyright}>
        © 2023 All Rights Reserved. <Text className={c.text}>Terms of Service</Text>
      </TextCopyright>
    </WrapperCopytight>
  );
};

export default FooterCopyright;
