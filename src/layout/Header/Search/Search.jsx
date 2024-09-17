import { setIsSearchBarOpen } from "../../../redux/searchBarSlice";
import { useDispatch } from "react-redux";

import SearchIcon from "../../../assets/svg/Search";

import styles from "./Search.module.sass";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.search}
      onClick={() => dispatch(setIsSearchBarOpen(true))}
    >
      <SearchIcon />
      <span>Поиск</span>
    </div>
  );
};

export default Search;
