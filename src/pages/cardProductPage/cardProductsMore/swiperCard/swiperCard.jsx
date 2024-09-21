import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteSvg from "../../../../assets/svg/favoriteSvg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import styles from "./swiperCard.module.sass";

// import required modules
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { setCardWish } from "../../../../redux/wishListSlice/wishListSlice";

const SwiperCard = () => {
  const [productId, setProductId] = useState([]);
  const location = useLocation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const cardWish = useSelector((state) => state.wishList.cardWish);

  useEffect(() => {
    const productId = qs.parse(location.search.substring(1)).id;

    fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${productId}`)
      .then((res) => res.json())
      .then((res) => setProductId(res));
  }, [location]);
  const addProductToCart = () => {
    if (!cardWish.includes(productId.id)) {
      dispatch(setCardWish([...cardWish, productId.id]));
    }
  };
  return (
    <div>
      <div className={styles.swiper}>
        <Swiper
          onSwiper={setThumbsSwiper}
          direction={"vertical"}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className={styles.thumbs}
        >
          {productId.images?.map((img) => (
            <SwiperSlide className={styles.thumbs__item}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          pagination={true}
          modules={[FreeMode, Thumbs, Pagination]}
          className={styles.swiper1}
          spaceBetween={20}
        >
          {productId.images?.map((img) => (
            <SwiperSlide>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
          <div
            className={
              styles.favoriteSvg +
              (cardWish.includes(productId.id) === true
                ? " " + styles.favoriteSvg_active
                : "")
            }
            onClick={addProductToCart}
          >
            <FavoriteSvg />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperCard;
