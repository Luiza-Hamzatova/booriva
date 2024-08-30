import { Link } from "react-router-dom";
import styles from "./Menu.module.sass";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/catalog" className={styles.link}>
          Новинки
        </Link>
      </li>
      <li>
        <Link to="/catalog" className={styles.link}>
          Платья
        </Link>
      </li>
      <li>
        <Link to="/catalog" className={styles.link}>
          Вверх
        </Link>
      </li>
      <li>
        <Link to="/catalog" className={styles.link}>
          Юбки
        </Link>
      </li>
      <li>
        <Link to="/catalog" className={styles.link}>
          Верхняя одежда
        </Link>
      </li>
      <li>
        <Link to="/catalog" className={styles.link}>
          Мелочи
        </Link>
      </li>
      <li>
        <Link to="/catalog" className={styles.link}>
          Костюмы
        </Link>
      </li>
      <li>
        <a href="/" className={styles.link}>
          #BOORIVAGIRLS
        </a>
      </li>
    </ul>
  );
};
export default Menu;
