import styles from "./Footer.module.sass";

import Socials from "./Socials/Socials";
import Feedback from "./Feedback/Feedback";
import Logotip from "./Logotip/Logotip";
import Info from "./Information/Information";
import Contact from "./Contacts/Contacts";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <Logotip />
        <div className={styles.infoRow}>
          <Info />
          <Contact />
        </div>
        <Socials />
        <div>
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Footer;
