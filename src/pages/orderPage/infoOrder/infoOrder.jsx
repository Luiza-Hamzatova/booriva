import styles from "./infoOrder.module.sass";
import { useState } from "react";
import Button from "../../../components/button/button";
const InfoOrder = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    "Доставка в отделение почты"
  );
  return (
    <div>
      <div className={styles.contactInfo}>
        <div className={styles.step}>
          <h1 className={styles.title}>
            1<img src="./img/orderPage/Vector.png" alt="" />
          </h1>
          <p className={styles.subtitle}>
            Контактные
            <br /> данные
          </p>
        </div>
        <form action="" method="" className={styles.form}>
          <input
            type="text"
            placeholder="Имя"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Фамилия"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </div>
      <div className={styles.deliveryMethod}>
        <div className={styles.step}>
          <h1 className={styles.title}>
            2<img src="./img/orderPage/Vector.png" alt="" />
          </h1>
          <p className={styles.subtitle}>
            Способ
            <br /> доставки
          </p>
        </div>
        <form action="" className={styles.form2}>
          <div className={styles.radioBtns}>
            <div className={styles.radioBtn}>
              <input
                type="radio"
                id="postalDelivery"
                name="deliveryMethod"
                value="Доставка в отделение почты"
                onChange={(e) => setSelectedDeliveryMethod(e.target.value)}
              />
              <label>Доставка в отделение почты </label>
            </div>
            <div className={styles.radioBtn}>
              <input
                type="radio"
                id="showroomDelivery"
                name="deliveryMethod"
                value="Самовывоз с нашего шоурума — бесплатно"
                onChange={(e) => setSelectedDeliveryMethod(e.target.value)}
              />
              <label>
                Самовывоз с нашего шоурума —{" "}
                <span className={styles.free}>бесплатно</span>
              </label>
            </div>
          </div>
          <textarea
            id="message"
            placeholder="Комментарий к заказу"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>
        </form>
      </div>
      <div className={styles.button}>
        <Button value={"Потвердить заказ"} />
      </div>
    </div>
  );
};
export default InfoOrder;
