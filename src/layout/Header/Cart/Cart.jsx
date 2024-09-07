import { useDispatch } from "react-redux";
import CartIcon from "../../../assets/svg/Cart";
import { setIsBasketOpen } from "../../../redux/basketSlice/basketSlice";

import styles from "./Cart.module.sass";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.cart}
      onClick={() => dispatch(setIsBasketOpen(true))}
    >
      <CartIcon />
      <span className={styles.counter}>0</span>
    </div>
  );
};

export default Cart;
