import React, { useState } from "react";
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
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
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.thumbs__item}>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
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
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCard;
