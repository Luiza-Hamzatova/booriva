import { Link } from "react-router-dom";
import FavoriteSvg from "./../../assets/svg/favoriteSvg";

import styles from "./cardProduct.module.sass";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCardWish } from "../../redux/wishListSlice/wishListSlice";

const CardProduct = ({ id, price, name, img, isFavoriteItem, type }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const isFavorite = useSelector((state) => state.wishlist.isFavorite);
  const location = useLocation();

  useEffect(() => {
    const productId = qs.parse(location.search.substring(1)).id;

    fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [location]);

  const addProductToCart = () => {
    if (isFavorite !== true) {
      dispatch(setCardWish([...cardWish, id]));
    } else {
      dispatch(setCardWish([...cardWish.filter((itemId) => itemId !== id)]));
    }
  };

  return (
    <div
      className={
        styles.cardProduct + (type === "catalog" ? " " + styles.catalog : "")
      }
    >
      <div
        className={
          styles.favoriteSvg +
          (isFavorite === true ? " " + styles.favoriteSvg_active : "")
        }
        onClick={addProductToCart}
      >
        <FavoriteSvg />
      </div>
      <Link className={styles.link} to={`/product?id=${id}`}>
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
    </div>
  );
};

export default CardProduct;
