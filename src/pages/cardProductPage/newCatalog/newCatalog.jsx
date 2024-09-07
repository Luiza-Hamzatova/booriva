import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";

import styles from "./newCatalog.module.sass";

const NewCatalog = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000`)
      .then((res) => res.json())
      .then((res) => setProducts(res[0].products));
  }, [location]);

  return (
    <div>
      <div className={styles.newCatalog}>
        <div className={styles.newCatalog__title + " wrapper"}>
          <Title valueh1="новинки" valueh2="новинки" />
        </div>
        <div className={styles.newCatalog__products}>
          {products.slice(0, 4).map(({ id, images, name, price }) => (
            <CardProduct
              img={images}
              id={id}
              key={id}
              price={price}
              name={name}
              isFavorite={false}
              type={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCatalog;
