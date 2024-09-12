import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import CardProduct from "../../components/cardProduct/cardProduct";
import styles from "./index.module.sass";
import Delivery from "../../components/delivery/delivery";
import { useState, useEffect } from "react";
import Contact from "../../components/contact/contact";

import { useDispatch, useSelector } from "react-redux";
import { setIsFavorite } from "../../redux/wishListSlice/wishListSlice";

const Wishlist = () => {
  const [cart, setCart] = useState([]);
  const isFavorite = useSelector((state) => state.wishlist.isFavorite);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [isFavorite]);
  console.log(cart);
  return (
    <div>
      <div className={styles.wishlist}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Список желаний</h1>
          <p className={styles.subtitle}>твой тайный Список желаний</p>
        </div>
        <div>
          {cart.length > 0 ? (
            <div className={styles.cards}>
              {cart.map(({ isFavorite, cart }) => (
                <CardProduct
                  id={cart.id}
                  images={cart.images}
                  name={cart.name}
                  isFavorite={isFavorite}
                />
              ))}
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
