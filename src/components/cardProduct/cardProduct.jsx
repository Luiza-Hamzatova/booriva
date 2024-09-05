import { Link } from "react-router-dom";
import FavoriteSvg from "./../../assets/svg/favoriteSvg";

import styles from "./cardProduct.module.sass";

const CardProduct = ({ id, price, name, img, isFavorite, type }) => {
  return (
    <Link
      to={`/product?id=${id}`}
      className={
        styles.cardProduct + (type === "catalog" ? " " + styles.catalog : "")
      }
    >
      <div
        className={
          styles.favoriteSvg +
          (isFavorite === true ? " " + styles.favoriteSvg_active : "")
        }
      >
        <FavoriteSvg />
      </div>
      <div className={styles.cardProduct__img}>
        <img src={img} alt="" />

        <center>
          <div className={styles.cardProduct_line}></div>
        </center>
      </div>
      <div className={styles.cardProduct__title}>
        <p className={styles.cardProduct__title_name}>{name} </p>
        <p className={styles.cardProduct__title_price}>{price}₽</p>
      </div>
    </Link>
  );
};

export default CardProduct;
