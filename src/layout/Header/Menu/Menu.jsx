import { Link } from "react-router-dom";
import styles from "./Menu.module.sass";
import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
    .then((res) => res.json())
    .then((data) => setMenu(data));

  return (
    <ul className={styles.menu}>
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
