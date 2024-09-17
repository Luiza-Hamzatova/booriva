import { useDispatch, useSelector } from "react-redux";
import { setCardWish } from "../../redux/wishListSlice/wishListSlice";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";

import EmptyWishlist from "./emptyWishlist2/emptyWishlist2";
import CardProduct from "../../components/cardProduct/cardProduct";
import Delivery from "../../components/delivery/delivery";
import Contact from "../../components/contact/contact";
import Title from "../../components/title/title";

import styles from "./index.module.sass";

const Wishlist = () => {
  const cardWish = useSelector((state) => state.wishList.cardWish);
  const [products, setProducts] = useState([]);
  const getData = (i) => {
    fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${cardWish[i]}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts((prev) => [...prev, res]);
        if (cardWish.length - 1 === i) {
          return false;
        } else {
          getData(i + 1);
        }
      });
  };

  useEffect(() => {
    setProducts([]);
    if (cardWish.length > 0) {
      getData(0);
    }
  }, [cardWish]);

  return (
    <div>
      <div className={styles.wishlist}>
        <div className={styles.heading}>
          <Title
            valueh1={"Список желаний"}
            valueh2={"твой тайный Список желаний"}
          />
        </div>
        <div>
          {products.length > 0 ? (
            <div className={styles.cards}>
              {products?.map(({ id, images, name, price }) => (
                <CardProduct
                  img={images}
                  id={id}
                  key={id}
                  price={price}
                  name={name}
                  isFavorite={true}
                  type={""}
                />
              ))}
            </div>
          ) : (
            <EmptyWishlist />
          )}
        </div>
      </div>
      <Delivery />
      <Contact />
    </div>
  );
};

export default Wishlist;
