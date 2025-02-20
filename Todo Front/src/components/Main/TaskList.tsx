import React, { useMemo } from "react";
import PlusIcon from "../Icons/Plus";
import TaskBox from "./TaskBox";
import useTodo from "../../hooks/useTodo";
import searchTodo from "../../helper/searchTodo";
import filterTodo from "../../helper/filterTodo";
import NotFoundIcon from "../Icons/NotFound";

const TaskList: React.FC = () => {
  const { filter, searchedFor, todo, total } = useTodo();
  const data = useMemo(() => {
    let filteredAndSearchedTodos = [...todo];

    if (searchedFor) {
      filteredAndSearchedTodos = searchTodo(
        filteredAndSearchedTodos,
        searchedFor
      );
    }

    if (filter !== "default") {
      filteredAndSearchedTodos = filterTodo(filteredAndSearchedTodos, filter);
    }

    return filteredAndSearchedTodos;
  }, [todo, searchedFor, filter]);

  return (
    <div className="relative flex items-center justify-center flex-col w-full h-80 overflow-y-visible">
      {total === 0 ? (
        <div className="flex flex-col items-center w-full h-full">
          <PlusIcon className="w-20 h-20 fill-transparent stroke-primary-dark dark:stroke-neutral-500" />
          <h5 className="font-bold">You have no pending tasks.</h5>
          <p className="text-sm">Create one to get started.</p>
        </div>
      ) : data.length === 0 ? (
        <div className="flex flex-col items-center w-full h-full">
          <NotFoundIcon className="w-20 h-20 fill-primary-dark dark:fill-neutral-500" />
          <h5 className="font-bold">No tasks found.</h5>
          <p className="text-sm">Try changing the filter or search term.</p>
        </div>
      ) : (
        <div className="relative flex flex-col items-center gap-2.5 w-full h-full overflow-x-hidden overflow-y-auto">
          {data.map(({ date, isDone, isEdited, isPinned, subject, uuid }) => {
            return (
              <TaskBox
                date={date}
                isDone={isDone}
                isEdited={isEdited}
                isPinned={isPinned}
                subject={subject}
                uuid={uuid}
                key={uuid}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TaskList;
