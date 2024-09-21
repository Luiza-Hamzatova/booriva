import BasketOrder from "./basketOrder/basketOrder";
import InfoOrder from "./infoOrder/infoOrder";
import styles from "./index.module.sass";

const OrderPage = () => {
  return (
    <div className={styles.order}>
      <InfoOrder />
      <BasketOrder />
    </div>
  );
};
export default OrderPage;
