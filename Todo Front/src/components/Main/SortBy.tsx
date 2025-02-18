import React from "react";
import useTodo from "../../hooks/useTodo";
import { toast } from "react-toastify";

const SortBy: React.FC = () => {
  const { filter, setFilter } = useTodo();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as FilterTodoTypes;

    setFilter(value);
    toast.info(`Tasks sorted by ${value}.`, {
      theme: "dark",
    });
  };

  return (
    <div>
      <form>
        <label
          htmlFor="sort-by"
          className="flex items-center gap-1 text-xs 2xs:text-sm xs:text-base"
        >
          Sort by:
          <select
            name="sort"
            id="sort-by"
            className="px-1 xs:px-2 py-0.5 xs:py-1 bg-primary-light dark:bg-primary-input text-center text-primary-input-text dark:text-primary-light rounded-lg cursor-pointer outline-none appearance-none"
            value={filter}
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="priority">Priority</option>
            <option value="createdAt">Created At</option>
            <option value="edited">Edited</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SortBy;
