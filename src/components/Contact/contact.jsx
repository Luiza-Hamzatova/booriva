import styles from "./contact.module.sass";
const Contact = () => {
  return (
    <div>
      <div className={styles.contact + " wrapper"}>
        <div className={styles.flex}>
          <div className={styles.contact__Left}>
            <div className={styles.contact_title}>
              <h1>Instagram</h1>
              <p>Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще</p>
            </div>
            <div className={styles.flex + " " + styles.flex_L}>
              <img
                className={styles.contact__Left_Bigimg}
                src="./img/contact/instaGirlup.png"
                alt=""
              />
              <img
                className={styles.contact__Left_Smallimg}
                src="./img/contact/instaGirlbook.png"
                alt=""
              />
              <div className={styles.contact_CenterimgAda}>
                <img src="./img/contact/instaHoodi.png" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.contact_Centerimg}>
            <img src="./img/contact/instaHoodi.png" alt="" />
          </div>
        </div>
        <div className={styles.contact__Right}>
          <div className={styles.flex}>
            <img
              className={styles.contact__Right_Smallimg}
              src="./img/contact/instaClothes.png"
              alt=""
            />
            <img
              className={styles.contact__Right_Bigimg}
              src="./img/contact/instaGirlCloak.png"
              alt=""
            />
          </div>
          <div className={styles.contact_text}>
            <h2>#boorivagirls </h2>
            <p>Ставь тэг чтобы быть в нашей тусовке.</p>
          </div>
        </div>
      </div>
      <div className={styles.contactAdaptation + " wrapper"}>
        <div className={styles.contactAdaptation__Left}>
          <div className={styles.contactAdaptation_title}>
            <h1>Instagram</h1>
            <p>Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще</p>
          </div>
          <div className={styles.contactAdaptation__Left_img}>
            <div className={styles.contactAdaptation__Left_Up}>
              <img
                className={styles.contactAdaptation__Left_Girlup}
                src="./img/contact/instaGirlup.png"
                alt=""
              />
              <img
                className={styles.contactAdaptation__Left_Girlbook}
                src="./img/contact/instaGirlbook.png"
                alt=""
              />
            </div>
            <div className={styles.contactAdaptation__Left_Down}>
              <img
                className={styles.contactAdaptation__Left_Clothes}
                src="./img/contact/instaClothes.png"
                alt=""
              />
              <img
                className={styles.contactAdaptation__Left_Cloak}
                src="./img/contact/instaGirlCloak.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.contactAdaptation__Rigth}>
          <div className={styles.contactAdaptation__Rigth_img}>
            <img
              className={styles.contactAdaptation__Rigth_hoodi}
              src="./img/contact/instaHoodi.png"
              alt=""
            />
            <img
              className={styles.contactAdaptation__Rigth_none}
              src="./img/contact/instaGirlCloak.png"
              alt=""
            />
          </div>
          <div className={styles.contactAdaptation_text}>
            <h2>#boorivagirls </h2>
            <p>Ставь тэг чтобы быть в нашей тусовке.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
