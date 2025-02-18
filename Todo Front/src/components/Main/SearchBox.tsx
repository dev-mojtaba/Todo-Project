import React, { useState } from "react";
import SearchIcon from "../Icons/Search";
import useTodo from "../../hooks/useTodo";
import { toast } from "react-toastify";

const SearchBox: React.FC = () => {
  const { searchedFor, setSearchedFor } = useTodo();
  const [inputValue, setInputValue] = useState<string>("");
  const [changed, setChanged] = useState<boolean>(false);
  const [searchTimeout, setSearchTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (searchTimeout) clearTimeout(searchTimeout);

    const timeout = setTimeout(() => {
      handleSearch(value);
    }, 1500);

    setSearchTimeout(timeout);
  };

  const handleSearch = (value: string) => {
    const searchValue = value.length > 0 && value.trim() !== "" ? value : null;

    if (searchValue !== searchedFor) {
      setSearchedFor(searchValue);
      if (searchValue) {
        setChanged(true);
        toast.info(`Tasks filtered based on "${searchValue}".`, {
          theme: "dark",
        });
      }
    }

    if (!searchValue && changed) {
      toast.info("Search cleared.", { theme: "dark" });
      setChanged(false);
    }
  };

  return (
    <div className="flex items-center gap-2.5 w-full h-fit">
      <form className="w-full">
        <label htmlFor="search" className="relative w-full">
          <SearchIcon className="absolute inset-y-0 mx-4 my-auto fill-primary-dark dark:fill-primary-light pointer-events-none" />
          <input
            type="text"
            name="search"
            id="search"
            className="indent-8 px-4 py-2 w-full bg-primary-light dark:bg-primary-input rounded-lg outline-hidden ring-0 border-none placeholder:text-primary-input-text hover:placeholder:text-primary-input-text-hover focus:placeholder:opacity-0 focus:outline-hidden placeholder:text-sm placeholder:select-none placeholder:transition-all duration-300 ease-linear"
            value={inputValue}
            placeholder="Search tasks"
            onChange={handleChange}
          />
        </label>
        {/* I want make it automatic so it filter search automatically by onChange event */}
        {/* <button className="search--btn" onClick={handleSearch}>
          <SearchIcon />
        </button> */}
      </form>
    </div>
  );
};

export default SearchBox;
