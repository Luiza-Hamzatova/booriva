import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";
import Filter from "../filter/filter";
import Baner from "../../homePage/Baner/baner";

import styles from "./catalog.module.sass";

const Catalog = ({ activeSubmenuItem, setActiveSubmenuItem }) => {
  const [products, setProducts] = useState([]);
  const [menuId, setMenuId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productId, setProductId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = qs.parse(location.search.substring(1));
    const menuId = params.menuId;
    const menuName = params.menuName;
    const categoryId = params.categoryId;

    setMenuId(menuId);
    setCategoryId(categoryId);

    if (menuId) {
      fetch(
        `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${menuId}`
      )
        .then((res) => res.json())
        .then((res) => setProducts(res[0].products));
    } else if (categoryId) {
      fetch(
        `https://65588446e93ca47020a966c9.mockapi.io/categories?menuId=${categoryId}`
      )
        .then((res) => res.json())
        .then((res) => setCategoryId(res[0].categoryId));
    } else if (menuName) {
      fetch(
        `https://640ef1d54ed25579dc40e2a6.mockapi.io/categories?menuName=${menuId}`
      )
        .then((res) => res.json())
        .then((res) => setProducts(res[0].products));
    }
  }, [location]);

  console.log(categoryId);

  return (
    <div className="wrapper">
      <div className={styles.catalog}>
        <div className={styles.catalogUp}>
          {/* Название каталога и категории */}
          <Title valueh1={1} valueh2={categoryId} />
          <img
            className={styles.catalogUp_img}
            src="./img/catalog/catalog.png"
            alt=""
          />
        </div>
        <div className={styles.catalogDown}>
          <Filter
            activeSubmenuItem={activeSubmenuItem}
            setActiveSubmenuItem={setActiveSubmenuItem}
          />
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
