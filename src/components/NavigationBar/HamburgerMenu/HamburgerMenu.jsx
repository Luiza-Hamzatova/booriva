import Hamburger from "../../../assets/svg/Hamburger";

import styles from "./HamburgerMenu.module.sass";

const HamburgerMenu = () => {
  return (
    <div className={styles.navigationBarItem}>
      <Hamburger />
      Меню
    </div>
  );
};

export default HamburgerMenu;
