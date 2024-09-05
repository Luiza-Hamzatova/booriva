import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";
import Filter from "../filter/filter";

import styles from "./catalog.module.sass";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [menuName, setMenuName] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(location.search.substring(1));

      if (params.menuId) {
        fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${params.menuId}`
        )
          .then((res) => res.json())
          .then((res) => {
            setProducts(res[0].products);
            setMenuName(res[0].menuName);
          });
      } else if (params.categoryId) {
        fetch(
          `https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${params.categoryId}`
        )
          .then((res) => res.json())
          .then((res) => {
            setProducts(res[0].products);
            setCategoryName(res[0].categoryName);
          });
      }
    }
  }, [location]);

  return (
    <div className="wrapper">
      <div className={styles.catalog}>
        <div className={styles.catalog__Up}>
          {/* Название каталога и категории */}
          <div className={styles.calalog_title}>
            <Title valueh1={menuName} valueh2={categoryName} />
          </div>
          <img
            className={styles.catalog__Up_img}
            src="./img/catalog/catalog.png"
            alt=""
          />
        </div>
        <div className={styles.catalog__Down}>
          <Filter />
          <div className={styles.catalog_products}>
            {products.map(({ id, images, name, price }) => (
              // Переход на страницу товара
              <CardProduct
                link
                to={`/cardProductPage?productId=${id}`}
                img={images}
                id={id}
                key={id}
                price={price}
                name={name}
                isFavorite={false}
                type={"catalog"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
