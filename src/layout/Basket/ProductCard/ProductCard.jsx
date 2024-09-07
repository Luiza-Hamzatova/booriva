import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import DeleteBtn from "../../../assets/svg/DeleteBtn";

import styles from "./ProductCard.module.sass";

const ProductCard = ({images, name, size, price }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImg}>
        <img src={images} alt="" />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{name}</h2>
        <p className={styles.productSize}>{size}</p>
        <p className={styles.productPrice}>{price};</p>
      </div>
      <div className={styles.deleteProductBtn}>
        <DeleteBtn />
      </div>
    </div>
  );
};

export default ProductCard;
