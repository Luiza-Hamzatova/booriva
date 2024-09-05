import styles from "./title.module.sass";

const Title = ({ valueh1, valueh2 }) => {
  return (
    <div className={styles.title}>
      <h1 className={styles.title_h1}>{valueh1}</h1>
      <div className={styles.title_h2}>
        <h2>{valueh2}</h2>
        <img src="./img/Vector.svg" alt="" />
      </div>
    </div>
  );
};

export default Title;
