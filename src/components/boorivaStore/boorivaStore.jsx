import verticalTilde from "../../assets/svg/verticalTilde.svg";
import horizontalTilde from "../../assets/svg/horizontalTilde.svg";
import prime from "../../assets/svg/prime.svg";
import squigglyLine from "../../assets/svg/squigglyLine.svg";
import heartL from "../../assets/svg/heartL.svg";
import tie from "../../assets/svg/tie.svg";
import greaterThanSignS from "../../assets/svg/greaterThanSignS.svg";
import greaterThanSignL from "../../assets/svg/greaterThanSignL.svg";
import heartS from "../../assets/svg/heartS.svg";

import styles from "./boorivaStore.module.sass";

const BoorivaStore = () => {
  return (
    <div className={styles.boorivaStore}>
      <h1 className={styles.title}>
        <span>BOORIVA</span> <span>STORE</span>
      </h1>
      <div className={styles.info}>
        <p>
          г.Киев, <br /> ул. Нижний Вал, 37
        </p>
        <br />
        <p>
          Ежедневно <br />с 10:00 до 21:00
        </p>
      </div>
      <div className={styles.boorivaStoreImg}>
        <img
          src={verticalTilde}
          alt="A vertical tilde icon"
          className={styles.verticalTilde}
        />
        <img
          src={horizontalTilde}
          alt="A horizontal tilde icon"
          className={styles.horizontalTilde}
        />
        <img src={prime} alt="A prime icon" className={styles.prime} />
        <img
          src={squigglyLine}
          alt="A squiggly line icon"
          className={styles.squigglyLine}
        />
        <img src={heartL} alt="A heart icon" className={styles.heartL} />
        <img src={tie} alt="A tie icon" className={styles.tie2} />
        <img src={tie} alt="A tie icon" className={styles.tie} />
        <img
          src={greaterThanSignS}
          alt="A greater than sign icon"
          className={styles.greaterThanSignS}
        />
        <img
          src={greaterThanSignL}
          alt="A greater than sign icon"
          className={styles.greaterThanSignL}
        />
        <img src={heartS} alt="A heart icon" className={styles.heartS} />
      </div>
      <p className={styles.description}>
        Ты можешь заказать примерку понравившейся вещи или просто заглянуть,
        гуляя по Подолу, и примерять что-то из в наличии
      </p>
    </div>
  );
};

export default BoorivaStore;
