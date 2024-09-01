import styles from "./Contacts.module.sass";

const Contact = () => {
  return (
    <div>
      <h1 className={styles.title}>Контакты</h1>
      <h1 className={styles.title + " " + styles.hidden}>НАШ АДРЕС</h1>
      <ul className={styles.list}>
        <li>
          <a href="#" target="_blank" className={styles.link}>
            г.Грозный, <span>ул. Нижний, 37</span>
          </a>
        </li>
        <li className={styles.hidden}>Пн — Вс: с 11:00 до 21:00</li>
      </ul>
    </div>
  );
};

export default Contact;
