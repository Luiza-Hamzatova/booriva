import Facebook from "../../../assets/svg/Facebook";
import Instagram from "../../../assets/svg/Instagram";

import styles from "./Socials.module.sass";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <h1 className={styles.title}>СОЦ.СЕТИ</h1>
      <div className={styles.links}>
        <a href="/" className={styles.link}>
          <Instagram />
        </a>
        <a href="/" className={styles.link}>
          <Facebook />
        </a>
      </div>
    </div>
  );
};

export default Socials;
