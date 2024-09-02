import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";
import Button from "../../../components/button/button";
import styles from "./newCatalog.module.sass";

const NewCatalog = () => {
  return (
    <div>
      <div className={styles.newCatalog}>
        <div className={styles.newCatalog__title + " wrapper"}>
          <Title valueh1="новинки" valueh2="новинки" />
        </div>
        <div className={styles.newCatalog__products}>
          <div className={styles.newCatalog__products_item}>
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              class={"catalog"}
              isFavorite={false}
            />
          </div>
          <div className={styles.newCatalog__products_item}>
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              class={"catalog"}
              isFavorite={false}
            />
          </div>
          <div className={styles.newCatalog__products_item}>
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              class={"catalog"}
              isFavorite={false}
            />
          </div>
          <div className={styles.newCatalog__products_item}>
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              class={"catalog"}
              isFavorite={false}
            />
          </div>
        </div>
        <div className={styles.newCatalog_button}>
          <Button value={"смотреть все"} />
        </div>
      </div>
    </div>
  );
};

export default NewCatalog;
