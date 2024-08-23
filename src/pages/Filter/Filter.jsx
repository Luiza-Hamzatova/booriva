import styles from "./Filter.module.sass";

const Filter = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.filter}>
        <div className={styles.column}>
          <div className={styles.title}>КАТЕГОРИИ:</div>
          <ul className={styles.list}>
            <li>
              <a href="/" className={styles.item}>
                Пиджаки
              </a>
            </li>
            <li>
              <a href="/" className={styles.item}>
                Рубашки
              </a>
            </li>
            <li>
              <a href="/" className={styles.item}>
                Свитшоты
              </a>
            </li>
            <li>
              <a href="/" className={styles.item}>
                Футболки
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.title}>ЦЕНЫ:</div>
          <form className={styles.options}>
            <div className={styles.option}>
              <input name="price" type="radio" id="AllPrices" />
              <label htmlFor="AllPrices">Все цены </label>
            </div>
            <div className={styles.option}>
              <input name="price" type="radio" id="to500" />
              <label htmlFor="to500">до 500</label>
            </div>
            <div className={styles.option}>
              <input name="price" type="radio" id="from500-to1000" />
              <label htmlFor="from500-to1000">500 — 1000</label>
            </div>
            <div className={styles.option}>
              <input name="price" type="radio" id="from1000-to1500" />
              <label htmlFor="from1000-to1500">1000 — 1500</label>
            </div>
            <div className={styles.option}>
              <input name="price" type="radio" id="from1500" />
              <label htmlFor="from1500">от 1500</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
