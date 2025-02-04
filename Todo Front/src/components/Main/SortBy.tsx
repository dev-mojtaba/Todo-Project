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
    <div className="sort-by__box">
      <label htmlFor="sort-by">
        Sort by:
        <select
          name="sort"
          id="sort-by"
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
    </div>
  );
};

export default SortBy;
