import ButtonSvg from "./../../assets/svg/buttonSvg";

import styles from "./button.module.sass";

const Button = ({ value, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <div className={styles.bg}>
        <ButtonSvg />
      </div>
      <div className={styles.text}>{value}</div>
    </div>
  );
};

export default Button;
