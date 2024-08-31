import { useState } from "react";
import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";
import styles from "./catalog.module.sass";
import Filter from "../filter/filter";
const Catalog = () => {
  const [products, setProducts] = useState([
    { img: "./img/productImg.png", id: 0, price: 1099 },
  ]);
  return (
    <div className="wrapper">
      <div className={styles.catalog}>
        <div className={styles.catalogUp}>
          <Title valueh1="верх" valueh2="топы" />
          <img
            className={styles.catalogUp_img}
            src="./img/catalog/catalog.png"
            alt=""
          />
        </div>
        <div className={styles.catalogDown}>
          <Filter />
          <div className={styles.catalog_products}>
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
