import { useEffect, useRef, useState } from "react";

import Search from "../../assets/svg/Search";
import DeleteBtn from "../../assets/svg/DeleteBtn";
import { isSearchBarOpen } from "../../redux/searchBarSlice/searchBarSlice";
import styles from "./searchBar.module.sass";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const InputRef = useRef();

  const isSearchBarOpen = useSelector(
    (state) => state.searchBar.isSearchBarOpen
  );
  const handleInputChange = (e) => {
    setValue(e.target.value);
    setIsInputActive(e.target.value !== "");
  };
  const handleClearClick = () => {
    setValue("");
    setIsInputActive(false);
    InputRef.current.focus();
  };

  useEffect(() => {
    InputRef.current.focus();
  }, [isSearchBarOpen]);

  return (
    <form
      className={
        styles.searchBarWrapper +
        " " +
        (isSearchBarOpen ? styles.activeSearchBar : "")
      }
    >
      <div className={styles.searchBar}>
        <button className={styles.searchBtn}>
          <Search />
        </button>
        <input
          type="text"
          className={
            styles.textbox + " " + (isInputActive ? styles.active : "")
          }
          ref={InputRef}
          placeholder="Поиск товаров"
          value={value}
          onChange={handleInputChange}
        />
        {isInputActive && (
          <button className={styles.clearBtn} onClick={handleClearClick}>
            <DeleteBtn />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
