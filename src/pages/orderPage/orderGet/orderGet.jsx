import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/button/button";
import styles from "./orderGet.module.sass";

import { setIsOrderGetOpen } from "../../../redux/orderGetSlice/orderGetSlice";
const OrderGet = () => {
  const isOrderGetOpen = useSelector((state) => state.orderGet.isOrderGetOpen);
  const dispatch = useDispatch();

  return (
    <div
      className={
        styles.wrapper +
        " " +
        (isOrderGetOpen ? styles.wrapper_open : styles.wrapper_close)
      }
    >
      <div
        className={
          styles.bg + " " + (isOrderGetOpen ? styles.bg_open : styles.bg_close)
        }
        onClick={() => dispatch(setIsOrderGetOpen(false))}
      >
        <div
          className={styles.closeBtn`${styles.orderGet} ${
            isOrderGetOpen ? styles.active : ""
          }`}
          onClick={() => dispatch(setIsOrderGetOpen(false))}
        ></div>
        <div className={styles.orderGetContent}>
          <div className={styles.heading}>
            <h1 className={styles.title}>СПАСИБО</h1>
            <p className={styles.subtitle}>Ваш заказ был принят</p>
          </div>
          <p className={styles.paragraph}>
            Мы любим встречать booriva на улице. Так как всех не встретишь,
            отмечай нас в соц.сетях и мы внутри взорвемся и закричим УРА! <br />
            Ставь тэг <Link to="/#">#boorivagirls</Link> чтобы быть в нашей
            тусовке.
          </p>
        </div>
        <Link to="/" className={styles.svgButton}>
          <Button value={"На главную"} />
        </Link>
      </div>
    </div>
  );
};

export default OrderGet;
