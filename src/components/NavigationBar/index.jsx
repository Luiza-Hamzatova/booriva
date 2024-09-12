import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import Write from "./Write/Write";
import Filter from "./Filter/Filter";
import Cart from "./Cart/Cart";
import WishList from "./WishList/WishList";

import styles from "./index.module.sass";

const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      <HamburgerMenu />
      <Write />
      <Filter />
      <Cart />
      <WishList />
    </div>
  );
};

export default NavigationBar;
