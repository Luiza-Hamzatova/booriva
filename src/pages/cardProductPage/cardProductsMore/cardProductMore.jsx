import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import styles from "./cardProductMore.module.sass";
import FavoriteSvg from "../../../assets/svg/favoriteSvg";
import Button from "../../../components/button/button";
import SwiperCard from "./swiperCard/swiperCard";
const CardProductMore = ({
  id,
  price,
  name,
  img,
  isFavorite,
  desc,
  details,
  href,
}) => {
  const [productId, setProductId] = useState("");
  const location = useLocation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {

    fetch(
      `https://6569c6cede53105b0dd7a33a.mockapi.io/product?id=/${productId}`
    )
      .then((res) => res.json())
      .then((res) => setProductId(res[0].productId));
  }, [location]);
  return (
    <div className={styles.cardProductMore + " wrapper"}>
      <SwiperCard />
      {/* <div href={href} className={styles.cardProductMore__imgs}>
        <div className={styles.cardProductMore__imgs_mini}></div>
        <div className={styles.cardProductMore__imgs_main}>
          <div className={styles.cardProductMore__img}>
            <img src={"./img/productImg.png"} alt="" />
            <div
              className={
                styles.favoriteSvg +
                (isFavorite === true ? " " + styles.favoriteSvg_active : "")
              }
            >
              <FavoriteSvg />
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.cardProductMore__info}>
        <div className={styles.cardProductMore__info_name}>
          Бомбер Gone Crazy хаки
        </div>
        <div className={styles.cardProductMore__info_price}>{price}</div>
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
          Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура
          выполнена в серебряном цвете. Акцентными деталями выступают объемные
          нашитые карманы и капюшон, который отстёгивается.
        </div>
        <div className={styles.cardProductMore__info_details}>
          <span>Состав: </span> 50% вискоза, 50% полиэстер
        </div>
      </div>
    </div>
  );
};

export default CardProductMore;
