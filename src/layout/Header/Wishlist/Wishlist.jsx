import { Link } from "react-router-dom";

import WishlistIcon from "../../../assets/svg/Wishlist";

import styles from "./Wishlist.module.sass";

const Wishlist = () => {
  return (
    <Link to="/wishlist" className={styles.wishlist}>
      <WishlistIcon />
      <span className={styles.counter}>0</span>
    </Link>
  );
};

export default Wishlist;
