import Facebook from "../../../assets/svg/Facebook";
import Instagram from "../../../assets/svg/Instagram";

import styles from "./Information.module.sass";
const Info = () => {
  return (
    <div>
      <h1 className={styles.title}>Инфо</h1>
      <ul>
        <li>
          <a href="/" className={styles.link + " " + styles.hidden}>
            Контакты
          </a>
        </li>
        <li>
          <a href="/" className={styles.link}>
            Система лояльности
          </a>
        </li>
        <li>
          <a href="/" className={styles.link}>
            Обмен и возврат
          </a>
        </li>
        <li>
          <a href="/" className={styles.link}>
            Доставка и оплата
          </a>
        </li>
        <li className={styles.socials}>
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <Facebook />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
