import React, { useRef } from "react";
import SearchIcon from "../Icons/Search";
import useTodo from "../../hooks/useTodo";
import { toast } from "react-toastify";

const SearchBox: React.FC = () => {
  const { setSearchedFor } = useTodo();
  const ref = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    if (ref.current) {
      const value = ref.current.value;
      const searchedFor =
        value.length > 0 && value.trim() !== "" ? value : null;

      setSearchedFor(searchedFor);
      if (searchedFor) {
        toast.info(`Tasks filtered based on "${searchedFor}".`, {
          theme: "dark",
        });
      } else {
        toast.info("Search cleared.", {
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="search__box">
      <label htmlFor="search">
        <SearchIcon />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search tasks"
          ref={ref}
        />
      </label>
      <button className="search--btn" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBox;
