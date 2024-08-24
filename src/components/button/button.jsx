import ButtonSvg from "./../../assets/svg/buttonSvg";

import styles from "./button.module.sass";

const Button = ({ value }) => {
  return (
    <div className={styles.button}>
      <div className={styles.bg}>
        <ButtonSvg />
      </div>
      <div className={styles.text}>{value}</div>
    </div>
  );
};

export default Button;
