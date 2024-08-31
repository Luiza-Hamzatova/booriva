import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import CardProduct from "../../components/cardProduct/cardProduct";
import styles from "./index.module.sass";
import Contact from "../../layout/Contact/contact";
import Delivery from "../../components/delivery/delivery";
import { useState } from "react";

const Wishlist = () => {
  const [products, setProducts] = useState([1, 2, 3]);
  if (products && products.length > 0) {
  }

  return (
    <div>
      <div className={styles.wishlist}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Список желаний</h1>
          <p className={styles.subtitle}>твой тайный Список желаний</p>
        </div>
        <div className={styles.cards}>
          {products.length > 0 ? <CardProduct /> : <EmptyWishlist />}
        </div>
      </div>
      <Delivery />
      <Contact />
    </div>
  );
};

export default Wishlist;
