import CartIcon from "../../../assets/svg/Cart";

import styles from "./Cart.module.sass";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <CartIcon />
      <span className={styles.counter}>0</span>
    </div>
  );
};

export default Cart;
