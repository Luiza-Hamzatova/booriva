import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import CloseCartBtn from "../../assets/svg/CloseBtn";
import CatInTheBag from "../../assets/svg/CatInTheBag";
import StartShoppingBtnBg from "../../assets/svg/StartShoppingBtnBg";
import PlaceAnOrderBtnBg from "../../assets/svg/PlaceAnOrderBtnBg";

import styles from "./Basket.module.sass";
import ProductCard from "./ProductCard/ProductCard";
import Button from "../../components/button/button";

const Basket = ({ isBasketOpen, setIsBasketOpen }) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://65588446e93ca47020a966c9.mockapi.io/menuCatalog?menuId=000`)
      .then((res) => res.json())
      .then((res) => setProducts(res[0].products));
  }, [location]);

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
        onClick={() => setIsBasketOpen(false)}
      ></div>
      <div
        className={
          styles.basket +
          " " +
          (isBasketOpen ? styles.basket_open : styles.basket_close)
        }
      >
        <div className={styles.closeBtn} onClick={() => setIsBasketOpen(false)}>
          <CloseCartBtn />
        </div>
        <h1 className={styles.title}>Корзина</h1>
        <div className={styles.icon}>
          <CatInTheBag />
        </div>
        <p className={styles.text}>
          Твоя корзина пуста, но это никогда <br /> не поздно исправить:&#41;
        </p>
        <Link
          to={`catalog?menuId=001`}
          className={styles.svgButton}
          onClick={() => setIsBasketOpen(false)}
        >
          <StartShoppingBtnBg />
          <span className={styles.buttonText}>За покупками</span>
        </Link>
        {/* заполненная корзина */}
        <div>
          <div className={styles.products}>
            {products.slice(0, 2).map(({ id, images, name, size, price }) => (
              <ProductCard
                key={id + size}
                id={id}
                images={images}
                name={name}
                size="size"
                price={price}
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
            <Link to="/">
              <Button value={"Оформить заказ"} />
            </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Basket;
