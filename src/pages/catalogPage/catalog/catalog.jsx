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
  const location = useLocation();
  useEffect(() => {
    const menuId = qs.parse(location.search.substring(1)).menuId;
    fetch(
      `https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=${menuId}`
    )
      .then((res) => res.json())
      .then((res) => setProducts(res[0].products));
  }, [location]);

  useEffect(() => {
    const categoryId = qs.parse(location.search.substring(1)).categoryId;
    fetch(
      `https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog?categoryId=${categoryId}`
    )
      .then((res) => res.json())
      .then((res) => setProducts(res[0].products));
  }, [location]);

  console.log(products);

  return (
    <div className="wrapper">
      <div className={styles.catalog}>
        <Baner />
        <div className={styles.catalogUp}>
          <Title valueh1={menuId} valueh2={categoryId} />
        </div>
        <div className={styles.catalogDown}>
          <Filter />
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
