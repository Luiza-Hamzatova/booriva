import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import styles from "./cardProductMore.module.sass";
import FavoriteSvg from "../../../assets/svg/favoriteSvg";
import Button from "../../../components/button/button";
import SwiperCard from "./swiperCard/swiperCard";
const CardProductMore = () => {
  const [productId, setProductId] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const productId = qs.parse(location.search.substring(1)).id;

    fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${productId}`)
      .then((res) => res.json())
      .then((res) => setProductId(res));
  }, [location]);

  return (
    <div className={styles.cardProductMore + " wrapper"}>
      <SwiperCard />
      <div className={styles.cardProductMore__info}>
        <div className={styles.cardProductMore__info_name}>
          {productId.name}
        </div>
        <div className={styles.cardProductMore__info_price}>
          {productId.price} ₽
        </div>
        <div className={styles.cardProductMore__info_size}>
          <p>Выбрать размер:</p>
          <div className={styles.flex}>
            <h3>XS — S</h3>
            <h3>S — M</h3>
            <h3>M — L</h3>
            <h3>L — XL</h3>
          </div>
        </div>
        <div className={styles.cardProductMore__info_button}>
          <Button value={"в корзину"} />
        </div>
        <div className={styles.cardProductMore__info_desc}>
          {productId.desc}
        </div>
        <div className={styles.cardProductMore__info_details}>
          <span>Состав: </span>
          {productId.details?.substring(7)}
        </div>
      </div>
    </div>
  );
};

export default CardProductMore;
