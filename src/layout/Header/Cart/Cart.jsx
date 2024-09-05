import CartIcon from "../../../assets/svg/Cart";

import styles from "./Cart.module.sass";

const Cart = ({ setIsBasketOpen }) => {
  return (
    <div className={styles.cart} onClick={() => setIsBasketOpen(true)}>
      <CartIcon />
      <span className={styles.counter}>0</span>
    </div>
  );
};

export default Cart;
