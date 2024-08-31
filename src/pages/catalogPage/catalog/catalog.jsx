import { useEffect, useState } from "react";
import qs from "qs";
import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";
import styles from "./catalog.module.sass";
import Filter from "../filter/filter";
import { useLocation } from "react-router-dom";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const menuId = qs.parse(location.search.substring(1)).menuId;
    fetch(
      `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${menuId}`
    )
      .then((res) => res.json())
      .then((res) => setProducts(res[0].products));
  }, [location]);
  console.log(products);

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
