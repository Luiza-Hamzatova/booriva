import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/svg/Logo";

import styles from "./Logo.module.sass";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <LogoIcon />
    </Link>
  );
};
export default Logo;
