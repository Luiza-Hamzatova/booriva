import { Link } from "react-router-dom";
import styles from "./Menu.module.sass";
import { useEffect, useState } from "react";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/" className={styles.link}>
          {" "}
          Главная
        </Link>
      </li>
      {menu.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/catalog?menuId=${id}`} className={styles.link}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
