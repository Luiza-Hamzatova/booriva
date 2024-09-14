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

  const location = useLocation();

  useEffect(() => {}, [location]);

  useEffect(() => {
    cardWish.map((id, isFavorite) => {
      if (isFavorite) {
        fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${id}`)
          .then((res) => res.json())
          .then((res) => setProducts(...products, res));
      }
    });
  }, [location]);

  console.log(products);
  console.log(cardWish);
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
              {products?.map(({ id, images, name, price, isFavorite }) => (
                <CardProduct
                  img={images}
                  id={id}
                  key={id}
                  price={price}
                  name={name}
                  isFavorite={isFavorite}
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
