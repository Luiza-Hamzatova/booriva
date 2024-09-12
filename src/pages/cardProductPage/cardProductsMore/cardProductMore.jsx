import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../redux/basketSlice/basketSlice";

import Button from "../../../components/button/button";
import SwiperCard from "./swiperCard/swiperCard";

import styles from "./cardProductMore.module.sass";

const CardProductMore = () => {
  const [product, setProduct] = useState([]);
  const [activeSize, setActiveSize] = useState("XS — S");
  const cart = useSelector((state) => state.basket.cart);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const productId = qs.parse(location.search.substring(1)).id;

    fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${productId}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [location]);

  const addProductToCart = () => {
    if (
      cart.every(
        (item) => item.size !== activeSize || item.product.id !== product.id
      )
    ) {
      setMessage("Товар добавлен в корзину!");
      dispatch(
        setCart([
          ...cart,
          {
            size: activeSize,
            product: product,
          },
        ])
      );
    } else {
      setMessage("Такой товар уже есть в корзине!");
    }
  };

  return (
    <div className={"wrapper"}>
      <div className={styles.cardProductMore}>
        <SwiperCard />
        <div className={styles.info}>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.price} ₽</div>
          <div className={styles.size}>
            <p>Выбрать размер:</p>
            <div className={styles.flex}>
              <h3
                className={activeSize === "XS — S" ? styles.active : ""}
                onClick={() => setActiveSize("XS — S")}
              >
                XS — S
              </h3>
              <h3
                className={activeSize === "S — M" ? styles.active : ""}
                onClick={() => setActiveSize("S — M")}
              >
                S — M
              </h3>
              <h3>M — L</h3>
              <h3>L — XL</h3>
            </div>
          </div>
          <div className={styles.button}>
            {message}
            <Button value={"в корзину"} onClick={addProductToCart} />
          </div>
          <div className={styles.desc}>{product.desc}</div>
          <div className={styles.details}>
            <span>Состав: </span>
            {product.details?.substring(7)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductMore;
