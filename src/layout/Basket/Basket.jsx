import styles from "./Basket.module.sass";

const Basket = ({ isBasketOpen, setIsBasketOpen }) => {
  return (
    <div
      className={
        styles.wrapper +
        " " +
        (isBasketOpen ? styles.wrapper_open : styles.wrapper_close)
      }
    >
      <div
        className={
          styles.bg + " " + (isBasketOpen ? styles.bg_open : styles.bg_close)
        }
        onClick={() => setIsBasketOpen(false)}
      ></div>
      <div
        className={
          styles.basket +
          " " +
          (isBasketOpen ? styles.basket_open : styles.basket_close)
        }
      >
        <div className={styles.close} onClick={() => setIsBasketOpen(false)}>
          close
        </div>
      </div>
    </div>
  );
};

export default Basket;
