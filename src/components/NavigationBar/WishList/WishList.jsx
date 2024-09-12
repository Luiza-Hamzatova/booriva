import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Wishlist from "../../../assets/svg/Wishlist";

import styles from "./WishList.module.sass";

const WishList = () => {
  return (
    <Link to="/wishlist" className={styles.navigationBarItem}>
      <Wishlist />
      Wish list
    </Link>
  );
};

export default WishList;
