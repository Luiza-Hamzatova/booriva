import WishlistIcon from "../../../assets/svg/Wishlist";

import styles from "./Wishlist.module.sass";

const Wishlist = () => {
  return (
    <div>
      <a href="/" className={styles.wishlist}>
        <WishlistIcon />
        <span className={styles.counter}>0</span>
      </a>
    </div>
  );
};

export default Wishlist;
