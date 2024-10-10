import BasketOrder from "./basketOrder/basketOrder";
import InfoOrder from "./infoOrder/infoOrder";
import styles from "./index.module.sass";
import OrderGet from "./orderGet/orderGet";
const OrderPage = () => {
  return (
    <div className={styles.order}>
      <OrderGet />
      <InfoOrder />
      <BasketOrder />
    </div>
  );
};
export default OrderPage;
