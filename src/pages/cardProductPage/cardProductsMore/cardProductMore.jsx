import styles from "./cardProductMore.module.sass";
import FavoriteSvg from "../../../assets/svg/favoriteSvg";
import Button from "../../../components/button/button";
const CardProductMore = ({
  id,
  price,
  name,
  img,
  isFavorite,
  desc,
  details,
}) => {
  return (
    <div className={styles.cardProductMore + " wrapper"}>
      <div className={styles.cardProductMore__imgs}>
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
      </div>
      <div className={styles.cardProductMore__info}>
        <div className={styles.cardProductMore__info_name}>
          Бомбер Gone Crazy хаки
        </div>
        <div className={styles.cardProductMore__info_price}>2 499 ₽</div>
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
