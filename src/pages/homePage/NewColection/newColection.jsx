import Button from "../../../components/button/button";
import styles from "./newColection.module.sass";

const NewColection = () => {
  return (
    <div>
      <div className={styles.newColection + " wrapper"}>
        <div className={styles.newColection__Left}>
          <div className={styles.newColection__tshirts}>
            <img src="./img/newColection/футболки.png" alt="" />
            <div className={styles.newColection__tshirts_button}>
              <Button value={"футболки"} />
            </div>
          </div>

          <div className={styles.newColection_flex}>
            <div className={styles.newColection__downclothes}>
              <img src="./img/newColection/низ.png" alt="" />
              <div className={styles.newColection__downclothes_button}>
                <Button value={"низ"} />{" "}
              </div>
            </div>
            <div className={styles.newColection__upclothes}>
              <img src="./img/newColection/верх.png" alt="" />
              <div className={styles.newColection__upclothes_button}>
                <Button value={"верх"} />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.newColection__Rigth}>
          <div className={styles.newColection_flex}>
            <div className={styles.newColection__dresses}>
              <img src="./img/newColection/платья.png" alt="" />
              <div className={styles.newColection__dresses_button}>
                <Button value={"платья"} />
              </div>
            </div>
            <div className={styles.newColection__suits}>
              <img src="./img/newColection/костюмы.png" alt="" />
              <div className={styles.newColection__suits_button}>
                <Button value={"костюмы"} />
              </div>
            </div>
          </div>
          <div className={styles.newColection__hoodies}>
            <img src="./img/newColection/худи.png" alt="" />
            <div className={styles.newColection__hoodies_button}>
              <Button value={"худи"} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.newColectionAdaption + " wrapper"}>
        <div className={styles.newColectionAdaption__Up}>
          <img
            className={styles.newColectionAdaption__img_big}
            src="./img/newColection/футболки.png"
            alt=""
          />
          <div className={styles.newColectionAdaption__Down_Rigth}>
            <img
              className={styles.newColectionAdaption__img_small}
              src="./img/newColection/платья.png"
              alt=""
            />
            <img
              className={styles.newColectionAdaption__img_small}
              src="./img/newColection/низ.png"
              alt=""
            />
          </div>
        </div>

        <div className={styles.newColectionAdaption__Down}>
          <div className={styles.newColectionAdaption__Down_Left}>
            <img
              className={styles.newColectionAdaption__img_small}
              src="./img/newColection/верх.png"
              alt=""
            />
            <img
              className={styles.newColectionAdaption__img_small}
              src="./img/newColection/худи.png"
              alt=""
            />
          </div>
          <img
            className={styles.newColectionAdaption__img_big}
            src="./img/newColection/костюмы.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewColection;
