import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartBasket } from "../../../redux/cart/cartSlice";
import CloseCartBtn from "../../../assets/svg/CloseBtn";
import CatInTheBag from "../../../assets/svg/CatInTheBag";
import StartShoppingBtnBg from "../../../assets/svg/StartShoppingBtnBg";
import Title from "../../../components/title/title";
import styles from "./basketOrder.module.sass";
import ProductCard from "../../../layout/Basket/ProductCard/ProductCard";

const BasketOrder = () => {
  const cart = useSelector((state) => state.basket.cart);
  const isBasketOpen = useSelector((state) => state.basket.isBasketOpen);
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.basket}>
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
      </div>
      <div className={styles.basket__Adaption}>
        <div className={styles.title}>
          <Title valueh1={"В корзине"} valueh2={"Товары в корзине"} />
        </div>
        <p className={styles.orderPrice}>
          <span>Всего:</span>
          <span className={styles.price}>
            <b>0</b>
          </span>
        </p>
        <p className={styles.orderPrice}>
          <span>Сумма заказа:</span>
          <span className={styles.price}>
            <b>0 р</b>
          </span>
        </p>
      </div>
    </div>
  );
};
export default BasketOrder;
