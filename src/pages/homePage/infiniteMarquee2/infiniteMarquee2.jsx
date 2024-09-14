import styles from "./infiniteMarquee2.module.sass";

const InfiniteMarquee = () => {
  return (
    <div className={styles.infiniteMarquee}>
      <ul className={styles.track}>
        <li className={styles.text}>Топовые товары</li>
        <li className={styles.text}>Топовые товары</li>
        <li className={styles.text}>Топовые товары</li>
        <li className={styles.text}>Топовые товары</li>
        <li className={styles.text}>Топовые товары</li>
        <li className={styles.text}>Топовые товары</li>
        <li className={styles.text}>Топовые товары</li>
        <li className={styles.text}>Топовые товары</li>
      </ul>
    </div>
  );
};

export default InfiniteMarquee;
