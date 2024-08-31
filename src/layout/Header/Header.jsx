import Contact from "./Contact/Contact";
import Logo from "../../assets/svg/Logo";
import Search from "./Search/Search";
import Wishlist from "./Wishlist/Wishlist";
import Cart from "./Cart/Cart";
import Menu from "./Menu/Menu";

import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerInner}>
          <div className={styles.topRow}>
            <Logo />
            <Contact />
            <div className={styles.rightCol}>
              <Search />
              <Wishlist />
              <Cart />
            </div>
          </div>
          <div className={styles.bottomRow}>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
