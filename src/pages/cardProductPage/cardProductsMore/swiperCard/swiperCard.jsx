import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import qs from "qs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import styles from "./swiperCard.module.sass";

// import required modules
import { FreeMode, Pagination, Thumbs } from "swiper/modules";

const SwiperCard = () => {
  const [productId, setProductId] = useState([]);
  const location = useLocation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const productId = qs.parse(location.search.substring(1)).id;

    fetch(`https://6569c6cede53105b0dd7a33a.mockapi.io/product/${productId}`)
      .then((res) => res.json())
      .then((res) => setProductId(res[0].productId));
  }, [location]);

  console.log(qs.parse(location.search.substring(1)).id);
  return (
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
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://i.ibb.co/58WGkvZ/1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.thumbs__item}>
          <img src={"https://swiperjs.com/demos/images/nature-2.jpg"} />
        </SwiperSlide>
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        pagination={true}
        modules={[FreeMode, Thumbs, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/58WGkvZ/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCard;
