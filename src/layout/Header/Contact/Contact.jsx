import Location from "../../../assets/svg/Location";
import Phone from "../../../assets/svg/Phone";

import styles from "./Contact.module.sass";

const Contact = () => {
  return (
    <div className={styles.contactInfo}>
      <a
        href="/"
        target="_blank"
        className={styles.address + " " + styles.hidden}
      >
        <Location />
        Грозный, ул. Нижний, 37
      </a>
      <a href="/" className={styles.phoneNumber}>
        <Phone />
        +8(999) 999 99 99
      </a>
    </div>
  );
};

export default Contact;
