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
  const location = useLocation();

  useEffect(() => {
    const queryParams = qs.parse(location.search.substring(1));
    const { menuId, categoryId } = queryParams;

    if (menuId) {
      setMenuId(menuId);
      fetch(
        `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${menuId}`
      )
        .then((res) => res.json())
        .then((res) => setProducts(res[0].products));
    }

    if (categoryId) {
      setCategoryId(categoryId);
      fetch(
        `https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${categoryId}`
      )
        .then((res) => res.json())
        .then((res) => setProducts(res[0].products));
    }
  }, [location]);

  console.log(products.menuName);

  return (
    <div className="wrapper">
      <div className={styles.catalog}>
        <Baner />
        <div className={styles.catalogUp}>
          <Title valueh1={menuId} valueh2={categoryId} />
        </div>
        <div className={styles.catalogDown}>
          <Filter
            activeSubmenuItem={activeSubmenuItem}
            setActiveSubmenuItem={setActiveSubmenuItem}
          />
          <div className={styles.catalog_products}>
            {products.map(({ id, images, name, price }) => (
              <CardProduct
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
