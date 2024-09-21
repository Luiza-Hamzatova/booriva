import { useState, useEffect } from "react";

import styles from "./SearchResults.module.sass";
import CardProduct from "../../cardProduct/cardProduct";
import Title from "../../title/title";

const SearchResults = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000")
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);

  return (
    <div className={styles.searchResults}>
      <div className={styles.heading}>
        <Title valueh1={"Результаты"} />
        <p className={styles.subtitle}>Найдено 3 товара</p>
      </div>
      <div className={styles.cards}>
        {product.length >= 1
          ? product[0].products
              .slice(0, 3)
              .map(({ id, images, name, price }) => (
                <CardProduct
                  id={id}
                  images={images}
                  name={name}
                  price={price}
                  key={id}
                />
              ))
          : "Товар не найден"}
      </div>
    </div>
  );
};

export default SearchResults;
