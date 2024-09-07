import styles from "./deliveryTerms.module.sass";
import FavoriteSvg from "../../../assets/svg/favoriteSvg";
import Button from "../../../components/button/button";

const deliveryTerms = ({ id, price, name, img, isFavorite, desc, details }) => {
  return (
    <div className={styles.deliveryTerms}>
      <div className={styles.flex}>
        <div className={styles.deliveryTerms__info}>
          <img
            className={styles.deliveryTerms__img}
            src="./img/deliveryTerms/deliveryTerms1.svg"
            alt=""
          />
          <div>
            <h3>Отправляем день в день</h3>
            <p>При заказе до 18:00</p>
          </div>
        </div>
        <div className={styles.deliveryTerms__info}>
          <img
            className={styles.deliveryTerms__img}
            src="./img/deliveryTerms/deliveryTerms2.svg"
            alt=""
          />
          <div>
            <h3>Легкий возврат/обмен</h3>
            <p>В течении 14 дней</p>
          </div>
        </div>
      </div>

      <div className={styles.deliveryTerms__info}>
        <img
          className={styles.deliveryTerms__img3}
          src="./img/deliveryTerms/deliveryTerms3.svg"
          alt=""
        />
        <div>
          <h3>Отправляем наложкой</h3>
          <p>+ 2% от суммы</p>
        </div>
      </div>
    </div>
  );
};

export default deliveryTerms;
