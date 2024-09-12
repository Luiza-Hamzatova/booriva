import CartIcon from "../../../assets/svg/Cart";

import styles from "./Cart.module.sass";

const Cart = () => {
  return (
    <div className={styles.navigationBarItem}>
      <CartIcon />
      Корзина
    </div>
  );
};

export default Cart;
