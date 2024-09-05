import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";
import Filter from "../filter/filter";
import Baner from "../../homePage/Baner/baner";

import styles from "./catalog.module.sass";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [menuId, setMenuId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [menuName, setMenuName] = useState("");
  const [productId, setProductId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = qs.parse(location.search.substring(1));
    const menuId = params.menuId;

    const categoryId = params.categoryId;

    setMenuId(menuId);

    if (menuId && !categoryId) {
      fetch(
        `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${menuId}`
      )
        .then((res) => res.json())
        .then((res) => {
          setProducts(res[0].products);
          setMenuName(res[0].menuName);
        });
    } else if (categoryId) {
      fetch(
        `https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${categoryId}`
      )
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  }, [location]);

  return (
    <div className="wrapper">
      <div className={styles.catalog}>
        <div className={styles.catalog__Up}>
          {/* Название каталога и категории */}
          <div className={styles.calalog_title}>
            <Title valueh1={menuName} valueh2={""} />
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
                href={`/cardProductPage?productId=${id}`}
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
