import { useEffect, useState } from "react";
import qs from "qs";
import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";
import styles from "./catalog.module.sass";
import Filter from "../filter/filter";
import { useLocation } from "react-router-dom";
import Baner from "../../homePage/Baner/baner";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [menuId, setMenuId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productId, setProductId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = qs.parse(location.search.substring(1));
    const menuId = params.menuId;
    const categoryId = params.categoryId;
    const productId = params.productId;

    setMenuId(menuId);
    setCategoryId(categoryId);
    setProductId(productId);

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
    } else if (productId) {
      fetch(
        `https://6569c6cede53105b0dd7a33a.mockapi.io/product?id=${productId}`
      )
        .then((res) => res.json())
        .then((res) => setProducts(res[0].products));
    }
  }, [location]);

  console.log(products);
  console.log(categoryId);

  return (
    <div className="wrapper">
      <div className={styles.catalog}>
        <div className={styles.catalogUp}>
          {/* Название каталога и категории */}
          <Title valueh1={categoryId} valueh2={categoryId} />
          <img
            className={styles.catalogUp_img}
            src="./img/catalog/catalog.png"
            alt=""
          />
        </div>
        <div className={styles.catalogDown}>
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
