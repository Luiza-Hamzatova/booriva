import FavoriteSvg from "./../../assets/svg/favoriteSvg";

import styles from "./cardProduct.module.sass";

const CardProduct = ({ id, price, name, img, isFavorite }) => {
  return (
    <div className={styles.cardProduct}>
      <div className={styles.favoriteSvg}>
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
    </div>
  );
};

export default CardProduct;
