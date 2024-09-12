import FilterIcon from "../../../assets/svg/Filter";

import styles from "./Filter.module.sass";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <FilterIcon />
      Фильтр
    </div>
  );
};

export default Filter;
