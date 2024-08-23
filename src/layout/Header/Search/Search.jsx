import SearchIcon from "../../../assets/svg/Search";

import styles from "./Search.module.sass";

const Search = () => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <span>Поиск</span>
    </div>
  );
};

export default Search;
