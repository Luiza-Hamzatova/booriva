import styles from "./Menu.module.sass";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a href="/" className={styles.link}>
          Новинки
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          Платья
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          Вверх
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          Юбки
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          Верхняя одежда
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          Мелочи
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          Костюмы
        </a>
      </li>
      <li>
        <a href="/" className={styles.link}>
          #BOORIVAIRLS
        </a>
      </li>
    </ul>
  );
};
export default Menu;
