import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartBasket } from "../../redux/cart/cartSlice";
import CloseCartBtn from "../../assets/svg/CloseBtn";
import CatInTheBag from "../../assets/svg/CatInTheBag";
import StartShoppingBtnBg from "../../assets/svg/StartShoppingBtnBg";
import PlaceAnOrderBtnBg from "../../assets/svg/PlaceAnOrderBtnBg";

import styles from "./Basket.module.sass";
import ProductCard from "./ProductCard/ProductCard";
import Button from "../../components/button/button";
import { setIsBasketOpen } from "../../redux/basketSlice/basketSlice";

const Basket = () => {
  const cart = useSelector((state) => state.basket.cart);
  const isBasketOpen = useSelector((state) => state.basket.isBasketOpen);
  const dispatch = useDispatch();

  return (
    <div
      className={
        styles.wrapper +
        " " +
        (isBasketOpen ? styles.wrapper_open : styles.wrapper_close)
      }
    >
      <div
        className={
          styles.bg + " " + (isBasketOpen ? styles.bg_open : styles.bg_close)
        }
        onClick={() => dispatch(setIsBasketOpen(false))}
      ></div>
      <div
        className={
          styles.basket +
          " " +
          (isBasketOpen ? styles.basket_open : styles.basket_close)
        }
      >
        <div
          className={styles.closeBtn}
          onClick={() => dispatch(setIsBasketOpen(false))}
        >
          <CloseCartBtn />
        </div>
        {cart && cart.length > 0 ? (
          <div>
            <div className={styles.products}>
              {cart.map(({ size, product }) => (
                <ProductCard
                  key={product?.id + product?.size}
                  id={product?.id}
                  images={product?.images}
                  name={product?.name}
                  size={size}
                  price={product?.price}
                  // deleteCart={deleteCart}
                />
              ))}
            </div>
            <p className={styles.pink}>
              <span>Сумма заказа:</span>
              <span className={styles.price}>
                <b>0 р</b>
              </span>
            </p>
            <p className={styles.pink}>
              <span>Стоимость доставки:</span>
              <span className={styles.price}>
                <b>0 р</b>
              </span>
            </p>

            <p className={styles.orderPrice}>
              <span>Сумма заказа:</span>
              <span className={styles.price}>
                <b>0 р</b>
              </span>
            </p>
            <Link to="/order">
              <Button value={"Оформить заказ"} />
            </Link>
          </div>
        ) : (
          <div>
            <h1 className={styles.title}>Корзина</h1>
            <div className={styles.icon}>
              <CatInTheBag />
            </div>
            <p className={styles.text}>
              Твоя корзина пуста, но это никогда <br /> не поздно
              исправить:&#41;
            </p>
            <Link
              to={`catalog?menuId=001`}
              className={styles.svgButton}
              onClick={() => dispatch(setIsBasketOpen(false))}
            >
              <StartShoppingBtnBg />
              <span className={styles.buttonText}>За покупками</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
