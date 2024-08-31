import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import CardProduct from "../../components/cardProduct/cardProduct";
import styles from "./index.module.sass";
import Contact from "../../components/Contact/contact";
import Delivery from "../../components/delivery/delivery";
import { useState } from "react";

const Wishlist = () => {
  const [products, setProducts] = useState([7]);
  if (products && products.length > 0) {
  }

  return (
    <div>
      <div className={styles.wishlist}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Список желаний</h1>
          <p className={styles.subtitle}>твой тайный Список желаний</p>
        </div>
        <div>
          {products.length > 0 ? (
            <div className={styles.cards}>
              {" "}
              <CardProduct />
            </div>
          ) : (
            <EmptyWishlist />
          )}
        </div>
      </div>
      <Delivery />
      <Contact />
    </div>
  );
};

export default Wishlist;
