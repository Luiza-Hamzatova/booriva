import { Link } from "react-router-dom";
import FavoriteSvg from "./../../assets/svg/favoriteSvg";

import styles from "./cardProduct.module.sass";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCardWish } from "../../redux/wishListSlice/wishListSlice";

const CardProduct = ({ id, price, name, img, isFavorite, type }) => {
  const dispatch = useDispatch();
  const cardWish = useSelector((state) => state.wishList.cardWish);

  const addProductToCart = () => {
    isFavorite = !isFavorite;

    dispatch(setCardWish([...cardWish, { isFavorite, id }]));
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
      <Link to={`/product?id=${id}`}>
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
