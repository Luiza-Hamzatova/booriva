import LogoIcon from "../../../assets/svg/Logo";

import styles from "./Logo.module.sass";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <LogoIcon />
    </a>
  );
};
export default Logo;
