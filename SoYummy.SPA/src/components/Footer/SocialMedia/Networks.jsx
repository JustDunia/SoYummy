import c from "./Networks.module.css";

export const Networks = () => {
  return (
    <MediaConteiner className={c.media_cointener}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to Facebook"
      >
        <FacebookIcon className={c.social_link_svg} />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to Youtube"
      >
        <YoutubeIcon className={c.social_link_svg} />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to Twitter"
      >
        <TwitterIcon className={c.social_link_svg} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to Instagram"
      >
        <InstagramIcon className={c.social_link_svg} />
      </a>
    </MediaConteiner>
  );
};
